import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests, getUniqueEmailByProgramRoleAndScenario } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Onboarding - Chronic Program', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("onboarding", "onboardingChronic - Negative", "chronic-Negative");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await getUniqueEmailByProgramRoleAndScenario("signup", "SignUp-withApproval", "TC_01", "Chronic Disease", "Employee", "Negative");
                if (userName !== 'undefined') {
                    await writeExcelData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", `${testCases[i].testId}`, "Email", userName);
                    const password = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Password", `${testCases[i].testId}`);
                    const welcomeOnboardText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "WelcomeOnboarding", `${testCases[i].testId}`);
                    const invalidhomePhoneNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidHomePhoneNumber", `${testCases[i].testId}`)
                    const invalidhomePhoneNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidHomePhoneNumberText", `${testCases[i].testId}`)
                    const homePhoneNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "HomePhoneNumber", `${testCases[i].testId}`)
                    const invalidCellNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidCellNumber", `${testCases[i].testId}`)
                    const inavalidCellNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidCellPhoneNumberText", `${testCases[i].testId}`)
                    const cellNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "CellNumber", `${testCases[i].testId}`)
                    const homePhoneNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "HomeNumberText", `${testCases[i].testId}`)
                    const cellNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "CellNumberText", `${testCases[i].testId}`)
                    const NextButtonText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "NextButtonText", `${testCases[i].testId}`)
                    const firstNameText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "FirstNameText", `${testCases[i].testId}`)
                    const lastNameText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "LastNameText", `${testCases[i].testId}`)
                    const relationText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "RelationText", `${testCases[i].testId}`)
                    const cellPhoneText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "CellPhoneText", `${testCases[i].testId}`)
                    const invalidFirstName = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidFirstName", `${testCases[i].testId}`)
                    const invalidFirstNametext = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidFirstNameText", `${testCases[i].testId}`)
                    const firstName = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "FirstName", `${testCases[i].testId}`)
                    const invalidLastName = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidLastName", `${testCases[i].testId}`)
                    const invalidLastNameText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidLastNameText", `${testCases[i].testId}`)
                    const lastName = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "LastName", `${testCases[i].testId}`)
                    const invalidrelation = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidRelation", `${testCases[i].testId}`)
                    const relation = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Relation", `${testCases[i].testId}`)
                    const invalidrelationCellNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidRelationCellNumber", `${testCases[i].testId}`)
                    const invalidrelationCellNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidCellPhoneNumberText", `${testCases[i].testId}`)
                    const relationCellNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "RelationCellNumber", `${testCases[i].testId}`)
                    const address = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Address", `${testCases[i].testId}`)
                    const unit = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Unit", `${testCases[i].testId}`)
                    const province = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Province", `${testCases[i].testId}`)
                    const invalidcity = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidCity", `${testCases[i].testId}`)
                    const city = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "City", `${testCases[i].testId}`)
                    const postal = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Postal", `${testCases[i].testId}`)
                    const addressText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "AddressText", `${testCases[i].testId}`)
                    const unitText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "UnitText", `${testCases[i].testId}`)
                    const provinceText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "ProvinceText", `${testCases[i].testId}`)
                    const cityText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "CityText", `${testCases[i].testId}`)
                    const postalText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "PostalText", `${testCases[i].testId}`)
                    const invalidhealthCardNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidHealthCard", `${testCases[i].testId}`)
                    const invalidhealthCardNumberText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "InvalidHealthCardNumberText", `${testCases[i].testId}`)
                    const healthCardNumber = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "HealthCard", `${testCases[i].testId}`)
                    const dob = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "DOB", `${testCases[i].testId}`);
                    const nameMultipleOptionsInAdobe = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "nameFieldInAdobe", `${testCases[i].testId}`)
                    const termsAndConditions = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "TermsAndConditionsText", `${testCases[i].testId}`)
                    const provideMyConsentText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "ProvideMyConsentText", `${testCases[i].testId}`)
                    const continueButtonText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "ContinueButton", `${testCases[i].testId}`)
                    const sign = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "Sign", `${testCases[i].testId}`);
                    const preferredTimeText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "PreferredTimeText", `${testCases[i].testId}`)
                    const thankYouText = await readData1("onboarding", "onboardingChronic - Negative", "chronic-Negative", "ThankYouText", `${testCases[i].testId}`)
                    allureReporter.addDescription(`Onboard Flow for New User !!! `);
                    await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
                    await Keywords.click(locator.startNow, "Start Now Button");
                    await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                    console.log({ userName, password })
                    await Keywords.SetValue(locator.userName, userName);
                    await Keywords.SetValue(locator.password, password);
                    await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
                    await Keywords.click(locator.loginButton, "Login Button");
                    await Keywords.waitForDisplay(locator.allowButton, 60000, "Get notified dialog box")
                    await Keywords.click(locator.allowButton, "allow button");
                    await Keywords.waitForDisplay(locator.allowNotificationButton, 60000, "Allow notification")
                    await Keywords.click(locator.allowNotificationButton, "Allow notification button");
                    if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
                        await Keywords.click(locator.allowButton, "allow button");
                        if (await Locatoronboard.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                            await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
                        }
                    }
                    await Keywords.AllureInfo("LogIn Screen Completed!!!");
                    console.log('Login process completed successfully.');
                    await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
                    await Keywords.verifyElementDisplayed(Locatoronboard.ChronicDi, "Chronic card")
                    await Keywords.click(Locatoronboard.ChronicDi, "chronic Health card");
                    await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                    await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                    await Keywords.verifyText(Locatoronboard.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
                    await Keywords.click(Locatoronboard.openChecklist, "Open Checklist Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.requiredInformation, "Required Information");
                    await Keywords.verifyElementDisplayed(Locatoronboard.checkListScreenVerify, "Texts present in checklist screen");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.startOnboardingButton, "Start Onboarding button");
                    await Keywords.click(Locatoronboard.startOnboardingButton, "Start Onboarding Button");
                    await Keywords.AllureInfo("Required Information Screen Completed!!!");
                    await Keywords.verifyElementDisplayed(Locatoronboard.contactInformation, "Contact Information Screen");
                    await Keywords.verifyText(Locatoronboard.homeNumberText, "content-desc", homePhoneNumberText, "Home Number")
                    await Keywords.verifyText(Locatoronboard.cellNumberText, "content-desc", cellNumberText, "Cell Number")
                    await Keywords.SetValue(Locatoronboard.homePhoneNumber, invalidhomePhoneNumber);
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next button");
                    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(invalidhomePhoneNumber) || /^\d+$/.test(invalidhomePhoneNumber) || invalidhomePhoneNumber.toLowerCase() == "empty") {

                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "Contact Information Screen")
                    }
                    else if (/^[\W_]+$/.test(invalidhomePhoneNumber)) {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "Contact Information Screen")
                    }
                    else {
                        await Keywords.verifyElementDisplayed2(invalidhomePhoneNumberText, "invalidhomePhoneNumberText");
                    }
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next button");
                    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(invalidCellNumber) || /^\d+$/.test(invalidCellNumber) || invalidCellNumber.toLowerCase() == "empty") {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "Contact Information Screen")
                    }
                    else if (/^[\W_]+$/.test(invalidCellNumber)) {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "Contact Information Screen")
                    }
                    else {
                        await Keywords.verifyElementDisplayed2(inavalidCellNumberText, "inavalidCellNumberText");
                    }
                    await Keywords.SetValue(Locatoronboard.homePhoneNumber, homePhoneNumber);
                    await Keywords.SetValue(Locatoronboard.cellNumber, cellNumber);
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(15), "15% onboard complete status")
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Contact Information Screen Completed!!!");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(20), "20% onboard complete status")
                    await Keywords.waitForDisplay(Locatoronboard.emergencyContactScreen, 45000, "Emergency Contact Screen");
                    const text = [firstNameText, lastNameText, relationText, cellPhoneText];
                    const locators = [Locatoronboard.firstNameText, Locatoronboard.lastNameText, Locatoronboard.relationText, Locatoronboard.cellPhoneText];
                    for (let i = 0; i < text.length; i++) {
                        await Keywords.verifyText(locators[i], "content-desc", text[i], `${text[i]} in Emergency Contact screen`);
                    }
                    if (invalidFirstName.toLowerCase() === "empty") {
                        await Keywords.SetValue(Locatoronboard.firstName, "");
                    } else {
                        await Keywords.SetValue(Locatoronboard.firstName, invalidFirstName);
                    }
                    await Keywords.SetValue(Locatoronboard.lastName, lastName);
                    await Keywords.SetValue(Locatoronboard.relation, relation);
                    await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber)
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(invalidFirstName)) {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen")
                    }
                    else if ((invalidFirstName.toLowerCase()) === "empty") {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen")
                    }
                    else {
                        await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                        await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementDisplayed2(invalidFirstNametext, "invalidFirstNametext");
                    }
                    await Keywords.SetValue(Locatoronboard.firstName, firstName);
                    if (invalidLastName.toLowerCase() === "empty") {
                        await Keywords.SetValue(Locatoronboard.lastName, "");
                    } else {
                        await Keywords.SetValue(Locatoronboard.lastName, invalidLastName);
                    }
                    await Keywords.SetValue(Locatoronboard.relation, relation);
                    await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber)
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(invalidLastName) || (invalidLastName.toLowerCase()).trim() == "empty") {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen")
                    }
                    else if ((invalidLastName.toLowerCase()) === "empty") {

                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen")
                    }
                    else {
                        await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                        await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementDisplayed2(invalidLastNameText, "invalidLastNameText");
                    }
                    await Keywords.SetValue(Locatoronboard.firstName, firstName);
                    await Keywords.SetValue(Locatoronboard.lastName, lastName);

                    if (invalidrelation.toLowerCase() == "empty") {
                        await Keywords.SetValue(Locatoronboard.relation, "");
                    }
                    else {
                        await Keywords.SetValue(Locatoronboard.relation, invalidrelation);
                    }
                    await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber)
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen")

                    await Keywords.SetValue(Locatoronboard.firstName, firstName);
                    await Keywords.SetValue(Locatoronboard.lastName, lastName);
                    await Keywords.SetValue(Locatoronboard.relation, relation);

                    if (invalidrelationCellNumber.toLowerCase() === "empty") {
                        await Keywords.SetValue(Locatoronboard.relationCellPhone, "")
                    }
                    else {
                        await Keywords.SetValue(Locatoronboard.relationCellPhone, invalidrelationCellNumber)
                    }

                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");

                    if (invalidrelationCellNumber.toLowerCase() === "empty") {
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.addressInformationScreen, "addressInformationScreen");
                    } else {
                        await Keywords.verifyElementDisplayed2(invalidrelationCellNumberText, "invalidrelationCellNumberText");
                    }

                    await Keywords.SetValue(Locatoronboard.firstName, firstName);
                    await Keywords.SetValue(Locatoronboard.lastName, lastName);
                    await Keywords.SetValue(Locatoronboard.relation, relation);
                    await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber)
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(20), "20% onboard complete status")
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Emergency Contact Screen Completed!!!");
                    await Keywords.waitForDisplay(Locatoronboard.addressInformationScreen, 45000, "Address Information Screen");
                    const text1 = [addressText, unitText, cityText, provinceText, postalText];
                    const locators1 = [Locatoronboard.backgroundText('address'), Locatoronboard.backgroundText('unit #'), Locatoronboard.backgroundText('city'), Locatoronboard.backgroundText('province'), Locatoronboard.backgroundText('postal_code')];
                    for (let i = 0; i < text1.length; i++) {
                        await Keywords.verifyText(locators1[i], "content-desc", text1[i], `Verify text in address information screen->${text1[i]}`);
                    }

                    await Keywords.SetValue(Locatoronboard.addressField, "");
                    await Keywords.SetValue(Locatoronboard.unitField, unit);
                    await Keywords.SetValue(Locatoronboard.cityField, city);
                    await Keywords.click(Locatoronboard.provinceDropdown, "Province Dropdown")
                    await Keywords.click(Locatoronboard.accessibilityLocator(province), `${province} option`)
                    await Keywords.SetValue(Locatoronboard.postalCode, postal);
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.verifyElementNotDisplayed(Locatoronboard.healthCardInformationScreen, "healthCardInformationScreen")

                    await Keywords.SetValue(Locatoronboard.addressField, address);
                    await Keywords.SetValue(Locatoronboard.unitField, unit);
                    if ((invalidcity.toLowerCase()).trim() === "empty") {
                        await Keywords.SetValue(Locatoronboard.cityField, "");

                    }
                    else {
                        await Keywords.SetValue(Locatoronboard.cityField, invalidcity);
                    }
                    await Keywords.click(Locatoronboard.provinceDropdown, "Province Dropdown")
                    await Keywords.click(Locatoronboard.accessibilityLocator(province), `${province} option`)
                    await Keywords.SetValue(Locatoronboard.postalCode, postal);
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsDisabled(Locatoronboard.nextButtonForEnableCheck, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.verifyElementNotDisplayed(Locatoronboard.healthCardInformationScreen, "healthCardInformationScreen")


                    await Keywords.SetValue(Locatoronboard.addressField, address);
                    await Keywords.SetValue(Locatoronboard.unitField, unit);
                    await Keywords.SetValue(Locatoronboard.cityField, city);
                    await Keywords.click(Locatoronboard.provinceDropdown, "Province Dropdown")
                    await Keywords.click(Locatoronboard.accessibilityLocator(province), `${province} option`)
                    await Keywords.SetValue(Locatoronboard.postalCode, postal);
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(28), "28% onboard complete status")
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }

                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Verify Next button text");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Address Information Screen Completed!!!");
                    await Keywords.waitForDisplay(Locatoronboard.healthCardInformationScreen, 45000, "Health card Information Screen");

                    if ((invalidhealthCardNumber.toLowerCase()).trim() === "empty") {
                        await Keywords.SetValue(Locatoronboard.healthCardNumberField, "");
                    } else {
                        await Keywords.SetValue(Locatoronboard.healthCardNumberField, invalidhealthCardNumber);
                    }
                    if (/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(invalidhealthCardNumber) || /^\d+$/.test(invalidhealthCardNumber) || (invalidhealthCardNumber.toLowerCase()).trim() == "empty") {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.employmentInformationScreen, "employmentInformationScreen")
                    }

                    else if (/^[\W_]+$/.test(invalidhealthCardNumber)) {
                        await Keywords.verifyElementIsDisabled(Locatoronboard.nextButton, "next button");
                        await Keywords.click(Locatoronboard.nextButton, "Next Button");
                        await Keywords.verifyElementNotDisplayed(Locatoronboard.employmentInformationScreen, "employmentInformationScreen")
                    }

                    else {
                        await Keywords.verifyElementDisplayed2(invalidhealthCardNumberText, "invalidhealthCardNumberText");
                    }
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
                    await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
                    const getDob = await Locatoronboard.dobInHealthCard.getText();
                    const formattedGetDob = getDob.replace(/-/g, '');
                    expect(dob).to.be.equal(formattedGetDob);
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Health card Information Screen Completed!!!");
                    await Keywords.waitForDisplay(Locatoronboard.employmentInformationScreen, 45000, "Employment Information Screen");
                    await Keywords.click(Locatoronboard.workStatusDropdown, "Work Status");
                    await Keywords.click(Locatoronboard.fullTime, "Select Fulltime option");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(34), "34% complete status")
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Employment Information Screen Completed!!!");


                    await Keywords.waitForDisplay(Locatoronboard.termsAndConditionsScreen, 100000, "Terms & Conditions Screen");
                    await Keywords.verifyText(Locatoronboard.acceptTermsAndConditions, "content-desc", termsAndConditions, "Accept Terms & Conditions")
                    await Keywords.click(Locatoronboard.acceptTermsAndConditions, "Accept Terms and Conditions Radio button");
                    await Keywords.verifyText(Locatoronboard.provideMyConsent, "content-desc", provideMyConsentText, "Provide My Consent");
                    await Keywords.click(Locatoronboard.provideMyConsent, "Provide Consent Radio Button");
                    await Keywords.waitForDisplay(Locatoronboard.consentFormPopup, 90000, "Consent Form Popup");
                    await Keywords.verifyText(Locatoronboard.continueBtn, "content-desc", continueButtonText, "Continue Button");
                    await browser.pause(3000);

                    await Keywords.click(Locatoronboard.continueBtn, "Continue Button in Consent Popup");
                    console.log(await browser.getContexts());
                    await Keywords.waitForDisplay(Locatoronboard.adobeAcknowledgeMessage, 90000, "Adobe Acknowledge Message");
                    await Keywords.click(Locatoronboard.continueBtnInAdobe, "Continue Button in Adobe")
                    console.log(await browser.getContexts());
                    await Keywords.verifyElementIsEnabled(Locatoronboard.startButton, "Start Button");
                    await Keywords.click(Locatoronboard.startButton, "Start Button");
                    await Keywords.waitForDisplay(Locatoronboard.previousArrowButton, 90000, "previous Arrow Button")
                    await Keywords.click(Locatoronboard.previousArrowButton, "previous Arrow Button")
                    await Keywords.click(Locatoronboard.previousArrowButton, "previous Arrow Button")

                    while (true) {
                        await Keywords.click(Locatoronboard.previousArrowButton, "previous Arrow Button")
                        await Keywords.click(Locatoronboard.nextArrowButton(1), "Next Arrow Button");
                        await Keywords.click(Locatoronboard.previousArrowButton, "previous Arrow Button");
                        await Keywords.verifyElementDisplayed(Locatoronboard.requiredfielderrmsg, "required field err msg")
                        if (await Locatoronboard.nameFieldInAdobe.isDisplayed({ timeout: 60000 })) {
                            await Keywords.verifyElementDisplayed(Locatoronboard.requiredfielderrmsg, "required field err msg")
                            break;
                        }
                    }
                    await Keywords.SetValue(Locatoronboard.nameFieldInAdobe, nameMultipleOptionsInAdobe);
                    if (!await Locatoronboard.nextArrowButton(12).isDisplayed()) {
                        await browser.hideKeyboard();
                    }

                    await Keywords.SetValue(Locatoronboard.nameFieldInAdobe, nameMultipleOptionsInAdobe);
                    if (!await Locatoronboard.nextArrowButton(12).isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(12), "12 required fields remaining")
                    await Keywords.click(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                    await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                    await browser.pause(3000);
                    await Keywords.verifyElementDisplayed(Locatoronboard.consentformType, "Type option");
                    await Keywords.verifyElementDisplayed(Locatoronboard.consentformDraw, "Draw option");
                    await Keywords.click(Locatoronboard.consentformType, "Type option");
                    await Keywords.SetValue(Locatoronboard.enterInitials, sign);
                    await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                    await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(11), "11 required fields remaining")
                    await Keywords.click(Locatoronboard.nextArrowButton(11), "Next Arrow Button");
                    let number = 11
                    while (true) {
                        await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                        await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                        await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                        await browser.pause(2500)
                        if (await Locatoronboard.applyButtonInInitials.isDisplayed({ timeout: 45000 })) {
                            await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                        }
                        await driver.pause(2500);

                        await Keywords.click(Locatoronboard.nextArrowButton(number - 1), "Next Arrow Button");
                        await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(number - 1), `${number - 1} required fields remaining`);
                        if (!await Locatoronboard.initialHere.isDisplayed()) {
                            break;
                        }
                        number = number - 1;
                    }
                    await Keywords.verifyElementDisplayed(Locatoronboard.signHere, "Sign Here");
                    await Keywords.click(Locatoronboard.signHere, "Sign Here");
                    await Keywords.verifyElementDisplayed(Locatoronboard.consentformType, "Type option");
                    await Keywords.click(Locatoronboard.consentformType, "Type option");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                    await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                    await browser.pause(2000);
                    await Keywords.waitForDisplay(Locatoronboard.requiredFieldCompleted, 90000, "Required Fields completed");
                    await Keywords.verifyElementDisplayed(Locatoronboard.reviewAgreementText, "Review Agreement Text");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.reviewAgreementButton, "Review Agreement button");
                    await Keywords.click(Locatoronboard.reviewAgreementButton, "Review Agreement button");
                    await Keywords.waitForDisplay(Locatoronboard.requiredFieldsCompletedText, 45000, "Required Fields Completed");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.finishButton, "Finish Button")
                    await Keywords.click(Locatoronboard.finishButton, "Finish Button");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.tapToSign, "Tap to sign Button")
                    await Keywords.click(Locatoronboard.tapToSign, "Tap to sign Button");
                    await browser.pause(1200);
                    await Keywords.waitForDisplay(Locatoronboard.continueNextStepButton, 60000, "Continue Next Step Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.acceptTermsAndConditions, "Accept Terms and Conditions screen");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(54), "54% complete status");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.continueNextStepButton, "Continue Next Step Button")
                    await Keywords.click(Locatoronboard.continueNextStepButton, "Continue Next Step Button");
                    await Keywords.AllureInfo("Consent Screen Completed!!!");

                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(98), "98% onboard complete status");
                    await Keywords.waitForDisplay(Locatoronboard.preferredTimeForClinic, 45000, "Preferred Time for Clinic");
                    await Keywords.verifyText(Locatoronboard.preferredTimeForClinic, "content-desc", preferredTimeText, "Preferred Time for Clinic")
                    await Keywords.verifyElementIsEnabled(Locatoronboard.preferredTimeDropdown, "Preferred Time dropdown")
                    await Keywords.click(Locatoronboard.preferredTimeDropdown, "Preferred Time dropdown");
                    await Keywords.verifyElementDisplayed(Locatoronboard.selectTime, "Select Preferred Time for clinic")
                    await Keywords.click(Locatoronboard.selectTime, "Select Preferred Time for clinic");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.saveButton, "Save Button");
                    await Keywords.click(Locatoronboard.saveButton, "Save Button")
                    await Keywords.waitForDisplay(Locatoronboard.thankYouText, 45000, "Thank you ")
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(100), "100% complete status");
                    await Keywords.verifyText1(Locatoronboard.thankYouMessage, "content-desc", thankYouText, "Thank You for Onboarding");
                    await Keywords.verifyElementDisplayed(Locatoronboard.goToProgramSelection, "Go to program selection button")
                    await Keywords.click(Locatoronboard.goToProgramSelection, "Go to program selection button");
                    if (await locator.denyButton.isDisplayed({ timeout: 60000 })) {
                        await Keywords.click(locator.denyButton, "deny button");
                    }
                    await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                    await Keywords.AllureInfo("Onboard Flow Completed!!!");
                } else {
                    throw new Error("Please Check Program is Approved or not, since username was: " + userName);
                }
            } catch (err) {
                throw new Error(err);
            }
        });
    }
});
