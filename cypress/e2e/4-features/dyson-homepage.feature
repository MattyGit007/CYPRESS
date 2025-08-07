# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independant tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: dyson homepage regression tests

    Background: navigate to the Dyson manufacturer homepage
        Given I navigate to the Dyson manufacturer homepage

    Scenario: Verify the manufacturers homepage URL contains expected text
        Then The URL will contain the expected text "/manufacturer/dyson/overview"

