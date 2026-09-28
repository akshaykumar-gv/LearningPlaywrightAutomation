import { test, expect, Locator } from '@playwright/test';

test("Automate Orange HR Scenarios", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const usernameLocator: Locator = page.getByRole('textbox', { name: 'username' });
    const passwordLocator: Locator = page.getByRole('textbox', { name: 'password' });
    const loginButtonLocator: Locator = page.getByRole('button', { name: 'Login' });
    const username: string = "Admin";
    const password: string = "admin123";

    await usernameLocator.fill(username);
    await passwordLocator.fill(password);
    await loginButtonLocator.click();

    const pimLink = page.getByRole('link', { name: 'PIM' });
    const addButton = page.getByRole('button', { name: 'Add' });
    await pimLink.click();
    await addButton.click();

    const firtnameTBLoc = page.getByPlaceholder('First Name');
    const lastnameTBLoc = page.getByPlaceholder('Last Name');
    const middlenameTBLoc = page.getByPlaceholder('Middle Name');
    const saveBtnLoc = page.getByRole('button', { name: 'Save' });
    const firstName = "Koushik";
    const middleName = "M";
    const lastName = "Maridi";

    await firtnameTBLoc.fill(firstName);
    await middlenameTBLoc.fill(middleName);
    await lastnameTBLoc.fill(lastName);
    await saveBtnLoc.click();

    const successToaster = page.locator('#oxd-toaster_1');

    await successToaster.waitFor();

    expect(await successToaster.innerText()).toContain("Success");
    // page.getByRole('textbox',{name:"Driver's License Number"})
    await page.waitForTimeout(3000);

    await pimLink.click();

    await page.locator(".oxd-table-body").waitFor();

    let row;
    while (true) {
        row = page.getByRole('row').filter({ hasText: `${firstName} ${middleName}` });
        if (await row.isVisible()) {
            await row.locator(".oxd-icon.bi-trash").click();
            await page.locator("[role='document']").waitFor();
            await page.getByRole('button', { name: ' Yes, Delete ' }).click();
            await successToaster.waitFor();
            expect(await successToaster.innerText()).toContain("Success");
            break;
        }
        const nextbutton = page.locator(".oxd-pagination-page-item--previous-next");
        if(!await nextbutton.last().isVisible() || await nextbutton.last().isDisabled()){
            throw new Error(`${firstName} ${middleName} Employee Not available to Delete`);
        }
        await nextbutton.last().click();
        await page.locator(".oxd-table-body").waitFor();
    }

    await page.locator(".oxd-table-body").waitFor();
    await page.locator(".oxd-pagination__ul").getByRole('button',{name:'1'}).click();
    await page.locator(".oxd-table-body").waitFor();
    while (true) {
        row = page.getByRole('row').filter({ hasText: `${firstName} ${middleName}` });
        if (await row.isVisible()) {
            throw new Error(`${firstName} ${middleName} Still available to delete`);
        }
        const nextbutton = page.locator(".oxd-pagination-page-item--previous-next").filter({has: page.locator(".oxd-icon.bi-chevron-right")});
        if(!await nextbutton.last().isVisible() || await nextbutton.last().isDisabled()){
           console.log(`${firstName} ${middleName} Employee is Deleted`);
           break;
        }
        await nextbutton.last().click();
        await page.locator(".oxd-table-body").waitFor();
    }

})