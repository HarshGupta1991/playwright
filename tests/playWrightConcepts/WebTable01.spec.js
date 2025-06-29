const {test, expect} = require('@playwright/test')
test('RetriveAll Links', async ({page}) => {
 var temp=0;
  await page.goto('https://money.rediff.com/gainers');

  //count number of rows
 var allElements = page.locator('//*[@id="leftcontainer"]/table/tbody/tr/td')
  await expect(allElements).toHaveCount(14838)
 console.log('Total rows ='+await allElements.count())
 for(let i=0;i<await allElements.count();i++){
    //var row =await allElements.nth(i).textContent();
    //console.log(row)
    if(await allElements.nth(i).textContent() == 'BPL Ltd.'){
        temp++;
        break;
    }
 }
    expect(temp).toBe(1);
})