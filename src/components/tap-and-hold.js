import React from 'react';
import ReactDOM from 'react-dom';
import Ga from '../functions/Ga';
import style from '../css/main.css';


export default class Tapandhold extends React.Component {

	constructor(props) {
		super(props);	
		this.state = {
			frontImage: this.props.actualImage,
			backImage: this.props.insideImage,

			initialPlceHolder:1,
			isTapped:false
  		}
	}	

	handleTouchStart(e){
		this.setState({
			frontImage:this.props.actualImage,
			isTapped:true
		});
	}


	handleTouchEnd(e){
		this.setState({
			backImage:this.props.insideImage,
			isTapped:false
		});

	}

	result(){
		const css={
			wrapperStyle:{
				position:'relative',
				minHeight:510
			},
			backImgStyle:{
				position:'absolute',
				top:0,
				left:0,
				width:'100%'
			}
		}
		return (
			<div style={css.wrapperStyle}> 
				<div onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} className={(this.state.isTapped)? 'revealed' : 'notRevealed'} style={css.backImgStyle}>
					<img src={this.state.frontImage} alt='main image' />
				</div>
				<div onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} className={(!this.state.isTapped)? 'revealed' : 'notRevealed'} style={css.backImgStyle}>
					<img style={css.backImgStyle} src={this.state.backImage} alt='main image' />
				</div>
				

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
				<h3>Tap and Hold to see the magic</h3>
				<img src="http://assets.myntassets.com/assets/images/lookbook/lingerie/2016/11/18/11479441832251-WeddingLingerie_007_Gifts.jpg" alt="head" />

			</div>
		);
	}
}