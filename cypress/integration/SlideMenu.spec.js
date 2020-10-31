describe('SlideMenu', () => {
  it('Should be able to open the lateral menu', () => {
    cy.visit('/');
    cy.get('.slide-menu').should('not.be.visible');

    cy.get('.burger-menu').click();

    cy.get('.slide-menu').should('be.visible');
  });

  it('Should close the lateral menu clicking outside', () => {
    cy.visit('/');
    cy.get('.burger-menu').click();
    cy.get('.slide-menu').should('be.visible');
    cy.get('.App').click('right', { force: true });

    cy.get('.slide-menu').should('not.be.visible');
  });
});
