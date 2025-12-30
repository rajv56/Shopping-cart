import { test } from "@playwright/test"
import { MyAccountPage } from "./../page-objects/MyAccountPage.js"
import { getLoginToken } from "./../api-calls/getLoginToken.js"


test("My Account using cookie injection", async ({ page }) => {
   // Make a request to get login token
    const loginToken = await getLoginToken()
    console.warn({loginToken})
   
    const myAccount = new MyAccountPage(page)
    await myAccount.visit();
     await page.evaluate(([loginTokenInsideBrowserCode]) => {
        document.cookie = "token=" + loginTokenInsideBrowserCode
    }, [loginToken])
    await myAccount.visit();
    await myAccount.waitForPageHeading();
})