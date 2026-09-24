import { test, expect, Locator } from '@playwright/test';

test("Handling Web Tables", async ({ page }) => {
    //Navigate to URL : https://app.thetestingacademy.com/playwright/webtable
    //Search Rohan Mehta and click on the checkbox before his name 
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    await page.getByRole('row').filter({hasText:"Rohan Mehta"}).getByRole('checkbox').click();
    await page.pause();

});