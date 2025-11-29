import test from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";


test('Verify users can login successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const email = 'cijnuj@ramcloud.us';

    await page.goto('http://railwayb1.somee.com/');

    await homePage.goToLoginPage();

    await loginPage.login(email, '123456789');

    await homePage.shouldWelcomeMsgVisible(email);
})