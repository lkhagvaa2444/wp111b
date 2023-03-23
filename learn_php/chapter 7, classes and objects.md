7. Classes and objects
Classes and objects are used to organize code and data into reusable structures. Here's an example of a class:

php

class Person {
    public $name;
    public $age;

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function greet() {
        echo "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.";
    }
}

$person = new Person("John", 25);
$person->greet(); // Hello, my name is John and I am 25 years old.
In this example, we defined a class called Person with a constructor that takes a name and age, as well as a method called greet() that prints a greeting. We then created a new object of the Person class and called the greet() method on it.