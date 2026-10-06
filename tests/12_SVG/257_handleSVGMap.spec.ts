import { test, expect, Locator } from '@playwright/test';

test.describe('Handle the SVG Map', () => {
    const URL = 'https://simplemaps.com/svg/country/in'

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    });

    test("handle svg map", async ({ page }) => {
        const allStatesLoc : Locator[] = await page.locator("//*[@id='admin1_map_inner']//*[name()='path']").all();

        for(let state of allStatesLoc){
            let classAttr =await state.getAttribute("class");
            console.log(classAttr);

            if(classAttr?.includes("INTG"))
                await state.click();

        }
    })
})
