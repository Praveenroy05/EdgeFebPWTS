// Functions - 

function login(username:string, password:string){ // Parameter
    // fill the username
    // fill the password
    // click on login button
}
login("abd", "abcd") // arguments


// 100 Tcs - 
// Duplication - 300 lines of code - login() - Saved 195 lines of code
// Maintenance - 100 TCs - 100 steps - 1 step - Saved 99 steps
// Reusability - login()



// Types of functions

// 1.  Named function - A function which will also have a name is known as named function - Function Declaration
// 2. Anonymous function - A function which will not have any name - Function Expression
// 3. Arrow function - ES 6 - 2015
// 4. Constructor function - Class


// What is difference between Function Declaration and Function Expression


// 1. Named Function - Function Declaration -  A function which will be declared along with the name is known as named function - Function Declaration.

// Syntax:

/*

function functionName(parameters :datatype(optional)) :returntype(option)
{
  // code
  return ... // This should be the last statement inside the function
}

// To call the function Or to utilise the function - functionName(arguments)

const variable = functionName(arguments)


*/

// Non-parameterised and non-returning
function greet(){
    console.log("Welcome to Typescript");
}

greet()

// Parameterised and non-returning
function message(name:string){
    console.log(`Hello ${name}, Welcome to Typescript`);
}

message("Rahul")
message("Raj")

// Non-parameterised and retuning

function msg(){
    return "Welcome"
}

const result  = msg()
console.log(result);

// parameterised and retuning

function add(a:number, b:number){
    return a+b
}

const sum = add(10,20)
console.log(sum);

let j = Function


// 2. Anonymous Function - Function Expression - A function which is declared without any name is known as anyonymous. That function we store inside a variable. The variable act as a name of the function.

// This and arrow function usually gets utilised as call back function
// A function which will be passed as an argument to another function is known as call back function

// function add1(fun){ // fun - known as call back function
//      fun()
// }

// add1(function(){
//     return 10+20
// })

// SYntax:
/*

let variable = function(parameter:datatype(optional)) :returntype(optional)
{
   // code
}

variable(arguments)

*/

// test("Title of the test cases", function(){
//    // .... Test steps
// })


// test("Title of the test case", ()=>{
//     // ... Test case
//     // page.locator("#username").fill("username")
// })

// test("g")


let anyonymousFun = function(a:number, b:number):number{
    // console.log(a+b);
    return a+b
}

anyonymousFun(-100,300)


// 3. Arrows Function - Lambda Function - ES 6(ECMA SCRIPT 6) - 2015

// 1. This function is also a part of anonymous  function and will no have any name.
// 2. This function declared by using arrow (=>) symbol after the parameter list.
// 3. Arrow function use to shorten the number of lines of code.
// 4. This function can be utilised for a single line function.
// 5. If there is only one line of code inside a function, we can skip the curly braces "{}" and "return" keyword as well.

// Syntax:
/*

let variable = (parameter:datatype)=>{
  // codes
}

variable(argument)

*/

function multiply(a:number, b:number){ // named function
    return a*b
}

let multiplyresult = multiply(10,20)
console.log("Named Function", multiplyresult);

let mulFun = function(a:number, b:number){ // ANonymous function
    return a*b
}

let resultMulFun = mulFun(10,20)
console.log("Anonymous Function",resultMulFun);

// Arrow function

let arrowFun = (a:number, b:number)=> a*b

let resultArrow = arrowFun(12,5)
console.log("Arrow Function", resultArrow);

