interface validateSearchBehaviorOptions {
    field: 'name' | "document" | 'email',
    tableAttributes: {
      name: string,
      row: number
    }
}

Cypress.Commands.add('validateSearchBehavior', (options: validateSearchBehaviorOptions) => {
	cy.wait(500);
	cy.selectField(options.field);
	const { name, row } = options.tableAttributes;
	cy.getTableAttribute(name, row).then((field) => {
		cy.search(field);
		cy.getTableAttribute(name, row).should('be.equal', field);
	});
});