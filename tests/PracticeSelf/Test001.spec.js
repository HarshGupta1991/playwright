const {test}= require('@playwright/test')

test('Demo QA page', async ({page})=>{

    await page.goto('https://demoqa.com/');
    await page.setViewportSize({width: 1536, height: 730});
    await page.locator('//*[@id="app"]/div/div/div[2]/div/div[1]/div/div[1]').click();
    //await page.waitForTimeout(5000);
    //await page.screenshot({path:'demoQascreenshot.png'})
    var title=await page.title();
    var title02=await page.url();
    console.log("Current page title is " + title);
     console.log("Current page title is " + title02);
     await page.locator("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").click();
     await page.locator('//*[@id="userName"]').fill("Harsh Gupta");
     await page.waitForTimeout(3000);


    



})