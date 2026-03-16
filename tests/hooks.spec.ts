// Hooks - A special method which helps us in terms of managing the setup/teardown or the common steps for the test cases inside a file

// test.beforeAll() - It will be executed before running all the test cases. - db connect
// test.beforeEach() - It will run before running each and every test case. - Common steps
// test()
// test.afterEach() - It will run after running each and every test case. 
// test.afterAll() -  It will be executed after running all the test cases. - close the db connection

import {test} from '@playwright/test'


test.beforeAll(async()=>{
    console.log("Before All");
})

test.afterAll(async()=>{
    console.log("After All");
})

test.beforeEach(async()=>{
    console.log("Before Each");
})

test.afterEach(async()=>{
    console.log("After Each");
})

test("Test1", async()=>{
    console.log("Test1");
})

test("Test2", async()=>{
    console.log("Test2");
})

test("Test3", async()=>{
    console.log("Test3");
})