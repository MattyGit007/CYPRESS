describe('Matts Dyson Homepage Regression Tests', () => {

    // Verifies that the URL is correct for Dyson homepage
    it('verify Dyson homepage url is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');

    })

    // Verifies the contact number link is visible, has correct text, and correct tel: protocol
    it('verify telephone number is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.get('a[href="tel:08003457788"]')
            .should('be.visible') // Ensure the contact number is visible
            .should('have.text', ' 08003457788 '); // Ensure the text matches the expected number
        // Additionally, verify the href uses the correct telephone protocol, ie tel:
        cy.get('a[href="tel:08003457788"]').should('have.attr', 'href', 'tel:08003457788');

    })

    // Verifies the website link is visible and has the correct text
    it('verify external website link is visible and has correct text', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]')
            .should('be.visible') // Ensure the website link is visible
            .should('have.text', ' Website '); // Ensure the link text is 'Website'

    })






})
