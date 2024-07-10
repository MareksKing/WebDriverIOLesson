import { Given, When, Then } from '@wdio/cucumber-framework';
import { pages } from '../support/pages.js';

When(/^User clicks on the Sorting button$/, async () => {
    await pages.productPage
        .sortingOptionButton()
        .waitForDisplayed({ timeout: 10000 });
    await pages.productPage.sortingOptionButton().click();
});

When(/^User selects to sort by "([^"]*)"$/, async (sortingType) => {
    await pages.productPage.chooseSortingOption(sortingType);
});
Then(/^User sees product "([^"]*)"$/, async (productName) => {
    await pages.productPage.checkProductNameByID(0, productName);
});

When(/^User sees correct "([^"]*)" and "([^"]*)"$/, async (data) => {
    console.log(data);
    await pages.productPage.checkProductPriceByName();
});

When(/^User opens "([^"]*)" product$/, async function (name) {
    this.productName = name;
    this.productDescription =
        await pages.productPage.getProductItemDescriptionByName(name);
    this.productPrice = await pages.productPage.getProductItemPriceByName(name);

    await pages.productPage
        .getProductItemByName(name)
        .waitForDisplayed({ timeout: 10000 });
    await pages.productPage.getProductItemByName(name).click();
});

Then(/^User sees correct product details$/, async function () {
    await pages.productItem.validateProductItemDetails(
        this.productName,
        this.productDescription,
        this.productPrice,
    );
});
