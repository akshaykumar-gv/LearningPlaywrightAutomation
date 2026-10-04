import {test, expect} from '@playwright/test';

test('verify keyboard action', async({page})=>{
    await page.goto("https://keycode.info");

    await page.keyboard.press('KeyA');
    await page.screenshot({path:"keyA.png"});

    await page.waitForTimeout(2000);

    await page.keyboard.press("Control+Shift+F");
    await page.screenshot({path:"F.png"});
    await page.waitForTimeout(2000);

    await page.keyboard.down("KeyA");


})