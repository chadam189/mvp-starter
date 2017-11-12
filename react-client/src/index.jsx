import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Sliders from './components/Sliders.jsx';
import * as d3 from "d3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beers: [],
      sliderABV: 7,
      sliderIBU: 43.5,
      sliderSRM: 21
    }
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
  }

  sliderIBUChange (e) {
    // console.log('slider changed: ', e.target.value);
    this.setState({
      sliderIBU: e.target.value
    });
  }

  sliderSRMChange (e) {
    // console.log('slider changed: ', e.target.value);
    this.setState({
      sliderSRM: e.target.value
    });
  }

  listResort () {
    // hardcoding the zscore params
    // abv = 5.6, 2
    // ibu = 28.5, 14.8
    // srm = 14.7 10.5
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

  render () {
    return (<div>
      <h1>BEER <img src="images/beermeheader.png" /> ME!</h1>

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
