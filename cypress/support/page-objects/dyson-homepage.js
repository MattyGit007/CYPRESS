// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
    // Selectors for elements on the Dyson page
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Partial URL to identify Dyson page
    dysonHeader = 'h1.ng-star-inserted'; // Selector for the main page header (H1)


    // Actions
    //-------------
    // Verifies that the current URL and page header are correct for Dyson
    verifyDysonPage() {
        cy.url().should('include', this.dysonUrlPart); // Check URL contains Dyson path
        cy.get(this.dysonHeader).should('have.text', 'Dyson'); // Check H1 text is 'Dyson'
    }

}

// Export a singleton instance of the DysonHomepage class
export default new DysonHomepage();