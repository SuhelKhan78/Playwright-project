import{test,expect} from '@playwright/test';
test("facebook",async({page})=>{
    await page.goto("https://www.facebook.com/login.php/");
    await page.locator("//a[contains(text(),'More languages…')]").click();
    await page.waitForTimeout(2000);
    const c=await page.locator("//div[@class='x1l6x9ta x1e2s88x xh8yej3 x1lyhvkc x1twisyj']/child::div");
    const count=await c.count();
    console.log(count);
    for(let i=0;i<count;i++){
        const country = await c.nth(i).textContent();
        console.log(country);
        if(country?.trim()==='తెలుగు'){
            await c.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
    }
    await page.waitForTimeout(2000);
    const element=await page.locator("//span[@class='x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1ejgnnb xza2c7i x1apb90u x1215byi xzsf02u x1yc453h xtoi2st x3x7a5m']").textContent();

    if(element==="Facebookకు లాగిన్ చేయండి"){
        console.log("true");
    }
    else{
        console.log("false");
    }
    await page.waitForTimeout(3000);

    
    


});
