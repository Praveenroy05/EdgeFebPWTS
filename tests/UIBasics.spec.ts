// Enter text in the input field and click on the element.

import {test, expect} from '@playwright/test'

test('Fill the input filed and click on the element', async function({page}){
    // Launch the browser
    // Go to the url
    // fill the username
    // fill the password
    // click on submit button
    // verify the login is successful or not

    // goto("url") - Navigates the url to the browsers.
 // Note : URL should have http/https://

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // fill("value") - To fill the value in the input field.
    await page.locator("input#username").fill("student")
    // toHaveValue("value") - To verify if the input field has the expected value or not.
    await expect(page.locator("input#username")).toHaveValue("student")
    await page.locator("input#password").fill("Password123")
    await page.getByRole('button', {name:'Submit'}).click()
    // toHaveText("text") - To verify if the element has the expected text or not.

    await expect(page.getByRole("heading", {name: "Logged In Successfully"})).toBeVisible()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    // toBeVisible() - To verify if the element is visible on the page or not.

    await expect(page.getByText("Log out", {exact:true})).toBeVisible()


})