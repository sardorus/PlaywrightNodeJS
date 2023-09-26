import { test, expect, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 14 Pro Max'],
  });

test('record sauce web test1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});


test('friends', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('I\'m Feeling Funny').click();
  await page.getByRole('button', { name: 'Monica Geller | Friends Central | Fandom' }).click();
  await page.getByRole('link', { name: 'friends monica now' }).click();
});


test('donald', async ({ page }) => {
  await page.goto('https://www.google.com/search?client=firefox-b-1-d&q=google');
  await page.getByRole('link', { name: 'Google Google https://www.google.com' }).click();
  await page.frameLocator('iframe[name="callout"]').getByLabel('Stay signed out').click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByText('dolphin miami seaquarium').click();
  await page.getByRole('link', { name: 'AP News Dolphin that shared a tank with Lolita the orca at Miami Seaquarium moves to SeaWorld San Antonio 22 hours ago' }).click();
  await page.getByRole('link', { name: 'Donald Trump' }).click();
});



test('testiphone', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  await page.getByLabel('Learn more about iPhone 15 Pro').click();
  await page.locator('div').filter({ hasText: 'iPhone 15 Pro Buy From $999 or $41.62/mo. for 24 mo.1' }).locator('div').first().click();
  await page.locator('div').filter({ hasText: 'iPhone 15 Pro Buy From $999 or $41.62/mo. for 24 mo.1' }).locator('div').first().click();
  await page.getByRole('img', { name: 'A detailed photo of a green iguana, captured with the 48MP Main camera on iPhone 15 Pro camera' }).click();
  await page.getByLabel('Photo of a lavender flower in a field of similar flowers shot with 0.5x Macro').locator('img').click();
  await page.getByLabel('Next', { exact: true }).click();
  await page.getByRole('button', { name: 'Nerd out on 5x Telephoto' }).click();
  await page.getByLabel('Close Explore Zoom').click();
});