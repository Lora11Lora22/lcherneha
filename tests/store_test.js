Feature('store');

Scenario('test something',  ({ I }) => {
I.amOnPage('http://opencart.qatestlab.net/index.php');
I.click({xpath: '//*[@id="top-links"]/ul/li/span/span'});
I.click({xpath: '//a[.="Register"]'});
I.see('Register Account');
//Your Personal Details
I.fillField({css: '#input-firstname'}, 'Larysa');
I.fillField({css: '#input-lastname'}, '25846');
I.fillField({css: '#input-email'}, 'Qa.test@gmail.com');
I.fillField({css: '#input-telephone'}, '+420792374037');
//Your Password
I.fillField({css: '#input-password'}, 'Larysa5846');
I.fillField({css: '#input-confirm'}, 'Larysa5846');
//Newsletter
I.click({xpath: '//*[@id="content"]/form/div/div/input[1]'});
I.click({xpath: '//*[@id="content"]/form/div/div/input[2]'});
//Success
I.see('Your Account Has Been Created!');
pause();
});

