import {test, expect} from '@playwright/test'


test("Basic of playwright", async function(){

  // Test steps will go inside the function

})

// async - await

test("Login into application using valid cerds",async ({page})=>{
     // launch the browser
     // await launch the url
     // await fill the username
     // await fill the password
     // await click on login button
     // await validate if the test is successful
  
     // Js - TS - Asynchronous

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").nth(0).fill("student")
    await page.locator("input#password").fill("Password123")
    await page.getByRole('button', {name:'Submit', exact:true}).last().click()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

})

// page and browser fixture

// css selector
// xpath
// Playwright specific get By locators

