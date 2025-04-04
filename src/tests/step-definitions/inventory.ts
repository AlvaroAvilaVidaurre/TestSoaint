import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("A web browser is at the saucelabs inventory page", async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.fill('input[data-test="username"]', "standard_user");
  await page.fill('input[data-test="password"]', "secret_sauce");
  await page.click('input[data-test="login-button"]');
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

// Scenario: Login with valid credentials

When("A user add the first item to cart", async function () {
  await page.locator(".btn_primary.btn_inventory").first().click();
});

Then(
  "Add first item to cart and verify the cart badge is 1",
  async function () {
    const cartBadge = await page.locator(".shopping_cart_badge").textContent();
    expect(cartBadge).toBe("1");
  }
);

Then(
  "Add second item to cart and verify the cart badge is 2",
  async function () {
    await page.locator(".btn_primary.btn_inventory").nth(1).click();
    const cartBadge = await page.locator(".shopping_cart_badge").textContent();
    expect(cartBadge).toBe("2");
  }
);

Then(
  "Remove first item from cart and verify the cart badge is 1",
  async function () {
    await page.locator(".btn_secondary.btn_inventory").first().click();
    const cartBadge = await page.locator(".shopping_cart_badge").textContent();
    expect(cartBadge).toBe("1");
  }
);

Then(
  "Remove second item from cart and verify the cart badge is not visible",
  async function () {
    await page.locator(".btn.btn_secondary.btn_small.btn_inventory").click();
    const isCartBadgeVisible = await page
      .locator(".shopping_cart_badge")
      .isVisible();
    expect(isCartBadgeVisible).toBe(false);
    browser.close();
  }
);


// Then("click on the cart icon and verify the cart is empty", async function () {
//   await page.click(".shopping_cart_link");
//   const cartItemCount = await page.locator(".cart_item").count();
//   expect(cartItemCount).toBe(0);
//   await browser.close();
// });

// Then(
//   "Click on the cart icon and verify the cart has 3 items",
//   async function () {
//     await page.click(".shopping_cart_link");
//     const cartItemCount = await page.locator(".cart_item").count();
//     expect(cartItemCount).toBe(3);
//     await browser.close();
//   }
// );