import React from 'react';
import ListItem from './ListItem.jsx';
import ListPics from './ListPics.jsx';


const List = (props) => (

  <div>
    {props.beers.length > 0 && 
	    <div className="beerList">
			    {props.beers.map(beer => <ListItem beer={beer} key={beer.id}/>)}
	    </div> 
    }
  </div>
)

export default List;


//   <div>
//     {props.beers.length > 0 && 
// 	    <table className="beerList">
// 		    <thead>
// 		      <tr>
// 				    <th>Beer ID</th>
// 				    <th>Name</th>
// 				    <th>Category</th>
// 				    <th>Average ABV</th>
// 				    <th>Average IBU</th>
// 				    <th>Beer Color</th>
// 				  </tr>
// 			  </thead>
// 			  <tbody>
// 			    {props.beers.slice(0, 10).map(beer => <ListItem beer={beer} key={beer.id}/>)}
// 		    </tbody>
// 	    </table> 
//     }
//   </div>
// )