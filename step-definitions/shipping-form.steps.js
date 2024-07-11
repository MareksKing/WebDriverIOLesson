import { When, Then } from "@wdio/cucumber-framework";
import { pages } from "../support/pages";

Then(/^User sees the shipping form$/, async function () {
    await pages.shippingFormPage.checkoutForm().waitForDisplayed({ timeout: 10000});
});
When(/^User enters his details$/,async function (data) {
    await pages.shippingFormPage.nameField().waitForDisplayed({timeout: 10000});
    await pages.shippingFormPage.nameField().setValue(data.rows()[0][0]);
    
    await pages.shippingFormPage.surnameField().waitForDisplayed({timeout: 10000});
    await pages.shippingFormPage.surnameField().setValue(data.rows()[0][1])

    await pages.shippingFormPage.postalCodeField().waitForDisplayed({timeout: 10000});
    await pages.shippingFormPage.postalCodeField().setValue(data.rows()[0][2]);
});
When(/^User presses the Continue button$/, async function () {
    await pages.shippingFormPage.cartContinueButton().click();
});