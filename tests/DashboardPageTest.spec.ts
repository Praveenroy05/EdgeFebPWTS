import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

// Test data can be written inside the test file or you can add it in the files like excel or JSON

let url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "iphone 13 pro"

let loginPage: LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
})

test("Validate the product details on View Page", async ()=>{
    await dashboardPage.searchAndViewProductDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName) 
})


