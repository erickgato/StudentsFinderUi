Cypress.Commands.add('waitQuery', () => {
	cy.intercept('/graphql').as('query');

	cy.wait('@query');
});