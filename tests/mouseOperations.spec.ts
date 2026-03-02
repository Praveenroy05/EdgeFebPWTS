// Mouse Operations

// click - click()
// double click - dblclick()
// right click - click({button:'right'})
// hover
// scroll down
// Drag and Drop

import {test, expect} from '@playwright/test'

test("Double click and right click operations", async ({page})=>{
     
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // Double click  - dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()

    // Right click - click({button:'right'})
    await page.getByText("right click me", {exact: true}).click({button:'right'})

    await expect(page.getByText('Delete', {exact: true})).toBeVisible()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText("Copy Text", {exact: true}).dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")


    // Note: Plawright auto handles the alert/popup. Whenever  there will be an alert/popup appears on the page  that means there is an event gets called which is known as "dialog" event
    // "popup" event refers to new tab/page or new window
})


test("Mouse Over an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over an element
    await page.getByText("Travel Policies", {exact: true}).hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Baggage")

})

test("Scrolling on the page", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByText("Download Files").scrollIntoViewIfNeeded()

    await page.getByText("Download Files", {exact: true}).click()
    await expect(page.url()).toContain("download-files")
    await expect(page.locator("button#generateTxt")).toBeVisible()
})

test("Drag and drop operations", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Locator.dragTo(Locator)
    let sourceElement =  page.locator("div#draggable")
    let targetElement = page.locator("div#droppable")

    // await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.getByText("Dropped!", {exact:true})).toBeVisible()
})





