import React from 'react';
import ReactDOM from 'react-dom';
import Ga from '../functions/Ga';
import style from '../css/main.css';


export default class Tapandhold extends React.Component {

	constructor(props) {
		super(props);	
		this.state = {
			mainImage: this.props.actualImage,
			initialPlceHolder:1,
			isTapped:false
  		}
	}


	handleTouchEnd(e){
		this.setState({
			mainImage:this.props.actualImage,
			isTapped:false
		});

	}	

	handleTouchStart(e){
		this.setState({
			mainImage:this.props.insideImage,
			isTapped:true
		});
	}

	result(){
		return (
			<div className={(this.state.isTapped)? 'revealed' : 'notRevealed'} onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)}> 
				<img src={this.state.mainImage} alt='main image' />
			</div>
		);
	}

	// myFunction() {
	// 	var myVar;
	//     myVar = setTimeout(result, 3000);
	// }



	render(){

		return(
			<div>
				<h3>Tap and Hold to see the magic</h3>
				{this.result()}
			</div>
		);
	}
}