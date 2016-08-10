


function tab(color){
			var tx=document.querySelectorAll('.tx')	
			var img=document.querySelectorAll('.b_img')	
			for (var a=0 ;a<tx.length; a++){
				tx[a].addEventListener('click',function(){
					var parnet=this.parentNode.children
					var _this =this
					for(var i=0;i<parnet.length;i++)
					{
						if(parnet[i]==_this){
							parnet[i].style.color="white"
						}else{
							
							parnet[i].style.color=color
						}
					}					
//					this.style.color="white"
//					if(this.previousSibling)this.previousSibling.style.color="#e9a8a8"		
//					this.nextSibling.style.color="#e9a8a8"
				var index=(this.getAttribute('index'))				
				for(var a=0 ;a<img.length; a++){
					var imgindex=(img[a].getAttribute('index'))
					if(index==imgindex){
						img[a].style.display="block"
						img[a].style.opacity=0
						anminte(img[a],{opacity:1},200)
					}else{
						img[a].style.display="none"                      
					}
				}
			})
			}
		}
	//动画{opacity:1}1000
			function anminte(elem,obj,time){
				elemstyle=elem.style
				 for(var i in obj){
				  var munber=0
				   	  var cha=0
				  var anm=setInterval(function(){
				  	  var sty=i
				  	  //opacity
				      cha =cha+(obj[i])*100/time
//				      var str=elemstyle+'.'+sty+'='+cha
//				      eval(str)
				 	  elemstyle.opacity=cha
				 		if(cha>=1){
				 			clearInterval(anm)
				 		}
				 	},100)	
				 }
			}