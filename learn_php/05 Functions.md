# Functions

Functions are blocks of code that perform a specific task. They can be called multiple times throughout your code, allowing you to reuse the same code without duplicating it. In this section, we'll cover the basics of creating and using functions in PHP.

## Creating Functions

To create a function in PHP, you use the `function` keyword followed by the name of the function and parentheses. The code for the function goes inside curly braces `{}`.

```php
function hello() {
    echo "Hello, world!";
}
```

In the example above, we've created a function called `hello` that simply outputs the text "Hello, world!". Note that the function doesn't actually execute until it is called.

## Calling Functions

To call a function, you simply use the name of the function followed by parentheses.

```php
hello(); // Outputs "Hello, world!"
```

## Function Arguments

Functions can accept one or more arguments. Arguments are variables that are passed to the function and used within the function's code. You specify the arguments inside the parentheses when defining the function.

```php
function greet($name) {
    echo "Hello, $name!";
}
```

In the example above, we've created a function called `greet` that accepts one argument `$name`. When the function is called, the value of `$name` will be replaced with the argument passed in.

```php
greet("John"); // Outputs "Hello, John!"
greet("Jane"); // Outputs "Hello, Jane!"
```

## Returning Values

Functions can also return values using the `return` keyword. When a function returns a value, it can be assigned to a variable or used in an expression.

```php
function add($num1, $num2) {
    $result = $num1 + $num2;
    return $result;
}

$total = add(5, 10); // Returns 15 and assigns it to the $total variable.
echo $total; // Outputs 15
```

## Built-in Functions

PHP comes with many built-in functions that perform common tasks. These functions can be used by simply calling their name and passing in any necessary arguments. Here are a few examples:

```php
// Outputs the length of a string
echo strlen("Hello, world!"); // Outputs 13

// Returns the current date and time
echo date("F j, Y, g:i a"); // Outputs something like "April 21, 2023, 3:27 pm"
```

## Conclusion

Functions are a powerful tool in PHP that allow you to write reusable code and make your programs more modular. By understanding how to create, call, and use functions, you can write more efficient and maintainable code.