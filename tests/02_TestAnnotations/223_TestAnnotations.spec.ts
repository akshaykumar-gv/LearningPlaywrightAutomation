import {test, expect} from '@playwright/test';

test("",async()=>{
    console.log("Hello");
});

test.fail("Failed Test", async()=>{
    expect(70).toBe(400);
});

test.fixme("Failed and Fixme badge",async()=>{
    expect(60).toBe(400);
});

test.skip("Skipped Test",async()=>{
    
});

