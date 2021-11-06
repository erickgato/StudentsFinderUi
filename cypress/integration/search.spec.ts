/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="../support" />

describe("Search page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000")
	});

	it('Has to filter by name', () => {
		cy.validateSearchBehavior({
			field: 'name',
			tableAttributes: {
				name: 'names',
				row: 1,
			},
		});
	});

	it('Has to filter by email', () => {
		cy.validateSearchBehavior({
			field: 'email',
			tableAttributes: {
				name: 'emails',
				row: 1,
			},
		});
	});

	it('Has to filter by document', () => {
		cy.validateSearchBehavior({
			field: 'document',
			tableAttributes: {
				name: 'documents',
				row: 1,
			},
		});
	});
	
})