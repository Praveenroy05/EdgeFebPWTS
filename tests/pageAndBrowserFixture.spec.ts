// Fixture - Fixture is a special type of function which helps us in performing setup and tear down process

// page
// browser

import {test, expect} from '@playwright/test'

test("Page fixture", async function({page}){

    

})

test("Browser fixture", async function({browser}){

    const context = await browser.newContext() // Create a browser context
    const page  = await context.newPage() // Create a new page on the browser context
})
