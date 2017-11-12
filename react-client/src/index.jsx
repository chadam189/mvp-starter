import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Preference from './components/Preference.jsx';
import Sliders from './components/Sliders.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beers: [],
      sliderABV: 7,
      sliderIBU: 43.5,
      sliderSRM: 21
    }

    this.listSort.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://127.0.0.1:3000/items', 
      method: 'GET',
      success: (data) => {
        console.log('data is being received: ', data);
        this.setState({
          beers: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  sliderABVChange (e) {
    // console.log('slider changed: ', e.target.value);
    this.setState({
      sliderABV: e.target.value
    });
    this.listSort();
  }

  sliderIBUChange (e) {
    // console.log('slider changed: ', e.target.value);
    this.setState({
      sliderIBU: e.target.value
    });
    this.listSort();
  }

  sliderSRMChange (e) {
    // console.log('slider changed: ', e.target.value);
    this.setState({
      sliderSRM: e.target.value
    });
    this.listSort();
  }

  listSort () {

    // hardcoding the zscore params
      // it would have been nice to calculate these on the fly
    let abvMean = 5.6;
    let abVSTDev = 2;
    let ibuMean = 28.5;
    let ibuSTDev = 14.8;
    let srmMean = 14.7;
    let srmSTDev = 10.5;

    // intermediate steps to calculate user's preferece z-score

    let currentAbvZ = (this.state.sliderABV - abvMean) / abVSTDev;
    let currentIbuZ = (this.state.sliderIBU - ibuMean) / ibuSTDev;
    let currentSrmZ = (this.state.sliderSRM - srmMean) / srmSTDev;

    let currentPrefZScore = currentAbvZ + currentIbuZ + currentSrmZ;


    let newBeers = [];
    for (var i = 0; i < this.state.beers.length; i++) {
      newBeers.push(this.state.beers[i]);

      // intermediate steps to calculate this beer's z-score

      let abvZ = (newBeers[i].abvAvg - abvMean) / abVSTDev;
      let ibuZ = (newBeers[i].ibuAvg - ibuMean) / ibuSTDev;
      let srmZ = (newBeers[i].srmAvg - srmMean) / srmSTDev;

      newBeers[i].zscore = abvZ + ibuZ + srmZ;
      newBeers[i].prefRating = Math.abs( Math.abs(currentPrefZScore) - Math.abs(newBeers[i].zscore));
    }

    newBeers.sort(function (a, b) {
      return a.prefRating - b.prefRating;
    });

    this.setState({
      beers: newBeers
    });
  }

  search (field, term) {
    console.log('this got clicked!');

    $.ajax({
      url: 'http://127.0.0.1:3000/items', 
      method: 'GET',
      data: {
        
      },
      success: (data) => {
        console.log('data is being received: ', data);
        this.setState({
          beers: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }
      // {this.state.beers.length > 0 && 

  render () {
    return (<div>
      <h1 className="headerBar">BEER <img src="images/beermeheader.png" /> ME!</h1>
      <Sliders
        sliderABV={this.state.sliderABV}
        sliderIBU={this.state.sliderIBU}
        sliderSRM={this.state.sliderSRM}
        onABVChange={this.sliderABVChange.bind(this)}
        onIBUChange={this.sliderIBUChange.bind(this)}
        onSRMChange={this.sliderSRMChange.bind(this)}
      />

      <List beers={this.state.beers}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// <Search onSearch={this.search.bind(this)} />
