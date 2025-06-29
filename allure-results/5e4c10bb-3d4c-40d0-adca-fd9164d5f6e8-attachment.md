# Test info

- Name: Add an item to cart from movieandtv
- Location: C:\PlaywrightTesting\tests\PageObjectModel_DDAFW\TestCases\Test123.spec.js:10:1

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('//input[@data-action-type=\'DISMISS\']')

    at Homepage.clickondismiss (C:\PlaywrightTesting\tests\PageObjectModel_DDAFW\PageFactory\Homepage.js:12:28)
    at C:\PlaywrightTesting\tests\PageObjectModel_DDAFW\TestCases\Test123.spec.js:19:12
```

# Test source

```ts
   1 | class Homepage{
   2 |     constructor(page,expect){
   3 |         this.page=page;
   4 |         this.expect=expect;
   5 |         this.dismiss= this.page.locator("//input[@data-action-type='DISMISS']")
   6 |         this.todaysdeal=this.page.locator('//a[text()=\"Today\'s Deals\"]')
   7 |     }
   8 |     async openUrl(){
   9 |         await this.page.goto("https://www.amazon.com/");
  10 |     }
  11 |     async clickondismiss(){
> 12 |         await this.dismiss.click();
     |                            ^ Error: locator.click: Test timeout of 60000ms exceeded.
  13 |     }
  14 |      async clickontodaysdeal(){
  15 |         await this.todaysdeal.click();
  16 |     }
  17 |     
  18 |     
  19 | }
  20 | module.exports={Homepage}
```