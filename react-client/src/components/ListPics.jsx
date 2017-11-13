import React from 'react';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  beerImg: ''
		};
	}
	
	componentWillMount () {

		this.setState({
				beerImg: `../images/beerpics/beer${this.props.beer.id}.jpg`
			});

		// if (this.props.beer.srmAvg <= 3) {
		// 	this.setState({
		// 		beerImg: '../images/beerpics/beer115.jpg'
		// 	});
		// } else if (this.props.beer.srmAvg <= 5) {
		// 	this.setState({
		// 		beerImg: 'https://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg'
		// 	});
		// } else if (this.props.beer.srmAvg <= 10) {
		// 	this.setState({
		// 		beerImg: 'https://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg'
		// 	});
		// } else if (this.props.beer.srmAvg <= 20) {
		// 	this.setState({
		// 		beerImg: 'https://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg'
		// 	});
		// } else if (this.props.beer.srmAvg <= 30) {
		// 	this.setState({
		// 		beerImg: 'https://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg'
		// 	});
		// } else {
		// 	this.setState({
		// 		beerImg: 'https://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/amber-ale.jpg'
		// 	});
		// } 

	}

	render () {
		return (
			<div className="beeritem">
		    <div className="beerpic2">
		      <img src={this.state.beerImg}/> 
		      <h2>{this.props.beer.fullname}</h2>
		    </div>
		    <div className="beerinfo">
		    <h3><strong>Category:</strong> {this.props.beer.categoryName}</h3>
		    {this.props.beer.description}
		    </div>
		  </div>
		)
	}

}

export default ListItem;

// <td><img className="beerpic"src={this.state.beerImg}/></td>
// <td>{this.props.beer.srmAvg} </td>