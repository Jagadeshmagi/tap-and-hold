'use strict';

import React from 'react';

const DefaultDecorators = [
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            onClick={this.handleClick}><img style={{width: '75%'}} src="http://assets.myntassets.com/assets/images/lookbook/aay-brand/2016/9/23/11474622864573-ARROW-LEFT.png" alt="left-arrow" /></button>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'none',
          color: 'white',
          padding: '2px 0px',
          outline: 0,
          opacity: disabled ? 0.3 : 3,
          cursor: 'pointer',
          fontSize: 33
        }
      }
    }),
    position: 'CenterLeft'
  },
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround)}
            onClick={this.handleClick}><img style={{width: '75%'}} src="http://assets.myntassets.com/assets/images/lookbook/aay-brand/2016/9/23/11474622864590-ARROW-RIGHT.png" alt="right-arrow" /></button>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'none',
          color: 'white',
          padding: '2px 3px',
          outline: 0,
          opacity: disabled ? 0.3 : 3,
          cursor: 'pointer',
          fontSize:33
        }
      }
    }),
    position: 'CenterRight'
  },
  // {
  //   component: React.createClass({
  //     render() {
  //       var self = this;
  //       var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
  //       return (
  //         <ul style={self.getListStyles()}>
  //           {
  //             indexes.map(function(index) {
  //               return (
  //                 <li style={self.getListItemStyles()} key={index}>
  //                   <button
  //                     style={self.getButtonStyles(self.props.currentSlide === index)}
  //                     onClick={self.props.goToSlide.bind(null, index)}>
  //                     &bull;
  //                   </button>
  //                 </li>
  //               )
  //             })
  //           }
  //         </ul>
  //       )
  //     },
  //     getIndexes(count, inc) {
  //       var arr = [];
  //       for (var i = 0; i < count; i += inc) {
  //         arr.push(i);
  //       }
  //       return arr;
  //     },
  //     getListStyles() {
  //       return {
  //         position: 'relative',
  //         margin: 0,
  //         top: -10,
  //         padding: 0
  //       }
  //     },
  //     getListItemStyles() {
  //       return {
  //         listStyleType: 'none',
  //         display: 'inline-block'
  //       }
  //     },
  //     getButtonStyles(active) {
  //       return {
  //         border: 0,
  //         background: 'transparent',
  //         color: 'black',
  //         cursor: 'pointer',
  //         padding: '10px 4px',
  //         outline: 0,
  //         fontSize: 24,
  //         lineHeight: '5px',
  //         opacity: active ? 1 : 0.5
  //       }
  //     }
  //   }),
  //   position: 'BottomCenter'
  // }
];

export default DefaultDecorators;
