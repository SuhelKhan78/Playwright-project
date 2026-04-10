import{test,expect} from '@playwright/test';
test("frames task",async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame1 = page.frameLocator('#frm3');
    const frame2=frame1.frameLocator('#frm2');
    await frame2.locator("//input[@id='firstName']").fill('suhel');
    await frame2.locator("//input[@id='lastName']").fill('khan');
    await page.locator("//input[@id='name']").fill("SK")
    await page.waitForTimeout(2000);


});