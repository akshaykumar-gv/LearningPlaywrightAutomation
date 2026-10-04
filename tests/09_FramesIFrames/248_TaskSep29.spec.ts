import {test, expect} from '@playwright/test';

test('Task Sep 29 QA Profile',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

    const firstNameTBLoc = page.getByRole('textbox',{name:'First name'});
    const lastNameTBLoc = page.getByRole('textbox',{name: 'Last name'});
    const maleRadioLoc = page.getByTestId("gender-male");
    const femaleRadioLoc = page.getByRole('radio',{name:'Female'});
    const expDDLoc = page.getByTestId('years-experience');
    const dateInputLoc = page.locator('#profile-date');


    const manualTesterRadioLoc = page.getByTestId("profession-manual");
    const automationTesterRadioLoc = page.getByTestId('profession-automation');

    const uftCBLoc = page.getByRole('checkbox',{name:'UFT'});
    const protractorCBLoc = page.getByLabel('Protractor');
    const seleWBCBLoc = page.getByRole('checkbox',{name:'Selenium Webdriver'});

    const continentCBsArrLoc = page.locator('[aria-label="Continents"] input');

    await firstNameTBLoc.fill("Hello");
    await lastNameTBLoc.fill("World");

    expect(await firstNameTBLoc.inputValue()).toBe("Hello");
    expect(await lastNameTBLoc.inputValue()).toBe("World");


    await maleRadioLoc.check();
    await expect(maleRadioLoc).toBeChecked();
    await expect(femaleRadioLoc).not.toBeChecked();

    await expDDLoc.selectOption('5');
    await expect(expDDLoc).toHaveValue('5');

    await dateInputLoc.fill("2026-05-04");
    expect(await dateInputLoc.inputValue()).toBe('2026-05-04');

    await automationTesterRadioLoc.check();
    await expect(automationTesterRadioLoc).toBeChecked();
    await expect(manualTesterRadioLoc).not.toBeChecked();

    await uftCBLoc.check();
    await protractorCBLoc.check();
    await expect(uftCBLoc).toBeChecked();
    await expect(protractorCBLoc).toBeChecked();
    await expect(seleWBCBLoc).not.toBeChecked();

    for(let i=0; i<3;i++){
        await continentCBsArrLoc.nth(i).check();
    }
    let contCheckedCount = 0;
    for(let i=0;i<await continentCBsArrLoc.count(); i++){
        if(await continentCBsArrLoc.nth(i).isChecked())
            contCheckedCount++;
    }
    expect(contCheckedCount).toBe(3);

    await page.getByTestId('tab-wait').click();
    const content = await page.locator('#selenium-tab-panel code').textContent();
    expect(content).toContain("new WebDriverWait(driver, Duration.ofSeconds(10)).until(ExpectedConditions.elementToBeClickable(by));");

    await page.waitForTimeout(5000);


})