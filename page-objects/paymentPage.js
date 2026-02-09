import {expect} from '@playwright/test'

export class PaymentPage{
  constructor(page){
  this.page=page


  this.frameLocator = page.frameLocator('iframe[src*="paystack"]');
  this.card = this.frameLocator.getByTestId('card-nav')
  this.successRadio =   this.frameLocator.getByText('Success')
  this.paymentButton =  this.frameLocator.getByTestId('testCardsPaymentButton')
  this.paymentSuccessful = this.frameLocator.getByText('Payment Successful')
  this.confirmPayment = page.getByText('confirming payment, please')
  this.confirmedPayment = page.getByRole('heading', { name: 'Payment Successful!' });
  this.trackOrder =  page.getByRole('button', { name: 'Track Order' })
  this.orderPage = page.getByText('Looking for rider');
 

}

payOrder = async()=>{
  
 
  await this.frameLocator.getByText('Use any of the options below to test').waitFor({ timeout: 15000 });
  await this.successRadio.click();
  await this.paymentButton.click();
  await expect(this.paymentSuccessful).toBeVisible({ timeout: 20000 });
  await this.confirmPayment.waitFor({ timeout: 60000 })
  await expect(this.confirmPayment).toBeVisible();
 
  await expect(this.confirmedPayment).toBeVisible({ timeout: 60000 });
  await this.trackOrder.waitFor()
  await this.trackOrder.click()
  await expect(this.orderPage).toHaveText('Looking for rider');



   }
  

}




