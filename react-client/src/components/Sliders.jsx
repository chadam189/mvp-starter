import React from 'react';
import ReactSlider from 'react-slider';

class Sliders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			sliderABV: 6,
			sliderIBU: 50,
			sliderSRM: 50
		}
	}

	sliderABVChange (e) {
		// console.log('slider changed: ', e.target.value);
		this.setState({
			sliderABV: e.target.value
		});
	}

	sliderIBUChange (e) {
		// console.log('slider changed: ', e.target.value);
		this.setState({
			sliderIBU: e.target.value
		});
	}

	sliderSRMChange (e) {
		// console.log('slider changed: ', e.target.value);
		this.setState({
			sliderSRM: e.target.value
		});
	}

	render () {
		return (

			<div className="slidenav">
				<fieldset className="slidecontainer">
				  <span className="leftlabel">Light</span>
				  <input type="range" min="1.5" max="11.5" step="0.5" value={this.state.sliderABV} className="slider sliderABV" onChange={this.sliderABVChange.bind(this)}/>
				  <span className="leftlabel">Boozy</span>
				  <h4>Alcohol Content (ABV)</h4>
				  <h6>Current Value: {this.state.sliderABV}</h6>
				</fieldset>
				<div className="slidecontainer">
				  <input type="range" min="4.5" max="82.5" step="0.5" value={this.state.sliderIBU} className="slider sliderIBU" onChange={this.sliderIBUChange.bind(this)}/>
				  <h4>Hoppiness (IBU)</h4>
				  <h6>Current Value: {this.state.sliderIBU}</h6>
				</div>
				<div className="slidecontainer">
				  <input type="range" min="2" max="40" step="0.5" value={this.state.sliderSRM} className="slider sliderSRM" onChange={this.sliderSRMChange.bind(this)}/>
				  <h4>Beer Color (SRM)</h4>
				  <h6>Current Value: {this.state.sliderSRM}</h6>
				</div>
		  </div>

	  );
	}

}

export default Sliders;
