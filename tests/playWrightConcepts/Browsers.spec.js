const {test,expect} =require('@playwright/test');
test('openBrowser -method1',async ({browser})=>{
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
   await page1.goto('https://www.google.com');
   await page2.goto('https://www.amazon.com');
   await page1.waitForTimeout(5000);

});
test.only('OpenBrowser-Way2', async ({page}) => {
    await page.goto('https://opencart.com/')
    var title = await page.title();
    console.log("Title ="+title);
    //await expect(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution!!!')
    await expect.soft(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution')
    console.log("---------End of the script----------------")
});

    
