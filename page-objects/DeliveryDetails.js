//import { passengerData } from '../testData/passengerData'
import { faker } from '@faker-js/faker'
 export class DeliveryDetails {
    constructor(page) {
        this.page = page

        this.firstNameInput = page.locator('[data-qa="delivery-first-name"]')
        this.lastNameInput = page.locator('[data-qa="delivery-last-name"]')
        this.streetInput = page.locator('[data-qa="delivery-address-street"]')
        this.postcodeInput = page.locator('[data-qa="delivery-postcode"]')
        this.cityInput = page.locator('[data-qa="delivery-city"]')
        this.countryDropdown = page.locator('[data-qa="country-dropdown"]')
        this.continueToPaymentButton = page.locator('.continue-to-payment-button')
        
    }

    fillDetails = async () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const street = faker.location.streetAddress();
        const postalCode = faker.location.zipCode();
        const city = faker.location.city();

        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.streetInput.fill(street)
        await this.postcodeInput.fill(postalCode)
        await this.cityInput.fill(city)
        await this.countryDropdown.waitFor()
        await this.countryDropdown.selectOption("United States of America")
        
    }
}
