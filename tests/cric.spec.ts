import{test,expect} from '@playwright/test';
test("cricbuzz",async({page}) =>{
    await page.goto("https://www.cricbuzz.com/");
    await page.locator("//a[@title='Cricket Rankings']").click();
    await page.locator("//a[@title='Bowling']").click();
    await page.locator("//div[@class='w-[65px] text-xs py-2 text-center rounded-full border border-solid border-cbThmClrLgtHvr whitespace-nowrap ']/child::div[normalize-space()='T20']").click();
    await page.waitForTimeout(5000);










});
