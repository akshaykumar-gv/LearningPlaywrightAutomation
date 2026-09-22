import {chromium} from "@playwright/test";

export async function generateSessionStorage(){
    const browser = await chromium.launch();
    const context = await browser.newContext(); 
    const page = await context.newPage(); 
    await page.goto("https://test.hello.com/");
    await page.getByRole('textbox',{name:'Username'}).fill("DealerAutomation");
    await page.getByRole('textbox',{name:'Password'}).fill("P@ssw0rd");
    await page.getByRole('button',{name:'LOGIN'}).click();
    await page.waitForURL('**/motor-dealers/**');
    await page.waitForLoadState('domcontentloaded');

    await context.storageState({path:"storageStage.json"});
    await browser.close();
}