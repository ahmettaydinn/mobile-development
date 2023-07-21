package com.aaydin.lib.ahmetPack;

public class Car {

    // Attributes
    private int modelYear = 2023;
    public String color = "Red";

    public final double PI = 3.14;

    // Methods
    public void drive(){
        String process = "Driving";
    }

    static void pressHorn(){
            System.out.println("duuuuutt");
    }

    /*
    * getModelYear is the getter of the private attribute and it should return the value
    */

    /*
     * setModelYear is the setter of the private attribute and it should change the this.value
     * it void and takes the value as argument
     */











    // Constructor
    // constructor name match Class name and it cannot have a return type.
    public Car(String color, int modelYear){
        this.color = color;
        this.modelYear = modelYear;
        // we need to use this to avoid from name mismatching
    }

}
