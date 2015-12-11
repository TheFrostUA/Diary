<?php
	mysql_connect("127.0.0.1", "root", "");
	mysql_select_db("DiaryDB");
	$userId = mysql_escape_string($_POST['user']);
	$title = mysql_escape_string($_POST['title']);
	$text = mysql_escape_string($_POST['text']);
	$action = mysql_escape_string($_POST['action']);
	if($action = 'create')
	{
		$query = "INSERT INTO Notes (user, title, time, text) 
		VALUES ('" . $userId ."', '" . $title ."', '" . new DateTime('NOW') ."', '" . $text ."');";
		mysql_query($query);
		if(mysql_affected_rows != 0)
		{
			echo "OK";
		}
		else
		{
			echo "Creation error";
		}
		die();
	}
	if($action = 'modify')
	{
		$noteId = mysql_escape_string($_POST['note']);
		$query = "UPDATE Notes 
		SET title = '" . $title ."', time = '" . new DateTime('NOW') ."',text = '" . $text ."'
		WHERE user = '" . $userId ."' AND id = '" . $noteId . "';";
		mysql_query($query);
		if(mysql_affected_rows != 0)
		{
			echo "OK";
		}
		else
		{
			echo "Wrong note";
		}
		die();
	}
	
?>