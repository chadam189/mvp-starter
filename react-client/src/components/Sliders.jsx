import React from 'react';
import ReactSlider from 'react-slider';

class Sliders extends React.Component {
	constructor(props) {
		super(props);
	}

	sliderABVChange (e) {
		console.log('slider changed: ', e.target.value);
		this.props.onABVChange(e);
	}

	sliderIBUChange (e) {
		console.log('slider changed: ', e.target.value);
		this.props.onIBUChange(e);
	}

	sliderSRMChange (e) {
		console.log('slider changed: ', e.target.value);
		this.props.onSRMChange(e);
	}

	render () {
		return (
			<div className="slidenav">
				<fieldset className="slidecontainer">
				  <input type="range" min="1.5" max="11.5" step="0.5" value={this.props.sliderABV} className="slider sliderABV" onChange={this.sliderABVChange.bind(this)}/>
				  <span className="sliderlabel">
				    {'LAKE BEERS' + String.fromCharCode(0x27FA) + 'I\'M HUNGOVER'}
				  </span>
				  <h4>Alcohol Content (ABV)</h4>
				  <h6>Current Value: {this.props.sliderABV}</h6>
				</fieldset>
				<div className="slidecontainer">
				  <input type="range" min="4.5" max="82.5" step="0.5" value={this.props.sliderIBU} className="slider sliderIBU" onChange={this.sliderIBUChange.bind(this)}/>
				  <span className="test">{'SWEET/MALTY' + String.fromCharCode(0x27FA) + 'BITTER/HOPPY'}</span>
				  <h4>Hoppiness (IBU)</h4>
				  <h6>Current Value: {this.props.sliderIBU}</h6>
				</div>
				<div className="slidecontainer">
				  <input type="range" min="2" max="40" step="0.5" value={this.props.sliderSRM} className="slider sliderSRM" onChange={this.sliderSRMChange.bind(this)}/>
				  <span className="sliderlabel">{'CLEAR/LIGHT' + String.fromCharCode(0x27FA) + 'THICK/DARK'}</span>
				  <h4>Beer Color (SRM)</h4>
				  <h6>Current Value: {this.props.sliderSRM}</h6>
				</div>
		  </div>

	  );
	}

}

export default Sliders;

