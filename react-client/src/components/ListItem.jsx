import React from 'react';

const ListItem = (props) => (
  <tr>
    <td>{props.beer.id} </td>
    <td>{props.beer.name} </td>
    <td>{props.beer.categoryName} </td>
  </tr>
)

export default ListItem;