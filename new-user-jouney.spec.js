import {test} from '@playwright/test'
import { AarinLocationPage } from './page-objects/AarinLocationPage';
import { StorePage} from './page-objects/StorePage';
import { ItemsPage} from './page-objects/ItemsPage';
import { CartPage} from './page-objects/cartPage';
import { CheckoutPage} from './page-objects/checkoutPage';
import {LoginPage} from './page-objects/loginPage'
import {PaymentPage} from './page-objects/paymentPage'






test('Aarin User Journey', async ({page}) => {

  const aarinLocationPage = new AarinLocationPage(page);
  await aarinLocationPage.visit();
  await aarinLocationPage.enterAddress();
  await aarinLocationPage.gotoLogin()
  const loginPage = new LoginPage(page);
  await loginPage.signIn();
  await loginPage.enterOtp();
  await loginPage.verifyOtp();
  const storePage = new StorePage(page);
  await storePage.selectStore();
  const itemsPage = new ItemsPage(page);
  await itemsPage.chooseItem();
  const cartPage = new CartPage(page);
  await cartPage.enterCart();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.completeCheckout();
  const paymentPage = new PaymentPage(page)
  await paymentPage.payOrder()
  // await page.pause()
 

})



