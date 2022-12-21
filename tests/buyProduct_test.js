const orderHistory = require("../pages/orderHistory");


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

Feature('buy product');

Scenario('buy product', async ({ I, productPage, checkoutPage }) => {
    I.login(loginUser);
    I.openProductPage();

    let price = await productPage.getProductPrice();
    console.log("Product price: " + price);

    productPage.selectColorProduct();

    let colorPrice = await productPage.getColorProductPrice();
    console.log("Color Price: " + colorPrice);

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
        parseFloat(price) + parseFloat(colorPrice) + parseFloat(deliveryPrice);

    I.assertEqual(calculatedTotalPrice, parseFloat(totalPrice), "Prices are not match!");

    I.openOrderPage();
    let order = await orderHistory.getOrderNumber();
    console.log("Order Number: " + order);

}).tag('buy')