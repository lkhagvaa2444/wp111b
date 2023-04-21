# PHP and Databases

Databases are an essential part of most web applications. They allow you to store and retrieve data in an organized and efficient way. PHP has built-in functions and extensions that allow you to connect to a database, execute queries, and fetch data.

In this guide, we will cover the basics of using PHP with databases, including connecting to a database, executing queries, fetching data, and using prepared statements.

## Connecting to a Database

Before you can use a database with PHP, you need to establish a connection to the database. PHP supports a variety of database management systems, including MySQL, PostgreSQL, and SQLite.

To connect to a database, you need to provide the connection parameters such as the host, username, password, and database name. Here is an example of connecting to a MySQL database using the `mysqli_connect()` function:

```php
$host = "localhost";
$username = "myusername";
$password = "mypassword";
$database = "mydatabase";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
```

In this example, we provided the `mysqli_connect()` function with the host, username, password, and database name. The function returns a connection object that we can use to execute queries.

If the connection fails, we use the `die()` function to terminate the script and print an error message. If the connection is successful, we print a success message.

## Executing Queries

Once you have established a connection to the database, you can execute queries to retrieve, insert, update, or delete data. PHP provides several functions for executing queries, including `mysqli_query()`, `mysqli_fetch_assoc()`, and `mysqli_num_rows()`.

Here is an example of executing a select query using the `mysqli_query()` function and fetching the results using the `mysqli_fetch_assoc()` function:

```php
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No results";
}
```

In this example, we executed a select query to retrieve all the rows from the `users` table. We then used the `mysqli_num_rows()` function to check if the query returned any results. If the query returned results, we used a while loop and the `mysqli_fetch_assoc()` function to fetch each row as an associative array.

We then printed the name and email of each user. If the query returned no results, we printed a message indicating that there were no results.

## Prepared Statements

Prepared statements are a way of executing SQL queries that allows you to separate the query and the data. This can help prevent SQL injection attacks and improve performance. PHP provides the `mysqli_prepare()` function for preparing SQL statements.

Here is an example of using a prepared statement to insert data into a table:

```php
$name = "John";
$email = "john@example.com";
$age = 30;

$stmt = mysqli_prepare($conn, "INSERT INTO users (name, email, age) VALUES (?, ?, ?)");
mysqli_stmt_bind_param($stmt, "ssi", $name, $email, $age);
mysqli_stmt_execute($stmt);

echo "Data inserted successfully";
```

In this example, we prepared an insert statement with three placeholders (`?`) for the name, email, and age fields. We then used the `mysqli_stmt_bind_param()` function to bind the values. We then used the `mysqli_stmt_bind_param()` function to bind the values to the placeholders in the statement. The first argument of the function is the statement object, followed by a string containing the data types of the values being bound, and then the values themselves.

```php
$name = "John";
$email = "john@example.com";
$age = 30;

$stmt = mysqli_prepare($conn, "INSERT INTO users (name, email, age) VALUES (?, ?, ?)");

mysqli_stmt_bind_param($stmt, "ssi", $name, $email, $age);

mysqli_stmt_execute($stmt);

mysqli_stmt_close($stmt);
mysqli_close($conn);
```

In this example, we bound the values `$name`, `$email`, and `$age` to the placeholders in the insert statement. The string `"ssi"` passed as the second argument to `mysqli_stmt_bind_param()` specifies that the first two placeholders should be bound to strings and the third placeholder should be bound to an integer.

We then executed the statement using `mysqli_stmt_execute()` and closed the statement and connection using `mysqli_stmt_close()` and `mysqli_close()` respectively.

### Fetching Data

After executing a query that selects data from a database, we can fetch the resulting data using one of several functions provided by PHP's MySQLi extension. The `mysqli_fetch_array()`, `mysqli_fetch_assoc()`, and `mysqli_fetch_object()` functions are commonly used for this purpose.

```php
$stmt = mysqli_prepare($conn, "SELECT name, email, age FROM users WHERE id = ?");
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);

mysqli_stmt_bind_result($stmt, $name, $email, $age);

if(mysqli_stmt_fetch($stmt)) {
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Age: $age<br>";
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
```

In this example, we prepared a select statement with a placeholder (`?`) for the id field. We then bound the value of `$id` to the placeholder using `mysqli_stmt_bind_param()` and executed the statement using `mysqli_stmt_execute()`.

We then bound the resulting columns of the query to variables using `mysqli_stmt_bind_result()` and fetched the first row of data using `mysqli_stmt_fetch()`. If there are no more rows, `mysqli_stmt_fetch()` will return `false`. We then displayed the fetched data using `echo`.

### Prepared Statements

Prepared statements provide a way to execute SQL queries more securely by allowing you to separate the query logic from the user-supplied data. Prepared statements also offer performance benefits by reducing the need for the database to re-parse the query each time it is executed.

To use prepared statements in PHP's MySQLi extension, we use the `mysqli_prepare()` function to create a prepared statement, and then bind the values to the placeholders in the statement using `mysqli_stmt_bind_param()`. We then execute the statement using `mysqli_stmt_execute()`.

```php
$name = "John";
$email = "john@example.com";
$age = 30;

$stmt = mysqli_prepare($conn, "INSERT INTO users (name, email, age) VALUES (?, ?, ?)");

mysqli_stmt_bind_param($stmt, "ssi", $name, $email, $age);

mysqli_stmt_execute($stmt);

mysqli_stmt_close($stmt);
mysqli_close($conn);
```

In this example, we prepared an insert statement with three placeholders (`?`) for the name, email, and age fields. We then used the `mysqli_stmt_bind_param()` function to bind the values to the placeholders in the statement. The first argument of the function is the statement object, followed by a string containing the data types of the values being bound, and then the values themselves.

Next, we executed the statement using the mysqli_stmt_execute() function, which returns a boolean indicating whether the statement was executed successfully.

If the statement was executed successfully, we can retrieve the last inserted id using the mysqli_insert_id() function. This function takes the database connection object as its only argument and returns the id of the last inserted row in the database.

Here's the full code for inserting a new row into a MySQL database using prepared statements in PHP:

```php
<?php
// Connect to the database
$host = 'localhost';
$user = 'username';
$password = 'password';
$database = 'dbname';
$mysqli = new mysqli($host, $user, $password, $database);

// Prepare the statement
$stmt = $mysqli->prepare("INSERT INTO users (name, email, age) VALUES (?, ?, ?)");

// Bind the parameters
$stmt->bind_param("ssi", $name, $email, $age);

// Set the parameters
$name = "John Doe";
$email = "johndoe@example.com";
$age = 25;

// Execute the statement
if ($stmt->execute()) {
    // Get the last inserted id
    $last_id = $mysqli->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and the database connection
$stmt->close();
$mysqli->close();
?>
```

This is just a basic example, but it should give you an idea of how to use prepared statements to insert data into a MySQL database using PHP.