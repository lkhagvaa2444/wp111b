8. Object-oriented programming
Object-oriented programming (OOP) is a programming paradigm that focuses on creating objects that contain both data and behavior. In PHP, you can use classes and objects to implement OOP.

Classes:
A class is a blueprint for creating objects. It defines properties and methods that the objects will have. Here's an example:

php

class Person {
    public $name;
    public $age;
    
    public function greet() {
        echo "Hello, my name is " . $this->name . ".";
    }
}

$person = new Person();
$person->name = "John";
$person->age = 25;
$person->greet(); // Hello, my name is John.
Objects:
An object is an instance of a class. You can create multiple objects from the same class, each with its own set of values for the properties. Here's an example:

perl

$person1 = new Person();
$person1->name = "John";
$person1->age = 25;

$person2 = new Person();
$person2->name = "Jane";
$person2->age = 30;

$person1->greet(); // Hello, my name is John.
$person2->greet(); // Hello, my name is Jane.
Inheritance:
Inheritance is a way to create a new class based on an existing class. The new class, called the subclass, inherits the properties and methods of the existing class, called the superclass. Here's an example:

php

class Animal {
    public $name;
    
    public function speak() {
        echo "The animal makes a sound.";
    }
}

class Dog extends Animal {
    public function speak() {
        echo "The dog barks.";
    }
}

$animal = new Animal();
$animal->speak(); // The animal makes a sound.

$dog = new Dog();
$dog->speak(); // The dog barks.