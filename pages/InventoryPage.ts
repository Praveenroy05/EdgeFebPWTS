import { Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartLink;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = this.page.locator(".shopping_cart_link");
  }

  async addProduct(productName: string) {
    const button = this.page.locator(`button#add-to-cart-${productName.toLowerCase().replace(/ /g, "-")}`);
    await button.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
