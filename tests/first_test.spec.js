const {test, expect} = require('@playwright/test')

test('First test of mine', async ({page})=> {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
    
})