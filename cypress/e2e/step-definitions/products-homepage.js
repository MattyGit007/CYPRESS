/// <reference types="cypress" />

// Import page objects
const dysonProducts = require("../../support/page-objects/dyson-products");
const nbsHomepage = require("../../support/page-objects/nbs-homepage");

// Import Cucumber preprocessor functions
var {
  Given,
  Then,
  Before,
} = require("@badeball/cypress-cucumber-preprocessor");

//Given step to visit the Dyson 9kj Hand Dryer page
Given("I navigate to the Dyson 9kj hand dryer page", () => {
  cy.fixture("urls").then((urls) => {
    // tell cypress to use our url.json fixture file
    nbsHomepage.visitURL(urls.dyson9kjHandDryer); // and use the dyson9kjHandDryer value in the visitURL function
  });
  // Accept cookies after navigating
  nbsHomepage.acceptCookies();
});

Then("I verify the 9kj hand dryer breadcrumb bar contains expected text", () => {
  dysonProducts.verifyBreadcrumBarContainsText();
});

Then("I verify the 9kj hand dryer breadcrumb bar text is in the correct order", () => {
  dysonProducts.verifyBreadcrumBarOrder();
});

Then("I verify the 9kj hand dryer breadcrumb bar hrefs are correct", () => {
  dysonProducts.verifyBreadcrumBarHrefs();
});

Then("I verify the tooltip text is correct for the BOS button when hovered over.", () => {
  dysonProducts.verifyBosButtonTooltip();
});

Then("I verify the download BIM button is visible and enabled", () => {
  dysonProducts.verifyDownloadBIMButton();
});

Then("I verify the download BIM popup contains expected text", () => {
  dysonProducts.verifyDownloadBIMPopupText();
}); 
