describe('Home Page Test', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('Login'); // Replace 'Login' with any text visible on your homepage
  });
});
