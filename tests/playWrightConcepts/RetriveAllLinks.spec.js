const {test, expect} = require('@playwright/test')
test('RetriveAll Links', async ({page}) => {
    var temp=0;
  await page.goto('https://www.opencart.com/');
  //Retrive all links
  var alllinks =page.locator('//a')
  var totallinks=await alllinks.count();
  await expect.soft(alllinks).toHaveCount(80)
  //print all links 
  for(let i=0;i<totallinks;i++){
    console.log(await alllinks.nth(i).textContent());
    if(await alllinks.nth(i).textContent() =='Blog'){
        temp++;
        break;
    }
  }
  expect.soft(temp>0).toBeTruthy();
  await page.waitForTimeout(5000);



})