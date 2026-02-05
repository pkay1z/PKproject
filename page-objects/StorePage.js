import {expect} from '@playwright/test'

export class StorePage{
  constructor(page){
    this.page=page
    this.homePage= page.getByText('🍗 All restaurants near you')
   this.storeSelect = page.getByText('Chicken Republic - Ilupeju')

}


selectStore = async() =>{
await expect(this.homePage).toBeVisible();
await this.storeSelect.click();
 }

}