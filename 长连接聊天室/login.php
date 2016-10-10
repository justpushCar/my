<?php
require 'conn.inc';
session_start();	

//判断名字是否存在，如果存在，验证密码，如果不存在，直接存入

if(isset($_POST["name"])){
	$sql1 = "select * from member where username = '{$_POST['name']}'";
	$result1 = mysql_query($sql1);
	while($row = mysql_fetch_assoc($result1)){
		$res = $row;	
	}
	$pwd = md5($_POST['pwd']);
	if($res){
		
		if($res['password'] == $pwd){		
			mysql_query("update member set islogin = '1' where name = '{$_POST['name']}'");
					
			$_SESSION['username'] = $_POST["name"];
			
			$data['res'] = 200;
			$data['msg'] = "登录成功1";	
		}else{
			$data['res'] = 300;
			$data['msg'] = "用户名或密码不正确";	
		}	
	}else{		
		$sql="INSERT INTO member (username,password,islogin) VALUES ('{$_POST['name']}','{$pwd}','1');";
		$result3 = mysql_query($sql);
		if($result3){	
						
			$_SESSION['username'] = $_POST["name"];
			$data['res'] = 200;
			$data['msg'] = "登录成功2";	
		}
	}
	echo json_encode($data);
	
}