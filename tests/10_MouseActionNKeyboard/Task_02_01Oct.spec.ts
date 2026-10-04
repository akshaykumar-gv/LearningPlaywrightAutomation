import { test, expect, Locator, Page } from '@playwright/test'

test("Task 02 Oct - Automate Applitools site", async ({ page }) => {
    await page.goto("https://demo.applitools.com/");
    await page.getByRole('textbox', { name: 'username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'password' }).fill("Password@123");
    await page.getByRole('link', { name: "Sign in" }).click();
    const amountLocator = page.locator("td span[class*='text']");
    let [total, amountSpent, amountEarned] = await getDetails(amountLocator);
    console.log(`Amount Gained = ${amountEarned}, Amount Spent = ${amountSpent}, Total = ${total}`);
    expect(total).toBe(1996.22);
})

async function getDetails(amountLocator: Locator): Promise<number[]> {
    let amountSpent = 0;
    let amountGained = 0;
    let total = 0;
    for (let i = 0; i < await amountLocator.count(); i++) {
        let value = (await amountLocator.nth(i).innerText()).trim();
        if ((value).includes('+')) {
            let amount = Number.parseFloat(value.replaceAll(",","").replace("+", "").replace("USD", ""));
            amountGained = amountGained + amount
            total = total + amount;
        }

        if ((value).includes('-')) {
            let amount = Number.parseFloat(value.replaceAll(",","").replace("-", "").replace("USD", ""));
            amountSpent = amountSpent + amount;
            total = total - amount;
        }
    }
    return [total, amountSpent, amountGained];
}
