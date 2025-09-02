const { checkAndSkipSurvey } = require("./nbs-homepage");

class DysonProducts {
  // Selectors for elements on the Dyson page
  HandDryerBreadCrumbBar = 'app-breadcrumbs nav ul';
  bosButtonSelector = '[data-cy="product-landing-bos-badge"]';

  // Verifies breadcrumb bar contains expected text
  verifyBreadcrumBarContainsText() {
    cy.get(this.HandDryerBreadCrumbBar)
      .should("be.visible")
      .should("contain.text", "Home")
      .and('contain.text', 'Categories')
      .and('contain.text', 'BIM')
      .and('contain.text', 'Fittings, furnishings and equipment')
      .and('contain.text', 'Furniture')
      .and('contain.text', 'Personal dryers')
      .and('contain.text', 'Hand dryers');
  }
    // Verifies breadcrumb bar order
  verifyBreadcrumBarOrder() {
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

  // Verifies breadcrumb bar hrefs
  verifyBreadcrumBarHrefs() {
    const expectedHrefs = [
      { text: "Home", href: "/" },
      { text: "Categories", href: "/categories" },
      { text: "BIM", href: "/categories/bim" },
      { text: "Fittings, furnishings and equipment", href: "/category/bim/fittings-furnishings-and-equipment/uybG3djVP8AgJk2Fu6rgAJ" },
      { text: "Furniture", href: "/category/bim/fittings-furnishings-and-equipment/furniture/8YTvxKSguuD4UvDZkvcfq5" },
      { text: "Personal dryers", href: "/category/bim/fittings-furnishings-and-equipment/furniture/personal-dryers/4M5vqFnife127jyxbKFZiz" },
      { text: "Hand dryers", href: "/category/bim/fittings-furnishings-and-equipment/furniture/personal-dryers/hand-dryers/buN9ocshphmJZdNkzJ8Fqb" }
    ];
    cy.get(this.HandDryerBreadCrumbBar + ' li a').each(($el, index) => {
      expect($el.text().trim()).to.equal(expectedHrefs[index].text);
      expect($el.attr('href')).to.equal(expectedHrefs[index].href);
    });
  }

  // Verifies BOS button tooltip
  verifyBosButtonTooltip() {
    // cy.get(this.bosButtonSelector)
    //   .should('be.visible')
    //   // .realHover();
    //   .trigger('mouseover');

    // cy.get('.mat-mdc-tooltip-surface:visible')
    // .should('contain.text', "This product's BIM objects are verified to the NBS BIM Object Standard");
    

    //Hi Matt, this worked for myself, I used cy.contains to grab onto our BOS button and it seemed good from there
    cy.contains("BOS")
      .should("be.visible")
      .trigger("mouseenter", { force: true });

    cy.get(".mat-mdc-tooltip-surface", { timeout: 5000 })
      .should("be.visible")
      .should(
        "contain.text",
        "This product's BIM objects are verified to the NBS BIM Object Standard"
      );



      // cy.get('.cdk-overlay-container .tooltip', { timeout: 10000 }).should('be.visible');
    // cy.get('.tooltip', { timeout: 10000 }) 
    //   .should('be.visible')
    //   .and('contain', "This product's BIM objects are verified to the NBS BIM Object Standard");
  }
}

module.exports = new DysonProducts();