import {test, expect} from '@playwright/test';

test('Verify Drag and Drop',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const columnALoc = page.locator("#column-a");
    const columnBLoc = page.locator("#column-b");
    await columnALoc.dragTo(columnBLoc);
    await page.waitForTimeout(3000);
})