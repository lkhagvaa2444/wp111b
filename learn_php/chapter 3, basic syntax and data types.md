3. Basic syntax and data types
Now that you have set up your development environment, it's time to start learning PHP. Let's begin with the basics.

Variables:
A variable is a container that holds a value. In PHP, you declare a variable using the dollar sign ($), followed by the variable name. Here's an example:

bash

$name = "John";
Constants:
A constant is a value that cannot be changed during the execution of a script. In PHP, you define a constant using the define() function. Here's an example:

makefile

define("PI", 3.14);
Data types:
PHP supports several data types, including strings, integers, floats, booleans, and arrays. Here's an example of each:

php

$name = "John"; // string
$age = 30; // integer
$height = 1.75; // float
$is_student = true; // boolean
$fruits = array("apple", "banana", "orange"); // array
Operators:
PHP supports several operators, including arithmetic, assignment, comparison, logical, and string operators. Here's an example of each:

perl

$x = 10;
$y = 20;

// arithmetic operators
echo $x + $y; // 30
echo $x - $y; // -10
echo $x * $y; // 200
echo $x / $y; // 0.5
echo $x % $y; // 10

// assignment operators
$x += $y; // equivalent to $x = $x + $y;
$x -= $y; // equivalent to $x = $x - $y;
$x *= $y; // equivalent to $x = $
$x * $y; // equivalent to $x = $x * $y;
$x /= $y; // equivalent to $x = $x / $y;
$x %= $y; // equivalent to $x = $x % $y;

// comparison operators
echo $x == $y; // false
echo $x != $y; // true
echo $x > $y; // false
echo $x < $y; // true
echo $x >= $y; // false
echo $x <= $y; // true

// logical operators
$has_car = true;
$has_bike = false;

echo $has_car && $has_bike; // false
echo $has_car || $has_bike; // true
echo !$has_car; // false

// string operators
$name = "John";
$last_name = "Doe";
echo $name . " " . $last_name; // John Doe
$name .= " " . $last_name; // equivalent to $name = $name . " " . $last_name;