import {test,expect} from '@playwright/test';

test.describe("Grouping the test",()=>{
    test("Test1",async({page})=>{
        await page.goto("https://google.com");
    });

    test.skip("Skipped Test",async({page})=>{
        console.log("Skipped test");
    });

    test.fail("Failed Test",async({page})=>{
        expect(400).toBe(440);
    });

    test.fixme("Fixme Test",async()=>{

    });

    // test.only("Test only ", async()=>{

    // });

})