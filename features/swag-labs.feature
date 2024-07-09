Feature: SwagLabs E2E Tests

    Feature covering the SwagLabs homepages functionality

    @WIP
    Scenario: SUCCESSFULLY LOGIN IN SWAGLABS PROFILE
        Given User is on the SwagLabs landing page
        When User inputs username - "standard_user"
        And User inputs password - "secret_sauce"
        And User clicks on the Login button
        Then User sees Products page

    Scenario Outline: SORTING SCENARIOS
        
        Given User is on the SwagLabs landing page
        When User inputs username - "standard_user"
        And User inputs password - "secret_sauce"
        And User clicks on the Login button
        Then User sees Products page
        When User clicks on the Sorting button
        And User selects to sort by "<sort_option>"
        Then User sees product "<product_name>"

        Examples:
            | sort_option         | product_name                           |
            | Name (A to Z)       | Sauce Labs Backpack                    |
            | Name (Z to A)       | Test.allTheThings() T-Shirt (Red)      |
            | Price (low to high) | Sauce Labs Onesie                      |
            | Price (high to low) | Sauce Labs Fleece Jacket               |

    @TEST
    Scenario: DATA TABLE EXAMPLE

        Given User is on the SwagLabs landing page
        When User inputs username - "standard_user"
        And User inputs password - "secret_sauce"
        And User clicks on the Login button
        Then User sees Products page
        And User sees correct "<ProductName>" and "<ProductPrice>"
            | ProductName                             | ProductPrice | 
            | Sauce Labs Backpack                     | $29.99       |
            | Test.allTheThings() T-Shirt (Red)       | $15.99       |            
            | Sauce Labs Onesie                       | $7.99        |
            | Sauce Labs Bike Light                   | $9.99        |
            | Sauce Labs Both T-Shirt                 | $15.99       |
            | Sauce Labs Fleece Jacket                | $49.99       |