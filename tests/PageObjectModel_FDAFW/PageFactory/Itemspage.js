class Itemspage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.firstitem=this.page.locator('//*[@id="DealsGridScrollAnchor"]/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div/div/a/div')
    }
    async clickonfirstitem(){
        await this.firstitem.click();
    }
}
module.exports={Itemspage}