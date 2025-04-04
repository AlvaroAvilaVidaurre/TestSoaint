Feature: Login succesfully and complete checkout process
    Feature Login succesfully and complete checkout process.

    Scenario: Success in checkout process
        Given A web browser is at the cart page and complete checkout process
        When The user clicks on the checkout button should show fill the information
        Then The checkout page should show the item name "Sauce Labs Backpack" and payment information
        Then The user clicks the finish button and the checkout complete page should show the message "Thank you for your order!"
