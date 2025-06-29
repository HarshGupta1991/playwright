const {test, expect} = require('@playwright/test')
test('select an item', async ({page}) => {
  await page.goto('https://jqueryui.com/selectable/');
  var frame1 = page.frameLocator('(//iframe)[1]')
  //click  on item4
  await frame1.locator("//li[text()='Item 4']").click();
  await page.locator("//a[text()='Droppable']").click();
  await expect.soft(page).toHaveURL('https://jqueryui.com/droppable/')
 console.log("cURL:"+await page.url());
})


test.only('Nesterd frame', async ({page}) => {
    await page.goto('https://demoqa.com/nestedframes');
    var ParentFrame = page.frameLocator('#frame1')
    var chaildframe = ParentFrame.frameLocator('iframe')
    var text = await chaildframe.locator('body > p').textContent();
    console.log("child frame text ="+text)
    
});