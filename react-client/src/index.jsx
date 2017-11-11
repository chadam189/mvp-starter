import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beers: [{description: 'sup ladies', id: 1}]
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
      <h1>Item List</h1>
      <Search onSearch={this.search.bind(this)} />
      <List beers={this.state.beers}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));