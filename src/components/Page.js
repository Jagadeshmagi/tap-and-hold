import React from 'react';
import ReactDOM from 'react-dom';
import Ga from '../functions/Ga';
import style from '../css/main.css';

import Tapandhold from './tap-and-hold'
import Carousel from './carousel';


export default class Page extends React.Component {
	getDotDecorators() {
		const DefaultDecorators = [
		  {
		    component: React.createClass({
		      render() {
		        var self = this;
		        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
		        return (
		          <ul style={self.getListStyles()}>
		            {
		              indexes.map(function(index) {
		                return (
		                  <li style={self.getListItemStyles()} key={index}>
		                    <button
		                      style={self.getButtonStyles(self.props.currentSlide === index)}
		                      onClick={self.props.goToSlide.bind(null, index)}>
		                      &bull;
		                    </button>
		                  </li>
		                )
		              })
		            }
		          </ul>
		        )
		      },
		      getIndexes(count, inc) {
		        var arr = [];
		        for (var i = 0; i < count; i += inc) {
		          arr.push(i);
		        }
		        return arr;
		      },
		      getListStyles() {
		        return {
		          position: 'relative',
		          margin: 0,
		          top: 20,
		          padding: 0
		        }
		      },
		      getListItemStyles() {
		        return {
		          listStyleType: 'none',
		          display: 'inline-block'
		        }
		      },
		      getButtonStyles(active) {
		        return {
		          border: 0,
		          background: 'transparent',
		          color: 'black',
		          cursor: 'pointer',
		          padding: '10px 4px',
		          outline: 0,
		          fontSize: 24,
		          lineHeight: '5px',
		          opacity: active ? 1 : 0.5
		        }
		      }
		    }),
		    position: 'BottomCenter'
		  }
		];

		return DefaultDecorators;
	}
	
	render(){

		return(
			<div>
				<Carousel decorators={this.getDotDecorators()} autoplay={true}>
					<Tapandhold
					actualImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961116-front.jpg"
					insideImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961133-back.jpg"
					shopLink="http://myntra.com"
					/>
					<Tapandhold
					actualImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961116-front.jpg"
					insideImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961133-back.jpg"
					shopLink="http://myntra.com"
					/>	
					<Tapandhold
					actualImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961116-front.jpg"
					insideImage="http://assets.myntassets.com/assets/images/lookbook/test/2016/11/15/11479203961133-back.jpg"
					shopLink="http://myntra.com"
					/>
				</Carousel>

						
			</div>
		);
	}
}