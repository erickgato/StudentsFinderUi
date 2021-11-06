/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
declare namespace Cypress {
  interface validateSearchBehaviorOptions {
    field: 'name' | "document" | 'email',
    tableAttributes: {
      name: string,
      row: number
    }
  }
  interface Chainable<Subject = any> {
    search(name: string): Chainable<Subject>
    selectField(field: string): Chainable<Subject>
    toggleSelect(): Chainable<Subject>
    waitQuery(): Chainable<Subject>
    getTableAttribute(attribute: string, row: number): Chainable<string>
    validateSearchBehavior(options: validateSearchBehaviorOptions): Chainable<Subject>
  }
}