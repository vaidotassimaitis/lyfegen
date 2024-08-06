export var LoginPage = {
    usernameInputField : 'input[id="username"]',
    passwordInputField : 'input[id="password"]',
    loginButton : 'button[type="submit"]',
    myPrivacySettingsPopupDiv : '[id="usercentrics-root"]'
};

export var myPrivacySettingsPopup = {
    SaveSettingsButton : '[data-testid="uc-save-button"]',
    DenyButton : '[data-testid="uc-deny-all-button"]',
    AcceptAllButton : '[data-testid="uc-accept-all-button"]',
};

export var AgreementsList = {
    Table : '',
    Cell : '',
    Header : '',
    Row : ''
};

export var AgreementDetailsPage = {
    Name : '',
    Details : ''
};

export function fail(message){
    throw new Error(message);
};
