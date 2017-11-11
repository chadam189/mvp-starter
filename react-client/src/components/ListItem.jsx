import React from 'react';
import * as d3 from "d3";

// const ListItem = (props) => (
//   <tr>
//     <td>{props.beer.beerId} </td>
//     <td>{props.beer.name} </td>
//     <td>{props.beer.categoryName} </td>
//     <td>{props.beer.abvAvg} </td>
//     <td>{props.beer.ibuAvg} </td>
//     <td>{props.beer.srmAvg} </td>
//   </tr>
// )



class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  beerImg: 'images/beer4.png'
		};
	}

	
	componentWillMount () {

		if (this.props.beer.srmAvg < 3) {
			this.setState({
				beerImg: 'images/beer1.png'
			});
		} else if (this.props.beer.srmAvg <= 4) {
			this.setState({
				beerImg: 'images/beer2.png'
			});
		} else if (this.props.beer.srmAvg <= 5) {
			this.setState({
				beerImg: 'images/beer3.png'
			});
		} else if (this.props.beer.srmAvg <= 6) {
			this.setState({
				beerImg: 'images/beer4.png'
			});
		} else if (this.props.beer.srmAvg <= 7) {
			this.setState({
				beerImg: 'images/beer5.png'
			});
		} else {
			this.setState({
				beerImg: 'images/beer6.png'
			});
		} 

	}

// under 3	6
// from 3 to 4)	7
// 4 to 5)	45
// 5 to 6) 	16
// 6 to 7)	13
// [8 and larger	18

	render () {
		return (
		  <tr>
		    <td>{this.props.beer.beerId} </td>
		    <td>{this.props.beer.fullname} </td>
		    <td>{this.props.beer.categoryName} </td>
		    <td>{this.props.beer.abvAvg} </td>
		    <td>{this.props.beer.ibuAvg} </td>
		    <td><img className="beerpic"src={this.state.beerImg}/></td>
		  </tr>
		)
	}

}



export default ListItem;