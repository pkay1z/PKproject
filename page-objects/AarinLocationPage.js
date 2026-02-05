export class AarinLocationPage{
  constructor(page){
  this.page=page


this.pageHeader = page.getByText('Where Are You?');
this.addressbox = page.getByRole('textbox', { name: 'Enter new location' })
this.address = page.getByText('10 Iluseyi Street, Lagos, Nigeria')
this.continueButton =  page.getByRole('button', { name: 'continue' })
this.profile = page.getByText('Profile')


}

visit = async () =>{
await this.page.goto('https://cr-mobile.tomati.app/user')

}

waitForPageHeading = async ()=> {
     await this.pageHeader.waitFor();
  }

enterAddress = async () => {
  await this.addressbox.waitFor();
  await this.addressbox.click();
  await this.addressbox.type('10 ilu', { delay: 100 });
  await this.address.waitFor();
  await this.address.click();
  await this.continueButton.waitFor();
  await this.continueButton.click();
  
}


gotoLogin = async()=>{
  await this.profile.waitFor()
  await this.profile.click()

}

}