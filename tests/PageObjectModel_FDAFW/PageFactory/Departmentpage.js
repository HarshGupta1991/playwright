class Departmentpage{
    constructor(page,expect){
        this.page=page;
        this.expect=expect;
        this.seemore= this.page.locator("(//a[text()='See more'])[1]")
        this.movieandtv=this.page.locator('//span[text()="Movies & TV"]')
        this.software=this.page.locator("//span[text()='Software']")
        this.toysandgames=this.page.locator('//span[text()="Toys & Games"]')
    }
    async clickonseemore(){
        await this.seemore.click();
    }
     async selectradio(radio){
        if(radio=='movieandtv')
           await  this.movieandtv.click();
        else if (radio =='software')
            await this.software.click();
        else if(radio == 'toysandgames')
            await this.toysandgames.click();
    }
    
}
module.exports={Departmentpage}