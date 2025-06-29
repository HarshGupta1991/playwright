const {test, expect} = require('@playwright/test')
test('RetriveAll Links', async ({page}) => {
  await page.goto('https://www.yahoo.com/?guccounter=1');
  await page.locator('#ybar-sbq').fill('bang')
var allitems = page.locator("//li[@role='option']/span[1]")
await allitems.last().waitFor(); 
  for(let i=0;i<await allitems.count();i++){
    //console.log(await allitems.nth(i).textContent());
    if(await allitems.nth(i).textContent() =='Bangkok Airways'){
        await allitems.nth(i).click();
        
        break;
    }
  }
  await page.waitForTimeout(5000)

})