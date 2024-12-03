 // 1.Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

 // 1.Answer

//  function celsiusToFahrenheit(celsius) {
//     return ...;
//   }
  
//   console.log(celsiusToFahrenheit(0)); // 32
//   console.log(celsiusToFahrenheit(25)); // 77
  
  
  

 //2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.
 
 //2.Answer

//  function isEven(num) {
//     return ...;
//   }
  
//   console.log(isEven(4)); // true
//   console.log(isEven(7)); // false
  
  
  //3.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum. 

  //3.Answer

  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  

 //4.Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search. 

 //4.Answer

 function findSmallestNum(arr) {
  return Math.min(...arr) ;
 }

 console.log(findSmallestNum([3, 5, 1, 9])); // 1
 console.log(findSmallestNum([-1, -5, 0, 10])); // -5


 //6.Write a function to get the first element of an array. The function should take a single argument, which is the array.
 
 //6.Answer

 function getFirstElement(arr) {
  return arr[0]; 
 }

 console.log(getFirstElement([1, 2, 3])); // 1
 console.log(getFirstElement(["a", "b", "c"])); // "a"


 //7.Write a function to check if an array is empty. The function should take a single argument, which is the array.

 //7.Answer

 function isArrayEmpty(arr) {
  return arr ==0;
 }

 console.log(isArrayEmpty([])); // true
 console.log(isArrayEmpty([1, 2, 3])); // false


 //8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.

 //8.Answer

//  function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   return ....;
// }

// console.log(factorialize(5)); // 120
// console.log(factorialize(7)); // 5040


 //10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

 //10.Answer

 function toLowerCase(str) {
  return str.toLowerCase() ;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

//11.Write a function to find the length of a string. The function should take a single argument, which is the string.

//11.Answer

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5


 //12.Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

 //12.Answer

 function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


//13.Write a function to get the last element of an array. The function should take a single argument, which is the array.

//13.Answer

function getLastElement(arr) {
  return arr[2];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"


//14.Write a function to get the first character of a string. The function should take a single argument, which is the string.

//14.Answer

function getFirstCharacter(str) {
  return str[0];
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"


//15.Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

//15.Answer

function sumArray(a,b,c,d) {
  return a+b+c+d;
}

console.log(sumArray(1, 2, 3, 4)); // 10
console.log(sumArray(-1, -2, -3, -4)); // -10
console.log(sumArray(1.5, 2.5, 3.5)); // 7.5


