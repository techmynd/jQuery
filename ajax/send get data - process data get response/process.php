<?php
	if( isset($_GET['passVarOne']) || isset($_GET['passVarTwo']) ) {
		echo "Response received ... <br>";
		
		echo "Name: " . $_GET['passVarOne'];
		echo "<br>";
		echo "Email: " . $_GET['passVarTwo'];
		
	}
?>