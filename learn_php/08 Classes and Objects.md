# Object-oriented programming

In PHP, you can define classes and objects to encapsulate related data and functions. This allows you to organize your code more effectively and can make it easier to maintain and modify.

## Defining Classes

To define a class in PHP, you use the `class` keyword followed by the name of the class and a set of curly braces. Within the curly braces, you define the properties and methods of the class:

```php
class MyClass {
    // properties
    public $property1;
    private $property2;

    // methods
    public function myMethod() {
        // method code here
    }
    private function myPrivateMethod() {
        // private method code here
    }
}
```

In the example above, we define a class called `MyClass` with two properties (`$property1` and `$property2`) and two methods (`myMethod()` and `myPrivateMethod()`). Note that we use the `public` and `private` keywords to specify the visibility of the properties and methods.

## Creating Objects

Once you have defined a class, you can create objects (also called instances) of that class using the `new` keyword:

```php
$obj = new MyClass();
```

This creates a new object of the `MyClass` class and assigns it to the `$obj` variable.

## Accessing Properties and Methods

You can access the properties and methods of an object using the arrow operator (`->`). For example:

```php
$obj = new MyClass();
$obj->property1 = "Hello";
echo $obj->property1; // outputs "Hello"
$obj->myMethod(); // calls the myMethod() method
```

In this example, we create a new object of the `MyClass` class and assign it to the `$obj` variable. We then set the value of the `$property1` property to "Hello" and output its value using `echo`. Finally, we call the `myMethod()` method on the object.

Note that we can only access `public` properties and methods from outside the class. `private` properties and methods can only be accessed from within the class itself.

## Constructors and Destructors

Constructors and destructors are special methods that are automatically called when an object is created or destroyed, respectively. To define a constructor or destructor, you use the `__construct()` and `__destruct()` methods, respectively:

```php
class MyClass {
    public function __construct() {
        // constructor code here
    }
    public function __destruct() {
        // destructor code here
    }
}
```

In this example, we define a constructor that is called when a new object of the `MyClass` class is created, and a destructor that is called when the object is destroyed (usually when the script finishes executing).

## Inheritance

Inheritance is a powerful feature of object-oriented programming that allows you to create new classes based on existing ones. The new class (called the subclass or derived class) inherits the properties and methods of the existing class (called the superclass or base class), and can also add its own properties and methods.

To define a subclass, you use the `extends` keyword followed by the name of the superclass:

```php
class MySubclass extends MyClass {
    // additional properties and methods
}
```

In this example, we define a subclass called `MySubclass` that extends the `MyClass` class. The `MySubclass` class inherits all the properties and methods of the `MyClass` class, and can also define its own properties and methods.

## Overriding Methods

When you define a method in a subclass that has the same name as a method in the superclass, the subclass method overrides the superclass method. This is known as method overriding.

Here's an example to demonstrate method overriding:

```php
class Vehicle {
  public function drive() {
    echo "Driving a vehicle";
  }
}

class Car extends Vehicle {
  public function drive() {
    echo "Driving a car";
  }
}

$vehicle = new Vehicle();
$vehicle->drive(); // outputs "Driving a vehicle"

$car = new Car();
$car->drive(); // outputs "Driving a car"
```

In this example, we have two classes: `Vehicle` and `Car`. The `Car` class extends the `Vehicle` class and overrides the `drive()` method. When we create a new `Vehicle` object and call the `drive()` method, it outputs "Driving a vehicle". However, when we create a new `Car` object and call the `drive()` method, it outputs "Driving a car", because the `Car` class overrides the `drive()` method.

### Access Modifiers

Access modifiers are keywords that determine the visibility and accessibility of properties and methods within a class. PHP supports three access modifiers:

- `public`: A public property or method can be accessed from anywhere, both inside and outside the class.
- `protected`: A protected property or method can only be accessed from within the class or its subclasses.
- `private`: A private property or method can only be accessed from within the class itself.

Here's an example to demonstrate access modifiers:

```php
class Person {
  public $name;
  protected $age;
  private $password;

  public function __construct($name, $age, $password) {
    $this->name = $name;
    $this->age = $age;
    $this->password = $password;
  }

  public function greet() {
    echo "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.";
  }

  protected function getAge() {
    return $this->age;
  }

  private function getPassword() {
    return $this->password;
  }
}

class Employee extends Person {
  public function getAge() {
    return "The employee's age is " . $this->age;
  }

  public function getPassword() {
    return "Access denied";
  }
}

$person = new Person("John", 30, "123456");
$person->greet(); // outputs "Hello, my name is John and I am 30 years old."
echo $person->name; // outputs "John"
echo $person->age; // results in a fatal error because $age is protected
echo $person->password; // results in a fatal error because $password is private

$employee = new Employee("Jane", 25, "abcdef");
echo $employee->getAge(); // outputs "The employee's age is 25"
echo $employee->getPassword(); // outputs "Access denied"
```

In this example, we have a `Person` class with three properties: `name`, `age`, and `password`. `name` is public, `age` is protected, and `password` is private. The class also has a `greet()` method, which is public, and two helper methods: `getAge()`, which is protected, and `getPassword()`, which is private.

We also have an `Employee` class that extends the `Person` class. The `Employee` class overrides the `getAge()` method and the `getPassword()` method. The `getAge()` method returns a string that includes the age of the employee, and the `getPassword()` method returns "Access denied".

When we create a new `Person` object, we cannot call the `getSalary()` method on it because the `Person` class does not have that method. However, when we create a new `Employee` object, we can call both the `getSalary()` method and the `getAge()` method because the `Employee` class inherits the `getSalary()` method from the `Person` class and overrides the `getAge()` method.

Here is an example of how we can use the `Person` and `Employee` classes:

```php
class Person {
    protected $name;
    protected $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }
}

class Employee extends Person {
    protected $salary;
    protected $password;

    public function __construct($name, $age, $salary, $password) {
        parent::__construct($name, $age);
        $this->salary = $salary;
        $this->password = $password;
    }

    public function getSalary() {
        return $this->salary;
    }

    public function getPassword() {
        return "Access denied";
    }

    public function getAge() {
        return $this->getName() . " is " . $this->age . " years old";
    }
}

$person = new Person("John Doe", 30);
echo $person->getName(); // "John Doe"
echo $person->getAge(); // "30"

$employee = new Employee("Jane Smith", 25, 50000, "password");
echo $employee->getName(); // "Jane Smith"
echo $employee->getSalary(); // 50000
echo $employee->getPassword(); // "Access denied"
echo $employee->getAge(); // "Jane Smith is 25 years old"
```

In this example, we create a `Person` object with the name "John Doe" and age 30. We can call the `getName()` and `getAge()` methods on this object.

We also create an `Employee` object with the name "Jane Smith", age 25, salary 50000, and password "password". We can call the `getName()` method on this object to get "Jane Smith", the `getSalary()` method to get 50000, the `getPassword()` method to get "Access denied", and the `getAge()` method to get "Jane Smith is 25 years old".