import React from 'react';
import ReactDOM from 'react-dom';
import Ga from '../functions/Ga';
import style from '../css/main.css';

import Tapandhold from './tap-and-hold'

export default class Page extends React.Component {
	render(){

		return(
			<div>
				<Tapandhold
					actualImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961116-front.jpg"
					insideImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961133-back.jpg"
					wait= '1000'
				/>			
			</div>
		);
	}
}