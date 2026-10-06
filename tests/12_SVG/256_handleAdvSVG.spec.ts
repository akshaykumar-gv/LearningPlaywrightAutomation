import { test, expect, Locator } from '@playwright/test';

test.describe('Handle the Advanced SVGs', () => {
    const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    });

    test("handle adv svgs", async ({ page }) => {
        const redCircleLoc:Locator = page.getByTestId("shape-circle-red");
        await redCircleLoc.click();
        expect(await redCircleLoc.getAttribute("class")).toContain("is-selected");

        const blueCircleLoc:Locator = page.getByTestId("shape-circle-blue");
        await blueCircleLoc.click();
        expect(await blueCircleLoc.getAttribute("class")).toContain("is-selected");

        const q3BarLoc:Locator = page.getByRole('button', {name:/Q3 bar/});
        await q3BarLoc.click();
        expect(await q3BarLoc.getAttribute("class")).toContain("is-active");

        await page.getByRole('radio', { name: '4 stars' }).click();

        let allBars = await page.locator(".bar").all();
        for (const bar of allBars) {
            const q = await bar.getAttribute('data-quarter');
            const h = await bar.getAttribute('height');
            console.log(q);
            console.log(h);
        }
    })
})
