import { chromium } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export async function generateSessionStorage() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await page.goto("https://test.hello.com/");
    if (!username || !password) {
        throw new Error("USERNAME and PASSWORD environment variables must be set");
    }
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('**/motor-dealers/**');
    await page.waitForLoadState('domcontentloaded');

    await context.storageState({ path: "storageStage.json" });
    await browser.close();
}