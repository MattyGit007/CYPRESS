// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
    // Selectors for elements on the Dyson page
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Partial URL to identify Dyson page
    dysonHeader = 'h1.ng-star-inserted'; // Selector for the main page header (H1)


    // Actions
    //-------------
    // 1 - Verifies that the current URL and page header are correct for Dyson
    verifyDysonPage() {
        cy.url().should('include', this.dysonUrlPart); // Check URL contains Dyson path
        cy.get(this.dysonHeader).should('have.text', 'Dyson'); // Check H1 text is 'Dyson'
    }

    // 2 -Verifies the contact number link is visible, has correct text, and correct tel: protocol
    verifyContactNumber() {
        cy.get('a[href="tel:08003457788"]')
      .should("be.visible") // Ensure the contact number is visible
      .should("have.text", " 08003457788 "); // Ensure the text matches the expected number
    // Additionally, verify the href uses the correct telephone protocol, ie tel:
    cy.get('a[href="tel:08003457788"]').should(
      "have.attr",
      "href",
      "tel:08003457788")
    }
   // 3- Verifies the H1 title on the page is as expected
      verifyH1Title() {
       cy.get("h1").should("contain.text", "Dyson");
  };

    // 4 - Verifies the href attribute of the Source logo is as expected
    verifySourceLogoHref() {
      cy.get('a[href="https://source.thenbs.com/"]')
      .should("be.visible") // Ensure the Source logo link is visible
      .should("have.attr", "href", "https://source.thenbs.com/"); // Verify the href attribute is correct
      cy.get('a[href="/"]')
      .should("be.visible") // Ensure the Source logo link is visible
      .should("have.attr", "href", "/"); // Verify the href attribute will be as expected "/"
  };

    // 5 - Verifies the external manufacturer link attribute contains the correct url
    verifyWebsiteLink() {
      cy.get(
      'a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]'
    )
      .should("be.visible", { timeout: 10000 }) // Ensure the external manufacturer link is visible
      .should(
        "have.attr",
        "href",
        "https://www.dyson.co.uk/commercial/overview/architects-designers"
      ) // Verify the href attribute is correct
      .should("have.text", " Website "); // Verify the link text is 'Website'
  };

    // 6 - Verifies the contact manufacturer button shows the correct text
    verifyContactManufacturerButton() {
      cy.get(".contact-button > .mdc-button__label")
      .should("be.visible") // Ensure the contact manufacturer button is visible
      .should("contain.text", "Contact manufacturer"); // Verify the button text is as expected
  };

    // 7- verify accessibility checks on the manufacturer homepage using AXE plugin and report results to console
    verifyAccessibilityChecks() {
      cy.injectAxe();
    cy.checkA11y(
      null,
      null,
      (violations) => {
        // Log the violations without failing the test
        cy.task("log", violations);
        violations.forEach((violation) => {
          const nodes = Cypress.$(
            violation.nodes.map((node) => node.target).join(",")
          );
          Cypress.log({
            name: "a11y error!",
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.id}] ${violation.help} (${violation.nodes.length} nodes)`,
          });
        });
      },
      { timeout: 10000 }
    )
    };

      //8- api test and verify the response and content is as expected
      verifyApiResponse() {
        cy.request({
      method: "GET",
      url: "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location",
    }).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(JSON.stringify(response.body)).to.include("country"); // Checks for the word "country"
      expect(JSON.stringify(response.body)).to.satisfy(
        (str) => str.includes("GB") || str.includes("US")
      ); // Checks for "GB" or "US"

      cy.get(".mdc-button__label")
        .should("be.visible")
        .and("contain.text", "UK");
    });

      // 9 -verify the Dyson navigation bar has the correct tabs and expected links
      verifyDysonNavigationBar() ;{
        cy.get(".mat-mdc-tab-links")
      .should("be.visible")
      .should("contain.text", "Overview") // Ensure the first tab is 'Overview'
      .and("contain.text", "Products") // Ensure the second tab is 'Products'
      .and("contain.text", "Case studies");

      cy.get(
      '.mat-mdc-tab-links a[href="/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"]'
      ).should("be.visible"); // Ensure the 'Overview' tab link is visible
  };


      }






  
// Export a singleton instance of the DysonHomepage class
export default new DysonHomepage();