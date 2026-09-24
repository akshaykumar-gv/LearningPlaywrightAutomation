import { test, expect, Locator } from '@playwright/test';

test("Handling Web Tables", async ({ page }) => {
    //**Objective** :  To find the Helen Bankett first in the web table, and following the web table, please find which country she belongs to.
    //**Concept** -  following sibling, Dynamic XPath creation. -> Playwright Locator.

    await page.goto("https://awesomeqa.com/webtable.html");
    // const trLocator:Locator = page.locator("tbody tr");
    // console.log(await trLocator.filter({hasText:"Helen Bennett"}).locator("td").nth(2).innerText());
    console.log(await page.getByRole('row').filter({hasText:"Helen Bennett"}).locator("td").nth(2).innerText());
});