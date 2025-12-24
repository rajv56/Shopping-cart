
export class Navigation {
    constructor(page) {
        this.page = page

        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
         this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
         this.myAccountLink = page.getByRole('link',{name: 'My Account'})
         this.art = page.getByRole('link',{name: 'Art'})

    }

    getBasketCount = async () => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.innerText()
        return parseInt(text, 10)
    }

    goToCheckout = async () => {
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
        await this.page.waitForURL("/basket")
    }

    goToMyAccountPage = async () => {

        await this.myAccountLink.waitFor();
        await this.goToMyAccountPage.click();
    }

    goToProductPage = async () => {
        await this.art.waitFor();
        await this.art.click();

    }

}