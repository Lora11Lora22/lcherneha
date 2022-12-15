const { I } = inject();

module.exports = {
registerHeaderText: 'Register Account',
firstNameField: { css: '#input-firstname' },
lastNameField: { css: '#input-lastname' },
email: { css: '#input-email' },
telephone: { css: '#input-telephone' },
password: {css: '#input-password'},
confirmPassword: {css: '#input-confirm'},
privacyPolicyBox: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
continueButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},
registerSuccessText: 'Your Account Has Been Created!',

verifyRegisterAccountText(){
I.see(this.registerHeaderText);
},

verifyRegisterSuccessText(){
I.see(this.registerSuccessText);
},

fillFirstName(name){
I.fillField({ css: '#input-firstname' }, name);
},
  
fillLastName(lastName){
I.fillField({ css: '#input-lastname' }, lastName);
},

fillEmail(email){
I.fillField({ css: '#input-email' }, email);
},

fillTelephone(telephone){
I.fillField({ css: '#input-telephone' }, telephone);
},

fillPassword(password){
I.fillField({css: '#input-password'}, password);
},

fillConfirmPassword(confirmPassword){
I.fillField({css: '#input-confirm'}, confirmPassword);
},

confirmRegistrationAccount() {
I.click(this.privacyPolicyBox);
I.click(this.continueButton);
},

};





// insert your locators and methods here