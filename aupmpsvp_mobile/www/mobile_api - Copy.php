<?php
header('Access-Control-Allow-Origin: *'); //Should work in Cross domain ajax Calling request

//localhost
//$con = mysqli_connect("localhost","root","","aupmpsvp"); //local

//aupmpsvp.pe.hu
$con = mysqli_connect("localhost","u278393900_aupmp","AU_pmpsvp16","u278393900_aupmp"); //website

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

if(isset($_GET['type']))
{
    if($_GET['type'] == "login")
	{
		$username = $_GET['username'];
		$password = $_GET['password'];
        
		//Create Query
		$query = "Select * from tbl_basketballplayers Where username='$username' and password='$password'";
		//Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "Got Error While Logging In.";
        }
	}
        else if($_GET['type'] == "dispplayerstats")
	{
        
		$playername = $_GET['playername'];
        
		//Create Query
		$query = "Select * from tbl_basketballstatistics WHERE playername LIKE '%$playername%'";
        //Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "An Error has Occured.";
        }
	}
        else if($_GET['type'] == "dispstatsbyopponent")
	{
        
		$playername = $_GET['playername'];
		$awayteamname = $_GET['awayteamname'];
        
		//Create Query
		$query = "Select * from tbl_basketballstatistics WHERE playername LIKE '%$playername%' and awayteamname LIKE '%$awayteamname%'";
        //Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "An Error has Occured.";
        }
	}
    
}
?>