Feature('store');

Scenario('test something',  ({ I, homePage, registerPage }) => {
I.openStore();
homePage.openRegistrationPage();
registerPage.verifyRegisterAccountText
registerPage.fillFirstName('Larysa');
registerPage.fillLastName('25886');
registerPage.fillEmail('Qa.qtest@gmail.com');
registerPage.fillTelephone('+420337374037');
registerPage.fillPassword('Larysa5734');
registerPage.fillConfirmPassword('Larysa5734');
registerPage.confirmRegistrationAccount();
registerPage.verifyRegisterSuccessText();
pause();
});


