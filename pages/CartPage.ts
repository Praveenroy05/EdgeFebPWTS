import { Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = this.page.locator("#checkout");
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}
