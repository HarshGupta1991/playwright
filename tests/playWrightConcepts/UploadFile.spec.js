const {test,expect}=require('@playwright/test')
test.only('uploadFiles', async({page}) => {
    await page.goto('https://www.w3schools.com/howto/howto_html_file_upload_button.asp');
    await page.locator('#myFile').setInputFiles("C:\\PlayWrightNotes\\PlayWright_classNotes.txt")
})
test('uploadFiles1', async({page}) => {
    await page.goto('https://pdf2doc.com/');
    await page.locator("//span[text()='UPLOAD FILES']").setInputFiles("C:\\Users\\Harsh Gupta\\Downloads\\Sonal_Sthapak_Automation.pdf")
    await page.waitForTimeout(5000)
})