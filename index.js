
// Let used when a statement might eventually change//
let a = 2
a = "Hello World"

// const used when a statement cannot be changed//
const v = 5


// Boolean- used for true or false statement//
const isStudent = true

// composite types //

//arrays- represents a list of any basic and/or complex types. eg numbers, names//

const products = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const names = ["Sam", "Eve", "Josh", "Carlos"]

// Elements- A mixture of string, numbers and booleans
const elements = [2, 3, 4, "Same", 5, "Eve", true]

// an example of Array of Arrays - two dimensional arrays//
const studentMarks = [["Megan", 2], ["Sade", 3], ["Ade", 4]]

// accessing array elements//
console.log(studentMarks[0][0])
console.log(studentMarks[0][0])

//looping is when you want to perform an action multiple times//
//for loops//
//while loops//
// for of loops//
//for in loops//
//higher other functions//

//for loops- initialization, condition and implementation// 
const n = 5
for (let index = 1; index <= 5; index++) {
    
  console.log("Hello World");  
}

// //while loop//
// let index = 19
// while (index > 0) {
//     console.log(index,"$")  
//     index-=2
// }

// // comment//
// for (let index = 12; index <= 24; index++) {
//   console.log(index);
  
// }


// const buildings = [1, 44, 12, 22, 89];
// let sum = 0;

// for (let index = 0; index < buildings.length; index++) {
//   sum = sum + buildings[index];
  

console.log("The sum is: " + sum);

const buildings = [1, 44, 12, 22, 89];

for (let index = 0; index <= buildings.length; index++) {
  console.log = (index);
  
}

// assignment- sorting and max / min, mapping using for loop, filtering using for loop//

m = 1

//sorting//
const buildings = [1, 44, 12, 22, 89];
buildings.sort(function(a, b) {return b-a});

//max//
let m = Math.max(5, 10)

//min//
let a = Math.min(6, 3)