import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/main.css';

import {TweenLite, TimelineMax} from 'gsap';



export default class Page extends React.Component {



	componentDidMount(){
		console.log('Working');
		this.topLeftTL = new TimelineMax({repeat:-1});
		this.topLeftTL.to(this.refs.div1, 2.5, {x: '100px', ease:Linear.easeNone})
					  .to(this.refs.div1, 2.5, {x: '0', ease:Linear.easeNone});
		//this.topPngImage = new TimelineMax({repeat:-1});
		//this.topPngImage.to(this.refs.topImage , 1, {delay:2,autoAlpha: 1, display:'block'});
					  // .to(this.refs.topImage , 1, {delay:5,autoAlpha: 1, display:'none'});
	}
		

	onImage(){
		console.log('onload');
		<img style={css.pngImage}src="https://cdn0.iconfinder.com/data/icons/sport-and-fitness/500/Fitness_gym_gymnastic_health_dumbbell_exercise_strength_weight_sport_stamina_man_1-512.png" alt='gim image' />

	}


	render(){
		const css={
			bgStyle:{
				backgroundColor:'blue',
				width:50,
				height: 50,
			},
			bgImgStyle:{
				width:'150%',
				// display:'block',
				// position:'absolute',
				marginLeft:'-30%',
				top:0
			},
			pngImage:{
				position:'absolute',
				top:0,
				width:'50%',
				display:'none'			
			}
		}

		return(
			<div>
				{/*<div ref="div1" style={css.bgStyle}> </div>*/}
				<div style={{position:'relative'}}>
					<img ref="div1" style={css.bgImgStyle}src="http://assets.myntassets.com/assets/images/lookbook/2016/12/23/11482487556887-USpolo.gif" alt="background" />
					
					{/*<img ref="topImage" style={css.pngImage}src="https://cdn0.iconfinder.com/data/icons/sport-and-fitness/500/Fitness_gym_gymnastic_health_dumbbell_exercise_strength_weight_sport_stamina_man_1-512.png" alt='gim image' />*/}
				</div>
			</div>
		);
	}
}