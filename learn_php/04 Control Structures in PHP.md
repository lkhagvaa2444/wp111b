# Control Structures in PHP

Control structures are an essential part of any programming language. In PHP, control structures are used to control the flow of execution in a program. 

## If statements

If statements are used to perform a particular action based on a condition. The basic syntax of an if statement is as follows:

```php
if (condition) {
  // Code to be executed if the condition is true
}
```

Here is an example of an if statement that checks if a number is even or odd:

```php
$num = 4;

if ($num % 2 == 0) {
  echo "The number is even.";
} else {
  echo "The number is odd.";
}
```

## Switch statements

Switch statements are used to perform different actions based on different conditions. The basic syntax of a switch statement is as follows:

```php
switch (expression) {
  case value1:
    // Code to be executed if expression is equal to value1
    break;
  case value2:
    // Code to be executed if expression is equal to value2
    break;
  default:
    // Code to be executed if expression doesn't match any of the above cases
}
```

Here is an example of a switch statement that prints a message based on the day of the week:

```php
$day = "Monday";

switch ($day) {
  case "Monday":
    echo "Today is Monday.";
    break;
  case "Tuesday":
    echo "Today is Tuesday.";
    break;
  case "Wednesday":
    echo "Today is Wednesday.";
    break;
  default:
    echo "Today is a weekend day.";
}
```

## Loops

Loops are used to execute a block of code multiple times. PHP supports four types of loops: for, while, do-while, and foreach.

### For Loop

A for loop is used to execute a block of code for a specific number of times. It takes three expressions, separated by semicolons, as parameters: initialization, condition, and increment. Here is an example of a for loop that counts from 1 to 10:

```php
for ($i = 1; $i <= 10; $i++) {
  echo $i . "<br>";
}
```

### While Loop

A while loop is used to execute a block of code as long as a particular condition is true. Here is an example of a while loop that counts from 1 to 10:

```php
$i = 1;

while ($i <= 10) {
  echo $i . "<br>";
  $i++;
}
```

### Do-While Loop

A do-while loop is used to execute a block of code at least once, and then as long as a particular condition is true. Here is an example of a do-while loop that counts from 1 to 10:

```php
$i = 1;

do {
  echo $i . "<br>";
  $i++;
} while ($i <= 10);
```

### Foreach Loop

A foreach loop is used to iterate over arrays. Here is an example of a foreach loop that prints the values of an array:

```php
$colors = array("Red", "Green", "Blue");

foreach ($colors as $color) {
  echo $color . "<br>";
}
```

## Conclusion

Control structures are essential for writing effective PHP programs. They allow you to control the flow of execution in your program based on different conditions. In this tutorial, we covered if statements, switch statements, and four different types of loops in PHP.