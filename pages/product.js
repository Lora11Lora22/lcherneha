const { I } = inject();

module.exports = {
  priceText: { xpath: '//div[@class="price"]/span' },

  async getProductPrice() {
    let product = await I.grabTextFrom(this.priceText);
    let productResult = I.getFloat(product);
    return parseFloat(productResult);
  },

}
