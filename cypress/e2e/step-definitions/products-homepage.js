/// <reference types="cypress" />

// Import page objects
// const { should } = require("chai");
// const dysonHomePage = require("../../support/page-objects/dyson-homepage");
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
    nbsHomepage.acceptCookies();
  

});


// Given("I navigate to the Dyson 9kj hand dryer page", () => {
//   cy.visit("https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/products/9kj-hand-dryer");
// });

Then("I verify the 9kj hand dryer breadcrumb bar contains expected text", () => {
  dysonProducts.verify9kjHandDryerBreadcrumBar();
});
  })

// // Then step to verify the breadcrumb bar is visible
// Then("Ensure breadcrums bar is visible", () => {
// // it('Ensure breadcrums bar is visible', () => {
// //         // Verify the  breadcrums bar is visible
// cy.get('app-breadcrumbs nav ul')
// .shouldbe('visible')

// });


// Then step to verify the breadcrumb bar contains expected text
// Then("I verify the bar contains expected text", () => {
// cy.get('app-breadcrumbs nav ul a').should('contain.text', 'Home')
// cy.get('app-breadcrumbs nav ul a').should('contain.text', 'Categories')
// });

// Then("I verify the 9kj hand dryer breadcrumb bar contains expected text", () => {
//     dysonHomePage.verify9kjHandDryerBreadcrumBar();
// }); 