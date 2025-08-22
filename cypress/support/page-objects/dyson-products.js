const { checkAndSkipSurvey } = require("./nbs-homepage");

// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
  // Selectors for elements on the Dyson page

    // Selector for the main header on the Dyson page   
    HandDryerBreadCrumbBar = 'app-breadcrumbs nav ul';
    

    // Actions
  //-------------
// 1- Verifies that the current URL contains the expected text and that the main header matches the expected header text
    verify9kjHandDryerBreadcrumBar() {
      cy.get(this.HandDryerBreadCrumbBar)
        .should("be.visible")
      //   .should("contain.text", "Products")
    }
    
  } 

// Export a singleton instance of the DysonHomepage class
module.exports = new DysonHomepage();

  
