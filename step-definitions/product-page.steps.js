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

When(/^User sees correct "([^"]*)" and "([^"]*)"$/, async (productName, productPrice)=>{
    await pages.productPage.checkProductPriceByID()
})
