import {test, expect, Locator} from '@playwright/test';

test('Handling Webtables with Pagination',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const name:string = "Lukas Schneider";
    let row:Locator;
    const nextButton:Locator = page.getByRole('button',{name:"Next"});
    while(true){
        row = page.getByRole('row').filter({hasText: name});
        if(await row.isVisible())
            break;
        if(!await nextButton.isVisible() || await nextButton.isDisabled()){
            throw new Error("Element not found");
        }
        await nextButton.click();
    }

    const email:string = await row.locator('[data-col="email"]').innerText();
    const country:string = await row.locator('[data-col="country"]').innerText();

    console.log(`Name: ${name} with Email: ${email} lives in country ${country}`);
})