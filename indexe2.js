var oCell =document.getElementsByClassName('cell');
var oCellLen=oCell.length;
var oRow = document.getElementsByClassName('row');
var numSize = oRow.length;
var map=[];//存储网格方向

var openArr =[];//存储要走的点
var closeArr =[];//存储走过的点
//检查当前div含有的class 返回一个数组，[0,1,2,3]代表都能通行 0 表示上 1右2下3左
function checkDivClassName(oDiv){
	var arr =[0,1,2,3];//[0,1,2,3]代表都能通行 0 表示上 1右2下3左
	if(hasClass(oDiv,'top')){
		removeByValue(arr,'0')
	}
	if(hasClass(oDiv,'right')){
		removeByValue(arr,'1')
	}
	if(hasClass(oDiv,'bottom')){
		removeByValue(arr,'2')
	}
	if(hasClass(oDiv,'left')){
		removeByValue(arr,'3')
	}
	return arr;
}
// console.log(checkDivClassName(oCell[1]));
for(var i=0;i<numSize;i++){
	map[i]=[];
	for(var j=0;j<numSize;j++){
		map[i].push(checkDivClassName(oCell[i*numSize+j]));
		oCell[i*numSize+j].aIndex=map[i][j];//给每个ocell添加他自己状态的aIndex 即[0] [1,2]....
		oCell[i*numSize+j].x=i;//x代表行
		oCell[i*numSize+j].y=j;//y代表所在列
	}	
}

// console.log(oCell[1].aIndex,oCell[1].x,oCell[1].y);
init();//初始化
function init(){
	addClass(oCell[0],'rat');
	var x=0,
		y=0;
	openArr.push(oCell[0]);//添加起点元素到要走的点中
	openFn();
}
function openFn(){
	var nowDiv = openArr.shift();
	if(nowDiv==oCell[numSize*numSize-1]){
		closeArr.push(nowDiv);
		showLine();
		return;
	}
	closeArr.push(nowDiv);
	findDiv(nowDiv);
	openFn();//递归
}
function findDiv(nowDiv){
	function filter(oDiv){//判定不在openArr 和closeArr中
		for (var i = 0; i < closeArr.length; i++) {
            if(closeArr[i]==oDiv){
                return false;
            }
        }
        for (var i = 0; i < openArr.length; i++) {
            if(openArr[i]==oDiv){
                return false;
            }
        }
        return true;
	}
	//根据nowDiv的aIndex中来判断 添加 上下左右的格子到openArr
	if(nowDiv.aIndex.indexOf(0)!=-1){//含0 即可以向上走 添加当前元素的上方元素
		var x=(nowDiv.x-1>=0)?(nowDiv.x-1):0;
		var y=nowDiv.y;
		if(filter(oCell[x*numSize+y])){//判定该元素是否已经走过 在不在openArr 和closeArr中
			oCell[x*numSize+y].parent=nowDiv;
			openArr.push(oCell[x*numSize+y]);
		}		
	}
	if(nowDiv.aIndex.indexOf(1)!=-1){
		var x=nowDiv.x;
		var y=nowDiv.y+1<numSize?nowDiv.y+1:numSize-1;
		if(filter(oCell[x*numSize+y])){
			oCell[x*numSize+y].parent=nowDiv;
			openArr.push(oCell[x*numSize+y]);
		}		
	}
	if(nowDiv.aIndex.indexOf(2)!=-1){
		var x=nowDiv.x+1;
		var y=nowDiv.y;
		if(filter(oCell[x*numSize+y])){
			oCell[x*numSize+y].parent=nowDiv;
			openArr.push(oCell[x*numSize+y]);
		}		
	}
	if(nowDiv.aIndex.indexOf(3)!=-1){
		var x=nowDiv.x;
		var y=nowDiv.y-1>=0?nowDiv.y-1:0;
		if(filter(oCell[x*numSize+y])){
			oCell[x*numSize+y].parent=nowDiv;
			openArr.push(oCell[x*numSize+y]);
		}		
	}

	
}

function showLine() {//显示路线
    var result=[];
    var lastDiv = closeArr[closeArr.length-1];
    var iNow = 0;
    findParent(lastDiv);
    function findParent(div) {
        result.unshift(div);
        if(div.parent == oCell[0]){
            return;
        }
        findParent(div.parent);
    }
    var timer = setInterval(function(){
        result[iNow].style.background= 'red';
        iNow++;
        if(iNow == result.length){
            clearInterval(timer);
        }
    },30);
}





function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}
function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}
  
function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}


