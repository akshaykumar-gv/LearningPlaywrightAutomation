import { test, expect, Locator } from '@playwright/test';

test.describe('Handle the Flipkart search SVG', () => {
    const URL = 'https://www.flipkart.com/search'

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    });

    test("handle the flipkart svg", async ({ page }) => {
        const popupCancelLocator:Locator = page.getByText('✕', { exact: true });
        if(await popupCancelLocator.count())
            await popupCancelLocator.click();

        await page.getByRole('textbox', { name: 'Search for Products' }).first().fill("macmini");
        const svgLocators:Locator = page.locator('svg');
        await svgLocators.first().click();

        await page.waitForTimeout(500);

        const prouctNames:Locator = page.locator(".pIpigb");
        for(let i=0; i<await prouctNames.count(); i++){
            console.log(await prouctNames.nth(i).textContent());
        }

        await page.waitForTimeout(2000);
    })
})
