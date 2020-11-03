describe('Customizations UI', () => {
  it('should have default values if fetched customization returns no customizations', () => {
    cy.visit('/');

    // Background
    cy.get('.topbar').should('have.css', 'background').should('include', 'rgb(255, 255, 255)');

    // Logo
    cy.get('[data-qa="logo"]').should('have.css', 'height').should('include', '40px');
    cy.get('[data-qa="logo"]')
      .should('have.attr', 'src')
      .should('include', 'https://www.marfeel.com/public/images/landing/header/logo-marfeel.svg');

    // Burger menu
    cy.get('[data-qa="burger-menu-icon"]')
      .should('have.css', 'color')
      .should('include', 'rgb(255, 165, 0)');

    // Section Menu
    cy.get('.section-item').first().should('have.css', 'font-size').should('include', '18px');
    cy.get('.section-item').first().should('have.css', 'color').should('include', 'rgb(0, 0, 0)');
    cy.get('.section-item')
      .first()
      .should('have.css', 'border-bottom')
      .should('include', '3px solid rgb(255, 165, 0)');
  });

  it('should change based on fetched data from API', () => {
    cy.route2('http://localhost:3010/customizations', { fixture: 'customizations.json' }).as(
      'customizationsRequest'
    );
    cy.visit('/');

    // Background
    cy.get('.topbar').should('have.css', 'background').should('include', 'rgb(0, 0, 0)');

    // Logo
    cy.get('[data-qa="logo"]').should('have.css', 'height').should('include', '40px');
    cy.get('[data-qa="logo"]')
      .should('have.attr', 'src')
      .should(
        'include',
        'https://www.marfeel.com/public/images/landing/header/marfeel-isologo.gif'
      );

    // Burger menu
    cy.get('[data-qa="burger-menu-icon"]')
      .should('have.css', 'color')
      .should('include', 'rgb(255, 255, 255)');

    // Section Menu
    cy.get('.section-item').first().should('have.css', 'font-size').should('include', '22px');
    cy.get('.section-item')
      .first()
      .should('have.css', 'color')
      .should('include', 'rgb(255, 255, 255)');
    cy.get('.section-item')
      .first()
      .should('have.css', 'border-bottom')
      .should('include', '3px solid rgb(255, 255, 255)');
  });
});
