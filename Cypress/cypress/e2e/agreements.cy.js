import * as components from './components/components';

describe('Agreement feature', () => {
  it('Agreements browsing', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
  });

  it('Agreement search and filtering', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
  });

  it('Access agreement details screen', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
  });

  it('Agreement reporting', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
  });
})