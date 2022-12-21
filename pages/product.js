const { I } = inject();

module.exports = {
  priceText: { xpath: '//div[@class="price"]/span' },
  dropdownElement: { xpath: "//a[contains(@id, 'sbSelector')]" },
  deliveryPriceText: { xpath: "//strong[text()='Flat Shipping Rate:']/ancestor::tr/td[2]" },
  totalPriceText: { xpath: "//strong[text()='Total:']/ancestor::tr/td[2]" },
  order: { xpath: '//*[@id="content"]/div[1]/table/tbody/tr[1]/td[1]' },


  async getProductPrice() {
    return (await I.grabTextFrom(this.priceText)).replace(/[^0-9\.]+/g, "");
  },

  async getColorProductPrice() {
    return (await I.grabTextFrom(this.dropdownElement)).replace(/[^0-9\.]+/g, "");
  },

  async getProductTotalPrice() {
    return (await I.grabTextFrom(this.totalPriceText)).replace(/[^0-9\.]+/g, "");
  },

  async getProductDeliveryPrice() {
    return (await I.grabTextFrom(this.deliveryPriceText)).replace(/[^0-9\.]+/g, "");
  },

  selectColorProduct(options) {
    let colorText = `//ul[contains(@id, "sbOptions")]//a[contains(.,"Yellow")]`;
    I.click(this.dropdownElement);
    I.waitForElement(colorText, 3);
    I.click(colorText);
  },

  async getOrderNumber() {
    return await I.grabTextFrom(this.order)
  },


}
