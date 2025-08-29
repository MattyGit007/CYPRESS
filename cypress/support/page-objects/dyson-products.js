const { should } = require("chai");
const { checkAndSkipSurvey } = require("./nbs-homepage");

// Page Object Model for the Dyson manufacturer page on NBS Source
// class DysonHomepage {
//   // Selectors for elements on the Dyson page


  class DysonProducts {
  // Selectors for elements on the Dyson page
    // Selector for the main header on the Dyson page   
    HandDryerBreadCrumbBar = 'app-breadcrumbs nav ul';
    bosButtonSelector = '[data-cy="product-landing-bos-badge"]'; // selector for the BOS button
    // bosButtonSelector = 'button[data-cy="product-landing-bos-badge"]'; // selector for the BOS button
    

    // Actions
  //-------------
// 1- Verifies that the current URL contains the expected text and that the main header matches the expected header text
    verify9kjHandDryerBreadcrumBar() {
      cy.get(this.HandDryerBreadCrumbBar)
        .should("be.visible")
        .should("contain.text", "Home")
        .and('contain.text', 'Categories')
        .and('contain.text', 'BIM')
        .and('contain.text', 'Fittings, furnishings and equipment')
        .and('contain.text', 'Furniture')
        .and('contain.text', 'Personal dryers')
        .and('contain.text', 'Hand dryers')
            
    };
    // 2- Verifies that the breadcrumb bar contains the expected text in the correct order

verify9kjHandDryerBreadcrumBar() {
  const expectedOrder = [
    "Home",
    "Categories",
    "BIM",
    "Fittings, furnishings and equipment",
    "Furniture",
    "Personal dryers",
    "Hand dryers"
  ];

  cy.get(this.HandDryerBreadCrumbBar + ' li a').then($links => {
    const actualOrder = [...$links].map(link => link.textContent.trim());
    expect(actualOrder).to.deep.equal(expectedOrder);
  });
}

// 3- Verifies that the breadcrumb bar links have the correct href attributes
verify9kjHandDryerBreadcrumBar() {  
  const expectedHrefs = [
    { text: "Home", href: "/" },
    { text: "Categories", href: "/categories" },
    { text: "BIM", href: "/categories/bim" },
    { text: "Fittings, furnishings and equipment", href: "/categories/bim/fittings-furnishings-and-equipment" },
    { text: "Furniture", href: "/categories/bim/fittings-furnishings-and-equipment/furniture" },
    { text: "Personal dryers", href: "/categories/bim/fittings-furnishings-and-equipment/furniture/personal-dryers" },
    { text: "Hand dryers", href: "/categories/bim/fittings-furnishings-and-equipment/furniture/personal-dryers/hand-dryers" }
  ];  
}
    
//4 - Verifies that the tooltip text for the BOS button is correct when hovered over
verifyBosButtonTooltip() {
  // const bosButtonSelector = 'product-landing-bos-badge'; // Replace with the actual selector for the BOS button
  // const expectedTooltipText = 'BOS'; // Replace with the expected tooltip text
  // cy.get(bosButtonSelector)
  //   .trigger('mouseover') // Simulate hover action
  //   .invoke('attr', 'title') // Get the title attribute which contains the tooltip text
  //   .should('equal', expectedTooltipText); // Assert that the tooltip text is as expected

  // cy.get('[data-cy="product-landing-bos-badge"]').trigger('mouseover')
  //   .wait(500); // wait for tooltip to appear
  // cy.get('.tooltip').should('be.visible').and('contain', 'This product\'s BIM objects are verified to the NBS BIM Object Standard');


  cy.get(this.bosButtonSelector)
  .should('be.visible')


  
  
  .trigger('mouseover');
  cy.get('.tooltip').should('be.visible').and('contain', "This product's BIM objects are verified to the NBS BIM Object Standard");


  };



}

// Export a singleton instance of the DysonHomepage class
module.exports = new DysonProducts();

  
