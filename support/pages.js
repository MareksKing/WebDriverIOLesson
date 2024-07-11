import { LoginPage } from '../page-objects/LoginPage.js';
import { ProductPage } from '../page-objects/ProductPage.js';
import { ProductItem } from '../page-objects/ProductItem.js';
import { CartPage } from '../page-objects/CartPage.js';
import { ShippingFormPage } from '../page-objects/ShippingFormPage.js';
import { CheckoutSummaryPage } from '../page-objects/CheckoutSummaryPage.js';
import { CheckoutCompletePage } from '../page-objects/CheckoutCompletePage.js';

class Pages {
    constructor() {
        this.loginPage = new LoginPage();
        this.productPage = new ProductPage();
        this.productItem = new ProductItem();
        this.cartPage = new CartPage();
        this.shippingFormPage = new ShippingFormPage();
        this.checkoutSummaryPage = new CheckoutSummaryPage();
        this.checkoutCompletePage = new CheckoutCompletePage(); 
    }
}

export const pages = new Pages();
