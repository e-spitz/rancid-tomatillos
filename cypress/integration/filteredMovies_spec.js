describe('Filtered movies page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/search/after')
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

  it('Should display all movies rendering on filtered movies page', () => {
    cy.get('section').should('be.visible')
      .get('.filtered-movies-container').should('be.visible')
  });

  it('Should display movie details after clicking image', () => {
    cy.get('section').should('be.visible')
      .get('.filtered-movies-container').should('be.visible')
      .get('img')
      .visit('http://localhost:3000/movie/613504')
      .get('.movie-details').should('be.visible')
  });
});
