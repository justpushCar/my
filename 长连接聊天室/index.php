<?php
	session_start();
	if(!empty($_SESSION['username'])){
		header("HTTP/1.1 303 See Other"); 
		header("Location: chat.php"); 
		exit; 	
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>聊天室登录</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="jquery-1.6.min.js"></script>
<script>
	$(function(){
		$("#button").click(function(){
			var name = $("input[name='name']").val();
			var pwd = $("input[name='pwd']").val();
			//alert(name + pwd);
			$.post("login.php",{"name":name,"pwd":pwd},function(data){
					var obj = eval('('+data+')');
					if(obj.res == 200){
						window.location.href="chat.php";	
					}else if(obj.res == 300){
						$("#error").html(obj.msg);
					}
			})	
		});	
	})
</script>
</head>
<body>

<div id="chatshow"></div>

</div>
<div style="text-align:center;">
<form action="login.php" method="post">
请输入你的名字
<input type="text" name="name"><br /><span id="error"></span><br />
再输入一个密码
<input type="password" name="pwd"><br />
<input type='button' value='进入聊天室' id="button">
</form>
</div>
</body>
</html>