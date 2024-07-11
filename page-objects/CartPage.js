export class CartPage {
    checkoutButton(){
        return $('button[id^="checkout"]');
    }

    async checkIfProductMatchesInCart(name){
        const productName = $('.inventory_item_name');
        await expect(productName).toHaveText(name);
    }
}
