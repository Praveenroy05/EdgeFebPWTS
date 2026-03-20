import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../TestData/login.json'


let loginPage :LoginPage
test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page) 
   await loginPage.launchURL(loginData.url)
})

test("Check if the login is working with valid credentials",
   {tag:['@smoke', '@regression']}, async ()=>{
   await loginPage.loginIntoApplication(loginData.email, loginData.password)
   await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("@regression Validate invalid login scenario", async ()=>{
    await loginPage.invalidLogin(loginData.email, loginData.incorrectPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})