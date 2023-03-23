6. Arrays
Arrays are used to store multiple values in a single variable. In PHP, there are two types of arrays: indexed arrays and associative arrays.

Indexed arrays:
Indexed arrays are arrays where each value is assigned a numeric index starting from 0. Here's an example:

php

$fruits = array("apple", "banana", "orange");
echo $fruits[1]; // banana
You can also add values to an indexed array using the [] operator:

php

$fruits[] = "kiwi";
echo $fruits[3]; // kiwi
Associative arrays:
Associative arrays are arrays where each value is assigned a key. Here's an example:

php

$person = array("name" => "John", "age" => 25);
echo $person["name"]; // John
You can also add values to an associative array using the key:

php

$person["city"] = "New York";
echo $person["city"]; // New York