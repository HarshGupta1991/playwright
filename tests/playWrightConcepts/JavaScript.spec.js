const {test, expect} = require('@playwright/test')
test('JavaScript', async ({page}) => {
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  await page.setViewportSize({width:1536,height:695}); //maximizing browser window
  await page.evaluate(()=>{
    document.getElementById('login1').value='tester'
    document.getElementById('password').value='manager'
    document.querySelector('body > div.main-container > div.container > div > div.login-box > div.signin-container > form > button').click();
  })
  await page.waitForTimeout(5000)





})

  //document.querySelector("#nav-xshop > ul > li:nth-child(1) > div > a").click();
test('Amazon - javascript', async ({page}) => {
    await page.goto('https://www.amazon.com/');
    await page.waitForTimeout(10000)
    await page.evaluate(()=>{
        document.querySelector("#nav-xshop > ul > li:nth-child(1) > div > a").click();
    })
await page.waitForTimeout(5000)
})


test.only('ShadowRoot element',async ({page})=>{
    await page.goto('https://www.msn.com/en-in?AR=1')
    //click on amazon
   // await page.locator('//*[@id="entry-point-hp-wc-root-wrapper"]/div[1]/div[1]/div/me-stripe//div/msft-horizontal-card-slider/ul/li[2]/me-stripe-tile//div/a/div[1]/img').click();
  await page.waitForTimeout(5000)
   await page.evaluate(()=>{
    document.querySelector("body > fluent-design-system-provider > entry-point").shadowRoot.querySelector("#entry-point-hp-wc-root-wrapper > div.content-container.fifth-column.ntp-feed > div.me-stripe-placeholder.compact > div > me-stripe").shadowRoot.querySelector("div > msft-horizontal-card-slider > ul > li:nth-child(2) > me-stripe-tile").shadowRoot.querySelector("div > a > div.me-stripe-logo-container > img").click();
   }) 
   await page.waitForTimeout(5000)
})
