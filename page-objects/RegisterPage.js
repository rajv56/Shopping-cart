import { faker } from '@faker-js/faker';

export class RegisterPage {
    constructor(page) {
        this.page = page

        this.emailLocator = page.getByPlaceholder('e-mail')
        this.passwordLocator = page.getByPlaceholder('password')
        this.registerButton = page.getByRole('button', { name: 'register' })
    }

    signUpAsNewUser = async () => {
        // type into email and password using faker 
        const emailValue = faker.internet.email();
        const passwordValue = faker.internet.password();
        console.log('email value from faker  : ' + emailValue + 'password value from faker' + passwordValue);
        await this.emailLocator.fill(emailValue);
        await this.passwordLocator.fill(passwordValue)
        await this.registerButton.waitFor()
        await this.registerButton.click()
           }
}