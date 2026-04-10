import{test,expect} from '@playwright/test';
test('frames',async({page}) =>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html#google_vignette");
    const frm =page.frameLocator('#frm2');
    await frm.locator("//input[@id='femalerb']").click();
    await page.waitForTimeout(3000);
});