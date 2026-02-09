export class CheckoutPage{
  constructor(page){
  this.page=page

  this.deliveryPartner =page.locator('#CustomRadio').first()
  this.paymentMethod =  page.getByText('Bank Transfer / Visa /')
  this.order =  page.getByRole('button', { name: 'Place Order ₦' })

  }

  completeCheckout = async ()=>{
    await this.deliveryPartner.waitFor();
    await this.deliveryPartner.click();
    await this.paymentMethod.waitFor();
    await this.paymentMethod.click();
    await this.order.waitFor();
    await this.order.click();
  
  

  }

}