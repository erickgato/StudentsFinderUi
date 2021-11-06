Cypress.Commands.add('getTableAttribute', (attribute: string, row: number) => {
	return cy.findByTestId(`${attribute}-${row}`).invoke('text');
});