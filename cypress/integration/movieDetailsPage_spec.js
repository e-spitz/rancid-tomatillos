describe('Movie Details page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/337401')
  });

  it('Should render the movie poster for Mulan', () => {
    cy.get('article').should('be.visible')
      .get('h2')
        .contains('Mulan')
      .get('p')
        .contains('Avg Rating')
  });

  it('Should display a trailer video',() => {
    cy.get('iframe')
      .should('have.attr', 'title', 'Embedded youtube')
      .should('have.attr', 'src')
        .should('include', 'https://www.youtube.com/embed/KK8FHdFluOQ')
  });

  it('Should be rendering Movie data on a single movie page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 201
    });
    cy.get('.movie-details').should('have.attr', 'style').should('include', 'https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg')
  });

  it('Should return to main page when clicking Main View', () => {
    cy.get('.go-back')
      .click()
    cy.url().should('eq','http://localhost:3000/')
  });

  it('Should be able to use the back and forward buttons within the browser', () => {
    cy.visit('http://localhost:3000/')
    cy.go('back')
    cy.url().should('eq','http://localhost:3000/337401')
    cy.go('forward')
    cy.url().should('eq','http://localhost:3000/')
  });


});
