import{test, expect} from "@playwright/test";
test("locators testing",async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.setDefaultTimeout(30000);
await page.locator('//input[@placeholder="Username"]').fill("Admin");
await page.locator('//input[@placeholder="Password"]').fill("admin123");
await page.locator('//button[@type="submit"]').click();
let s=await page.locator('//input[@placeholder="Username"]').inputValue();
console.log(s);




})