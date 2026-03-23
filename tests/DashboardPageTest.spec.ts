import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import * as allure from "allure-js-commons";

// Test data can be written inside the test file or you can add it in the files like excel or JSON

test.describe.configure({mode: 'serial', timeout:60000})


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

test("Add the product to the cart", {tag:'@regression'},async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect.soft(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    await allure.severity("critical")
    await allure.link("https://google.com")
})

test("Validate the product details on View Page",{tag: '@smoke'}, async ()=>{
    await dashboardPage.searchAndViewProductDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName) 
})

// Tag - smoke, regression


// Jenkins
// MCP
// Playwright Agent
// API
