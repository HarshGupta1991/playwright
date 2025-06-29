const {test,expect}= require('@playwright/test')
const {Homepage}=require('../PageFactory/Homepage')
const {Departmentpage}=require('../PageFactory/Departmentpage')
const {Itemspage}=require('../PageFactory/Itemspage')
const {Add2cartpage}=require('../PageFactory/Add2cartpage')
const {Successmsgpage}=require('../PageFactory/Successmsgpage')
test('Add an item to cart from Software', async ({page}) => {
  var hp = new Homepage(page,expect);
  var dp =new Departmentpage(page,expect);
  var ip = new Itemspage(page,expect);
  var acp =new Add2cartpage(page,expect);
  var sp =new Successmsgpage(page,expect);
  await hp.openUrl();
  await hp.clickondismiss();
  await hp.clickontodaysdeal();
  await dp.clickonseemore();
  await dp.selectradio('software')
  await ip.clickonfirstitem();
  await acp.clickonadd2cart();
  await sp.verifysuccessmsg();
  await sp.verifysuccessmsg();
    
});