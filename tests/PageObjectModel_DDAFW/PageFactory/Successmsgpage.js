class Successmsgpage{
    constructor(page,expect){
        this.page=page
        this.expect=expect;
        this.successmsg=this.page.locator("//h1[contains(text(),'Added to cart')]")
    }
    async verifysuccessmsg(){
        await this.expect.soft(this.successmsg).toContainText('Added to cart')
    }
}
module.exports={Successmsgpage}