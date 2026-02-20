// Operators - Symbol 

// 1. Arithemetic Operators
// 2. COmparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternanry Operators (?:) - short form of if else


// 1. Arithemetic Operators - Used to perform mathematical calculation

      // 1. Addition (+)
      // 2. Subtraction (-)
      // 3. Multiplication (*)
      // 4. Division (/)
      // 5. Modulus (%) - Remainder after division - 9/2 - 1
      // 6. Exponential (**)
      // 7. Increment (++)
      // 8. Decrement (--)



let a1= 10
let a2 = 3

// Addition + - Add the two numbers or concatinates the two strings

console.log(a1+a2) // 10+3 = 13

console.log("JS"+"TS") // concatinates - JSTS

// Subtraction - 

console.log(a1-a2) // 10-3

// Multiplication *
console.log(a1*a2)

// Division /

console.log(a1/a2)  // 10/3 -  3.333333

// Modulus (%) - Remainder after the division - 9 - 1

console.log(a1 %a2) // 10 % 3 - 9 - 1

// Exponential (**) - Power of end value to the first 

console.log(a1 ** a2) // a1^a2 - 5 ** 3 - 5^4- 5*5*5*5 - 10 ** 3 - 10*10*10

// Increment Operators (++) - Increases the value by 1

let a3 = 10 

// Pre-increment (++a3) - First the value of the variable will be incremented by 1 and then the action will be performed

console.log(++a3) // a3= a3+1

// Post increment (a3++) - First the action will be performed and then the value of the varaible will be incremeneted by 1

let a4 = 6
console.log(a4++) // 6
console.log(a4) // 7

// Decrement Operators (--) - Decreases the value by 1

let a5 = 15

// Pre-decrement (--a5) - First the value of the variable will be decremented by 1 and then the action will be performed

console.log(--a5) //14

// Post-decrement (a5 --) - First the action will be performed and then the value of the varaible will be decremented by 1

let a6 = 5

console.log(a6--) //5
console.log(a6) // 4

let a7 = 10

console.log(a7--) // 10 // a7--  a7= a7-1
console.log(--a7) // 8

console.log(a7) //8

console.log("*****************************")

// 2. Conditional Operators - Comparing two values and return the result in the form of boolean
     
    // 1. Equal to (==)
    // 2. Not Equal (!=)
    // 3. Strict Equality (===)
    // 4. Stirct Not Equality (!==)
    // 5. Greater than (>)
    // 6. Greater than or Equal (>=)
    // 7. Less than (<)
    // 8. Less than or equal (<=)


// What is difference between =, == and ===


// 1. Equal To - It only checks if the VALUESof the variables are same or not

let var1 = 10
let var2 = "10"

console.log(var1 == var2)

// 2. Not Equal to (!=) - It checks if the VALUE of the variables are NOT same.

console.log(var1 != var2)


// 3. Strict Equality (===) - It checks if the VALUES and DATATYPE of the varaibles are same or not.
console.log(var1 === var2)

// 4. Strict not Equality (!==) - It checks if the VALUES or DATATYPE of the varaibles are not same.

console.log(var1 !== var2)

// 5. greater than (>) 

console.log(10>8)

// 6. greater than or equal (>=)

console.log(10 >= 12)

// 7. less than (<)

console.log(20 <19)

// 8. Less than or equal (<=)

console.log(5<=5)




console.log("***********************************")

// 3. Logical Operator - It compares the two conditions or expressions nad return the result as boolean

    // 1. Logical AND (&&) - If both of the conditions are true then only it will return true
    // 2. Logical OR (||) - Any one of the condition has to be true to get the result as true
    // 3. Logical NOT (!) - It reverses the value from true to false and vice versa

// Calendar - month and year
// May 2027 - month === May && year === 2027


  // true && true - true
  // true && false - false
  // false && true - false
  // false && false - false

  console.log((10>2) && (20 >13)) // true && true 
  console.log((5>1) && (10>20)) // true && false
  console.log((20 >100) && (90 >30)) // false && true
  console.log((10>20) && (20>20)) // false && false

  // true || true - true
  // true || false -  true
  // false || true - true
  // false || false - false

  console.log((10>2) || (20 >13)) // true && true 
  console.log((5>1) || (10>20)) // true && false
  console.log((20 >100) || (90 >30)) // false && true
  console.log((10>20) || (20>20)) // false && false

// Logical Not (!)
console.log(!(10>5)) // !true - false
console.log(!(20 >100)) // !false - true


// 4. Assignment Operator (=) - It assigns the value to a variable

let b1 = 89


  
