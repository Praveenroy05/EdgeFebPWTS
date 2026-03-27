import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

function randomString(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

test("SauceDemo order: backpack checkout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.launchURL("https://www.saucedemo.com/");
  await loginPage.loginIntoApplication("standard_user", "secret_sauce");

  await inventoryPage.addProduct("Sauce Labs Backpack");
  await inventoryPage.goToCart();
  await cartPage.checkout();

  // random data
  const firstName = randomString(6);
  const lastName = randomString(8);
  const zip = Math.floor(10000 + Math.random() * 90000).toString();
  await checkoutPage.fillCustomerInformation(firstName, lastName, zip);
  await checkoutPage.continue();
  await checkoutPage.finish();

  await expect(checkoutPage.successHeader).toHaveText("Thank you for your order!");
});
