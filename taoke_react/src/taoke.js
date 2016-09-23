import React, { Component } from 'react';
//import LoginInput from './components/login_input';
//import HomeContent from './components/homeContent';
import  CommonHead from './components/commonHead';
import CommonFoot from './components/commonFoot';
import Loadermore from './components/loaderMore';
class Taoke extends Component {
  render() {
    return (
    	<div>
    	<CommonHead head={{title:"主页",headimg:"http://1.libikun.applinzi.com/Public/img/nan.png"}}/>
    	 <Loadermore/>
       <CommonFoot/>
    	</div> 
    );
  }
}
export default Taoke;
