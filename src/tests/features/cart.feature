Feature: Login and navigate to Inventory add an item and show the cart page
    Feature Login page will work successfully, navigate to Inventory page add an item to cart and show the cart page.

    Scenario: Success add items to cart and show the cart page
        Given A web browser is at the cart page with an item in the cart
        When The user clicks on the cart icon should show the cart page
        Then The cart page should show the item name "Sauce Labs Backpack" in the cart

