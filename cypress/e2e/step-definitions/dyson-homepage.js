/// <reference types="cypress" />

// Import page objects
const dysonHomePage = require("../../support/page-objects/dyson-homepage");
const nbsHomepage = require("../../support/page-objects/nbs-homepage");

// Import Cucumber preprocessor functions
var {
    Given,
    Then,
    Before,
} = require("@badeball/cypress-cucumber-preprocessor");

// Given step to visit NBSHomepage then visit the manufacturer home page
Given('I navigate to the Dyson manufacturer homepage', () => {
    nbsHomepage.visitNBSHomepage();
    nbsHomepage.acceptCookies();
    nbsHomepage.searchFor("Dyson");
    nbsHomepage.selectDysonResult();
});

// Then step to verify the URL contains expected text - use quotes to capture the parameter
Then('The URL will contain the expected text', () => {
    dysonHomePage.verifyDysonPage();
});
