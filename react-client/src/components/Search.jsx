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
			  <div className="searchArea">    
			    <span className="searchSpacer"></span>      
			    <span>
		        <input id="search" className="form-control" name="search" type="text" placeholder="Find your Style..."/>
		      </span>
		      <span>
		        <select id="dropdown" className="form-control" name="search" type="text" placeholder="Find your Style..."/>
		      </span>
		      <span className="searchSpacer"></span>
	      </div>   
      </div>   

	  );
	}

}

export default Search;