import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();




/*===============================================
    INVALID Login  
=================================================*/

Given("user visits the site", () => {
    cy.visit(data.demoblz_check);
    cy.wait(data.oneSecond)
});
Then("click a login button",()=>{
    cy.xpath(locator.loginButton).click()
    cy.wait(data.oneSecond)


})
Then("fill username",()=>{
    cy.xpath(locator.Username).type('admin555')
    cy.wait(data.oneSecond)
   
})
Then("fill passaword",()=>{
    
    cy.xpath(locator.Pass).type('admin555')
    cy.wait(data.oneSecond)
})

Then("click submit  button",()=>{
    cy.xpath(locator.submit).click()
})
/*===============================================
    VALID Login  
=================================================*/

Given("user visits site", () => {
    cy.visit(data.demoblz_check);
    cy.wait(data.oneSecond)
});
Then("click the login button",()=>{
    cy.xpath(locator.loginButton).click()
    cy.wait(data.oneSecond)


})
Then("write username",()=>{
    cy.xpath(locator.Username).type('admin')
    cy.wait(data.oneSecond)
   
})
Then("write passaword",()=>{
    
    cy.xpath(locator.Pass).type('admin')
    cy.wait(data.oneSecond)
})
Then("click the submit button",()=>{
    cy.xpath(locator.submit).click()
})
Then("verify as a admin", () => {
    cy.xpath(locator.welcomeadmin).should("have.text",'Log out');
  });
  Then("click a product",()=>{
    cy.wait(data.oneSecond)

    cy.xpath(locator.samsung).click()
})

Then("click add to cart",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.adddtocart).click()
    
})

Then("go the cart url",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.carturl).click()
    
})



Then("verify the peoduct price",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.verifythepeoductprice).should("have.text",'360');
    
})
  


Then("go to cart url",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.carturl).click()
    
})


Then("verify the peoduct name",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.verifyName).should("have.text",'Samsung galaxy s6');
    
})
Then("click the delete button",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.deletebutton).click()
    
})
Then("go to cart button",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.carturl).click()
    
})
Then("user click the place order button",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.placeorder).click()
    
})
Then("fill the name",()=>{
    cy.xpath(locator.placeOrderName).type('admin')
    cy.wait(data.oneSecond)
   
})
Then("fill the country",()=>{
    cy.xpath(locator.placeOrderCountry).type('Germany')
    cy.wait(data.oneSecond)
   
})
Then("fill the city",()=>{
    cy.xpath(locator.placeOrderCity).type('Berlin')
    cy.wait(data.oneSecond)
   
})






Then("fill the credit card",()=>{
    cy.xpath(locator.placeOrderCreditcard).type('123455')
    cy.wait(data.oneSecond)
   
})

Then("fill the month",()=>{
    cy.xpath(locator.placeOrderMonth).type('November')
    cy.wait(data.oneSecond)
   
})
Then("fill the year",()=>{
    cy.xpath(locator.placeOrderYear).type('2023')
    cy.wait(data.oneSecond)
   
})

Then("click the purchage button",()=>{
    cy.xpath(locator.PurchageButton).click()
    cy.wait(data.oneSecond)
   
})
Then("verify the order",()=>{
    cy.wait(data.oneSecond)
    cy.xpath(locator.ThankYouAfter).should("have.text",'Thank you for your purchase!');

})


// Then("Enter the user login credentials", (dataTable)=> {
//     const data_table = dataTable.rowsHash()
//     cy.wait(data.oneSecond)
//     cy.xpath(locator.userName).type(data_table.email)
//     cy.xpath(locator.password).type(data_table.password)
// })
// Then("Click on the login button", ()=> {
//     cy.xpath(locator.login).click()
//     cy.wait(data.oneSecond)
// })

// /*===============================================
//    Case-Register 
// =================================================*/

// Then("Click on the add new case plus buttn", ()=> {
//     cy.xpath(locator.addNewCaseBtn).click()
//     cy.xpath(locator.caseDetails).click()
//     cy.wait(data.fiveSecond)
// })
// Then("Click on the case source dropdown button and select email", ()=> {
//    cy.xpath(locator.caseSourceDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectEmail).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the client dropdown button and select company 1", ()=> {
//    cy.xpath(locator.clientDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.company1).click()
//    cy.wait(data.twoSecond)
// })
// Then("Select company1 bpo from legal entity dropdown", ()=> {
//    cy.xpath(locator.legalEntityDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.company1_bpo).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select Address Check from package dropdown button", ()=> {
//    cy.xpath(locator.packageDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.check_wise).click()
//    cy.wait(data.fiveSecond)
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.address_checkbox).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.assign_check_btn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Verify the check assign successfully", ()=> {
//    cy.xpath(locator.check_assign_successfully_popUp).should("have.text", "Checks Added Successfully")
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select receive date and case TAT start date", ()=> {
//    cy.xpath(locator.receive_date).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.select_receive_date1).click()
//    cy.xpath(locator.select_receive_time).click()
//    cy.xpath(locator.select_receive_time2).click()
// })
// Then("Enter the document name", ()=> {
//    cy.xpath(locator.document_name).type("asdf.pdf")
//    cy.wait(data.oneSecond)
// })
// Then("Click on browser & upload button and upload the file", ()=> {
//    cy.xpath(locator.browser_and_upload_btn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.file_upload).attachFile('asdf.pdf')
//    cy.wait(data.twoSecond)
// })
// Then("Enter the authorization & background check form value", ()=> {
//    cy.xpath(locator.authorizationRangeValue).type('1-1')
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.backgroundCheckFrom).type('1-1')
//    cy.wait(data.oneSecond)
// })
// Then("Click on the split & file upload button", ()=> {
//    cy.xpath(locator.split_file_upload).type('1-1')
//    cy.wait(data.fiveSecond)
// })
// Then("Select language from language dropdown", ()=> {
//    cy.xpath(locator.language_dropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.select_language).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the save button", ()=> {
//    cy.xpath(locator.save_btn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Check that the saved successfully popup is appear", ()=> {
//    cy.xpath(locator.save_successfully).should("have.text", "Saved Successfully")
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.nextBtn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Select Title from the title dropdown", ()=> {
//   cy.xpath(locator.clickTitleDropdown).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectTitle).click()
//   cy.wait(data.oneSecond)
// })
// Then("Enter the first name and father name", ()=> {
//   cy.xpath(locator.firstName).type("testtest")
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.fatherName).type("testasdf")
//   cy.wait(data.oneSecond)
// })
// Then("Select date of birth from calender", ()=> {
//   cy.xpath(locator.dateOfBirth).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectDateOfBirth).click()
//   cy.wait(data.oneSecond)
// })
// Then("Select gender from gender dropdown", ()=> {
//   cy.xpath(locator.genderDropdown).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectMale).click()
//   cy.wait(data.oneSecond)
// })
// Then("Select maritial status from maritial dropdown and Enter nationality", ()=> {
//   cy.xpath(locator.maritialStatus).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectSingle).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.nationality).type("indian")
//   cy.wait(data.oneSecond)
// })
// Then("Click on the add contact details and enter the contact type & details", ()=> {
//    cy.xpath(locator.addContactDetails).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectDropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectMobile).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.mobileInputField).type("7543987777")
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.addContactDetails).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectDropdown2).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectEmail2).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.emailInputField).type("test@ninsetys.com")
//    cy.wait(data.oneSecond)
// })
// Then("Click on the scrap button", ()=> {
//    cy.xpath(locator.scarp_button).click()
//    cy.wait(data.oneSecond)
// })
// Then("Check that the case register successfully done", ()=> {
//    cy.xpath(locator.save_successfully).should("have.text", "Saved Successfully")
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.twoSecond)
// })


// /*===============================================
//   Supervising and Assign To SIR Role
// =================================================*/

// Then("Click on the supervisor -pvt admin and click submit button", ()=> {
//    cy.xpath(locator.supervisorAdminCheckbox).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.submitBtn).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the cases tab and click search button", ()=> {
//    cy.xpath(locator.casesTab).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.searchBtn).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select case register checkbox from sub status dropdown", ()=> {
//    cy.xpath(locator.subStatusDropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.caseRegisterdCheckbox).click()
//    cy.wait(data.twoSecond)
// })
// Then("Click search button after selecting the sub status", ()=> {
//    cy.xpath(locator.searchBtn2).click({force:true})
//    cy.wait(data.oneSecond)
// })

// Then("Select any checkbox and assign case to sir role", ()=> {
//    cy.xpath(locator.checkbox10).click({force: true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.assignUserDropdown).click({force:true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectSirExecutive1).click({force:true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.confirmBtn).click({force:true})
//    cy.wait(data.twoSecond)
// })