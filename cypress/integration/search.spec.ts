/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe("Search page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000")
	});

	it('Has to filter by name', () => {
		cy.findByTestId('names-1').then(([row]) => {
			const name = row.innerHTML;
			//@ts-ignore
			cy.search(name);
			// @ts-ignore
			cy.waitQuery();
			cy.findByTestId('names-1').invoke('text').should('be.equal', name);
		});

	});

	it('Has to filter by email', () => {
		cy.findByTestId('emails-1').then(([row]) => {
			const email = row.innerHTML;

			cy.search(email);
			cy.findByTestId('emails-1').invoke('text').should('be.equal', email\);
		})
	});
	
})