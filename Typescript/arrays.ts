import { log } from "console"

let array = [10,20,30,40]

// Index in array starts with 0
// Accessing array by using index
// Syntax:
// arrayName[index]
console.log(array[0])

// Declaration of an array:

// 1. Using Array Literal - []
// 2. Array Constructor - new Array()

// 1. Array Literal - directly define the value inside the []
let arr1 :number[]= [90, 100, 120, 150]

let arr2  = ["TS", 67, true, null, undefined, "Apple"]

let arr3 :string[] = ["Hello", "Blue", "World"]

// 2. Array Constructor - new 
// Syntax:
// let variableName = new Array<any>(values)

let arr4 = new Array<any>(10,20,30,40,50, "TS")
console.log(arr4);

let emptyArray = []
emptyArray[0] = 10
emptyArray[1] = "TS"
console.log(emptyArray);

console.log("******************************")

// console.log(arr2[0])
// console.log(arr2[1])

let arr5  = ["TS", 67, true, null, undefined, "Apple"] // [0-5]

console.log("Line #42", arr5[6]);


// 1. Traditional for loop - works at the index level inside the array

for(let i =0; i<arr5.length; i++){
     console.log(arr5[i]);
}

console.log("******************************")

// 2. for ... of loop - Works at the element level inside the array
// Syntax:

let i = 10 // initialisation
let j // declaration

/*
for(variable declaration of array){
  // codes
}

*/

for(let ele of arr5){
    console.log(ele);
}


console.log("************Methods of an Array*************");

let array1 = [10,20,30,40,"TS", "JS", true]

// 1. length - It is a property which return the totla number of element avilable inside an array.

console.log(array1.length)


// 2. push(element1, ele2,...) - To add the element at the end of an array
// Syntax:
// arrayName.push(ele1, ele2,....)

console.log(array1);
array1.push("apple", "blue", 100)

console.log("push()", array1);

// 3. pop() - It removes the last element from the array
// SYntax:
// arrayName.pop()
array1.pop()
console.log("pop()", array1);


// What is diff between push() and unshift()

// 4. unshift(ele1, ele2,...) - It adds the element to the begining of an array
// SYntax:
// arrayName.unshift(ele1, ele2,....)

array1.unshift("Java", "Python")

console.log("unshift()", array1);

// What is differenc between pop() and shift()

// 5. shift() - It removes the first element from the array
// Syntax:
// arrayName.shift()
array1.shift()
console.log("shift()", array1);

// What is difference between slice() and splice()

// 6. slice(startIndex, endIndex) - To extarct a portion of an array and return the vaule as a new array.
// Syntax:
// arrayName.slice(startIndex, ednIndex)
// startIndex(inclusive) - Start index from where the extracting  begins 
// endIndex(Exclusive) - end index where the extraction end

console.log(array1.slice(2, 6)) // 2,3,4,5


// 7. splice(index, no of element to remove, ele1, ele2,.....)
// Syntax:
// arrayName.splice(startIndex, no of element to remove, ele2, ele2,...)
// startIndex - Position where we can add/remove the element to/from
// no of elements to remove - No of element to be removed from the array at the start Index
// ele1, ele2,... - Adds all the element to the array at startIndex

let arr6 = [10,20,30,40,50,60,70, "Java", 10]
arr6.splice(0,0, "TS", "JS")
console.log(arr6);

// 8. indexOf(element, startIndex(optional)) - To get the index of the first occurances of the specified element in the array
// SYntax:
// arrayName.indexOf(element, startIndex(optional))
console.log(arr6.indexOf(10)) // 2
console.log(arr6.indexOf(10, 3)) // 10


 

// 9. lastIndexOf(element, startIndex(optional)) - To get the index of the last occurances of the specified element in the array
// SYntax:
// arrayName.lastIndexOf(element, startIndex(optional))
console.log(arr6.lastIndexOf(10)) 
console.log(arr6.lastIndexOf(10, 5)) 

// 10. includes(element, startIndex(optional)) - To check whether the specified element is present inside the array or not. It returns boolean value
console.log(arr6.includes(10)) // true
console.log(arr6.includes(100)) // false

// 11. reverse() - It reverse the array element
arr6.reverse()
console.log("reverse()", arr6);

// 12. concat(array2, aaray3,...) - To merge two or more arrays
// Syntax:
// arrayName.concat(array2, array3,...)
let array2 = [100, 200, 300, "TS"]
let array3 = ["A", "B", "C"]
let mergedArray = array2.concat(array3)
console.log(mergedArray);
console.log(array2);