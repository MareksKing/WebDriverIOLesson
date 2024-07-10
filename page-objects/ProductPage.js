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

    async getProductItemNameWithName(name) {
        const productList = await this.productInventoryList();

        for (let i = 0; i < productList.length; i++) {
            const product = await productList[i].getText();
            if (product === name) {
                return productList[i].click();
            }
        }
    }

    productItemPriceAndCurrency() {
        return this.productInventoryList().$$('inventory_item_price');
    }

    productItemPrice() {
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

    async checkProductPriceByName(name, price) {
        const productPrice = await this.productItemPrice();
        await expect(productPrice).toHaveText(price);
    }

    async getProductItemDescriptionByName(name) {
        const productList = await this.productInventoryList();

        for (let i = 0; i < productList.length; i++) {
            const productName = await this.productItemName(i).getText();
            if (productName === name) {
                return await productList[i].$('.inventory_item_desc').getText();
            }
        }
    }

    async getProductItemPriceByName(name) {
        const productList = await this.productInventoryList();

        for (let i = 0; i < productList.length; i++) {
            const productName = await this.productItemName(i).getText();
            if (productName === name) {
                return await productList[i]
                    .$('.inventory_item_price')
                    .getText();
            }
        }
    }

    getProductItemByName(name) {
        return $(
            `//div[@class="inventory_item_name " and contains(text(), "${name}")]`,
        );
    }
}
