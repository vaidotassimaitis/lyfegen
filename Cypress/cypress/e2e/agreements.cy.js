import * as components from './components/components';

describe('Agreement feature', () => {

  var financialReportingFilters = [
    'date of addition',
    'financial amounts',
    'number of patients',
    'drug name'
  ];

  it('Agreements browsing', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
    UserGoesToAgreementsPage();

  });

  it('Agreement search and filtering', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'))
    UserGoesToAgreementsPage();
    SearchForAgreementByName('existing name');
    CheckResultsOfTheTable('existing name');
    UserGoesToAgreementsPage();
    SearchForAgreementByName('Non-existing name');
    cy.get(components.AgreementsList.Row).should('not.exist');
  });

  it('Access agreement details screen', () => {
    var name = 'existing name';
    cy.login(Cypress.env('Username'), Cypress.env('Password'));
    UserGoesToAgreementsPage();
    SearchForAgreementByName(name);
    UserClicksOnAgreement(name);
    VerifyDetailsOnAgreementDetailsPage('drugName', 'enrolment', 'conditions');
  });

  it('Agreement reporting', () => {
    cy.login(Cypress.env('Username'), Cypress.env('Password'));
    UserGoesToAgreementReportingPage();
    CheckReportingAgreement();
    financialReportingFilters.forEach(filter => {
      FilterFinancialReportBy(filter);
    })
  });
});

function UserGoesToAgreementsPage(){

};

function SearchForAgreementByName(name){

};

function UserClicksOnAgreement(name){

};

function VerifyDetailsOnAgreementDetailsPage(drugName, enrolment, agreement ){

};

function UserGoesToAgreementReportingPage(){

};

function CheckReportingAgreement(){

};

function FilterFinancialReportBy(filter){

};
