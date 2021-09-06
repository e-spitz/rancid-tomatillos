describe('All movies main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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

  it('Should display a loading message while movies are loading', () => {
    cy.get('.movies-section').should('be.visible')
      .get('h2')
        .contains('Loading...🍿')
  });

  it('Should display all movies rendering on main', () => {
    cy.get('main').should('be.visible')
      .get('.movies-container').should('be.visible')
  });

  it('Should display a movie image for each movie card', () => {
    cy.get('main').should('be.visible')
      .get('.movies-section').should('be.visible').click()
  });

  it('Should have hover styling on movie posters', () => {
    cy.get('.movie-poster').should('have.css', 'transition', 'all 0.2s ease-in-out 0s')
  });

  it('Should have a search bar for movie titles', () => {
    cy.get('input[type=text]')
    .type('Search Movie Title')
  });

  it('Should have a search button to click and filter movies', () => {
    cy.get('button').click()
  })

});
