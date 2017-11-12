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
				  <span className="labelleft">
				    EASY DRINKING
				  </span>
				  <span className="labelright">
				    HANGOVER CITY
				  </span>
				  <h2>Alcohol Content (ABV)</h2>
				  <h4>Current Value: {this.props.sliderABV}</h4>
				</fieldset>
				<div className="slidecontainer">
				  <input type="range" min="4.5" max="82.5" step="0.5" value={this.props.sliderIBU} className="slider sliderIBU" onChange={this.sliderIBUChange.bind(this)}/>
				  <span className="labelleft">
				    SWEET AND MALTY
				  </span>
				  <span className="labelright">
				    BITTER AND HOPPY
				  </span>
				  <h2>Hoppiness (IBU)</h2>
				  <h4>Current Value: {this.props.sliderIBU}</h4>
				</div>
				<div className="slidecontainer">
				  <input type="range" min="2" max="40" step="0.5" value={this.props.sliderSRM} className="slider sliderSRM" onChange={this.sliderSRMChange.bind(this)}/>
				  <span className="labelleft">
				    CLEAR AND LIGHT
				  </span>
				  <span className="labelright">
				    THICK AND DARK
				  </span>
				  <h2>Beer Color (SRM)</h2>
				  <h4>Current Value: {this.props.sliderSRM}</h4>
				</div>
		  </div>

	  );
	}

}

export default Sliders;

