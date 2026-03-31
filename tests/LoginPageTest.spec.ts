import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

// Test data can be written inside the test file or you can add it in the files like excel or JSON

let url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "Test"

let loginPage :LoginPage
test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page) 
   await loginPage.launchURL(url)
})

test.describe("Login Page Test Cases", async ()=>{
   test("Check if the login is working with valid credentials", async ()=>{
      await test.step("Login Into Application", async()=>{
         await loginPage.loginIntoApplication(email, password)
      })
      await test.step("Validate if the login is working", async()=>{
         await expect(loginPage.homePageIdentifier).toBeVisible()
      })
      
   })

   test("Validate invalid login scenario", async ()=>{
      await loginPage.invalidLogin(email, incorrectPassword)
      await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
   })

})