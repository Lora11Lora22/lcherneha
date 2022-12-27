
let productLinks = new DataTable(['link']);

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
const home = require("../pages/home");
let productLinks3 = LinksGetter.getLinks();
console.log(productLinks3);

Feature('buy product');

Before(async ({ I, homePage }) => {
    I.login(loginUser);
    await homePage.emptyCart();

});

Data(productLinks3).Scenario('buy product', async ({ I, productPage, checkoutPage, orderHistoryPage, current, }) => {
    console.log(current.link)

    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log("Product price: " + price),

        productPage.cardProcess();

    let itemAvailable =
        await checkoutPage.itemUnavailable();
    if (!itemAvailable) {
        checkoutPage.changeAddress();
        checkoutPage.step2BillingDetails(buyer);
        checkoutPage.changeShippingAddress();
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
        let order = await orderHistoryPage.getOrderNumber();
        console.log("Order Number: " + order);
    }
}).tag('buy')