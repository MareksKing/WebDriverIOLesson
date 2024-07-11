import { Given, When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/pages.js';

Then(/^User sees the items inside the cart$/, async function () {
    await pages.cartPage.checkoutButton().waitForExist({timeout: 10000});
    await pages.cartPage.checkIfProductMatchesInCart(this.productName);
});
When(/^User clicks on the Checkout button$/, async function () {
    await pages.cartPage.checkoutButton().click();
});