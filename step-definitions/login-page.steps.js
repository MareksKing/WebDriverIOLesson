import { Given, When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/pages.js';

Given(/^User is on the SwagLabs landing page$/, async () => {
    await pages.loginPage.loginContainer().waitForDisplayed({ timeout: 10000 });
});

When(/^User inputs username - "([^"]*)"$/, async (username) => {
    await pages.loginPage.usernameField().waitForDisplayed({ timeout: 10000 });
    await pages.loginPage.usernameField().setValue(username);
});

When(/^User inputs password - "([^"]*)"$/, async (password) => {
    await pages.loginPage.passwordField().waitForDisplayed({ timeout: 10000 });
    await pages.loginPage.passwordField().setValue(password);
});

When(/^User clicks on the Login button$/, async () => {
    await pages.loginPage.loginButton().waitForDisplayed({ timeout: 10000 });
    await pages.loginPage.loginButton().click();
});

Then(/^User sees Products page$/, async () => {
    await pages.productPage
        .itemListContainer()
        .waitForDisplayed({ timeout: 10000 });

    const productPageHeaderTitle =
        await pages.productPage.productPageHeaderTitle();
    await expect(productPageHeaderTitle).toHaveText('Products');

    const productInventory = await pages.productPage.productInventoryList();
    await expect(productInventory).toBeElementsArrayOfSize(6);

    await pages.productPage.productCartBadge().waitForExist({
        timeout: 10000,
        reverse: true,
    });
});
