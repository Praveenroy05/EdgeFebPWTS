// Step by step pricess to handle the file upload

// 1. Launch the url
// 2. Identify the file input element on the page
// 3. Use the "setInputFiles(path of the file)" to upload files into the file input element.
// 4. Verify that the files have been uploaded successfully.


import {test, expect} from '@playwright/test'
import path from 'path'

test("File uploads handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles() - uploading the file(s)

   // console.log(__dirname) //C:\Users\prave\Music\QEdgePWTSJan26\tests
    const filePath1 = path.join(__dirname, "../TestData/Courses.txt")
    const filePath2 = path.join(__dirname, "../TestData/Cypress.txt")
    
    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toHaveText("Courses.txt")
    await expect(page.locator("#fileList li").nth(1)).toHaveText("Cypress.txt")


})

// let i = [10,20,30] - /n - new line
