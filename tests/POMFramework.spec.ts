// Framework - It is a design principle. Set of guidlines.
// POM - Page Object Model

// Page object model is a design pattern used in software testing to represent one web page as one object. It is a way to organise and manage the interaction with a web page by creating the properties(variales) and methods (Action) of that particular page.

// This approach helps in reducing the code duplication, improving the test maintainbility and enhances the reusability by encapsulating the page-specific login with a deidacated class or modules.

// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder(pages) // Locators and methods related to the specific page. Ex: - LoginPage.ts, DashboardPage.ts,.....

// 2. TEST LAYER - Will create a package or folder (tests) - Pure test cases and assertions

// 3. DATA LAYER - JSON/EXCEL - TestData.json, data.excel

// 4. CONFIGURATION LAYER - playwright.config.ts - Global configuration

// 5. UTILS LAYER - We will create a folder utils. Custom functions, screenhot(), scrollDown(), get the data from excel,....

// 6. REPORT LAYER - HTML/Allure - We do not create it separately in Playwright.