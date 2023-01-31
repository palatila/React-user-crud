<?php 
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username)
	&& isset($data->useremail) 
	&& isset($data->userpwd) 
	&& !empty(trim($data->username))
	&& !empty(trim($data->useremail))
	&& !empty(trim($data->userpwd))
	){
		
	$username = mysqli_real_escape_string($db_conn, trim($data->username));
	$useremail = mysqli_real_escape_string($db_conn, trim($data->useremail));
	$useremail = mysqli_real_escape_string($db_conn, trim($data->useremail));
	$userpwd = mysqli_real_escape_string($db_conn, trim($data->userpwd));
	$date = date('Y-m-d');

	$add = mysqli_query($db_conn,"insert into users (name,email,pwd,date) values('$username','$useremail','$userpwd','$date')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>