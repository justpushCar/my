<?php 
/**************************************
* 链接数据库的方法，这个方法不可行，         *
* 由于请求数据库时间间隔太短，会致使数据库锁死 *
***************************************/
/*require 'conn.inc';
function getData(){
	$sql="SELECT count(*) FROM  `talkroom`";
	$res=mysql_query($sql);
	$count = mysql_fetch_row($res);
	
	return $count;	
}
$old = getData();

while(true){
	$new = getData();
	if($new[0]>$old[0]){
		//echo json_encode($new['data']);
		//print_r($new);
		echo '2222222222'.'<br/>';
	}
	//echo '<br />11111111111111111111111111111111111111111111111111111111111111111111';
	usleep(1000);
}
*/


/*********************************************************
* memcache 方法，连续发送消息，会导致cpu使用率瞬间提升，内存消耗大 *
**********************************************************/
/*set_time_limit(0);
$mem = new Memcache;
$mem->connect("localhost",11211);

$count = count($mem->get("chat"));
$com = true;
//$mem->delete('chat');
if($_POST['msg'] == "one"){
	exit(json_encode($mem->get("chat")));	
}
if($_POST['msg'] == "break"){
	$com = false;	
}
$time1 = time();
while(true){
	if($com){
		$data = $mem->get("chat");
		if(count($data)>$count){
			echo json_encode($data);
			break;
		}
		usleep(300);
	}else{
		break;	
	}
}
$mem->close();*/

/*********************************************************************
* 文件存储方法，可稍微减小内存开销，但是手动刷新频率过快，会是apache崩掉，原因不明 *
*********************************************************************/

/**
* http 请求超时时间是30秒，set_time_limit(0)将超时时间设为永不超时
*/
set_time_limit(0);
$filename = date("Ymd",time()).".txt";

/**
* 判断是否存在文件，如果不存在，新建一个以当前日期为文件名的txt文件，并将初始消息写进去
*/
if(file_exists($filename)){
	$content = file_get_contents($filename);
	$data = json_decode($content,true);		
	$count = count($data);
	
	if($_POST['msg'] == "one"){
		exit(json_encode($data));	
	}
/**
* 做一个while的死循环，每隔300毫秒去比较消息数量，如果大于之前的数量，则以json格式输出
* 并跳出此次循环，由客户端再次发送请求
*/	
	while(true){
		
		$contents = file_get_contents($filename);
		$datas = json_decode($contents,true);
		$counts = count($datas);	
		if($counts>$count){
			echo json_encode($datas);
			break;
		}
		usleep(300);
	}
}else{
	$file = fopen($filename,"w");
	$con['username'] = "系统消息";
	$con['content'] = "欢迎来到EPGO聊天室";
	$data[] = $con;
	fwrite($file,json_encode($data));
	fclose($file);
	
	exit(json_encode($data));	
	
}

?>
