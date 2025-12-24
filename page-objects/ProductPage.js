export class ProductsPage {
    constructor(page) {
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
    }


    visit = async () => {
        await this.page.goto("/")
    }

    /* 
        async  addProductToBasket() {
        await this.addButtons.nth(1).click()
        await this.addButtons.nth(2).click()
        }
    
    */


    addProductToBasket = async (index) => {
        await this.addButtons.nth(index).waitFor()
        await this.addButtons.nth(index).click()
    }
}