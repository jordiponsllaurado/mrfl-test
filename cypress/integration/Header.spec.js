describe('Header', () => {
  it('Should show sections header if position is less than 400px', () => {
    cy.visit('/');

    cy.get('.header').should('be.visible');
    cy.get('.section-menu').should('be.visible');
    cy.get('.burger-menu').should('be.visible');
  });

  it('Should not show sections header if position is between 400px and 800px', () => {
    cy.visit('/');

    cy.scrollTo(0, 400);

    cy.get('.header').should('be.visible');
    cy.get('.section-menu').should('not.be.visible');
    cy.get('.burger-menu').should('be.visible');
  });

  it('Should not show sections header if position is more than 400px', () => {
    cy.visit('/');

    cy.scrollTo(0, 800);

    cy.get('.header').should('not.be.visible');
    cy.get('.section-menu').should('not.be.visible');
    cy.get('.burger-menu').should('be.visible');
  });

  describe('Section menu', () => {
    it('Should be able to scroll horizontally', () => {
      cy.visit('/');
      cy.get('.section-item').first().should('be.visible');
      cy.get('.section-item').last().should('not.be.visible');

      cy.get('.section-menu').scrollTo('right');

      cy.get('.section-item').first().should('not.be.visible');
      cy.get('.section-item').last().should('be.visible');
    });
  });
});
