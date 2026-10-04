import { test, expect, Locator } from '@playwright/test';

test('Verify Hover for Drag and Drop', async ({ page }) => {
   await page.goto('https://www.spicejet.com/');
   await page.getByText("Add-ons").first().hover();
   await page.waitForTimeout(2000);
   await page.getByText("SpiceMax").click();

});