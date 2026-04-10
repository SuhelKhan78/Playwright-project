import{test,expect}  from "@playwright/test";
test("practise", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@placeholder="Username"]').fill("Admin");
    var pass=await page.locator('//input[@placeholder="Password"][@type="password"]');
    await pass.fill("admin123");
    await page.waitForTimeout(2000);
    await pass.clear();
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit" or @class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    await page.waitForTimeout(2000);







});