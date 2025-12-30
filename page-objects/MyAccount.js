

 export class MyAccount {
    constructor(page) {
        this.page=page
        this.loginLabel = page.locator('.mb-6');
        //write all locators here 
        this.pageHeading = page.getByRole('heading', { name: 'My Account' })

    }


    // methods 




 }