const {test,expect}=require('@playwright/test')
test('KeyBoard-Actions', async({page}) => {
    await page.goto('https://www.timeanddate.com/');
    for(let i=1;i<=10;i++){
        await page.keyboard.press('ArrowDown')
         await page.waitForTimeout(2000);
    }
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(4000);
})