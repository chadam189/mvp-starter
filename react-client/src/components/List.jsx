import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.beers.length } items.
    <table className="beerList">
	    <thead>
		    <th>Beer ID</th>
		    <th>Name</th>
		    <th>Category</th>
		    <th>Average ABV</th>
		    <th>Average IBU</th>
		    <th>Average SRM</th>
		  </thead>
		  <tbody>
		    {props.beers.map(beer => <ListItem beer={beer} key={beer.id}/>)}
	    </tbody>
    </table>
  </div>
)

export default List;