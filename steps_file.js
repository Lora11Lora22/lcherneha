
const signInButton = { xpath: '//a[text()="Sign In"]' };
const emailField = { css: '#input-email' };
const passwordField = { css: '#input-password' };
const submitButton = { xpath: '//input[@type="submit"]' };
const addToCartButton = { xpath: '//*[@id="button-cart"]' };
const iconCart = { xpath: '//*[@id="cart-total2"]' };
const checkoutButton = { xpath: '//*[@id="cart"]/ul/li[3]/div/a[2]' };
const radioButtonNewAddress = { xpath: '//*[@id="collapse-payment-address"]/div/form/div[3]/label' };
const radioButtonNewShippingAddress = { css: '#collapse-shipping-address > div > form > div:nth-child(3) > label' };



const STORE_URL = 'http://opencart.qatestlab.net/index.php';
const PRODUCT_URL = 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40';
const ORDER_HISTORY = 'http://opencart.qatestlab.net/index.php?route=account/order';

module.exports = function () {
  return actor({
    openStore() {
      this.amOnPage(STORE_URL);
    },

    openProductPage() {
      this.amOnPage(PRODUCT_URL);
    },

    openOrderPage() {
      this.amOnPage(ORDER_HISTORY);
    },

    login(user) {
      this.openStore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(submitButton);
    },

    cardProcess() {
      this.click(addToCartButton);
      this.click(iconCart);
      this.click(checkoutButton);

    },

    changeAddress() {
      this.click(radioButtonNewAddress);
    },

    changeShippingAddress() {
      this.click(radioButtonNewShippingAddress);
    },


  });


}