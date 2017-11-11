import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => (

  <div>
    {props.beers.length > 0 && 
	    <table className="beerList">
		    <thead>
		      <tr>
				    <th>Beer ID</th>
				    <th>Name</th>
				    <th>Category</th>
				    <th>Average ABV</th>
				    <th>Average IBU</th>
				    <th>Beer Color</th>
				  </tr>
			  </thead>
			  <tbody>
			    {props.beers.map(beer => <ListItem beer={beer} key={beer.id}/>)}
		    </tbody>
	    </table> 
    }
  </div>
)

export default List;