/// <reference types="cypress" />

import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';

// Main test suite for NBS Source regression tests
describe('NBS Source Regression Tests', () => {
    // Runs before each test to set up the initial state
    beforeEach(() => {
        // Visit the NBS Source homepage
        cy.visit('https://source.thenbs.com');

        // Accept cookies on the homepage
        NBSHomepage.acceptCookies();

        // Search for 'Dyson' using the homepage search functionality
        NBSHomepage.searchFor('Dyson');

        // Select the Dyson result from the search results
        NBSHomepage.selectDysonResult();
    });

   
    it('Ensure telephone link has correct number, protocol and href', () => {
        // Verify the telephone link has the correct number
        cy.get('.brand-contact > [appstats=""]')
        // cy.contains('08003457788');
        .should('contain', '08003457788')
        .and('have.attr', 'href', 'tel:08003457788')

        // cy.get('.brand-contact > [appstats=""]')
        // cy.contains('08003457788');
        // // ask Sam for info

    });


});
