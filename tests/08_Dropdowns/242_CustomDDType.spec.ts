import { test, expect, Locator } from '@playwright/test';

test("Handling Custom Dropdwon", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    const singleSearchableDDLoc: Locator = page.getByTestId('rs-single');
    const multichipDDLoc: Locator = page.getByTestId('rs-multi');
    const creatableMultiDDLoc: Locator = page.locator("#rs-creatable");
    const groupDDLoc: Locator = page.getByTestId("rs-grouped");
    const asyncDDLoc:Locator = page.locator("#rs-async");

    await singleSearchableDDLoc.click();
    await singleSearchableDDLoc.getByRole('textbox').pressSequentially("Cy");
    await page.getByRole('option',{name:'Cypress'}).click();

    await multichipDDLoc.click();
    await multichipDDLoc.getByRole('textbox').press('p');
    await page.getByRole('option',{name:'Playwright'}).click();
    await page.getByRole('option',{name:'Pytest'}).click();
    await page.keyboard.press('Escape');

    await asyncDDLoc.click();
    await asyncDDLoc.getByRole('textbox').pressSequentially('de');
    await page.getByRole('option',{name:'Delhi'}).click();



    await page.waitForTimeout(5000);
})