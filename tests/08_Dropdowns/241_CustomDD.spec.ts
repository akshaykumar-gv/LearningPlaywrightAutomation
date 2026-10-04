import { test, expect, Locator } from '@playwright/test';

test("Handling Custom Dropdwon", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    const programmingLanguageDDLocator: Locator = page.getByTestId('lang-trigger');
    const webFrameworkDDLoc: Locator = page.getByRole('button', { name: 'Web framework' });
    const expLevelDDLoc: Locator = page.getByRole('button', { name: 'Experience level' });

    await programmingLanguageDDLocator.click();
    await page.getByRole('option', { name: 'JavaScript' }).click();

    await webFrameworkDDLoc.click();
    await page.getByRole('option', { name: 'React', exact: true }).click();

    await expLevelDDLoc.click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

    await page.waitForTimeout(5000);
})