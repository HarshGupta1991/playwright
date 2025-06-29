const {test,expect}=require('@playwright/test')
test('Tool Tip', async({page}) => {
    await page.goto('https://www.drikpanchang.com/');
    var aries= page.locator('body > div.dpPageTitleWrapper > div.dpPromoDiv.dpRashiphalaPromoDiv > a:nth-child(1) > img')
    var tooltipmsg =await aries.getAttribute('alt')
    console.log("Tool tip msg --->"+tooltipmsg)
    await expect(aries).toHaveAttribute('alt', 'Mesha Rashifal');

})