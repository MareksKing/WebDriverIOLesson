import { LoginPage } from '../page-objects/LoginPage.js';
import { ProductPage } from '../page-objects/ProductPage.js';

class Pages {
    constructor() {
        this.loginPage = new LoginPage();
        this.productPage = new ProductPage();
    }
}

export const pages = new Pages();
