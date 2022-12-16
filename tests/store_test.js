let registrationUser = {
firstName: 'Larysa',
lastName: '25886',
email: 'qa.text@gmail.com',
telephone: '+420337377037',
password: 'Larysa5734',
confirmPassword: 'Larysa5734',
};

Feature('store');

Scenario('test something',  ({ I, homePage, registerPage }) => {
I.openStore();
homePage.openRegistrationPage();
registerPage.verifyRegisterAccountText();
registerPage.submitRegistrationForm(registrationUser);
registerPage.confirmRegistrationAccount();
registerPage.verifyRegisterSuccessText();

});









