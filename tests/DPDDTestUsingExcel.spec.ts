import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ExcelUtils } from '../utils/ExcelUtils'
import path from 'path'

const filePath = path.join(__dirname, "../TestData/data.xlsx")
const sheetName = "Login"

let datas
    try{
    datas = ExcelUtils.getExcelData(filePath, sheetName)
    }
    catch(e){

    }

// const datas = 
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

for(let data of datas){
    test(`Add the product to the cart for ${data.productName}`, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.email, data.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndAddProductToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    })
}
