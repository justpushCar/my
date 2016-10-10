-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2013 年 12 月 03 日 09:39
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `ajax`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `member`
-- 

CREATE TABLE `member` (
  `id` tinyint(2) NOT NULL auto_increment,
  `username` varchar(32) NOT NULL,
  `password` varchar(33) NOT NULL,
  `islogin` enum('0','1') NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

-- 
-- 导出表中的数据 `member`
-- 

INSERT INTO `member` VALUES (1, 'qwe', '76d80224611fc919a5d54f0ff9fba446', '1');
INSERT INTO `member` VALUES (2, '123', '202cb962ac59075b964b07152d234b70', '1');
INSERT INTO `member` VALUES (3, '张文宇', '36388794be2cf5f298978498ff3c64a2', '1');
INSERT INTO `member` VALUES (4, 'ttt', '47bce5c74f589f4867dbd57e9ca9f808', '1');

-- --------------------------------------------------------

-- 
-- 表的结构 `talkroom`
-- 

CREATE TABLE `talkroom` (
  `id` int(11) NOT NULL auto_increment,
  `content` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- 
-- 导出表中的数据 `talkroom`
-- 

INSERT INTO `talkroom` VALUES (1, '23423');
INSERT INTO `talkroom` VALUES (2, '23423');
INSERT INTO `talkroom` VALUES (3, '23423');
