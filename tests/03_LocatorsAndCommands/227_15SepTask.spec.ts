import{test, expect, Locator} from '@playwright/test';

test.only("15th_Sep_Task",async({page})=>{
    // await page.pause();
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    console.log("Hello in the required test");
    const makeAppointmentButton:Locator = page.getByRole('link',{name:"Make Appointment"});
    await makeAppointmentButton.click();

    const demoAccountUsernameBox:Locator = page.locator("#demo_username_label+input");
    const demoAccountPasswordBox:Locator = page.locator("#demo_password_label+input");

    const userName = await demoAccountUsernameBox.getAttribute('value');
    const passsword = await demoAccountPasswordBox.getAttribute('value');

    console.log(userName);
    console.log(passsword);

    const formUsernameField:Locator = page.locator("#txt-username");
    const formPasswordField:Locator = page.locator("#txt-password");
    const formLoginButton:Locator = page.getByRole("button",{name:"Login"});

    await formUsernameField.fill(userName || "John doe");
    await formPasswordField.fill(passsword || "ThisIsNotAPassword");
    await formLoginButton.click();

    await expect(page.locator('.col-sm-12.text-center')).toHaveText("Make Appointment");

    await expect(page.url()).toBe("https://katalon-demo-cura.herokuapp.com/#appointment");

    // page.pause();


});