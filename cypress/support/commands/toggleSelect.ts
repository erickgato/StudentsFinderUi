Cypress.Commands.add('toggleSelect', () => {
	return cy.findByTestId('select-field').click();
});