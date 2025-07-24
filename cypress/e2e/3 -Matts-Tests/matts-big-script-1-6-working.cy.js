describe('Matts Dyson Homepage Regression Tests', () => {

    // 1 - Verifies that the URL is correct for Dyson homepage
    it('1- verify Dyson homepage url is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');

    })

    // 2- Verifies the contact number link is visible, has correct text, and correct tel: protocol
    it('2- verify telephone number is as expected', () => {

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

    // // Verifies the website link is visible and has the correct text
    // it('verify external website link is visible and has correct text', () => {

    //     cy.visit('https://source.thenbs.com/')

    //     cy.contains('button', 'Accept All Cookies').click();

    //     cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

    //     cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

    //     cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]')
    //         .should('be.visible') // Ensure the website link is visible
    //         .should('have.text', ' Website '); // Ensure the link text is 'Website'

    // })



    //3- I verify the H1 title on the page is as expected
      it('3- verify H1 title is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();

        cy.get('h1').should('contain.text', 'Dyson');

    })


    //4- I verify the href attribute of the Source logo is as expected
    it('4- verify the href attribute of the source logo is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();  

        cy.get('a[href="https://source.thenbs.com/"]')
            .should('be.visible') // Ensure the Source logo link is visible
            .should('have.attr', 'href', 'https://source.thenbs.com/'); // Verify the href attribute is correct

        cy.get('a[href="/"]')
            .should('be.visible') // Ensure the Source logo link is visible
            .should('have.attr', 'href', '/'); // Verify the href attribute will be as expected "/"

    })


    //5- I verify the external manufacturer link attribute contains the correct url
    it('5- verify the external manufacturer link attribute contains the correct url', () => {

        cy.visit('https://source.thenbs.com/')

        cy.contains('button', 'Accept All Cookies').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();  

        cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]')
            .should('be.visible', { timeout: 10000 }) // Ensure the external manufacturer link is visible
            .should('have.attr', 'href', 'https://www.dyson.co.uk/commercial/overview/architects-designers') // Verify the href attribute is correct
            .should('have.text', ' Website '); // Verify the link text is 'Website'
        })

        //6- I verify the contact manufacturer button shows the correct text
        it('6- verify the contact manufacturer button shows the correct text', () => {

            cy.visit('https://source.thenbs.com/')

            cy.contains('button', 'Accept All Cookies').click();

            cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

            cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();  

            cy.get('.contact-button > .mdc-button__label')   
                .should('be.visible') // Ensure the contact manufacturer button is visible
                .should('contain.text', 'Contact manufacturer'); // Verify the button text is as expected
        
        })

    //7- I run accessibility checks on the manufacturer homepage using AXE plugin and report results to console

        // it('verify the contact manufacturer button shows the correct text', () => {

        //     cy.visit('https://source.thenbs.com/')

        //     cy.contains('button', 'Accept All Cookies').click();

        //     cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        //     cy.contains('Dyson', { timeout: 10000 }).should('be.visible').click();  
        //     cy.injectAxe();
        //     // Runs accessibility checks using the Axe plugin and logs any detected accessibility violations to the Cypress test runner console.
        //     cy.checkA11y(); // This will log results to the console
            


        //     })



        })



