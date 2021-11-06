Cypress.Commands.add('findAttribute', (attribute: string, n: number) => {
	return cy.findByTestId(`${attribute}-${n}`).then(([row]) => {
		return row;
	});
});