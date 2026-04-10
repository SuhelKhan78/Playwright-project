import{test, expect} from "@playwright/test";
test("flipkart",async({page})=>{
   await page.goto('https://www.flipkart.com/');
    await page.locator("//span[contains(text(),'Login')]").click();
    await page.waitForTimeout(2000);

    await expect(page.locator('(//span[text()="Login"])[2]')).toBeVisible();
    await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9381524500');
    await page.locator('form').filter({ hasText: 'Request OTP' }).getByRole('button').click();
    await page.waitForTimeout(10000);
    await page.locator('(//input[@title="Search for Products, Brands and More"])[1]').fill("iphone17");
    await page.waitForTimeout(2000);


    


});