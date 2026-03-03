// Alerts/popup  - "dialog" event appeared on the page - page.on("event", function)
// Multiple tabs/window - "popup" event - page.waitForEvent()


// Different types of alerts are available

// 1. Alert - Will have a single button 
// 2. Confirm Alert - Will have 2 button on the alert - Ok/Cancel
// 3. Prompt alert - Will have 2 button along with the textbox

// dialog - Dialog is a class in playwright
// accept("Text") - Click on the Ok/Submit/Yes - Accept the alert
// dismiss() - Click on Cancel/No - Dismiss the alert
// message() - Get the text value that it is displaying on the alert

import {test, expect} from '@playwright/test'

test("Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // on(event) - Wait for event to appear on the page
    const text = "Testing"

    page.on("dialog", function(dialog){
        console.log(dialog.message())
        dialog.accept(text)
    })
    await page.locator("button#alertBtn").click()
    await page.locator("button#confirmBtn").click()
    
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")

    // Prompt alert
    await page.locator("button#promptBtn").click()
    await expect(page.locator("#demo")).toContainText(text)



})
