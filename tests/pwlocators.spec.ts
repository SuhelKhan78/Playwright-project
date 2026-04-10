import{test,expect, Locator} from "@playwright/test"
test("verify playwright locators ",async ({page}) =>{
    await page.goto("https://demo.nopcommerce.com/");
    const logo:Locator=page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible();

    await page.locator("//input[@class='c3Bd2c yXUQVt']").fill("9381524500");
await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9381524500');
    await page.waitForTimeout(2000);

}) 