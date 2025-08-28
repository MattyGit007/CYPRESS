# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independent tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: dyson 9kj hand dryer regression tests

    Background: navigate to the Dyson 9kj hand dryer page
        Given I navigate to the Dyson 9kj hand dryer page

    Scenario: I verify the 9kj hand dryer breadcrumb bar contains expected text 
        Then I verify the 9kj hand dryer breadcrumb bar contains expected text

    Scenario: I verify the 9kj hand dryer breadcrumb bar text is in the correct order
        Then I verify the 9kj hand dryer breadcrumb bar text is in the correct order

    Scenario: I verify the 9kj hand dryer breadcrumb bar hrefs are correct
        Then I verify the 9kj hand dryer breadcrumb bar hrefs are correct   
        