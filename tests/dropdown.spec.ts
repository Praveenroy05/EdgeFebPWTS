// Drop down 

// 2 Types of DD

// 1. Static drop down - The value will never change
     //a. Single select drop down
     //b. Multi select drop down
// 2. Dynamic drop down - The value will be changable - Electronic items
     //a. Single select drop down
     //b. Multi select drop down


// Development of a drop down
 // 1. <select> tag
 // 2. Non-select tag - <div>, li, ul,....


 // 1. DD developed using <select> tag
 // Step by step procedure:

 // 1. Launch the url
 // 2. Locate the drop down element by writing locator
 // 3. Get the value from the drop down by using - selectOption("value" or {label, value, index})
 // Ex: page.locator('#dd').selectOption("AF" or {label : 'Afghanistan'} or {index:10})
 // 4. if the dd is multi select - selectOption(["AS", "AF",...])
 // selectOption[{label: 'India'}, {index: 12}, {value : "AF"}]

 console.log("**************************************************")

 // 2. DD developed using Non <select> tag
 // Step by step procedure to select the value from the DD

 // 1. Launch the url
 // 2. Locate the drop down by writing the locator
 // 3. Click on the drop down element identified in step #2
 // 4. Identify and click on the element that you want to select from the DD


import {test, expect} from '@playwright/test'

test("Handling drop down element developed using SELECT tag", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")

    const countryDD = page.locator('#country')
    
    await countryDD.selectOption("DZ") // By default value attribute
    await countryDD.selectOption({value: 'AR'}) // Value attribute in the form of optional parameter
    await countryDD.selectOption({label : "Ethiopia"})
    await countryDD.selectOption({index : 10})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "opel"])
    await page.waitForTimeout(2000)
    await page.locator("#cars").selectOption([{label :"Saab"}, {index : 3}])
    await page.waitForTimeout(2000)
})

test("Handling drop down element developed using non SELECT tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.getByText("A root option", {exact: true}).click()

    // first()
    // last()
    // nth(index) - index starts with 0

    await page.locator("div.css-b62m3t-container").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-3").click()

})

// 1. Alerts/popup - dialog
// 2. Multiple windows - popup
// 3. Frames
// 4. fileUpload
// 5. Calendar
// 6. Table validation

// Framework - POM


 