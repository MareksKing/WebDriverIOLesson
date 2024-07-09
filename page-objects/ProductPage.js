export class ProductPage {
    itemListContainer() {
        return $('#inventory_container');
    }

    productPageHeaderTitle() {
        return $('.title');
    }

    productInventoryList() {
        return $('.inventory_list').$$('.inventory_item');
    }

    productCartBadge() {
        return $('.shopping_cart_badge');
    }

    sortingOptionButton() {
        return $('.product_sort_container');
    }

    sortingOptionsValues() {
        return this.sortingOptionButton().$$('option');
    }


    productItemName(id) {
        return this.productInventoryList()[id].$('.inventory_item_name');
    }

    productItemPriceAndCurrency(){
        return this.productInventoryList().$$('inventory_item_price');
    }

    productItemPrice(){
        const splitPrice = this.productItemPriceAndCurrency();
        console.log(splitPrice);
        return splitPrice.join('');
    }



    async chooseSortingOption(sortingOption) {
        const optionList = await this.sortingOptionsValues();

        for (let i = 0; i < optionList.length; i++) {
            const optionName = await optionList[i].getText();
            if (optionName === sortingOption) {
                await optionList[i].click();
            }
        }
    }

    async checkProductNameByID(id, name) {
        const productName = await this.productItemName(id);
        

        await expect(productName).toHaveText(name);
    }

    async checkProductPriceByID(price){
        const productPrice = await this.productItemPrice();
        await expect(productPrice).toHaveText(price)
    }
}
