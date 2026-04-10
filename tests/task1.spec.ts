import{test,expect} from '@playwright/test';
test("task country", async({page})=>{
    await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&dsh=S-533561963%3A1773205536704675&ec=futura_exp_og_so_72776762_e&hl=en&ifkv=ASfE1-rmiwnycBGT_7WPlE_CydprCOOKcPoyB2JCmEW3DukNfavcRB__RJFM87v7zZ0zWeyw_Z4C9g&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    await page.locator("//div[@class='VfPpkd-aPP78e']").click();
    await page.waitForTimeout(3000);
    const d = page.locator("//ul[@role='listbox']//li[@role='option']");
    const count = await d.count();
    console.log(count);
    for(let i=1;i<count;i++){
        const country = await d.nth(i).textContent();
        console.log(country);
        if(country?.trim()==='română'){
            await d.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
    }
    await page.waitForTimeout(3000);
    const chk=await page.locator("//div[@id='headingSubtext']/child::span").textContent();

    if(chk==='Folosește Contul Google'){
        console.log("true");
    }
    else{
        console.log("false");
    }
    await page.waitForTimeout(3000);






});