/*

Class - Blueprint to create an Object. CLass is a block of code and It is a collection of properties and methods.

// ES6 - ECMA SCRIPT 6 - 2015
// Classname should be similar to the fileName(Employee.ts). Classname should start with Capital letter. Ex: -Employee

// Access Modifier - It is a permission to access Properties and methods


// Syntax:

export class ClassName{

     // properties and methods

    key: datatype 
    private key1 : datatype
    static orgName:string =  "ABC" // Static variable and methods can only be accessed by using the CassName. Example - ClassName.orgName
    readonly offer:number // Only as a view but cannot update these variable

    constructor - Is a special type of methods which help us in terms of initialising the value of the variable (Non-static) at the time of creation of an object for a class.

    // this - Refers to the current class object
    constructor(key:datatype,key1:datatype,....)
    {
       this.key = key
       this.offer - key2

    
    }

    functionName(){
       ....... 
    }
    
    static fun(){
    }


}


let objectName = new ClassName(1,2,3....)
objectName.key
let lp = new ClassName(1,2,3....)
lp.functionName()
ClassName.fun()

*/

class Employee{
    // Properties

    empId: number 
    empName: string 
    private empSal: number 
    static orgName = "ABC"
    readonly offer:number

    constructor(empId:number, eName:string, esalary:number, offer:number){
        this.empId = empId
        this.empName = eName
        this.empSal = esalary
        this.offer = offer
    }

    employeeInformation(){
        console.log(this.empId, this.empName, this.empSal, Employee.orgName, this.offer);
    }

    static displayCompanyName(){
        console.log(Employee.orgName);
    }
}

const emp1 = new Employee(1, "Rahul", 100000, 10000)
emp1.employeeInformation()
Employee.displayCompanyName()

const emp2 = new Employee(2, "John", 200000, 20000)
emp2.employeeInformation()
console.log(emp2.empId);
