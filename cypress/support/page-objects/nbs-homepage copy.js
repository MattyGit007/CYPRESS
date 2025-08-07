/// <reference types="cypress" />

class NBSHomepage {
    

    
    acceptCookies() {
        cy.contains('button', 'Accept All Cookies').click();
    }

    // Types the provided search term into the homepage search field
    searchFor(term) {
        cy.get('[data-cy="searchFieldSearch"]').first().type(term);
    }

    // Selects the Dyson result from the search results
    selectDysonResult() {
        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();
    }

    // visit nbs homepage
    visitNBSHomepage() {
        cy.visit('https://source.thenbs.com/');
    }
}

// Export a singleton instance of the NBSHomepage class
export default new NBSHomepage();