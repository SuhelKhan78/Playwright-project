import {test,expect} from '@playwright/test';
test("dropdown",async({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    const dd = await page.locator("//select[id='dropdown']");
    await dd.click();
    await page.selectOption(dd,{value:'1'})

});