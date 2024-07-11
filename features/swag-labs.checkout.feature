Feature: SWAGLABS CHECKOUT TESTS

    Feature covering the Swaglabs Checkout
    
    @FINAL-TASK
    Scenario: USER WANTS TO CHECKOUT AN ITEM
        Given User is on the SwagLabs landing page
        When User inputs username - "standard_user"
        And User inputs password - "secret_sauce"
        And User clicks on the Login button
        Then User sees Products page
        When User clicks on a "Sauce Labs Backpack" Add to cart button
        Then User sees the cart item count is set to "1"
        When User clicks on the cart button
        Then User sees the items inside the cart
        When User clicks on the Checkout button
        Then User sees the shipping form
        When User enters his details
            | Name   | Surname | PostalCode  |
            | Mareks | Robalds | 9999        |
        And User presses the Continue button
        Then User sees the cart checkout summary
            | SalesTax |
            | 8        |
        When User clicks on the Finish button
        Then User sees the checkout complete page
        When User clicks the back home button
        Then User sees Products page
        Then User sees the cart item count is set to "0"
        

