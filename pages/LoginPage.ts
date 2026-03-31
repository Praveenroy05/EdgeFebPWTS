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

    // SauceDemo-safe fallback locators (do not override existing ones)
    usernameAlt : Locator
    passwordAlt : Locator
    loginBtnAlt : Locator
    errorMessageAlt : Locator
    homePageIdentifierAlt : Locator

    // To create a locator we need to have page fixture available inside the page classes.
    // Page fixture will only be available inside the test() or test.beforeEach()
    constructor(page:Page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("div.card-body").first()

        // Fallback Sauce Demo locators
        this.usernameAlt = this.page.getByPlaceholder("Username")
        this.passwordAlt = this.page.getByPlaceholder("Password")
        this.loginBtnAlt = this.page.locator("#login-button")
        this.errorMessageAlt = this.page.locator("[data-test='error']")
        this.homePageIdentifierAlt = this.page.locator(".inventory_list")
    }
    
    // Methods

    // To make the method as a dynamic or parameterised function we can take the url as a parameter and provide the argument for the parameter, wherever you call the function or methods.

    // Note: We should be using the test data inside your page classes. Data can come from either Test files or from external file (JSON/Excel)

    async launchURL(url:string){
        await this.page.goto(url)
    }

    private async getEffectiveLocator(primary: Locator, fallback: Locator): Promise<Locator> {
        if (await primary.count() > 0) return primary
        if (await fallback.count() > 0) return fallback
        return primary
    }

    async loginIntoApplication(username:string, password:string){
        const userLocator = await this.getEffectiveLocator(this.username, this.usernameAlt)
        const passLocator = await this.getEffectiveLocator(this.password, this.passwordAlt)
        const btnLocator = await this.getEffectiveLocator(this.loginBtn, this.loginBtnAlt)

        await userLocator.fill(username)
        await passLocator.fill(password)
        await btnLocator.click()
    }

    async invalidLogin(username:string, incorrectPassword:string){
        const userLocator = await this.getEffectiveLocator(this.username, this.usernameAlt)
        const passLocator = await this.getEffectiveLocator(this.password, this.passwordAlt)
        const btnLocator = await this.getEffectiveLocator(this.loginBtn, this.loginBtnAlt)

        await userLocator.fill(username)
        await passLocator.fill(incorrectPassword)
        await btnLocator.click()
    }


}