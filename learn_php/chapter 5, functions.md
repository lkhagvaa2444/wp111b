5. Functions
Functions are blocks of code that can be called multiple times. In PHP, you can define your own functions or use built-in functions. Here's an example of a user-defined function:

php

function greet($name) {
    echo "Hello, " . $name . "!";
}

greet("John"); // Hello, John!
PHP also has built-in functions for common tasks, such as manipulating strings and arrays. Here's an example:

php

$name = "John Doe";
$parts = explode(" ", $name);
echo $parts[0]; // John