// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
  // Selectors for elements on the Dyson page
  dysonHeader = "h1"; // Selector for the main page header (H1)
  contactNumber = '[action="telephone"]'; // Selector for the contact number link
  sourceLogoHref = 'a[href="https://source.thenbs.com/"]'; // Selector for the Source logo link
  websiteLink = 'a[action="company-website"]'; // Selector for the external manufacturer link
  contactManufacturerButton = '.contact-button'; // Selector for the contact manufacturer button
  countryButton = 'button[aria-label="Choose region"]'; // Selector for the UK country button
  dysonNavigationBar = ".mat-mdc-tab-links"; // Selector for the Dyson navigation bar
  overviewTab = '[data-cy="overviewTab"]'; // Selector for the Overview tab
  productsTab = '[data-cy="productsTab"]'; // Selector for the Products tab
  certificationsTab = '[data-cy="certificatesTab"]'; // Selector for the Certificates tab
  literatureTab = '[data-cy="literatureTab"]'; // Selector for the Literature tab
  caseStudiesTab = '[data-cy="caseStudiesTab"]'; // Selector for the Case Studies tab
  aboutTab = '[data-cy="aboutTab"]'; // Selector for the About tab


  // Actions
  //-------------
  // 1 - Verifies that the current URL and page header are correct for Dyson
  verifyDysonPage(expectedUrlPart, expectedHeaderText) {
    cy.url().should("include", expectedUrlPart); // Check URL contains provided path
    cy.get(this.dysonHeader).should("have.text", expectedHeaderText); // Check H1 text matches expected from fixture
  }

  // 2 -Verifies the contact number link is visible, has correct text, and correct tel: protocol
  verifyContactNumber() {
    cy.get(this.contactNumber, { timeout: 10000 })
      .should("be.visible") // Ensure the contact number is visible
      .should("have.text", " 08003457788 "); // Ensure the text matches the expected number
    // Additionally, verify the href uses the correct telephone protocol, ie tel:
    cy.get(this.contactNumber).should(
      "have.attr",
      "href",
      "tel:08003457788"
    );
  }
  // 3- Verifies the title on the page is as expected
  verifyTitle() {
    cy.title().should('eq', 'Dyson | Overview | NBS BIM Library');
  }

  // 4 - Verifies the href attribute of the Source logo is as expected
  verifySourceLogoHref() {
    cy.get(this.sourceLogoHref)
      .should("be.visible") // Ensure the Source logo link is visible
      .should("have.attr", "href", "https://source.thenbs.com/"); // Verify the href attribute is correct
    cy.get('a[href="/"]')
      .should("be.visible") // Ensure the Source logo link is visible
      .should("have.attr", "href", "/"); // Verify the href attribute will be as expected "/"
  }

  // 5 - Verifies the external manufacturer link attribute contains the correct url
  verifyWebsiteLink() {
    cy.get(this.websiteLink )
      .should("be.visible", { timeout: 10000 }) // Ensure the external manufacturer link is visible
      .should(
        "have.attr",
        "href",
        "https://www.dyson.co.uk/commercial/overview/architects-designers"
      ) // Verify the href attribute is correct
      .should("have.text", " Website "); // Verify the link text is 'Website'
  }

  // 6 - Verifies the contact manufacturer button shows the correct text
  verifyContactManufacturerButton() {
    cy.get(this.contactManufacturerButton)
      .should("be.visible") // Ensure the contact manufacturer button is visible
      .should("contain.text", "Contact manufacturer"); // Verify the button text is as expected
  }

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
    );
  }

  //8- api test and verify the response and content is as expected
  verifyApiResponse() {
    cy.viewport(1100, 800); // Set viewport size for the test
    cy.request({
      method: "GET",
      url: "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location",
    }).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(JSON.stringify(response.body)).to.include("country"); // Checks for the word "country"
      expect(JSON.stringify(response.body)).to.satisfy(
        (str) => str.includes("GB") || str.includes("US")
      ); // Checks for "GB" or "US"

      cy.get(this.countryButton)
        .should("be.visible")
        .and("contain.text", "UK");
    });
  }

  // 9 -verify the Dyson navigation bar has the correct tabs and expected links
  verifyDysonNavigationBar() {
    cy.get(this.dysonNavigationBar)
      .should("be.visible")
      .should("contain.text", "Overview") // Ensure the first tab is 'Overview'
      .and("contain.text", "Products") // Ensure the second tab is 'Products'
      .and("contain.text", "Case studies")
      .and("contain.text", "Literature") // Ensure the third tab is 'Literature'
      .and("contain.text", "Certifications") // Ensure the fourth tab is 'Certifications'
      .and("contain.text", "About"); // Ensure the fifth tab is 'About' 


    cy.get(this.overviewTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');

    cy.get(this.productsTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/products');

    cy.get(this.certificationsTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/third-party-certifications');

    cy.get(this.literatureTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/literature');

    cy.get(this.caseStudiesTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/case-studies');

    cy.get(this.aboutTab)
      .should('have.attr', 'href', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/about');
  }
}

// Export a singleton instance of the DysonHomepage class
module.exports = new DysonHomepage();
