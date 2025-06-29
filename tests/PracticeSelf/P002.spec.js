import {test, expect} from '@playwright/test';

test.describe('navigation' , ()=>{
 test.beforeEach( async ({page}) =>{

    await page.goto("https://playwright.dev/");
 })


test('main Navigation', async ({page})=>{

    await expect(page).toHaveURL("https://playwright.dev/");

})})

