export class ShippingFormPage{


    checkoutForm(){
        return $('.checkout_info');
    }

    
    nameField(){
        return $('#first-name');
    }

    surnameField(){
        return $('#last-name');
    }

    postalCodeField(){
        return $('#postal-code');
    }

    cartContinueButton(){
       return $('input[id^="continue"]') 
    }

}