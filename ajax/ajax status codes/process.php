<?php
	if( isset($_POST['passVarOne']) || isset($_POST['passVarTwo']) ) {
		echo "Response received ... <br>";
		
		echo "Name: " . $_POST['passVarOne'];
		echo "<br>";
		echo "Email: " . $_POST['passVarTwo'];

	}
?>