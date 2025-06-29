const {test, expect} = require('@playwright/test')
test('Takescreenshot-desktop view', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
    await page.screenshot({path:'Screenshot_homepage.png'})
})
test('Takescreenshot-fullscreen', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
    await page.screenshot({path:'Fullpage.png',fullPage:true})
})
test.only('Logo', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
   await page.locator('#nav-logo-sprites').screenshot({path:'Logo.png'})
})