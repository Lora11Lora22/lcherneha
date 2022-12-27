const { I } = inject();
const Helper = require('../helpers/helper.js');

const radioButtonNewAddress = { xpath: '//*[@id="collapse-payment-address"]/div/form/div[3]/label' };
const radioButtonNewShippingAddress = { css: '#collapse-shipping-address > div > form > div:nth-child(3) > label' };

module.exports = {

  changeAddress() {
    I.click(radioButtonNewAddress);
  },

  changeShippingAddress() {
    I.click(radioButtonNewShippingAddress);
  },

  // STEP 2: BILLING DETAILS 

  firstName: { css: "#input-payment-firstname" },
  lastName: { css: "#input-payment-lastname" },
  firstAddress: { css: "#input-payment-address-1" },
  city: { css: "#input-payment-city" },
  postCode: { css: "#input-payment-postcode" },
  country: { css: "#input-shipping-firstname" },
  regionName: { css: "#sbOptions_11212601 > li:nth-child(2) > a" },
  paymentContinueButton: { css: "#button-payment-address" },


  step2BillingDetails(buyer) {
    I.fillField(this.firstName, buyer.firstName);
    I.fillField(this.lastName, buyer.lastName);
    I.fillField(this.firstAddress, buyer.firstAddress);
    I.fillField(this.city, buyer.city);
    I.fillField(this.postCode, buyer.postCode),
      I.selectOption('Region / State', 'Angus');
    I.click(this.paymentContinueButton);

  },

  // STEP 3: DELIVERY DETAILS 

  shippingFirstName: { css: "#input-shipping-firstname" },
  shippingLastName: { css: "#input-shipping-lastname" },
  shippingFirstAddress: { css: "#input-shipping-address-1" },
  shippingCity: { css: "#input-shipping-city" },
  shippingContinueButton: { css: "#button-shipping-address" },


  step3DeliveryDetail(addressees) {
    I.fillField(this.shippingFirstName, addressees.firstName);
    I.fillField(this.shippingLastName, addressees.lastName);
    I.fillField(this.shippingFirstAddress, addressees.firstAddress);
    I.fillField(this.shippingCity, addressees.city);
    I.click(this.shippingContinueButton);

  },

  // STEP 4: DELIVERY METHOD 

  deliveryMethodContinueButton: { css: "#button-shipping-method" },

  deliveryMethod() {
    I.click(this.deliveryMethodContinueButton);

  },

  // STEP 5: PAYMENT METHOD 

  paymentMethodContinueButton: { css: "#button-payment-method" },
  agreeBox: { xpath: '//*[@id="agree1"]' },

  paymentMethod() {
    I.click(this.agreeBox);
    I.click(this.paymentMethodContinueButton);
  },

  // STEP 6: CONFIRM ORDER 

  confirmOrderButton: { css: "#button-confirm" },
  checkoutSuccessText: 'Your order has been placed!',

  //////////////////////////////////

  confirmOrder() {
    I.click(this.confirmOrderButton);
    I.see(this.checkoutSuccessText);
  },

  //////////////////////////////////

  deliveryPriceText: { xpath: "//strong[text()='Flat Shipping Rate:']/ancestor::tr/td[2]" },
  totalPriceText: { xpath: "//strong[text()='Total:']/ancestor::tr/td[2]" },
  unavailablItem: { xpath: `//*[@id="checkout-cart"]/div[contains(.,'Products marked with *** are not available in the desired quantity or not in stock!')]` },

  async getProductTotalPrice() {
    let allPrice = await I.grabTextFrom(this.totalPriceText);
    return I.parsePrice(allPrice);
  },

  async getProductDeliveryPrice() {
    let deliveryPrice = await I.grabTextFrom(this.deliveryPriceText);
    return I.parsePrice(deliveryPrice);
  },

  async itemUnavailable() {
    return await Helper.checkElementIsVisible(this.unavailablItem);
  },
}
