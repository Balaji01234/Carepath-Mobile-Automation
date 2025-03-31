import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests, writeExcelData1, getUniqueEmailByProgramRoleAndScenario } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'

describe('Carepath Automation', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("onboarding", "onboardingElderCare", "ElderCarePositive");
    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await getUniqueEmailByProgramRoleAndScenario("signup", "SignUp-withApproval", "TC_01", "Elder Care", "Employee", "Positive");
                if (userName !== 'undefined') {
                    const userName = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Email", `${testCases[i].testId}`);
                    const password = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Password", `${testCases[i].testId}`);
                    const welcomeOnboardText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "WelcomeOnboarding", `${testCases[i].testId}`);
                    const checklistText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "CheckListText", `${testCases[i].testId}`);
                    const homePhoneNumber = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "HomePhoneNumber", `${testCases[i].testId}`)
                    const cellNumber = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "CellNumber", `${testCases[i].testId}`)
                    const homePhoneNumberText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "HomeNumberText", `${testCases[i].testId}`)
                    const cellNumberText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "CellNumberText", `${testCases[i].testId}`)
                    const NextButtonText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "NextButtonText", `${testCases[i].testId}`)
                    const firstNameText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "FirstNameText", `${testCases[i].testId}`)
                    const lastNameText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "LastNameText", `${testCases[i].testId}`)
                    const relationText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "RelationText", `${testCases[i].testId}`)
                    const cellPhoneText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "CellPhoneText", `${testCases[i].testId}`)
                    const firstName = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "FirstName", `${testCases[i].testId}`)
                    const lastName = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "LastName", `${testCases[i].testId}`)
                    const relation = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Relation", `${testCases[i].testId}`)
                    const relationCellNumber = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "RelationCellNumber", `${testCases[i].testId}`)
                    const address = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Address", `${testCases[i].testId}`)
                    const unit = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Unit", `${testCases[i].testId}`)
                    const province = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Province", `${testCases[i].testId}`)
                    const city = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "City", `${testCases[i].testId}`)
                    const postal = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Postal", `${testCases[i].testId}`)
                    const addressText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "AddressText", `${testCases[i].testId}`)
                    const unitText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "UnitText", `${testCases[i].testId}`)
                    const provinceText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "ProvinceText", `${testCases[i].testId}`)
                    const cityText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "CityText", `${testCases[i].testId}`)
                    const postalText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "PostalText", `${testCases[i].testId}`)
                    const nameMultipleOptionsInAdobe = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "nameFieldInAdobe", `${testCases[i].testId}`)
                    const termsAndConditions = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "TermsAndConditionsText", `${testCases[i].testId}`)
                    const provideMyConsentText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "ProvideMyConsentText", `${testCases[i].testId}`)
                    const continueButtonText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "ContinueButton", `${testCases[i].testId}`)
                    const sign = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "Sign", `${testCases[i].testId}`);
                    const preferredTimeText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "PreferredTimeText", `${testCases[i].testId}`)
                    const thankYouText = await readData1("onboarding", "onboardingElderCare", "ElderCarePositive", "ThankYouText", `${testCases[i].testId}`)

                    allureReporter.addDescription(`${testCases[i].testId} - ${testCases[i].testDescription}`);

                    await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
                    await Keywords.click(locator.startNow, "Start Now Button");
                    await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                    console.log({ userName, password })
                    await Keywords.SetValue(locator.userName, userName);
                    await Keywords.SetValue(locator.password, password);
                    await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
                    await Keywords.click(locator.loginButton, "Login Button")

                    await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
                    await Keywords.click(locator.allowButton, "Allow button");
                    await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
                    await Keywords.click(locator.allowNotificationButton, "Allow notification button");
                    if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
                        await Keywords.click(locator.allowButton, "allow button");
                        if (await Locatoronboard.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                            await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
                        }
                    }
                    await Keywords.AllureInfo("LogIn Screen Completed!!!");
                    console.log('Login process completed successfully.');
                    await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                    await Keywords.verifyElementDisplayed(Locatoronboard.elderCareProgram, "Elder  card")
                    await Keywords.click(Locatoronboard.elderCareProgram, "Elder care Health card")
                    await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                    await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                    await Keywords.verifyText(Locatoronboard.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
                    await Keywords.click(Locatoronboard.openChecklist, "Open Checklist Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.requiredInformation, "Required Information");
                    await Keywords.verifyText(Locatoronboard.checkListScreenElderCare, "content-desc", checklistText, "Texts present in checklist screen");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.startOnboardingButton, "Start Onboarding button");
                    await Keywords.click(Locatoronboard.startOnboardingButton, "Start Onboarding Button");
                    await Keywords.AllureInfo("Required Information Screen Completed!!!");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(20), "20% onboard complete status")
                    await Keywords.verifyElementDisplayed(Locatoronboard.whoisOnboarding, "Who is onboarding? Screen");
                    await Keywords.click(Locatoronboard.Eldernext, "Next Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(40), "40% onboard complete status")
                    await Keywords.verifyElementDisplayed(Locatoronboard.contactInformation, "Contact Information Screen");
                    await Keywords.verifyText(Locatoronboard.homeNumberText, "content-desc", homePhoneNumberText, "Home Number")
                    await Keywords.verifyText(Locatoronboard.cellNumberText, "content-desc", cellNumberText, "Cell Number")
                    await Keywords.SetValue(Locatoronboard.homePhoneNumber, homePhoneNumber);
                    await Keywords.SetValue(Locatoronboard.cellNumber, cellNumber);

                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Contact Information Screen Completed!!!");

                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(50), "50% onboard complete status");
                    await Keywords.waitForDisplay(Locatoronboard.emergencyContactScreen, 45000, "Emergency Contact Screen");
                    const text = [firstNameText, lastNameText, relationText, cellPhoneText];
                    const locators = [Locatoronboard.firstNameText, Locatoronboard.lastNameText, Locatoronboard.relationText, Locatoronboard.cellPhoneText];
                    for (let i = 0; i < text.length; i++) {
                        await Keywords.verifyText(locators[i], "content-desc", text[i], `${text[i]} in Emergency Contact screen`);
                    }
                    await Keywords.SetValue(Locatoronboard.firstName, firstName);
                    await Keywords.SetValue(Locatoronboard.lastName, lastName);
                    await Keywords.SetValue(Locatoronboard.relation, relation);
                    await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber)
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Next button");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Emergency Contact Screen Completed!!!");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(60), "60% onboard complete status");
                    await Keywords.waitForDisplay(Locatoronboard.addressInformationScreen, 45000, "Address Information Screen");
                    const text1 = [addressText, unitText, cityText, provinceText, postalText];
                    const locators1 = [Locatoronboard.backgroundText('address'), Locatoronboard.backgroundText('unit #'), Locatoronboard.backgroundText('city'), Locatoronboard.backgroundText('province'), Locatoronboard.backgroundText('postal_code')];
                    for (let i = 0; i < text1.length; i++) {
                        await Keywords.verifyText(locators1[i], "content-desc", text1[i], `Verify text in address information screen->${text1[i]}`);
                    }
                    await Keywords.SetValue(Locatoronboard.addressField, address);
                    await Keywords.SetValue(Locatoronboard.unitField, unit);
                    await Keywords.SetValue(Locatoronboard.cityField, city);
                    await Keywords.click(Locatoronboard.provinceDropdown, "Province Dropdown")
                    await Keywords.click(Locatoronboard.accessibilityLocator(province), `${province} option`)
                    await Keywords.SetValue(Locatoronboard.postalCode, postal);
                    if (!await Locatoronboard.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextButton, "Next button");
                    await Keywords.verifyText(Locatoronboard.nextButtonText, "content-desc", NextButtonText, "Verify Next button text");
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Address Information Screen Completed!!!");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(80), "80% onboard complete status");
                    await Keywords.waitForDisplay(Locatoronboard.termsAndConditionsScreen, 100000, "Terms & Conditions Screen");
                    await Keywords.verifyText(Locatoronboard.acceptTermsAndConditions, "content-desc", termsAndConditions, "Accept Terms & Conditions")
                    await Keywords.click(Locatoronboard.acceptTermsAndConditions, "Accept Terms and Conditions Radio button");
                    await Keywords.verifyText(Locatoronboard.provideMyConsent, "content-desc", provideMyConsentText, "Provide My Consent");
                    await Keywords.click(Locatoronboard.provideMyConsent, "Provide Consent Radio Button");
                    await Keywords.waitForDisplay(Locatoronboard.consentFormPopup, 90000, "Consent Form Popup");
                    await Keywords.verifyText(Locatoronboard.continueBtn, "content-desc", continueButtonText, "Continue Button");
                    await Keywords.click(Locatoronboard.continueBtn, "Continue Button in Consent Popup");
                    console.log(await browser.getContexts());
                    await Keywords.waitForDisplay(Locatoronboard.adobeAcknowledgeMessage, 100000, "Adobe Acknowledge Message");
                    await Keywords.click(Locatoronboard.continueBtnInAdobe, "Continue Button in Adobe")
                    console.log(await browser.getContexts());
                    await Keywords.verifyElementIsEnabled(Locatoronboard.startButton, "Start Button");
                    await Keywords.click(Locatoronboard.startButton, "Start Button");
                    await Keywords.SetValue(Locatoronboard.nameFieldInAdobe, nameMultipleOptionsInAdobe);
                    if (!await Locatoronboard.nextArrowButton(12).isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(12), "12 required fields remaining")
                    await Keywords.click(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                    await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                    await Keywords.verifyElementDisplayed(Locatoronboard.consentformType, "Type option");
                    await Keywords.verifyElementDisplayed(Locatoronboard.consentformDraw, "Draw option");
                    await Keywords.click(Locatoronboard.consentformType, "Type option");
                    await Keywords.SetValue(Locatoronboard.enterInitials, sign);
                    await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                    await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                    await Keywords.click(Locatoronboard.nextArrowButton(11), "Next Arrow Button");
                    await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(11), "11 required fields remaining");
                    let number = 11
                    while (true) {
                        await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                        await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                        await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                        await driver.pause(2500);
                        if (await Locatoronboard.applyButtonInInitials.isDisplayed({ timeout: 45000 })) {
                            await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                        }
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
