import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductPage.js"
import { Navigation } from "../page-objects/Navigation.js"
import { Checkout } from "../page-objects/Checkout.js"
import { LoginPage } from "../page-objects/LoginPage.js"
import { RegisterPage } from "../page-objects/RegisterPage.js"
//import { MyAccount } from "../page-objects/MyAccount.js"
import { DeliveryDetails } from "./../page-objects/DeliveryDetails.js"
test.only("New user full end-to-end test journey", async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.visit();
    await productsPage.addProductToBasket(0);
    await productsPage.addProductToBasket(4);
    await productsPage.addProductToBasket(2);

    const navigation = new Navigation(page);
    navigation.getBasketCount;
    await navigation.goToCheckout();
  
    const checkout = new Checkout(page);
    await checkout.removeCheapestProduct();
    await checkout.continueToCheckout();

    const login = new LoginPage(page);
    await login.moveToSignup();

    const registerPage = new RegisterPage(page);
    await registerPage.signUpAsNewUser();
    const deliveryDetails = new DeliveryDetails(page)
    await deliveryDetails.fillDetails()
    await deliveryDetails.continueToPaymentButton.click();

})