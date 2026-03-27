import { Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput;
  readonly lastNameInput;
  readonly postalCodeInput;
  readonly continueBtn;
  readonly finishBtn;
  readonly successHeader;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = this.page.locator("#first-name");
    this.lastNameInput = this.page.locator("#last-name");
    this.postalCodeInput = this.page.locator("#postal-code");
    this.continueBtn = this.page.locator("#continue");
    this.finishBtn = this.page.locator("#finish");
    this.successHeader = this.page.locator(".complete-header");
  }

  async fillCustomerInformation(firstName: string, lastName: string, zip: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(zip);
  }

  async continue() {
    await this.continueBtn.click();
  }

  async finish() {
    await this.finishBtn.click();
  }

  async getConfirmationText() {
    return await this.successHeader.textContent();
  }
}
