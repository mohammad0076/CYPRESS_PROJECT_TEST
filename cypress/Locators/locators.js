class locatorsPage {

  // signin locators
  // userName = '//input[@id="mat-input-1"]'
  // password = '//input[@type="password"]'
  // login = '//button[contains(text(), "Log In")]'

  // // Case Register locators
  // addNewCaseBtn = '//*[@id="eic-content"]/app-pre-verification/div[1]/div/mat-icon'
  // caseDetails = '(//*[contains(text(), "Case Details")])[1]'
  // caseSourceDropdownBtn = '//*[@id="mat-tab-content-1-0"]/div/app-case-details/div[1]/div/fieldset[1]/mat-grid-list/div/mat-grid-tile[1]/figure/div/mat-form-field/div/div[1]/..'
  // selectEmail = '(//span[contains(text(), "E-Mail")])[1]'
  // clientDropdownBtn = '//span[contains(text(), "Select Client")]'
  // company1 = '//span[contains(text(), "Company 1")]'
  // legalEntityDropdownBtn = '//span[contains(text(), "Select Legal Entity")]'
  // company1_bpo = '//span[contains(text(), "Company 1 BPO")]'
  // packageDropdownBtn = '(//span[contains(text(), "Select Package")])[1]'
  // check_wise = "//span[normalize-space()='Select Check Wise']"
  // address_checkbox = "(//label[@class='mat-checkbox-layout'])[1]"
  // assign_check_btn = "//input[@value='Assign Checks']"
  // ok_popup = "//button[normalize-space()='OK']"
  // check_assign_successfully_popUp = '//h2[contains(text(), "Checks Added Successfully")]'
  // receive_date = '(//*[@class="ng-star-inserted"])[4]'
  // select_receive_date1 = "//div[normalize-space()='10']"
  // select_receive_time = "//div[normalize-space()='11']"
  // select_receive_time2 = '(//div[@class="mat-datetimepicker-clock-cell ng-star-inserted"])[25]'
  // document_name = '(//input[@type="text"])[2]'
  // browser_and_upload_btn = "//button[normalize-space()='Browse & Upload']"
  // file_upload = '(//input[@type="file"])[2]'
  // authorizationRangeValue = '(//input[@placeholder="Page Range (1-2)"])[1]'
  // backgroundCheckFrom = '(//input[@placeholder="Page Range (1-2)"])[2]'
  // split_file_upload = "//input[@value='Split and Upload']"
  // language_dropdown = '//span[contains(text(), "Select")]/../../..'
  // select_language = "//span[normalize-space()='English']"
  // save_btn = "//input[@value='Save']"
  // save_successfully = '//h2[contains(text(), "Saved Successfully")]'
  // nextBtn = '//input[@value="Next"]'
  // clickTitleDropdown = '(//*[@role="combobox"])[1]'
  // selectTitle = '(//span[contains(text(), "Mr")])[1]/..'
  // firstName = '//input[@placeholder="Enter First Name"]'
  // fatherName = '//input[@placeholder="Enter Father Name"]'
  // dateOfBirth = '//*[@fill="currentColor"]'
  // selectDateOfBirth = "//div[normalize-space()='4']"
  // genderDropdown = '(//*[@role="combobox"])[2]'
  // selectMale = '//*[@id="mat-option-9"]/span'
  // maritialStatus = '(//*[@role="combobox"])[3]'
  // selectSingle = '//span[contains(text(), "Single")]'
  // nationality = '//input[@placeholder="Enter Nationality"]'
  // addContactDetails = '//*[@mattooltip="Add Contact Details"]'
  // selectDropdown = '//*[@placeholder="Select"]'
  // selectMobile = '//span[contains(text(), "Mobile")]/..'
  // mobileInputField = '//input[@placeholder="Enter Here"]'
  // selectDropdown2 = '(//*[@placeholder="Select"])[2]'
  // selectEmail2 = '(//span[contains(text(), "Email")])[1]'
  // emailInputField = '(//input[@placeholder="Enter Here"])[2]'
  // scarp_button = "//input[@value='Scrap']"

  // // Supervisor Role 

  // supervisorAdminCheckbox = '(//label[@class="mat-radio-label"])[1]'
  // submitBtn = '(//input[@value="Submit"])'
  // casesTab = '(//*[@class="mat-tab-label-content"])[2]/..'
  // searchBtn = '(//input[@type="button"])[1]'
  // subStatusDropdown = '//*[@placeholder="Check Sub Status List"]'
  // case_status = '//input[@formcontrolname="AssignedTo"]'
  // caseRegisterdCheckbox = '//mat-option[contains(span[1], "CASE_REGISTERED")]'
  // searchBtn2 = '(//figure[contains(div[3], "Search")]//button)[1]'
  // checkbox10 = '(//input[@type="checkbox"])[10]'
  // assignUserDropdown = '//span[contains(text(), "Assign User")]/../../..'
  // selectSirExecutive1 = '//span[contains(text(), " SIR Executive-1 ")]/..'
  // confirmBtn = '//button[contains(text(), "Confirm")]'


  loginButton='//a[@id="login2"]'


  Username='//input[@id="loginusername"]'
  Pass='//input[@id="loginpassword"]'


  submit='//button[normalize-space()="Log in"]'
  welcomeadmin='//a[@id="logout2"]'
  verifythepeoductprice='//tbody/tr[1]/td[3]'
  

  verify='(//h6[normalize-space()="Dashboard"])[1]'
  invalid='//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]'
  searchbutton='//input[@placeholder="Search"]'
  samsung='//a[normalize-space()="Samsung galaxy s6"]'
  adddtocart='//div[@class="col-sm-12 col-md-6 col-lg-6"]'
  carturl='//a[normalize-space()="Cart"]'
  verifyName='(//td[contains(text(),"Samsung galaxy s6")])[1]'
  deletebutton='//body[1]/div[6]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/a[1]'
  placeorder='(//button[normalize-space()="Place Order"])[1]'
  placeOrderName='(//input[@id="name"])[1]'
  placeOrderCountry='(//input[@id="country"])[1]'
  placeOrderCity='(//input[@id="city"])[1]'
  placeOrderCreditcard='(//input[@id="card"])[1]'
  placeOrderMonth='(//input[@id="month"])[1]'
  placeOrderYear='(//input[@id="year"])[1]'
  PurchageButton='(//button[normalize-space()="Purchase"])[1]'
  ThankYouAfter='//h2[normalize-space()="Thank you for your purchase!"]'
}
export default locatorsPage;