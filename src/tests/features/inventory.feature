Feature: Login and navigate to Inventory page to add items to cart
    Feature Login page will work successfully and navigate to Inventory page to add items to cart.

    Scenario: Success Login and navigate to Inventory page to add items to cart
        Given A web browser is at the saucelabs inventory page
        When A user add the first item to cart
        Then Add first item to cart and verify the cart badge is 1
        Then Add second item to cart and verify the cart badge is 2
        Then Remove first item from cart and verify the cart badge is 1
        Then Remove second item from cart and verify the cart badge is not visible

