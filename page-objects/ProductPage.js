export class ProductPage {
    itemListContainer(){
        return $('#inventory_container');
    };

    productPageHeaderTitle(){
        return $('.title');
    };

    productInventoryList(){
        return $('.inventory_list').$$('.inventory_item');
    };

    productCartBadge(){
        return $('.shopping_cart_badge');
    };

    sortingOptionButton(){
        return $('.product_sort_container');
    };

    sortingOptionsValues(){
        return this.sortingOptionButton().$$('option');
    }

    async chooseSortingOption(sortingOption){
        const optionList = await this.sortingOptionsValues();

        for (let i = 0; i < optionList.length; i++) {
            const optionName = await optionList[i].getText();
            if (optionName === sortingOption){
                await optionList[i].click();
            }
            
        }
    }
}