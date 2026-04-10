import{test, expect} from "@playwright/test";
test("flipkart hvjh",async({page})=>{
   await page.goto('https://www.flipkart.com/');
    await page.locator("//span[contains(text(),'Login')]").click();
    await page.waitForTimeout(2000);
});