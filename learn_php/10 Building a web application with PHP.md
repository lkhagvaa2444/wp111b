# Building a web application with PHP

In this guide, we will walk you through the process of building a simple web application with PHP. We will cover the following topics:

- Setting up the development environment
- Creating a basic HTML template
- Connecting to a database
- Creating a user registration system
- Implementing user authentication
- Creating a dashboard page for logged-in users

## Setting up the development environment

Before we begin, we need to set up a development environment for our web application. Here's what you'll need:

- A web server (e.g. Apache)
- PHP
- MySQL

You can download and install these components individually, or you can use a pre-packaged solution like XAMPP or MAMP.

Once you have your development environment set up, create a new directory for your project and create a new PHP file called `index.php`.

## Creating a basic HTML template

To create a basic HTML template, we will use Bootstrap. Download the latest version of Bootstrap and copy the `css` and `js` folders into your project directory. 

Open `index.php` and add the following code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Web Application</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<h1>Welcome to My Web Application</h1>
	</div>
	<script src="js/bootstrap.min.js"></script>
</body>
</html>
```

This code will display a simple HTML page with a header and a Bootstrap stylesheet.

## Connecting to a database

To connect to a MySQL database, we will use the `mysqli` extension. Open `index.php` and add the following code:

```php
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
```

This code creates a new connection to a MySQL database. You will need to replace the `$servername`, `$username`, `$password`, and `$dbname` variables with your own values.

Creating a user registration system
To create a user registration system, we will create a new PHP file called register.php. This file will display a registration form and handle form submissions.

Creating the registration form
In register.php, we will first create an HTML form to collect the user's information. Here's an example of what the form might look like:

html
Copy code
<!DOCTYPE html>
<html>
<head>
	<title>User Registration Form</title>
</head>
<body>
	<div class="wrapper">
		<h2>Sign Up</h2>
		<p>Please fill this form to create an account.</p>
		<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
			<div>
				<label>Username</label>
				<input type="text" name="username" value="<?php echo $username; ?>">
				<span><?php echo $username_err; ?></span>
			</div>    
			<div>
				<label>Password</label>
				<input type="password" name="password" value="<?php echo $password; ?>">
				<span><?php echo $password_err; ?></span>
			</div>
			<div>
				<label>Confirm Password</label>
				<input type="password" name="confirm_password" value="<?php echo $confirm_password; ?>">
				<span><?php echo $confirm_password_err; ?></span>
			</div>
			<div>
				<input type="submit" value="Submit">
				<input type="reset" value="Reset">
			</div>
			<p>Already have an account? <a href="login.php">Login here</a>.</p>
		</form>
	</div>    
</body>
</html>
The form contains three input fields for the username, password, and confirm password, along with submit and reset buttons. The action attribute in the form tag specifies the URL where the form data will be sent when the user submits the form. In this case, we are using the htmlspecialchars() function to sanitize the data and prevent XSS attacks.

Handling form submissions
After the user submits the form, the data will be sent to register.php. We will need to validate the input and add the user to the database. Here's an example of how we might handle the form submissions:

```php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // retrieve the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // validate the form data
    if (empty($name)) {
        $errors[] = "Name is required";
    }

    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    if (empty($password)) {
        $errors[] = "Password is required";
    } elseif (strlen($password) < 6) {
        $errors[] = "Password must be at least 6 characters";
    }

    // if there are no errors, add the user to the database
    if (empty($errors)) {
        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $name, $email, $password);
        $stmt->execute();

        // redirect to the login page
        header("Location: login.php");
        exit();
    }
}
```

In this code, we first check if the request method is POST, which indicates that the form has been submitted. We then retrieve the form data using the $_POST superglobal array.

Next, we validate the form data. If there are any errors, we add them to an errors array.

If there are no errors, we prepare an SQL statement to insert the user data into the database. We use prepared statements to prevent SQL injection attacks. We then bind the form data to the placeholders in the SQL statement and execute the statement.

Finally, we redirect the user to the login page.

Note that this is a simplified example and you should perform additional validation and sanitization on the user input before inserting it into the database.