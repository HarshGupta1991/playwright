const {test,expect}=require('@playwright/test')
test.only('MouseActions', async({page}) => {
    await page.goto('https://www.timeanddate.com/')
    //move mouse on an element
    await page.locator("(//a[text()='Time Zones'])[1]").hover();
    await page.waitForTimeout(2000);
    //left click
   // await page.locator("(//a[text()='Time Zones'])[1]").click();
    await page.locator("(//a[text()='Time Zones'])[1]").click({button:'right',delay:2000})
    //double click
   // await page.locator("(//a[text()='Time Zones'])[1]").dblclick();
   //scroll down 
   await page.locator("//a[text()='timeanddate.de']").scrollIntoViewIfNeeded();
   await page.waitForTimeout(2000);
    //scrollup
    await page.locator("(//a[text()='Time Zones'])[1]").scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
});

test('Drag and drop',async({page})=>{
     await page.goto('https://jqueryui.com/droppable/');
     var frame =page.frameLocator("//iframe");
     var src = frame.locator('#draggable')
     var tar = frame.locator('#droppable')
     
     await src.dragTo(tar);
     await page.waitForTimeout(2000);
})