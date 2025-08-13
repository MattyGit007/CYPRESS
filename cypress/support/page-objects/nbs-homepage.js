/// <reference types="cypress" />

class NBSHomepage {
    // Selectors as class properties
    acceptCookiesButton = 'button'; // Selector for the Accept Cookies button
    searchField = '[data-cy="searchFieldSearch"]'; // Selector for the homepage search input field

     //Actions
     //-------------
    // Clicks the 'Accept All Cookies' button on the homepage
    acceptCookies() {
        cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click();
    }

    // Types the provided search term into the homepage search field
    searchFor(term) {
        cy.get(this.searchField).first().type(term);
    }

    // Selects a result from the search results by visible text (value passed in from step)
    selectDysonResult(resultText) {
        cy.contains(resultText, { timeout: 10000 }).should('be.visible').click();
    }

    // Navigate to a provided URL (value should be supplied by the step, not read here)
    visitURL(url) {
        cy.visit(url);
    }
}

// Export a singleton instance of the NBSHomepage class
module.exports = new NBSHomepage();