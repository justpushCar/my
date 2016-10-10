<?php
error_reporting('E_ALL ~& E_NOTICE');
$host="localhost";//主机名
$user="root";//用户名
$pwd="123456";//密码
$dbname="ajax";//要连接的数据库名
//如果连接失败，显示错误
$link = mysql_connect($host, $user, $pwd)or die("Could not connect: " . mysql_error());
//如果选择数据库失败，显示错误
mysql_select_db($dbname, $link) or die ('Can\'t use mygbook : ' . mysql_error());
//设置编码
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT=utf8");
mysql_query("SET CHARACTER_SET_RESULTS=utf8");
?>
