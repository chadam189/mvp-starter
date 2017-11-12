import React from 'react';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  beerImg: ''
		};
	}
	
	componentWillMount () {

		if (this.props.beer.srmAvg <= 3) {
			this.setState({
				beerImg: 'images/beer1.png'
			});
		} else if (this.props.beer.srmAvg <= 5) {
			this.setState({
				beerImg: 'images/beer2.png'
			});
		} else if (this.props.beer.srmAvg <= 10) {
			this.setState({
				beerImg: 'images/beer3.png'
			});
		} else if (this.props.beer.srmAvg <= 20) {
			this.setState({
				beerImg: 'images/red-circle.jpg'
			});
		} else if (this.props.beer.srmAvg <= 30) {
			this.setState({
				beerImg: 'images/beer5.png'
			});
		} else {
			this.setState({
				beerImg: 'images/beer6.png'
			});
		} 

	}

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

// <td><img className="beerpic"src={this.state.beerImg}/></td>
// <td>{this.props.beer.srmAvg} </td>