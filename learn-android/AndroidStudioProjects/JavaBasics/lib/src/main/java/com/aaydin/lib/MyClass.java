package com.aaydin.lib;

// import package.name.Class - how to import a single class
// import package.name.* - how to import to whole package

import com.aaydin.lib.ahmetPack.Car; // user defined package

import java.util.Scanner;


public class MyClass {

    public static void main(String[] args){
        // VARIABLES
        int age = 25;

        age = 30;

        // JAVA DATA TYPES
            // byte: -128 --> 127
        byte x = 100;
            // short: -32,768 --> 32,767
        short y = 777;
            // int: -2147483658 --> 2147483647
        int z = 88776655;

        long w = 1122334455677L;

        // -----------------------

        float pi = 3.14F;
        double pi2 = 3.14159;


        // -----------------------

        boolean isTrue = true;
        boolean isFalse = false;

        // -----------------------
        char myChar = 'A';
        char myNumber = '7';
        // A char value must be surrounded by single quotes, like 'A' or 'c'.
        char mySymbol = '$';
        char newLine = '\n';
        char tab = '\t';

        // -----------------------

        // Implicit
            int numInt = 10;
            double numDouble = numInt;


        // Explicit
        double pii = 3.14;
        int numPI = (int) pii;

        // Type Casting between different data types:
        int myInt = 5;
        char myCharTwo = (char) (myInt + 'A');
        System.out.print(myCharTwo);

        // Operators
        // 1 + 2, 1*4, 1/5, 10%2,
        // == != > < >= <=
        // && || !

        // Strings
        String sayHello = "Hello myFriends";
        int length = sayHello.length();

        // Conditional Statements
        int ageOfHim = 19;

        if (ageOfHim > 19){
            String result = "You're old";
        } else { // also else if can be used
            String result = "Just joking";
        }

        // ! There are also switch, while, for, break & continue, arrays,forEach but I SKIPPED THAT PART
        // bcs I am already familiar with them

        // calling other classes
        Car c1  = new Car("Red", 2030);
        // accessing: c1.color
        // modifying: c1.color = "Green";
        // calling method: c1.drive();
        // bcs it is final it cannot be modified : c1.PI = 6.7;
        //bcs it is static method it can be directly called from the class itself Car.pressHorn();


        // ENCAPSULATION
        //encapsulation means sensitive data is hidden from users
        /*
        to achieve this declare vars as private and provide public get and set methods
        to access and update them
        */

        /*
        * c1.setColor("Red")
        * c1.getColor()
        */


        // Packages and API
        /*
        * Packages are divided into two categories
        * 1- Built in Packages (packages from the JAVA API)
        * 2- User-defined Packages (create your own package)
        */

        Scanner scanner = new Scanner(System.in);
        String userName = scanner.nextLine();

         // System.out.println("Hello " + userName);

        // java has filesystem for user defined packages
    }

    // OBJECT ORIENTED PROGRAMMING

    // methods
    public static void sayHello(String name, int age){
        String myGreeting = "Hello";
        // I can use this method inside my main method
        // usage: sayHello(name: "Jack", age:23)
    }

    /* method overloading
    Method overloading in java is a feature that allows a class to have more than one method with
    the same name, but with different parameters.
    */

    // Modifiers
    /*
    Public: the public keyword is an access modifier, meaning that it is used to set the access
    level for classes, attributes, methods and constructors.

    We divide modifiers into two groups:
    - Access Modifiers - controls the access level
    - Non-Access modifiers - do not control the access level, but provides other functionality
    */

    // for Classes : public or default
    // public means this class is accessible by another class
    // default means it is only accessible by classes in the same package

    // for Attributes : methods and constructors :
    // public (all classes)
    // private (only within the declared class),
    // default (in the same package) ,
    // protected(in the same package and subclasses)

    // Non-Access Modifiers
        // for classes : final(it cannot be inherited) or abstract(cannot be used to create object)
        // for attributes :  final(cannot be overridden or modify),
        // static(attr and meths belongs to same class rather than object),
        // abstract(can only be used in abstract class and method, no body methods),
        // transient(Serialization is the process of converting an object into a byte stream, and
        // de-serialization is the opposite of it.
        //when we mark any variable as transient, then that variable is not serialized ),
        // synchronized(synchronized becomes a synchronized block, allowing only one thread
        // to execute at any given time.),
        // volatile(not cached thread locally and always read from main memory )

}



