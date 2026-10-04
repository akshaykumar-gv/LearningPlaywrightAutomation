import { test, expect } from '@playwright/test';

test.describe.serial('Handle js alerts', () => {
    test.beforeEach("Navigate to Page", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    })

    test("Handle JS Alert - Accept Alert", async ({ page }) => {
        page.once('dialog', async (dialogue) => {
            let message = dialogue.message();
            expect(message).toBe("I am a JS Alert");
            await dialogue.accept();

        })
        await page.getByText("Click for JS Alert").click();
        await expect(page.locator("#result")).toContainText("You successfully clicked an alert");
    })

    test("Handle JS Alert - Dismiss and Accept", async ({ page }) => {
        page.once('dialog', async (dialog) => {
            await expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.dismiss();
        });

        await page.getByText("Click for JS Confirm").click();
        await expect(page.locator("#result")).toContainText("You clicked: Cancel");

        page.once('dialog', async (dialog) => {
            await expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.accept();
        });
        await page.getByText("Click for JS Confirm").click();
        await expect(page.locator("#result")).toContainText("You clicked: Ok");
    })

    test("Handle JS Alerts - Prompt",async({page})=>{
        page.once('dialog',async(dialog)=>{
            await expect(dialog.message()).toBe("I am a JS prompt");
            await dialog.accept("Akshay");
        });

        await page.getByText("Click for JS Prompt").click();
        await expect(page.locator("#result")).toContainText("You entered: Akshay");
    })
})