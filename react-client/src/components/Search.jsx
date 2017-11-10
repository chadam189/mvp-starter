import React from 'react';
// import ListItem from './ListItem.jsx';

// const Search = (props) => (
//   <div>
//     <h4> Search Bar has arrived! </h4>
//   </div>
// )


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	render () {
		return (
		  <div>
		    <h4> Search Bar has arrived! </h4>
		  </div>
	  );
	}

}

export default Search;