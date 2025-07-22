
it('should navigate to "thenbs login screen" and navigate to \'Dyson homepage\'', () => {


    // Visit the NBS login page
    // and log in with the provided credentials

    cy.visit('https://login.thenbs.com/auth/login')

    // Type the email and password into the respective fields
    // and click the login button

    cy.get('#Identification_Email')
    .type('simonpress888@protonmail.me')
    cy.get('.submit-button')    
    .click()
    cy.get('#Authentication_Password')
    .type('T3st3rNb5!!!')
    cy.get('#nextButton')
    .click()     
    
  

    // After login, navigate to the new origin
        cy.visit('https://source.thenbs.com/');

cy.origin('https://source.thenbs.com', () => {


// Accept the cookie consent banner
        cy.get('#onetrust-accept-btn-handler').click();
 
        // Log the number of iframes on the page to the browser console
        cy.get('iframe').then($iframes => {
            console.log('Number of iframes on the page:', $iframes.length);
        });
 
        // Attempt to close the survey popup if it appears within 10 seconds
        // If the close button is found and visible, click it
        // If not found, log a message and continue the test without failing
        cy.get('body').find('[data-testid="icon-close"]', { timeout: 10000 }).then($close => {
            if ($close.length > 0 && $close.is(':visible')) {
                cy.wrap($close).click();
            } else {
                console.log('Survey close button not found');
            }
        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');



        });
   


















    });
});
