// Variables  - Storage - Which stores either a single value or multiple values

// Variable Declaration:

// Syntax:
// let|const|var variableName: dataType(optional) = value;

var i :number = 10 // Type Annotation
let j = true // Type Inference
const k :string = "Hello"

/*

1. var - In modern JS/TS we do not use var keyword to declare a variable
2. let - Whenever we want to declare a variable whose value can be changed later
3. const - Which is use to decaclare a constant variable - value cannot be changed later

*/

// before 2015 - var - ES6 - ECMA SCRIPT 6 (2015) - let and const

let i1 = 10
i1 = 500

const i2 = 10
// i2 = 500 // Error - Cannot assign to 'i2' because it is a constant.

// var - By using var keyword, we can declare a variable multiple times

var i3 = 10
var i3 = 100
var i3 = 1000 // Re-declaration
i3 = 7000 // Re-initialization
console.log(i3); 


// let and const - We cannot declare a variable multiple times using let and const

let i4 = 10
// let i4 = 100  - Cannot redeclare block-scoped variable 'i4'.

// Var:

// Scope - Global Scope or Functional scope
// We can declare same variable multiple times and you can also reinitialize the variable
// It is not mandatory to assign the value of the variable at the time of declaration

let i5; // Declaration of a variable
i5 = 90

let i6 =100 // Declaration and Initialization



// Scope of varaible 
// 1. Global scope - Variable declared outside of a block of code {...}



{
 const ls = "I am a local variable"
    console.log(ls)
    console.log(i4)
}

//  console.log(ls)


// Var:

// Scope - Global Scope or Functional scope
// We can declare same variable multiple times and you can also reinitialize the variable
// It is not mandatory to assign the value of the variable at the time of declaration


// let 
// Scope - Block Scope {...}
// We cannot declare same variable multiple times and you can also reinitialize the variable
// It is not mandatory to assign the value of the variable at the time of declaration

let j1;
j1 = 100

// let j1 = 500

// const
// Scope - Block Scope {...}
// We cannot declare same variable multiple times and we cannot reinitialize the variable
// It is mandatory to assign the value of the variable at the time of declaration

const l = 10
// l =90



// Var:
// Scope - Global Scope or Functional scope
// We can declare same variable multiple times and you can also reinitialize the variable
// It is not mandatory to assign the value of the variable at the time of declaration


// let 
// Scope - Block Scope {...} or Global scope
// We cannot declare same variable multiple times and you can also reinitialize the variable
// It is not mandatory to assign the value of the variable at the time of declaration


// const
// Scope - Block Scope {...} or Global scope
// We cannot declare same variable multiple times and we cannot reinitialize the variable
// It is mandatory to assign the value of the variable at the time of declaration

// What is dfifference between var, let and const?


