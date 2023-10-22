import {test, expect} from '@playwright/test'

test('selector Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    // using any locator
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')

    // using xpath locator
    await page.locator('//input[@name="password"]').fill('secret_sauce')

    // using css selector
    await page.click('#login-button')

    // using text
    
    await page.click('text=Sauce Labs Backpack')
    // or has-text
    await page.pause()
    await page.click('button:has-text=("Add to cart")')
    await page.pause()
    
    
    
    
    


  });