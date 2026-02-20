// Conditional Statements - Allows us to execute different block of code {...} for different condition


// 1. if statement - simple if statement
// 2. If else statement
// 3. if else if else statement
// 4. Nested if else statement
// 5. switch statement
// 6. Ternanry Operators - if else condition


// 1. if statement - Will only handle the positive scenario

// Search for the product functionality
// Search the product with the country name

// Syntax:
/*

if(condition){
 // code
}

*/

let age1 = 10

if(age1 > 18){  // 10>18
    console.log("Age is greater than 18")
}

// 2. if else statement - Handles both positive and negative scenario
// Syntax:

/*

if(condition){
   // code
}
else{
 // code
}


*/


let age2 = 15

if(age2 > 18){ // (15 > 18)
    console.log("You are eligible for voting")
}
else{
    console.log("You are not eligible for voting")
}


// 3. if else if else 

// Syntax:

/*

if(condition1){
   // if the condition1 is true - then this block of code will b eexecuted
}
else if(condition2){
  // if the condition2is true - then this block of code will be executed
}
else if(condition3){
  // if the condition3 is true - then this block of code will be executed
}
else{
 // if none of the condition is true - then this block of code will be executed
}


*/


let browser  = "edge"

if(browser == "chrome"){  // "edge" =="chrome"
    console.log("Launch the chrome browser")
   // break
}
else if(browser == "firefox"){ // "edge" == "firefox
    console.log("Launch the firefox browser")
}
else if(browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser")
}
else{
    console.log("Invalid browser")
}


// When to use if else if else statement
// 1. Range (>90)
// 2. Logical operator && ||
// 3. Multiple datatypes for comparison - name = "Rahul", salary ==100000





// 4. switch statement

// Syntax:

/*

switch (expression){
   case value:
    // code
    break
   case value1:
     // code
     break
    default:
        //code

}

*/

// if (browserName == "chrome")


let browserName = "chrome"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("Launch the chrome browser");
        break // Which terminates the swtich statement or loop
    case "firefox":
        console.log("Launch the firefox browser");
        break
    case "safari":
        console.log("Launch the safari browser");
        break
    default:
        console.log("Invalid browser");
}


// let marks = 80

// switch(marks){
//     case 90:
// }


// 5. Ternary Operator (?:)
// Ternary operator is shorthand way of writing if-else statement. Ift consists of three parts:
// 1. The condition, the value if the condition is true and The value if the condition is false
// 1st and 2nd will be separated with (?), 2nd and 3rd will be separated with (:)

// Syntax:
// const varaible = (condition)? true : false

let marks = 80;

const grade = (marks> 75)? "Grade A" : "Grade B"
console.log(grade);


// drop down - Singapore
