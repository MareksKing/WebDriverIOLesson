export class CheckoutCompletePage{

    checkoutCompletePage(){
        return $('#checkout_complete_container');
    }

    backHomeButton(){
        return $('button[id^="back-to-products"]')
    }
}