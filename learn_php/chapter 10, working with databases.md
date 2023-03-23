10. Working with databases
PHP provides built-in functions for connecting to and working with databases. Here's an example of connecting to a MySQL database:

php

$host = "localhost";
$username = "username";
$password = "password";
$database = "database";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// some code to execute queries and fetch data from the database

mysqli_close($conn);
You can use the mysqli_query function to execute SQL queries and the mysqli_fetch_assoc function to fetch data from the database:

bash

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row["name"] . "<br>";
}