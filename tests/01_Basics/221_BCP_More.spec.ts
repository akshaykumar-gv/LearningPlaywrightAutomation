import {test, expect} from '@playwright/test';

test("BCP More Examples",async({browser})=>{
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const context3 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    const page3 = await context3.newPage();

    await page1.goto("https://google.com");
    await page2.goto("https://google.com");
    await page3.goto("https://google.com");

    await page1.close();
    await page2.close();
    await page3.close();

})