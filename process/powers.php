<?php 
session_start();
include_once("../config/connection.php");
//process when users turn on
	if(isset($_POST['turn_on'])){
		//get lamp id 
		$lamp_id = $_POST['lamp_id'];
		$insert = mysqli_query($con,'INSERT INTO lamps(lamp_id) VALUES ("'.$lamp_id.'")');
		if($insert){
			$_SESSION['lampID'] = $lamp_id;
			return true;
		}else{
			return false;
		}
	}
//process when user turn off	
	if(isset($_POST['turn_off'])){
		//get lamp id 
		$lamp_id = $_POST['lamp_id'];
		$delete = mysqli_query($con,'DELETE FROM lamps WHERE lamp_id = "'.$lamp_id.'" ');
		if($delete){
			$_SESSION['lampID'] = $lamp_id;
			return true;
		}else{
			return false;
		}
	}
//get turn on lamps
	if(isset($_POST['get_turn_on'])){
		if (isset($_SESSION['lampID'])) {
			echo $_SESSION['lampID'];
		}else{
			return false;
		}
	}
//clear all user data 
	if(isset($_POST['clearData'])){
		session_destroy();
		return true;
	}
?>