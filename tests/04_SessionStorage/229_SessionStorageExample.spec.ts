import { test, expect } from '@playwright/test';
import { generateSessionStorage } from './229_GenerateSessionStorage';


test.beforeAll('get storage state', async () => {
    await generateSessionStorage();
});

test("Direct Dashboard", async ({ browser }) => {
    const context = await browser.newContext({storageState:'storageStage.json'})
    const page = await context.newPage();

    await page.goto("https://test.hello.com/dashboard");
    await expect(page.getByRole('heading')).toHaveText("dashboard");
})