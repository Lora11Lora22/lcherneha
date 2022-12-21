const { I } = inject();

module.exports = {
registerHeaderText: 'Register Account',
firstNameField: { css: '#input-firstname' },
lastNameField: { css: '#input-lastname' },
email: { css: '#input-email' },
telephone: { css: '#input-telephone' },
password: {css: '#input-password'},
confirmPassword: {css: '#input-confirm'},
privacyBox: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
clickContinue: {xpath: '//*[@id="content"]/form/div/div/input[2]'},
registerSuccessText: 'Your Account Has Been Created!',
  
verifyRegisterAccountText(){
I.see(this.registerHeaderText);
},

submitRegistrationForm(user) {
I.fillField(this.firstNameField, user.firstName);
I.fillField(this.lastNameField, user.lastName);
I.fillField(this.email, user.email);
I.fillField(this.telephone, user.telephone);
I.fillField(this.password, user.password);
I.fillField(this.confirmPassword, user.confirmPassword);
I.click(this.privacyBox);
I.click(this.clickContinue);
},

verifyRegisterSuccessText(){
I.see(this.registerSuccessText);
}

};
// insert your locators and methods here