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

    // it('Ensure Dyson homepage URL and H1 text is as expected', () => {
    //     // Verify the Dyson homepage URL contains expected text
    //     DysonHomepage.verifyDysonPageUrl();

    //     // Verify the H1 text on the Dyson page is as expected
    //     DysonHomepage.verifyH1Text();
    // });

    it('h1 title text on page is as expected', () => {
         cy.get('h1.ng-star-inserted')
        .should('have.text', 'Dyson')
        .and('be.visible');
     });

   });

    
