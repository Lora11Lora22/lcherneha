const { I } = inject();

const addToCartButton = { xpath: '//*[@id="button-cart"]' };
const iconCart = { xpath: '//*[@id="cart-total2"]' };
const checkoutButton = { xpath: '//*[@id="cart"]/ul/li[3]/div/a[2]' };


module.exports = {
  priceText: { xpath: '//div[@class="price"]/span' },

  async getProductPrice() {
    let product = await I.grabTextFrom(this.priceText);
    let productResult = I.getFloat(product);
    return parseFloat(productResult);
  },

  cardProcess() {
    I.click(addToCartButton);
    I.click(iconCart);
    I.click(checkoutButton);

  },

}
