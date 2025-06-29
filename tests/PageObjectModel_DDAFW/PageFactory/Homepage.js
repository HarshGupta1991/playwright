class Homepage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.dismiss= this.page.locator("//input[@data-action-type='DISMISS']")
        this.todaysdeal=this.page.locator('//a[text()=\"Today\'s Deals\"]')
    }
    async openUrl(){
        await this.page.goto("https://www.amazon.com/");
    }
    async clickondismiss(){
        await this.dismiss.click();
    }
     async clickontodaysdeal(){
        await this.todaysdeal.click();
    }
    
    
}
module.exports={Homepage}