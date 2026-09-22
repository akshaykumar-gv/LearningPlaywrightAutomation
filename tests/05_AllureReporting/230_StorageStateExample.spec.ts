import {test, expect } from '@playwright/test';

test.use({
    storageState:'storageStage.json',
})

test("Direct Dashboard1",async({page})=>{
    await page.goto("https://test.hello.com/dashboard");
    await expect(page.getByRole('heading')).toContainText("dashboard");
})

test("Direct Dashboard3",async({page})=>{
    await page.goto("https://test.hello.com/dashboard");
    await expect(page.getByRole('heading')).toContainText("dashboard");
})

test("Direct Dashboard2",async({page})=>{
    await page.goto("https://test.hello.com/dashboard");
    await expect(page.getByRole('heading')).toContainText("dashboard");
})