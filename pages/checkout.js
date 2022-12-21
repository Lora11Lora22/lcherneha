const { I } = inject();


module.exports = {

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


  step3DeliveryDetail(addressee) {
    I.fillField(this.shippingFirstName, addressee.firstName);
    I.fillField(this.shippingLastName, addressee.lastName);
    I.fillField(this.shippingFirstAddress, addressee.firstAddress);
    I.fillField(this.shippingCity, addressee.city);
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

  confirmOrder() {
    I.click(this.confirmOrderButton);
    I.see(this.checkoutSuccessText);
  },

}
