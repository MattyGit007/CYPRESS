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
Given("I navigate to the Dyson manufacturer homepage", () => {
  cy.fixture("urls").then((urls) => {
    // tell cypress to use our url.json fixture file
    nbsHomepage.visitURL(urls.nbsHomepage); // and use the nbsHomepage value in the visitURL function
  });
  nbsHomepage.acceptCookies();
  cy.fixture("dyson").then((data) => {
    // tell cypress to use our dyson.json fixture file
    nbsHomepage.searchFor(data.dysonText); // and use the dysonText value in the searchFor function
    nbsHomepage.selectDysonResult(data.dysonText); // and we can also use it when selecting our result from the search dropdown
  });
});

// Then step to verify the URL contains expected text, and also verify the header using the dyson fixture
Then("The URL will contain the expected text {string}", (expectedUrlPart) => {
  cy.fixture("dyson").then((data) => {
    dysonHomePage.verifyDysonPage(expectedUrlPart, data.dysonText);
  });
});

// // Then step to verify the telephone number is as expected
// Then("I verify telephone number is as expected", () => {
//   dysonHomePage.verifyContactNumber();
// });


// Then step to verify the telephone number is as expected
Then("I verify telephone number is as expected", () => {
  cy.fixture("contactNumber").then((data) => {
    // tell cypress to use our contactNumber.json fixture file
    // and use the contactNumber value in the verifyContactNumber function
    dysonHomePage.verifyContactNumber(data); // pass the expectedContactNumber to the verifyContactNumber function
  })

});

// Then step to verify the title on the page is as expected
Then("I verify the title on the page is as expected", () => {
  dysonHomePage.verifyTitle();
});

// Then step to verify the href attribute of the Source logo is as expected
Then("I verify the href attribute of the Source logo is as expected", () => {
  dysonHomePage.verifySourceLogoHref();
});

// Then step to Verify the external manufacturer link attribute contains the correct url
Then(
  "I verify the external manufacturer link attribute contains the correct url",
  () => {
    dysonHomePage.verifyWebsiteLink();
  }
);

// Then step to verify the contact manufacturer button shows the correct text
Then("I verify the contact manufacturer button shows the correct text", () => {
  dysonHomePage.verifyContactManufacturerButton();
});

//Then step to verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console
Then(
  "I verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console",
  () => {
    dysonHomePage.verifyAccessibilityChecks();
  }
);

//Then step to verify the API response and content are as expected
Then("I verify the API response and content are as expected", () => {
  dysonHomePage.verifyApiResponse();
});

// Then step to verify the Dyson navigation bar has the correct tabs and expected links
Then(
  "I verify the Dyson navigation bar has the correct tabs and expected links",
  () => {
    dysonHomePage.verifyDysonNavigationBar();
  }
);


// Then step to verify the back-to-top button works on Dyson homepage
Then(
  "I verify the back-to-top button works on Dyson homepage",
  () => {
  dysonHomePage.verifyBackToTopButton();
  }
);
