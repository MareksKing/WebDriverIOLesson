import { When,Then } from "@wdio/cucumber-framework";
import { pages } from "../support/pages";


Then(/^User sees the checkout complete page$/, async function () {
    await pages.checkoutCompletePage.checkoutCompletePage().waitForDisplayed({timeout: 10000});
});
When(/^User clicks the back home button$/, async function () {
    await pages.checkoutCompletePage.backHomeButton().click();
});