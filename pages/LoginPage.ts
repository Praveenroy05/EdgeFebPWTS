// Locators and methods related to Login Page

import { Locator, Page } from "playwright";

// Should not have any test data and should have any test cases

export class LoginPage{
    // Locators and initialize it inside the constructor

    page:Page
    username : Locator 
    password : Locator
    loginBtn : Locator
    errorMessage : Locator
    homePageIdentifier : Locator

    // To create a locator we need to have page fixture available inside the page classes.
    // Page fixture will only be available inside the test() or test.beforeEach()
    constructor(page:Page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")   
    }
    
    // Methods

    // To make the method as a dynamic or parameterised function we can take the url as a parameter and provide the argument for the parameter, wherever you call the function or methods.

    // Note: We should be using the test data inside your page classes. Data can come from either Test files or from external file (JSON/Excel)

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username:string, incorrectPassword:string){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }


}