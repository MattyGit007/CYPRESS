/// <reference types="cypress" />

import NBSHomepage from '../../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../../support/page-objects/dyson-homepage';

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

    // Test to Verify the manufacturers homepage URL contains expected text: manufacturer
    it('Ensure Dyson homepage URL contains "manufacturer"', () => {
        cy.url().should('include', 'manufacturer');
    });

    // Test to Verify the manufacturers homepage URL contains expected text: dyson
    it('Ensure Dyson homepage URL contains "dyson"', () => {
        cy.url().should('include', 'dyson');
    });

        // Test to Verify the manufacturers homepage URL contains expected text: dyson
    it('Ensure Dyson homepage URL contains "overview"', () => {
        cy.url().should('include', 'overview');
    });


});
