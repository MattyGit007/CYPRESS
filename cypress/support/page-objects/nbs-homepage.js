/// <reference types="cypress" />

class NBSHomepage {
    // Selectors as class properties
    acceptCookiesButton = 'button'; // Selector for the Accept Cookies button
    searchField = '[data-cy="searchFieldSearch"]'; // Selector for the homepage search input field
    dysonResultText = 'Dyson'; // Text to identify the Dyson search result

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

    // Selects the Dyson result from the search results
    selectDysonResult() {
        cy.contains(this.dysonResultText, { timeout: 10000 }).should('be.visible').click();
    }

    // Amended to visitURL, now this method can be reused to navigate to any url thats passed into it
    visitURL() {
        // Load URL from fixture to avoid hardcoding
        cy.fixture('urls').then((urls) => {
            cy.visit(urls.nbsHomepage);
        });
    }
}

// Export a singleton instance of the NBSHomepage class
module.exports = new NBSHomepage();