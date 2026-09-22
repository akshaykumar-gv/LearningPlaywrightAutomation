import {test, expect } from '@playwright/test';

test.use({
    storageState:'storageStage.json',
})

test("Direct Dashboard1",async({page})=>{
    await page.goto("https://test.movex.co.uk/motor-dealers/");
    await expect(page.getByRole('heading')).toContainText("Quotes Requested");
})

test("Direct Dashboard3",async({page})=>{
    await page.goto("https://test.movex.co.uk/motor-dealers/");
    await expect(page.getByRole('heading')).toContainText("Quotes Requested");
})

test("Direct Dashboard2",async({page})=>{
    await page.goto("https://test.movex.co.uk/motor-dealers/");
    await expect(page.getByRole('heading')).toContainText("Quotes Requested");
})