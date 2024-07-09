Feature: SwagLabs E2E Tests

    Feature covering the SwagLabs homepages functionality

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
            | sort_option         | product_name |
            | Name (A to Z)       | Value 2      |
            | Name (Z to A)       | Value 2      |
            | Price (low to high) | Value 2      |
            | Price (high to low) | Value 2      |