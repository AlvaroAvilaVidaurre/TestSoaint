import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given(
  "A web browser is at the cart page with an item in the cart",
  async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', "standard_user");
    await page.fill('input[data-test="password"]', "secret_sauce");
    await page.click('input[data-test="login-button"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator(".btn_primary.btn_inventory").first().click();
    await page.click(".shopping_cart_link");
  }
);

When(
  "The user clicks on the cart icon should show the cart page",
  async function () {
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  }
);

Then(
  "The cart page should show the item name {string} in the cart",
  async function (name: string) {
    const itemName = await page.locator(".inventory_item_name").textContent();
    expect(itemName).toBe(name);
    browser.close();
  }
);