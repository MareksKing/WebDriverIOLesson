export class CheckoutSummaryPage{

    checkoutSummary(){
        return $('#checkout_summary_container')
    }

    finishOrderButton(){
        return $('button[id^="finish"]')
    }

    productItemPrice(){
        return $('.inventory_item_price');
    }

    summaryTotalPrice(){
        return $('.summary_total_label')
    }

    async checkIfTaxMatchesThePrice(tax){
        const priceWithoutSalesTax = await this.productItemPrice().getText();
        const finalPriceWithTax = await this.summaryTotalPrice().getText();

        const finalPriceWithTaxNumber = Number(finalPriceWithTax.split('$')[1]);
        const priceWithoutSalesTaxNumber = Number(priceWithoutSalesTax.split('$')[1]);

        let salesTaxAmount = Math.round((priceWithoutSalesTaxNumber * tax/100) * 100)/100;
        let priceWithSalesTax = priceWithoutSalesTaxNumber + salesTaxAmount;

        await expect(finalPriceWithTaxNumber).toEqual(priceWithSalesTax);
    }
    
}