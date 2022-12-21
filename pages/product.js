const { I } = inject();

module.exports = {
  priceText: { xpath: '//div[@class="price"]/span' },
  dropdownElement: { xpath: "//a[contains(@id, 'sbSelector')]" },
  color: { xpath: `//ul[contains(@id, "sbOptions")]//a[contains(.,"Yellow")]` },


  async getProductPrice() {
    let product = await I.grabTextFrom(this.priceText);
    let productResult = I.getFloat(product);
    return parseFloat(productResult);

  },

  async getColorProductPrice() {
    let priceForColor = await I.grabTextFrom(this.dropdownElement)
    let colorResult = I.getFloat(priceForColor);
    return parseFloat(colorResult);
  },

  selectColorProduct() {
    let colorText = this.color;
    I.click(this.dropdownElement);
    I.waitForElement(colorText, 3);
    I.click(colorText);
  }


}
