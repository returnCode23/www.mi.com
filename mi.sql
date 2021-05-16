-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 12:19:33
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mi`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `pic` varchar(255) NOT NULL,
  `deta-pic` text NOT NULL,
  `s-pic` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `num` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `pic`, `deta-pic`, `s-pic`, `details`, `num`) VALUES
(1, '小米全面屏电视65英寸 E65X', 3199, '[{ \"src\": \"img/jd-pic1.png\", \"alt\": \"\" }]', '', '', '折叠大屏｜自研芯片', 10),
(2, '全面屏电视E43K', 1399, '[{ \"src\": \"img/jd-pic2.png\", \"alt\": \"\" }]', '', '', '全面屏设计，海量内容', 10),
(3, '小米电视4A 70英寸	', 3699, '[{ \"src\": \"img/jd-pic3.png\", \"alt\": \"\" }]', '', '', '大屏更享受', 10),
(4, '米家互联网对开门冰箱 540L', 2899, '[{ \"src\": \"img/jd-pic4.png\", \"alt\": \"\" }]', '', '', '重磅新品福利特惠', 10),
(5, 'Redmi全自动波轮洗衣机1A 8kg', 899, '[{ \"src\": \"img/jd-pic5.png\", \"alt\": \"\" }]', '', '', '一键操作，父母都爱用', 10),
(6, '米家电烤箱', 299, '[{ \"src\": \"img/jd-pic6.png\", \"alt\": \"\" }]', '', '', '全能烘焙体验', 10),
(7, '米家互联网烟灶套装（天然气）', 2298, '[{ \"src\": \"img/jd-pic7.png\", \"alt\": \"\" }]', '', '', '点火排烟，风随火动', 10),
(8, '全面屏电视 55英寸E55X', 2499, '[{ \"src\": \"img/jd-pic8.png\", \"alt\": \"\" }]', '', '', '潮流全面屏设计', 10);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `phone` bigint(20) NOT NULL COMMENT '手机号'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `phone`) VALUES
(1, 'root', 'root', 13566668888),
(2, '333333', '', 333333),
(3, '110', '', 110);

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
