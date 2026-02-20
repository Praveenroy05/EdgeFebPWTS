// Data Type  - What type of data a veriable is storing

// 2 Types of datatypes

// 1. Premitive data types - Single value

    // 1. number 
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (combination of different datatypes)
    // 7. any
    // 8. void - function

  // Syntax:

  //keyword(var/let/const) variableName :datatype(Optional) = value

  // 1.number - Is is used to store numeric values, bot integers(10,50) and floating point number(23.45)

  let num1 :number = 45 // Type Annotation

  let num2 = 34.5 // Type inference

  // 2. string - Combination of characters

  /*
  
  1. Single quote - 'Javascript'
  2. Double quote - "Typescript"
  3. Backtick  - `backtick`

  */

 let singleQUote = 'THis is a single quote string'
 let doubleQuote = "This is a double quote string"
 let str1 = 'a'

 // Backtick way of declaration of a string has 2 purpose:

 // 1. For multi line string declaration

 let str2 = `is is 
 a multiline 
 string`


 // 2. For string parameterisation - ${variableName} - Playwright test cases parameterisation

 let age  =20

 let message = `  Your age is ${age}  `
 console.log(message)


 // 3. boolean - true or false - When we compare the 2 values

 let isEmployee = true
 let isAdmin = false

 // 4. null - It is used to represent the intentional absence of a value

 let emptyValue :null = null

 // 5. undefined - It is used to represent a variable that have been defined but has not been assiged any value

 let num3 
 console.log(num3)


 // 6. union (number | string|boolean) - It is used to define a variable that can hold multiple types of data

 let num4:(number | string) = 10
 num4 = "Test"
 // num4 = true

 // 7. any - It is used to define a variable that can hold any type of values in it.
// Migrate a project from Javascript to Typescript

 let num5 :any = 10
 num5 = "Test"
 num5 = true
 num5 = null
 num5 = undefined


 let num6 :any = 30
 num6 = "Test"
 num6 = false


// 2. Non-primitive data types - More than one values
   // 1. array
   // 2. object
   // 3. Functions


   // Operators
   