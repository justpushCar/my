<?php
/*********************************************************
* memcache 方法，连续发送消息，会导致cpu使用率瞬间提升，内存消耗大 *
**********************************************************/
/*session_start();
$mem = new Memcache;
$mem->connect("localhost",11211);
if(isset($_POST['content'])){
	$con['username'] = $_SESSION["username"];
	$con['content'] = $_POST["content"];
	
	$data = $mem->get('chat');
	$data[] = $con;
	$mem->set("chat",$data,0,0);	
}
$mem->close();
*/

/*********************************************************
* 如果接收到前台提交信息，查询是否有当前日期的文件，如果没有创建一个 *
* 再把消息组合存到文件中                                     *
**********************************************************/
if(isset($_POST['content'])){
	session_start();
	$filename = date("Ymd",time()).".txt";
	if(file_exists($filename)){
		$content = file_get_contents($filename);
		$data = json_decode($content,true);		
		$con['username'] = $_SESSION["username"];
		$con['content'] = $_POST["content"];
		$data[] = $con;
		$file = fopen($filename,"w");
		fwrite($file,json_encode($data));
		fclose($file);	
	}else{
		$file = fopen($filename,"w");
		$con['username'] = $_SESSION["username"];
		$con['content'] = $_POST["content"];
		$data[] = $con;
		fwrite($file,json_encode($data));
		fclose($file);	
	}
		
}



?>