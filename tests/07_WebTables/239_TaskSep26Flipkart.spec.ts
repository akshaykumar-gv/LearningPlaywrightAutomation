import { test, expect } from '@playwright/test';

test("Sep 26 task 2 Flipkart", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.getByText('✕', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Search for Products' }).first().fill("DSLR Camera");
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('.nZIRY7').first().waitFor();

    while (true) {
        console.log("==============================================================");
        const products = page.locator('.nZIRY7').filter({ has: page.locator('.RG5Slk') });
        if (!await products.count())
            break;
        for (let i = 0; i < await products.count(); i++) {
            const product = products.nth(i);
            const name = await product.locator('.RG5Slk').innerText();
            const price = (await product.locator('.hZ3P6w.DeU9vF').innerText()).replace('₹', '');
            console.log(name, price);
        }
        let nextButtonLocator = page.getByRole('link', { name: 'Next' });
        if (!(await nextButtonLocator.isVisible())) {
            console.log("Next Button is not visible");
            break;
        }
        await nextButtonLocator.click();
        await page.locator('.nZIRY7').first().waitFor();
    }
})