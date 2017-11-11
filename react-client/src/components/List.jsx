import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.beers.length } items.
    <table className="beerList">
    { props.beers.map(beer => <ListItem beer={beer} key={beer.id}/>)}
    </table>
  </div>
)

export default List;