describe('Error page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/hotdog')
  });

  it('Should be able to scroll to top and bottom of main page', () => {
    cy.scrollTo('bottom')
    cy.scrollTo('top')
  });

  it('Should display a header for the home page', () => {
    cy.get('header').should('be.visible')
      .get('h1')
      .contains('rancid tomatillos 🎬')
  });

  it('Should display an error image', () => {
    cy.get('.error')
      .get('img')
      .should('have.attr', 'src')
        .should('include', "https://files.muzli.space/43e6e439756832db0ff5dd2b76ffef5c.jpeg")
  });

  it('Should return to main page when clicking on image', () => {
    cy.get('.go-back')
      .click()
    cy.url().should('eq','http://localhost:3000/')
  });
});
