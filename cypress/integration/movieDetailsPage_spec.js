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

  it('Should return to main page when clicking Main View', () => {
    cy.get('.go-back')
      .click()
    cy.url().should('eq','http://localhost:3000/')
  });




});
