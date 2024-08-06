import * as components from './../e2e/components/components';

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/login');
        clickButtonInMyPrivacySettings(components.myPrivacySettingsPopup.AcceptAllButton);
        cy.get(components.LoginPage.usernameInputField).type(username);
        cy.get(components.LoginPage.passwordInputField).type(password);
    })
  });

function clickButtonInMyPrivacySettings(button)
{
    cy.get(components.LoginPage.myPrivacySettingsPopupDiv).shadow().find(button).click({force:true});
}