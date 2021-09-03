describe('All movies main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to scroll to bottom of main page', () => {
    cy.scrollTo('bottom')
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

  it('Should display all movies rendering on main', () => {
    cy.get('main').should('be.visible')
      .get('.movies-container').should('be.visible')
  });

  it('Should display a movie image for each movie card', () => {
    cy.get('main').should('be.visible')
      .get('.movies-container').should('be.visible').click({ multiple: true })
  });

});
