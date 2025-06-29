const {test, expect} = require('@playwright/test')

test('ClickOnNewPage', async ({browser}) => {


// Create a new incognito browser context
const context = await browser.newContext();
const page = await context.newPage();
const page2 = await context.newPage();
await page.goto("https://demoqa.com/links");
await page.waitForTimeout(3000);
await page.locator('//*[@id="simpleLink"]').click();
await page.waitForLoadState();
console.log(await page.title());
console.log(page.url());

//wait page2.goto("https://www.programiz.com/java-programming/online-compiler/");

////const cookies = await context.cookies();
//console.log(cookies);


})