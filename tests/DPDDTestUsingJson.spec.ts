import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import datas from '../TestData/datadriven.json'

// const data1 = 
// [
//   { 
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'iphone 13 pro'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'ZARA COAT 3'
//   },
//
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     email: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'ADIDAS ORIGINAL'
//   }
// ]

// for(let product of data1){
//     console.log(product.productName);
// }


let loginPage: LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let product of datas){
    test(`@smoke Add the product to the cart for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.email, product.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndAddProductToCart(product.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    })
}
