export class ProductItem {
    productItemName() {
        return $('.inventory_details_name');
    }

    productItemDescription() {
        return $('.inventory_details_desc');
    }

    productItemPrice() {
        return $('.inventory_details_price');
    }

    async validateProductItemDetails(name, description, price) {
        const actualProductItemName = await this.productItemName();
        const actualProductItemDescription =
            await this.productItemDescription();
        const actualProductItemPrice = await this.productItemPrice();

        await expect(actualProductItemName).toHaveText(name);
        await expect(actualProductItemDescription).toHaveText(description);
        await expect(actualProductItemPrice).toHaveText(price);
    }
}
