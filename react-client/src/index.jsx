import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import * as d3 from "d3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beers: []
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
        })
      },
      error: (err) => {
        console.log('err', err);
      }
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
        // this.setState({
        //   beers: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  render () {
    return (<div>
      <h1>BEER <img src="images/beermeheader.png" /> ME!</h1>
      <Search onSearch={this.search.bind(this)} />
      <List beers={this.state.beers}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));