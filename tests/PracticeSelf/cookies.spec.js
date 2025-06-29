const {test, expect} = require('@playwright/test')

test('Cookies', async ({browser}) => {


// Create a new incognito browser context
const context = await browser.newContext();
const page = await context.newPage();
const page2 = await context.newPage();
await page.goto("https://www.amazon.com/");
await page.waitForTimeout(3000);
await page2.goto("https://www.programiz.com/java-programming/online-compiler/");

////const cookies = await context.cookies();
console.log(cookies);


})