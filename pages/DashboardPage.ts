// Locators and methods related to Dashboard Page

import { Locator, Page } from "playwright";

export class DashboardPage{

    page: Page
    products : Locator
    addToCartSuccessMsg : Locator
    viewPageProductName : Locator

    constructor(page:Page) {
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
    }

    async searchAndAddProductToCart(productName: string){
        await this.products.last().waitFor() // wait for element on the page - in case if the locator is matching with more than one element on the page.

        // count() - Return the total number of elements are matching 
        const countOfProducts = await this.products.count()
        for(let i=0; i<countOfProducts; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }

        }
    }

      async searchAndViewProductDetails(productName: string){
        await this.products.last().waitFor() // wait for element on the page - in case if the locator is matching with more than one element on the page.

        // count() - Return the total number of elements are matching 
        const countOfProducts = await this.products.count()
        for(let i=0; i<countOfProducts; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").first().click()
                break
            }

        }
    }

}

