class Add2cartpage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect
        this.add2cart=this.page.locator('#add-to-cart-button')
    }
    async clickonadd2cart(){
        await this.add2cart.click();
    }
}
module.exports={Add2cartpage}