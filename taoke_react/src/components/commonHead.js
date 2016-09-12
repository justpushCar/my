import React, { Component } from 'react';
class CommonHead extends Component {
	 constructor(prop){
	 	 super();
	 }
  render() {
    return (
         <div className="head">
           <div className="top_left"><img alt="头像" src="http://1.libikun.applinzi.com/Public/img/nan.png" /></div>
           <div className="mid">主页</div>
         </div>
        
    );
  }
}

export default CommonHead;
