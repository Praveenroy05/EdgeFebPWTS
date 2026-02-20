// string - Combination of characters. Hello, Text

  /*
  
  1. Single quote - 'Javascript'
  2. Double quote - "Typescript"
  3. Backtick  - `backtick`

  */

 let singleQUote1 = 'THis is a single quote string'
 let doubleQuote1 = "This is a double quote string"
 let str3 = 'a'

 // Backtick way of declaration of a string has 2 purpose:

 // 1. For multi line string declaration

 let str4 = `it is 
 a multiline 
 string`


 // 2. For string parameterisation - ${variableName} - Playwright test cases parameterisation

 let age1  =20

 let message1 = `  Your age is ${age1}  `
 console.log(message1)


console.log("******************************")

let string1 = "Hello, Welcome to Typescript"
// 1. length - It is a property which return the total number of characters available inside a string
console.log(string1.length)

// 2. charAt(index) - It is used to get the character available at the specified index
console.log(string1.charAt(7))



// 3. concat(str1, str2, ....) - It is used to concatenate the specified strings at the end of the calling string
let str5 = "Hello"
let str6 = "World"
console.log(str5.concat(" ", str6))
console.log(str5);

// 4. includes(substring) - It is used to check whether the specified substring is present inside the calling string or not. It returns boolean value

// 5. indexOf(substring) - It is used to get the index of the first occurances of the specified substring in the calling string

// 6. lastIndexOf(substring) - It is used to get the index of the last occurances of the specified substring in the calling string




// 7. slice(startIndex, endIndex) - It is used to extract a portion of a string and return the value as a new string
// Syntax:

// stringName.slice(startIndex?, endIndex?)
// startIndex(inclusive) - Start index from where the extracting  begins
// endIndex(Exclusive) - end index where the extraction end
console.log(string1.slice(14,7)) // Welcome

// 8.substring(startIndex, endIndex) - It is used to extract a portion of a string and return the value as a new string
// Syntax:

// stringName.substring(startIndex, endIndex)
// startIndex(inclusive) - Start index from where the extracting  begins
// endIndex(Exclusive) - end index where the extraction end
console.log(string1.substring(14,7)) // Welcome


// What is differenc between slice() and substring()
// 1. If the start index is greater than end index, then slice() will return empty string, but substring() will swap the index and return the value
// 2. Start index is mandatory in substring() but it is optional in slice()


// 9. startWith(substring, startIndex?) - It is used to check whether the calling string starts with the specified substring or not. It returns boolean value
// SYntax:
// stringName.startsWith(substring, startIndex?)
console.log(string1.startsWith("W")) // true

// "Hello, Welcome to Typescript"

// 10. endsWith(substring) - It is used to check whether the calling string ends with the specified substring or not. It returns boolean value
// Syntax:
// stringName.endsWith(substring)

console.log(string1.endsWith("script")) // true
console.log(string1.endsWith("t"));

// 11. toUpperCase() - It is used to convert the calling string into uppercase and return the value as a new string
// SYntax:
// stringName.toUpperCase()
console.log(string1);
console.log(string1.toUpperCase())

// 12. toLowerCase() - It is used to convert the calling string into lowercase and return the value as a new string
// SYntax:
// stringName.toLowerCase()
console.log(string1.toLowerCase())

// 13. trim() - It is used to remove the white spaces from both ends of the calling string and return the value as a new string
// SYntax:
// stringName.trim()
let str7 = "   Hello String   "
let str8 = "Hello String"

console.log(str7.trim() == str8)

// 14. trimStart() - It is used to remove the white spaces from the start of the calling string and return the value as a new string
// SYntax:
// stringName.trimStart()
console.log(str7.length); // 18
console.log(str7.trimStart().length) //15

// 15. trimEnd() - It is used to remove the white spaces from the end of the calling string and return the value as a new string

// SYntax:
// stringName.trimEnd()
console.log(str7.trimEnd())

// 16. split(separator) - It is used to split the calling string into an array of substrings based on the specified separator and return the value as a new array
// SYntax:
// stringName.split(separator)


let str9 = "Hello, Welcome to Typescript"
console.log(str9.split(" "))

let email = "praveen@qedge.com"
console.log(email.split("@")[1].split(".")[0]) // qedge



// abcdabcd - a2b2c2d2 -

// Objects
// Class


// Playwright - concepts - installation

// Node js
// VS code
// typescript
// tsx
// playwright - npm init playwright
