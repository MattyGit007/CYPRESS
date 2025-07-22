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

    // Test to verify the Dyson homepage URL and H1 text are as expected
    it('Ensure Dyson homepage URL and H1 text is as expected', () => {
        DysonHomepage.verifyDysonPage();
    });

    // Test to verify the contact number on the Dyson page
    it('Ensure contact number & href is as expected', () => {
        DysonHomepage.verifyContactNumber();
    });

    // Test to verify the website link on the Dyson page
    it('Ensure the link to external Dyson website has correct text and href', () => {
        DysonHomepage.verifyWebsiteLink();
    });
});