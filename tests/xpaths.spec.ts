import{test,expect}  from "@playwright/test";
test("xpathprac", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.setDefaultNavigationTimeout(30000);
    await page.locator("//input[@placeholder ='Username']").fill("Admin");
   
    var hhg=await page.locator("//*[@placeholder='Password']");
    await hhg.fill("admin123");
    await hhg.clear();
    await page.waitForTimeout(30000);

    await expect(hhg).toHaveValue('');







});