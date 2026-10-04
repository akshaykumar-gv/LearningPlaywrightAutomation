import {test, expect} from '@playwright/test';

test("Handling Simple DD", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");


    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown",{value:"1"});
    await page.waitForTimeout(2000);

    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown",{label:'Option 2'});
    await page.waitForTimeout(2000);


    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown",{index:1});
    await page.waitForTimeout(2000);
})