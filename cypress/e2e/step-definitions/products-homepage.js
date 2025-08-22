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

// Given step to visit the Dyson 9kj Hand Dryer page
Given("I navigate to the Dyson 9kj hand dryer page", () => {
  cy.fixture("urls").then((urls) => {
    // tell cypress to use our url.json fixture file
    nbsHomepage.visitURL(urls.dyson9kjHandDryer); // and use the dyson9kjHandDryer value in the visitURL function

});

});
