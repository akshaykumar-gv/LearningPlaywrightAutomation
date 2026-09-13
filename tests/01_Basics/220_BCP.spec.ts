import {Browser, BrowserContext, chromium, Page, test} from '@playwright/test';


test("BCP, Browser", async()=>{
    const browser:Browser = await chromium.launch();
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto("https://google.com")


    const context2:BrowserContext = await browser.newContext();
    const page2:Page = await context2.newPage();
    await page2.goto("https://google.com");


    await page.close();
    await context.close();

    await page2.close();
    await context2.close();

    await browser.close();
})
