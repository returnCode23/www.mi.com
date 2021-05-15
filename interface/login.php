<?php
  

    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $select = "select * from user where username='$username' and password='$password'";

    $result = $mysqli->query($select);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登陆成功");</script>';
        echo '<script>location.href="../src/html/index.html";</script>';
    }else{
        echo '<script>alert("用户名或密码错误");</script>';
        echo '<script>location.href="../src/html/login.html";</script>';
    }
?>