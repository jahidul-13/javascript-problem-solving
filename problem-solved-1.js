 // 1.Create a variable called carName, assign the value Volvo to it.

 // 1.Answer 
 
 let carName = "volvo";

 console.log(carName);


 // 2.On one single line, declare three variables with the following names and values.

 // 2.Answer


   firstName = "Jahidul"
    lastName = "Islam"
    age = 21
 
   //  let firstName = "Jahidul", lastName = "Islam", age = 21;
  


 // 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

 // 3.Answer

    x = 10;
    y = 5;
   
    x *= y;
  

 

 // 4.Use comments to describe the correct data type of the following variables:
 
 // 4.Answer

 let length = 16; // data type :-number

 console.log(typeof length);

 let lastName = "Johnson"; // data type :- string
 
 console.log(typeof lastName);


 const x = {
    firstName: "John",  
    lastName: "Doe"
  };    // data type :- object

  console.log(typeof x);

  // 5.Execute the function named myFunction.

  // 5. Answer
   
 function myFunction() {
    alert("Hello World!");
  }



  myFunction();



 // 6.Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

 //6.Answer


 const person ={
   name : "John" , age : 50
    };
 
  alert(person.name+" is "+ person.age)
 


 // 7. The <button> element should do something when someone clicks on it. Try to fix it!
 
 //7.Answer

 <button onclick="alert('Welcome')">Click me.</button>


 // 8.Array Related Question  

 // 8.Answer

 //1. Alert the number of items in an array, using the correct Array property: 

 const cars = ["Volvo", "Jeep", "Mercedes"];

 alert(cars.length); // 3

 //2. Change the first item of Brand to "Ford".

 const Brand = ["Volvo", "Jeep", "Mercedes"]; 
 Brand[0]="Ford";

 console.log(Brand);


 //9.Math Related Problems

 //9.Answer

 //1. Use the correct Math method to create a random number.

 let a = Math.random();

 console.log(a);

 //2. Use the correct Math method to return the largest number of 10 and 20.

 let y = Math.max(10, 20);

 console.log(y);

 //3. Use the correct Math method to get the square root of 9.

 let z = Math.sqrt(9);

 console.log(z);



 //10.comparison operator related problems! 

 //10.Answer

 //1. Choose the correct comparison operator to alert true, when x is greater than y. 
 
 let x = 10;
 let y = 5;

 alert(x > y); // true.

 //2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

 let age = 17;
 let x = (age < 18) ? "Too young" : "Old enough";

 alert(x);
