import { Locator, Page } from '@playwright/test';

export class LoggedInPage {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.locator('h1', { hasText: 'Logged In Successfully' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async isAtSuccessPage() {
    return this.successMessage.isVisible();
  }

  async getSuccessMessageText() {
    return (await this.successMessage.textContent())?.trim() ?? '';
  }

  async isLogoutVisible() {
    return this.logoutLink.isVisible();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }
}
