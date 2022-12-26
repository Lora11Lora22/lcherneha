const { I } = inject();
const Helper = require('../helpers/helper.js');

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registrerButton: { xpath: '//a[.="Register"]' },
  emptyCartText: { xpath: '//*[@id="cart"]/ul/li/p' },
  cartIcon: { css: '#cart > button > i' },
  trashIcon: { css: "i.linearicons-trash" },

  openRegistrationPage() {
    I.click(this.myAccountSpoiler);
    I.click(this.registrerButton);
  },

  async checkCartIsEmpty() {
    I.click(this.cartIcon);
    return await Helper.checkElementIsVisible(this.emptyCartText);
  },

  async emptyCart() {
    let isCartEmpty = await this.checkCartIsEmpty();
    if (!isCartEmpty) {
      let amount = await I.grabAttributeFromAll({ css: "i.linearicons-trash" }, "class");
      for (i = 0; i < amount.length; i++) {
        I.click(this.trashIcon);
      }
    }
  },

  async itemsInCart() {
    let attributesArray = await I.grabAttributeFromAll({ css: "i.linearicons-trash" }, "class");
    console.log("Array size: " + attributesArray.length);
  }

}
