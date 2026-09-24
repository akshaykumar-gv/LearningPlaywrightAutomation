import {test, expect, Locator} from '@playwright/test';

test("Handling Multiple Elements Test",async({page})=>{
    
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const accountNavigationlinks: Locator[] = await page.locator("div a.list-group-item").all();
    //  accountNavigationlinks.forEach(async a=>console.log(await a.textContent()));
    for(let i=0; i<accountNavigationlinks.length; i++){
        console.log(await accountNavigationlinks[i].textContent());
    }
    console.log("_______________________.allTextContents()_________________________")
    const accountNavigationlinksTextContent: string[] = await page.locator("div a.list-group-item").allTextContents();
    for(let test of accountNavigationlinksTextContent){
        console.log(test);
    }

    console.log("_______________________.allInnerTexts()_________________________")
    const accountNavigationlinksInnerTexts: string[] = await page.locator("div a.list-group-item").allInnerTexts();
    for(let test of accountNavigationlinksInnerTexts){
        console.log(test);
    }

    console.log("_________________click on link forgotten passsword______________________");
    const accountNavigationlink: Locator = page.locator("div a.list-group-item");
    await accountNavigationlink.filter({hasText:"Forgotten Password"}).click();

    // await page.pause();
    await expect(page.url()).toMatch(/#forgotten-password/);
})