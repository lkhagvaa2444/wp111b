4. Control structures
Control structures are used to control the flow of a program. In PHP, there are several control structures, including if statements, switch statements, for loops, while loops, and foreach loops.

If statements:
If statements are used to execute code if a certain condition is true. Here's an example:

bash

$age = 25;

if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
Switch statements:
Switch statements are used to execute different blocks of code depending on the value of a variable. Here's an example:

php

$fruit = "apple";

switch ($fruit) {
    case "apple":
        echo "The fruit is an apple.";
        break;
    case "banana":
        echo "The fruit is a banana.";
        break;
    case "orange":
        echo "The fruit is an orange.";
        break;
    default:
        echo "The fruit is unknown.";
}
For loops:
For loops are used to execute code a certain number of times. Here's an example:

bash

for ($i = 0; $i < 10; $i++) {
    echo $i . "<br>";
}
While loops:
While loops are used to execute code while a certain condition is true. Here's an example:

bash

$i = 0;

while ($i < 10) {
    echo $i . "<br>";
    $i++;
}
Foreach loops:
Foreach loops are used to iterate over an array. Here's an example:

php

$fruits = array("apple", "banana", "orange");

foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}