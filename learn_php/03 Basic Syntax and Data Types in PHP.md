# Basic Syntax and Data Types in PHP

In this section, we'll cover the basics of PHP syntax and the different data types that are available in PHP.

## Variables

In PHP, variables are used to store data. A variable can hold different types of data, such as strings, integers, floats, and booleans. You can declare a variable in PHP using the `$` symbol, followed by the variable name.

```php
$greeting = "Hello, world!";
$age = 27;
$pi = 3.14;
$is_active = true;
```

## Constants

A constant is a value that cannot be changed during the execution of a script. In PHP, constants are declared using the `define()` function. It takes two arguments: the name of the constant, and its value.

```php
define("PI", 3.14);
define("GREETING", "Hello, world!");
```

## Data Types

PHP supports several data types, including:

- Strings: A sequence of characters enclosed in quotes.
- Integers: Whole numbers without a decimal point.
- Floats: Numbers with a decimal point.
- Booleans: Represents a true or false value.
- Arrays: A collection of values.
- Objects: Instances of classes.
- Null: A variable with no value assigned to it.

```php
$string = "Hello, world!"; // string
$integer = 42; // integer
$float = 3.14; // float
$is_active = true; // boolean

$array = array(1, 2, 3); // array
$object = new stdClass(); // object
$null = null; // null
```

## Operators

Operators are used to perform operations on variables and values. PHP supports several types of operators, including:

- Arithmetic operators: Used to perform arithmetic operations, such as addition, subtraction, multiplication, and division.
- Comparison operators: Used to compare two values and return a boolean result.
- Logical operators: Used to combine two or more conditions and return a boolean result.
- Assignment operators: Used to assign a value to a variable.

```php
$a = 10;
$b = 5;

// Arithmetic operators
$c = $a + $b; // 15
$c = $a - $b; // 5
$c = $a * $b; // 50
$c = $a / $b; // 2

// Comparison operators
$c = $a == $b; // false
$c = $a != $b; // true
$c = $a > $b; // true
$c = $a < $b; // false

// Logical operators
$c = ($a > $b) && ($a < 20); // true
$c = ($a < $b) || ($a < 20); // true

// Assignment operators
$a += $b; // $a is now 15
$a -= $b; // $a is now 10
$a *= $b; // $a is now 50
$a /= $b; // $a is now 10
```

## Conclusion

In this section, we've covered the basics of PHP syntax and the different data types that are available in PHP. We've also looked at the different operators that can be used in PHP. Now that you have a good understanding of these concepts, you can start writing your own PHP scripts.