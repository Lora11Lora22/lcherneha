const { I } = inject();

module.exports = {
myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
registrerButton: { xpath: '//a[.="Register"]' },

openRegistrationPage() {
I.click(this.myAccountSpoiler);
I.click(this.registrerButton);
}
  // insert your locators and methods here
}
