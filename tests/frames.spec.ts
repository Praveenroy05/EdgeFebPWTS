// Frames - 

/*

<html> - page
 
 
 <iframe> - const framePage = await page.frameLocator()
    <html>
    ........
        <iframe> - const innerFramePage = await framePage.frameLocator()
            <html>
            </html>
         </iframe>
         ........
    </html>
 </iframe>

</html> - 

*/

import {test, expect} from '@playwright/test'

test("Handling frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    
    //frameLocator("selector") - Return the framelocator object which helps us to enter into the frame and perform the action on the elements inside the frame

    const framePage = await page.frameLocator("#singleframe")
    await framePage.locator("input[type='text']").first().fill("Testing")
    await expect(framePage.locator("input[type='text']").first()).toHaveValue("Testing")

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

test("Handling Nested frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    
    //frameLocator("selector") - Return the framelocator object which helps us to enter into the frame and perform the action on the elements inside the frame

    await page.getByText("Iframe with in an Iframe", {exact:true}).click()

    const framePage = page.frameLocator("#Multiple iframe")
    const innerFramePage = framePage.frameLocator(".iframe-container iframe")

    await innerFramePage.locator("input[type='text']").fill("Nested Frames")
    await expect(innerFramePage.locator("input[type='text']")).toHaveValue("Nested Frames")

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})