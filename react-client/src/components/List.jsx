import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.beers.length } items.
    { props.beers.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;