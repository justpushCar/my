import React, { Component } from 'react';

class HomeContent extends Component {
//	 constructor(prop){
//	 	 super();
//	 }

  render() {
    return (
         <div className="content">
	         <div className="wrap">
	           <div className="wrap1">
	           		<div className="title">函数/2008.06.5</div>
	           		<div className="head_img"><img alt="头像" src="http://1.libikun.applinzi.com/Public/img/nan.png" /></div> 
	                <div className="clboth" ></div>
	                <div className="bao">报酬</div>
	                <div className="baochou_content">50元</div>
	           </div>
	           <div className="wrap2">
	                <div className="time">1小时0分钟前</div>
	                <div className="location">上海 吉首大学</div> 
	           </div>
	         </div>
         </div>
    );
  }
}

export default HomeContent;
