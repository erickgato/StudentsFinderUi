
Cypress.Commands.add('selectField', (field: string) => {
	//@ts-ignore
	cy.toggleSelect().then(() => {
		cy.get(`[data-value=${field}]`).first().click();
	});
});