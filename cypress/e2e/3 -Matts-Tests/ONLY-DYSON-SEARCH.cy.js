describe('Matts Dyson Homepage Regression Tests', () => {

    // Verifies that the URL is correct for Dyson homepage
    it('verify Dyson homepage url is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
        })
    })
    