export class LoginPage{
  constructor(page){
   this.page = page

   this.codeDropdown = page.getByText('ng', { exact: true })
   this.countryCode = page.getByText('+234', { exact: true })
   this.phonenumberBox = page.getByPlaceholder('07000000000');
   this.signinButton = page.getByRole('button', { name: 'Sign in' });

   this.otpBox =  page.getByPlaceholder('• • • • • •')
   this.verifyButton = page.getByRole('button', { name: 'Verify & Continue' })

  }

signIn = async () =>{
  await this.codeDropdown.waitFor();
  await this.codeDropdown.click();
  await this.countryCode.waitFor()
  await this.countryCode.click()
  await this.phonenumberBox.waitFor()
  await this.phonenumberBox.fill('8033241189');
  await this.signinButton.waitFor();
  await this.signinButton.click();
}

enterOtp = async()=>{
await this.otpBox.waitFor();
await this.otpBox.fill('123456');
}

verifyOtp = async() =>{
  await this.verifyButton.click()
}




}












