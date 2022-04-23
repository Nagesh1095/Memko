<?php
if(isset($_POST['submit'])){
$eID = "Employee ID:".$_POST['eID']."
";
$eName = "Employee Name:".$_POST['eName']."
";
$ePhno = "Employee Phone No:".$_POST['ePhno']."
";
$eSkills = "Employee Skills:".$_POST['eSkills']."
";
$email = "Email Address:".$_POST['email']."
";
$area = "Area/Land Mark :".$_POST['area']."
";
$city = "City :".$_POST['city']."
";
$state = "State :".$_POST['state']."
";
$country = "Country :".$_POST['country']."
";
$gender = "Gender :".$_POST['gender']."
";
// $text = $eID . "," . $eName ."," . $ePhno ."," . $eSkills ."," . $email ."," . $area ."," . $city ."," 
// . $state ."," . $country ."," . $gender . "\n";
$file = fopen("E:register.txt", "a");
fwrite($file, $eID);
fwrite($file, $eName);
fwrite($file, $ePhno);
fwrite($file, $email);
fwrite($file, $eSkills);
fwrite($file, $area);
fwrite($file, $city);
fwrite($file, $state);
fwrite($file, $country);
fwrite($file, $gender);
fclose ($file);    
}
?>