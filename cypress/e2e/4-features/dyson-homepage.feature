# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independent tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: dyson homepage regression tests

    Background: navigate to the Dyson manufacturer homepage
        Given I navigate to the Dyson manufacturer homepage

    Scenario: Verify the manufacturers homepage URL contains expected text
        Then The URL will contain the expected text

    Scenario: I verify telephone number is as expected
        Then I verify telephone number is as expected

    Scenario: I verify the title on the page is as expected
        Then I verify the title on the page is as expected

    Scenario: I Verify the href attribute of the Source logo is as expected
        Then I verify the href attribute of the Source logo is as expected

    Scenario: I Verify the external manufacturer link attribute contains the correct url   
        Then I verify the external manufacturer link attribute contains the correct url
    
    Scenario: I verify the contact manufacturer button shows the correct text
        Then I verify the contact manufacturer button shows the correct text    

    Scenario: I verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console
        Then I verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console  


    Scenario: I verify the API response and content are as expected
        Then I verify the API response and content are as expected

    Scenario: I verify the Dyson navigation bar has the correct tabs and expected links
        Then I verify the Dyson navigation bar has the correct tabs and expected links  
        

