describe('All movies main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should display a header for the home page', () => {
    cy.get('header').should('be.visible')
      .get('h1')
      .contains('rancid tomatillos 🎬')
  });

  it('Should display a loading message while movies are loading', () => {
    cy.get('main').should('be.visible')
      .get('p')
        .contains('Loading...🍿')
  });

});
