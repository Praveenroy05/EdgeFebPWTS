// Multiple tabs or window - "popup" event - const page1 = page.waitForEvent("popup")

// Step by step process to handle multiple windows/tabs in playwright

// 1. Launch the url
// 2. Will wait for "popup" event to appear on the page without using await -     const page1 = page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generation of a "popup" event.
// 4. Wait for the final result of the popup event - const newPage = await page1
// 5. Perform any action on the new tab/window, we must use newPage object
// 6. Come back to the main/original page and perform the action by using "page" fixture


// Promise - pending , success, rejected

import {test, expect} from '@playwright/test'

test("Multiple tabs or window handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")

    await page.locator("#Tabbed button").click()

    const newPage = await page1
    //const newpge1 = newPage.waitForEvent("popup")
    await newPage.getByText("Downloads", {exact: true}).click()
    // const newpgae2 = await newpge1

    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()

    // await page.getByText("Home", {exact: true}).click()
    // await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
    const page2 = page.waitForEvent("popup")

    await page.locator("#Tabbed button").click()
    const newPage1 = await page2
    await newPage1.getByText("Downloads", {exact: true}).click()
    await expect(newPage1.locator("h2#bindings")).toContainText("WebDriver Language Bindings")



})
