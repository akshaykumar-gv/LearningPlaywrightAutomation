import {test, expect, Locator} from '@playwright/test';

test("Multiple Elements get attribute",async({page})=>{
    
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const accountNavigationlinks: Locator[] = await page.locator("div a.list-group-item").all();
    //  accountNavigationlinks.forEach(async a=>console.log(await a.textContent()));
    for(let i=0; i<accountNavigationlinks.length; i++){
        console.log(await accountNavigationlinks[i].getAttribute("href"));
    }
})