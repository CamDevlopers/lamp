<?php  
	$con = mysqli_connect('localhost','root','','power');
	if(mysqli_connect_errno($con)){
		echo mysqli_connect_error($con);	
	}
?>