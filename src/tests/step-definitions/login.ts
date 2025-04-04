import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("A web browser is at the saucelabs login page", async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
});

// Scenario: Login with valid credentials

When(
  "A user enters the username {string}, the password {string}, and clicks on the login button",
  async function (username: string, password: string) {
    await page.fill('input[data-test="username"]', username);
    await page.fill('input[data-test="password"]', password);
    await page.click('input[data-test="login-button"]');
  }
);

Then("the url will contain the inventory subdirectory", async function () {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await browser.close();
});

// Scenario: Login with empty or invalid credentials

When(
  "A user leaves the username and password fields empty and clicks on the login button",
  async function () {
    await page.fill('input[data-test="username"]', "");
    await page.fill('input[data-test="password"]', "");
    await page.click('input[data-test="login-button"]');
  }
);

Then(
  "The user should see an error message indicating that the login failed with the message {string}",
  async function (message: string) {
    const errorMessage = await page
      .locator("[data-test='error']")
      .textContent();
    expect(errorMessage).toContain(message);
    await browser.close();
  }
);
