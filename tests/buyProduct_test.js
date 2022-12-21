const orderHistory = require("../pages/orderHistory");

let productLinks = new DataTable(['link']);
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=58']);
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=73']);
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=32&product_id=67']);


let loginUser = {
    email: 'Qa.testNew@gmail.com',
    password: 'Test1234!',
};

let buyer = {
    firstName: "Larysa",
    lastName: "Test",
    firstAddress: "Central 37",
    city: "Mykolaiv",
    postCode: "KP354"
};

let addressees = {

    firstName: "Ivan",
    lastName: "Big",
    firstAddress: "Avenue 37",
    city: "Kyiv",
};

const LinksGetter = require('../helpers/productLinksGetter.js');
let productLinks3 = LinksGetter.getLinks();
console.log(productLinks3);

Feature('buy product');

Before(({ I }) => {
    I.login(loginUser);
});

Data(productLinks3).Scenario('buy product', async ({ I, productPage, checkoutPage, current }) => {
    console.log(current.link)
    I.openProductPage(current.link);

    let price = await productPage.getProductPrice();
    console.log("Product price: " + price);

    I.cardProcess();
    I.changeAddress();
    checkoutPage.step2BillingDetails(buyer);
    I.changeShippingAddress();
    checkoutPage.step3DeliveryDetail(addressees);
    checkoutPage.deliveryMethod();
    checkoutPage.paymentMethod();

    let deliveryPrice = await checkoutPage.getProductDeliveryPrice();
    console.log("Delivery price: " + deliveryPrice);

    let totalPrice = await checkoutPage.getProductTotalPrice();
    console.log("Total price: " + totalPrice);

    checkoutPage.confirmOrder();

    let calculatedTotalPrice =
        parseFloat(price) + parseFloat(deliveryPrice);

    I.assertEqual(calculatedTotalPrice, parseFloat(totalPrice), "Prices are not match!");

    I.openOrderPage();
    let order = await orderHistory.getOrderNumber();
    console.log("Order Number: " + order);

}).tag('buy')