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
    nbsHomepage.visitURL();// amended to visitURL
    nbsHomepage.acceptCookies();
    cy.fixture('searchTerms').then((data) => {
        nbsHomepage.searchFor(data.dysonManufacturer);
    });
    nbsHomepage.selectDysonResult();
});

// Then step to verify the URL contains expected text, the url is now passed in from the cucumber scenario step
Then('The URL will contain the expected text {string}', (expectedUrlPart) => {
    cy.fixture('dysonHomepage').then((dysonHomepageData) => {
        dysonHomePage.verifyDysonPage(expectedUrlPart, dysonHomepageData.dysonResultText);//The search result we click on is now coming from the dysonHomepage.json fixture file
    });
});

// Then step to verify the telephone number is as expected
Then('I verify telephone number is as expected', () => {
    dysonHomePage.verifyContactNumber();
});

// Then step to verify the title on the page is as expected
Then('I verify the title on the page is as expected', () => {
    dysonHomePage.verifyTitle();
});

// Then step to verify the href attribute of the Source logo is as expected
Then('I verify the href attribute of the Source logo is as expected', () => {
    dysonHomePage.verifySourceLogoHref();
});

// Then step to Verify the external manufacturer link attribute contains the correct url
Then('I verify the external manufacturer link attribute contains the correct url', () => {
    dysonHomePage.verifyWebsiteLink();
});

// Then step to verify the contact manufacturer button shows the correct text
Then('I verify the contact manufacturer button shows the correct text', () => {
    dysonHomePage.verifyContactManufacturerButton();
}); 

//Then step to verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console
Then('I verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console', () => {
    dysonHomePage.verifyAccessibilityChecks();
}); 

//Then step to verify the API response and content are as expected
Then('I verify the API response and content are as expected', () => {
    dysonHomePage.verifyApiResponse();
});

// Then step to verify the Dyson navigation bar has the correct tabs and expected links
Then('I verify the Dyson navigation bar has the correct tabs and expected links', () => {
    dysonHomePage.verifyDysonNavigationBar();
});



