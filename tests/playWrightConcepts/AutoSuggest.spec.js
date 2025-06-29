const {test, expect} = require('@playwright/test')
test('AutoSuggest', async ({page}) => {
 //var temp=0;
   await page.goto('https://www.yahoo.com/?guccounter=1');
   await page.locator('#ybar-sbq').fill('Bang')
await page.waitForTimeout(5000);
var allsuggestion = page.locator('//li[@role="option"]/span[1]')
await expect(allsuggestion).toHaveCount(10)



 console.log('Total rows ='+await allsuggestion.count())

 })