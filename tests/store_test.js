let registrationUser = {
firstName: 'Larysa',
lastName: '25886',
email: Date.now() + '@test.com',
telephone: '+420337377037',
password: 'Larysa5734',
confirmPassword: 'Larysa5734',
};

Feature('store');

Scenario('account registration',  ({ I, homePage, registerPage }) => {
I.openStore();
homePage.openRegistrationPage();
registerPage.verifyRegisterAccountText();
registerPage.submitRegistrationForm(registrationUser);

registerPage.verifyRegisterSuccessText();

}
);