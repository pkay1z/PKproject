export class CartPage{
  constructor(page){
    this.page=page

 this.cart = page.getByRole('tab', { name: 'Cart' })
  this.checkoutButton =  page.getByRole('button', { name: 'Checkout ₦' })

  }

enterCart = async () => {
  await this.cart.waitFor();
  await this.cart.click();
  await this.checkoutButton.waitFor();
  await this.checkoutButton.click();
  await this.page.pause



}

}