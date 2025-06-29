const {test, expect} = require('@playwright/test')
test('Handle Confirm', async ({page}) => {
    var AlertMsg;
  await page.goto('https://demoqa.com/alerts');
    //Register dialog
    page.on('dialog',  async alert=>{
        await page.waitForTimeout(2000)
        AlertMsg=alert.message();
        console.log("Alert :"+await alert.message())
        await alert.accept(); //Ok button
       // alert.dismiss(); //Cancel button

       await page.locator("//*[@id='alertButton']").click();
    })

    })


    
