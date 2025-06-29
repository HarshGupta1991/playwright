class Car{
    //Attributes
    model;
    price;
    //methods 
    //Default constructor
//    constructor(){
//     console.log("Car constructor")
//    }
   //parameterized constructor
   constructor(model){
    console.log("model ="+model);
   }
   start(){
    console.log("Car starts")
   }
}
new Car();
//Two Types of constructor
//a. default constructor
//b. parameterized constructor