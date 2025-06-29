const {test, expect} = require('@playwright/test')

test('Navigate', async ({page}) => {
    await page.goto('https://demoqa.com/') //Homepage
    //click on forms
    await page.locator('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.avatar.mx-auto.white > svg').click();//Form page
    await page.waitForTimeout(3000)
    //Navigate back to home page
    await page.goBack(); //home page
     await page.waitForTimeout(3000)
    await page.goForward()//form page
     await page.waitForTimeout(3000)
     await page.reload() //Refresh a page
      await page.waitForTimeout(3000)
})