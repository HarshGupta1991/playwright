const {test, expect} = require('@playwright/test')
test('RetriveAll Links', async ({page}) => {
 var temp=0;
  await page.goto('https://money.rediff.com/gainers');
  //count number of rows
 var allElements = page.locator('//*[@id="leftcontainer"]/table/tbody/tr/td')
 console.log('Total rows ='+await allElements.count())
 await expect.soft(allElements).toHaveCount(14838);
 for(let i=0;i<await allElements.count();i++){
    var row =await allElements.nth(i).textContent();
    if(await allElements.nth(i).textContent() =='BPL Ltd.'){
        temp++;
        break;
    }

    console.log(row)
 }
})