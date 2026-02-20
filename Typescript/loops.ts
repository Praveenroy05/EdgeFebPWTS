// Loops - Which will execute the same block of code {...} multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("*************************");

for(let i = 1; i<=5; i++){
    console.log(i)
}


// Example - drop down - >250 - Singapore - for(let i=0; i<count; i++){if(country == "Singapore")}

// 1. for loop
      // 1. for loop - Traditional for loop - If we know how many times we have to execute the iteration
      // 2. for ...of loop - Loop over the iterable object - Array - [1,2,3,4,5], String
      // 3. for ... in loop - Looping over the properties of an Object -  {key : value}
// 2. while loop - If we do not know how many times we have to execute the loop
// 3. do while loop - If we want to execute the atleast for one time before checking the condition


// 1. for loop - 
// Syntax:

/*
for(initialisation; condition; increment/decrement)
{
   // code
   break
}

initialisation - Initialise the value of the variable to start the execution. let i =0 
condition - Condition to check whether the loop should continue or not. i<=5
increment/decrement - Increase or decrease the value of the variable after each iteration. i++/i--


*/

let i =10 // initialisation
let j // declaration

console.log("******************");

// let array = [10,20,30,40,50]


for(let i = 0; i<6; i++){  // 6 6<6 5++ = 5+1 = 6
   console.log(i) // 0 1 2 3 4 5
}


// 2. while loop -
// Syntax

/*
initialisation

while(condition)
{
   code
   increment/decrement 
}


*/

console.log("**************");

let k = 1
while(k<=5){ // 6<=5
    console.log(k) // 1 2 3 4 5
    k++ // 6
}

console.log("**********************")

// 10 to 1

let l = 10

while(l<=1){ // l>0, l>=1
   console.log(l) // 10 9 8 ....1 
    l--
}

// 10 <=1

// 3 . do while loop - 
// Syntax:

/*

initialisation
do
{
  // code
  increment/decrement

}while(condition);


*/

console.log("*******************");

let m = 10

do{
    console.log(m); // 10
    m-- // 9
}while(m<=1); // 9<=1



// functions - 