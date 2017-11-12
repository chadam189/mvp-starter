import React from 'react';


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