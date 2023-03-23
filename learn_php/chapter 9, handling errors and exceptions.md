9. Handling errors and exceptions
PHP provides built-in functions for handling errors and exceptions. You can use these functions to debug your code and handle errors gracefully.

Error handling:
You can use the error_reporting function to set the level of error reporting for your script. Here's an example:

scss

error_reporting(E_ALL); // report all errors

$undefined_variable = 123; // this will generate a notice error
You can also use the try, catch, and finally statements to handle errors and exceptions:

php

try {
    // some code that might throw an exception
} catch (Exception $e) {
    // handle the exception
} finally {
    // code that should be executed regardless of whether an exception was thrown
}