import { When, Then } from "@wdio/cucumber-framework";
import { pages } from "../support/pages";


Then(/^User sees the cart checkout summary$/,async function (data) {
    await pages.checkoutSummaryPage.checkoutSummary().waitForDisplayed({timeout: 10000});
    await pages.checkoutSummaryPage.checkIfTaxMatchesThePrice(data.rows()[0][0]);
});
When(/^User clicks on the Finish button$/, async function () {
    await pages.checkoutSummaryPage.finishOrderButton().click();
});