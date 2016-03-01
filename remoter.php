<!DOCTYPE html>
<html>
<head>
	<title>Welcome to lamp management</title>
	<!-- embed style css  -->
	<link rel="stylesheet" type="text/css" href="assets/css/manage_lamp.css">
</head>
<body>
<?php 
	include_once("config/connection.php");
	$num_turn_on_lamp[] = array();
	$get_turn_on_lamps = mysqli_query($con,'SELECT lamp_id FROM lamps');
	while ($row = mysqli_fetch_array($get_turn_on_lamps)) {
		$num_turn_on_lamp[] = $row['lamp_id'];
	}
?>

	<div class="lamp-box">
		<div class="cube-switch <?php echo in_array("1", $num_turn_on_lamp)?'active':''; ?>" id="1">
	        <span class="switch">
	            <span class="switch-state off">Off</span>
	            <span class="switch-state on">On</span>
	        </span>
		</div>

		<div class="light-cover">
			<div class="light" style="opacity: <?php echo in_array("1", $num_turn_on_lamp)?'1':'0'; ?>;"></div>
		</div>
	</div>
</body>
<!-- jquery library -->
	<script type="text/javascript" src="assets/js/jquery-1.12.1.min.js"></script>
<!-- function to turn-in turn-off -->
	<script type="text/javascript" src="assets/js/remoter.js"></script>
</html>