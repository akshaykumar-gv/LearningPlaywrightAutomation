import { test, expect } from '@playwright/test'

test("Task 01 Oct - Handle Mouse hover", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Wifi").click();
    const output = await page.getByTestId("hover-output").innerText();
    expect(output).toContain("test-id-Wifi");
})