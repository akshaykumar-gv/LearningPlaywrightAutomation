import {test, expect} from '@playwright/test';

test("GotoCommand Options", async({page})=>{
    await page.goto("https://google.com",{
        waitUntil:'domcontentloaded',
        timeout: 5000,
        referer:"https://google.com",
    });

    // await page.pause();
})