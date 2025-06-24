

it('should navigate to "thenbs login screen" and navigate to \'Dyson homepage\'', () => {
    // Visit thenbs
    // cy.visit('https://source.thenbs.com/')

 
    cy.visit('https://login.thenbs.com/auth/login')
    // cy.get('#onetrust-accept-btn-handler')
    //   .click()
   

 
    cy.get('#Identification_Email')

 
    .type('simonpress888@protonmail.me')
    cy.get('.submit-button')    
    .click()
    cy.get('#Authentication_Password')
    .type('T3st3rNb5!!!')

 
    cy.get('#nextButton')
    .click()

})
