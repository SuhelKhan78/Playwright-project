import{test,expect} from '@playwright/test';
test('alerts', async({page})=>{
   
    await page.on('dialog', async x =>{
        console.log(x.message());
        await x.dismiss();
        var y=await page.locator("//p[@id='prompt-message']").textContent();
        console.log(y);






    });
     await page.goto("https://testautomationcentral.com/demo/alerts.html");
     await page.locator("//button[@data-target='confirm-tab']").click();

    await page.locator("//button[@onclick='showConfirm()']").click();
    



});