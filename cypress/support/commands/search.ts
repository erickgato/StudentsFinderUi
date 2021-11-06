Cypress.Commands.add('search', (name: string) => {
	return cy.findByTestId('search-field').find('input').clear().type(name);
});