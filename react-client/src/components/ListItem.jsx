import React from 'react';

const ListItem = (props) => (
  <tr>
    <td>{props.beer.beerId} </td>
    <td>{props.beer.name} </td>
    <td>{props.beer.categoryName} </td>
    <td>{props.beer.abvAvg} </td>
    <td>{props.beer.ibuAvg} </td>
    <td>{props.beer.srmAvg} </td>
  </tr>
)

export default ListItem;