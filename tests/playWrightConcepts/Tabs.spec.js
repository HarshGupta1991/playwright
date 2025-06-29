const {test,expect}=require('@playwright/test')
test('Tab Actions', async({browser}) => {
    const context  = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const tabContext =  context.waitForEvent('page');
    await page.locator("//a[text()='OrangeHRM, Inc']").click();
    const Tab1= await tabContext;
    await Tab1.waitForTimeout(4000)
    await Tab1.locator('#Form_submitForm_EmailHomePage').fill('srinivas.narayan97@gmail.com')
    await Tab1.waitForTimeout(4000)
    await Tab1.close();
     await page.waitForTimeout(4000)
})