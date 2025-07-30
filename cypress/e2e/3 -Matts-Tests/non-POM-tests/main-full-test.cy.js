
it('should navigate to "thenbs login screen" and navigate to \'Dyson homepage\'', () => {



    cy.visit('https://login.thenbs.com/auth/login')

  

    cy.get('#Identification_Email')
    .type('simonpress888@protonmail.me', { force: true })
    cy.get('.submit-button')    
    .click()
    cy.get('#Authentication_Password')
    .type('T3st3rNb5!!!')

    cy.get('#nextButton')
    .click()        

    
    });

    



