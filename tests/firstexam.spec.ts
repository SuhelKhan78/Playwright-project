import { test, expect } from '@playwright/test';

test('search functionality', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  
  page.setDefaultNavigationTimeout(30000);


 page.locator('//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[2]/a/div/div/input');
 const searchBox = page.locator('input[name="q"]:not([readonly])');
 await expect(searchBox).toBeVisible();
 await searchBox.fill('iphone 16');
 await searchBox.press('Enter your name');
 await page.waitForTimeout(3000);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/iphone 16/i);
}
);