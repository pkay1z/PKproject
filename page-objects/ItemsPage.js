export class ItemsPage{
  constructor(page){
    this.page=page



    this.product = page.getByText('5Alive')
    this.productOption= page.getByText('5alive - Pulpy Lemon')
  // await page.locator('div').filter({ hasText: /^5Alive Pulpy Orange, Pulpy Lemon, Mango Bits$/ }).first().click();
    this.chooseOption =  page.getByRole('button', { name: 'Add ₦' })
  }


  chooseItem = async()=>{
    await this.product.waitFor();
    await this.product.click();
    await this.productOption.waitFor();
    await this.productOption.click();
    await this.chooseOption.waitFor();
    await this.chooseOption.click();

  }
}