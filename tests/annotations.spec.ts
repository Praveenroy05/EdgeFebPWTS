/*

test.skip() -  marks the test as irrelevant. Playwright does not run such a test. 

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.step() - Provide the step title for the test cases

test.describe() - This will group the number of test cases and display inside the report

test.only() - The playwright will run only those test cases which have been marked as test.only()



*/

import {test, expect} from '@playwright/test'

test.skip("Test1", async()=>{
    console.log("Test1");
})
test("Test2", async()=>{
    console.log("Test2");
})
test.fail("Test3", async()=>{
    expect(20).toBe(15)
})
test.fixme("Test4", async()=>{
    console.log("Test4");
})
test("Test5", async({page})=>{
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#na").fill("Testing")
})