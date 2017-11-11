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
		  <ul className="searchArea">    
		    <li className="searchSpacer"></li>      
		    <li>
	        <input id="search" className="form-control" name="search" type="text" placeholder="Find your Style..."/>
	      </li>
	      <li>
	        <input id="dropdown" className="form-control" name="search" type="text" placeholder="Find your Style..."/>
	      </li>
	      <li className="searchSpacer"></li>
      </ul>      

	  );
	}

}

export default Search;