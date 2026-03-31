import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobject/LoginPage';
import { LoggedInPage } from './pageobject/LoggedInPage';

const loginUrl = 'https://practicetestautomation.com/practice-test-login/';
const validUsername = 'student';
const validPassword = 'Password123';

test.describe('Practice Test Login', () => {
  test('Positive login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();

    await loginPage.login(validUsername, validPassword);

    await expect(page).toHaveURL(/logged-in-successfully/);
    const loggedInPage = new LoggedInPage(page);
    await expect(loggedInPage.successMessage).toBeVisible();
    await expect(loggedInPage.logoutLink).toBeVisible();
  });

  test('Negative login with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername('incorrectUser');
    await loginPage.enterPassword(validPassword);
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    await expect(loginPage.getErrorMessageText()).resolves.toBe('Your username is invalid!');
  });

  test('Negative login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername(validUsername);
    await loginPage.enterPassword('incorrectPassword');
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    await expect(loginPage.getErrorMessageText()).resolves.toBe('Your password is invalid!');
  });

  test('Negative login with both username and password invalid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername('wrongUser');
    await loginPage.enterPassword('wrongPass');
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    const errorText = await loginPage.getErrorMessageText();
    expect(['Your username is invalid!', 'Your password is invalid!']).toContain(errorText);
  });

  test('Negative login with blank username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername('');
    await loginPage.enterPassword(validPassword);
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    await expect(loginPage.getErrorMessageText()).resolves.toBe('Your username is invalid!');
  });

  test('Negative login with blank password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername(validUsername);
    await loginPage.enterPassword('');
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    await expect(loginPage.getErrorMessageText()).resolves.toBe('Your password is invalid!');
  });

  test('Edge case: username case sensitivity', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.enterUsername('Student');
    await loginPage.enterPassword(validPassword);
    await loginPage.clickSubmit();

    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isErrorMessageVisible()).resolves.toBe(true);
    await expect(loginPage.getErrorMessageText()).resolves.toBe('Your username is invalid!');
  });

  test('Edge case: logout returns to login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.login(validUsername, validPassword);
    const loggedInPage = new LoggedInPage(page);
    await expect(loggedInPage.logoutLink).toBeVisible();

    await loggedInPage.clickLogout();
    await expect(page).toHaveURL(loginUrl);
    await expect(loginPage.isLoginFormVisible()).resolves.toBe(true);
  });
});
