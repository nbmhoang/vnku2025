import test from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { TimetablePage } from "../pages/timetable.page";


test('Verify users can view timetable', async ({ page }) => {
    const homePage = new HomePage(page);
    const timeTablePage = new TimetablePage(page);

    const departStation = 'Sài Gòn';
    const arriveStation = 'Đà Nẵng';

    await page.goto('http://railwayb1.somee.com/Page/TrainTimeListPage.cshtml');

    console.log(await timeTablePage.getDepartTime(departStation, arriveStation))
    console.log(await timeTablePage.getArriveTime(departStation, arriveStation));

    await timeTablePage.checkPrice(departStation, arriveStation);

    console.log()  
})