import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given(
  "A web browser is at the cart page and complete checkout process",
  async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', "standard_user");
    await page.fill('input[data-test="password"]', "secret_sauce");
    await page.click('input[data-test="login-button"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator(".btn_primary.btn_inventory").first().click();
    await page.click(".shopping_cart_link");
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  }
);

When(
  "The user clicks on the checkout button should show fill the information",
  async function () {
    await page.click("#checkout");
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await page.fill('input[data-test="firstName"]', "John");
    await page.fill('input[data-test="lastName"]', "Doe");
    await page.fill('input[data-test="postalCode"]', "12345");
    await page.click('input[data-test="continue"]');
  }
);

Then(
  "The checkout page should show the item name {string} and payment information",
  async function (name: string) {
    const itemName = await page.locator(".inventory_item_name").textContent();
    expect(itemName).toBe(name);
  }
);

Then(
  "The user clicks the finish button and the checkout complete page should show the message {string}",
  async function (message: string) {
    await page.locator("#finish").click();  
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    const completeText = await page.locator(".complete-header").textContent();
    expect(completeText).toBe(message);
    browser.close();
  }
);
