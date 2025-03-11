import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { expect } from 'chai';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Onboarding - Cancer Program', async () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("onboarding", "onboardingCancer", "MulipleOptionCancer");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Email", `${testCases[i].testId}`);
                const password = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Password", `${testCases[i].testId}`);
                const welcomeOnboardText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "WelcomeOnboarding", `${testCases[i].testId}`);
                const checklistText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "CheckListText", `${testCases[i].testId}`);
                const homePhoneNumber = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "HomePhoneNumber", `${testCases[i].testId}`)
                const cellNumber = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "CellNumber", `${testCases[i].testId}`)
                const homePhoneNumberText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "HomeNumberText", `${testCases[i].testId}`)
                const cellNumberText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "CellNumberText", `${testCases[i].testId}`)
                const NextButtonText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "NextButtonText", `${testCases[i].testId}`)
                const firstNameText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "FirstNameText", `${testCases[i].testId}`)
                const lastNameText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "LastNameText", `${testCases[i].testId}`)
                const relationText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "RelationText", `${testCases[i].testId}`)
                const cellPhoneText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "CellPhoneText", `${testCases[i].testId}`)
                const firstName = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "FirstName", `${testCases[i].testId}`)
                const lastName = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "LastName", `${testCases[i].testId}`)
                const relation = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Relation", `${testCases[i].testId}`)
                const relationCellNumber = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "RelationCellNumber", `${testCases[i].testId}`)
                const address = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Address", `${testCases[i].testId}`)
                const unit = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Unit", `${testCases[i].testId}`)
                const province = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Province", `${testCases[i].testId}`)
                const city = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "City", `${testCases[i].testId}`)
                const postal = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Postal", `${testCases[i].testId}`)
                const addressText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "AddressText", `${testCases[i].testId}`)
                const unitText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "UnitText", `${testCases[i].testId}`)
                const provinceText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "ProvinceText", `${testCases[i].testId}`)
                const cityText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "CityText", `${testCases[i].testId}`)
                const postalText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "PostalText", `${testCases[i].testId}`)
                const healthCardNumber = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "HealthCard", `${testCases[i].testId}`)
                const dob = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "DOB", `${testCases[i].testId}`);
                const termsAndConditions = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "TermsAndConditionsText", `${testCases[i].testId}`)
                const provideMyConsentText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "ProvideMyConsentText", `${testCases[i].testId}`)
                const continueButtonText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "ContinueButton", `${testCases[i].testId}`)
                const nameMultipleOptionsInAdobe = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "nameFieldInAdobe", `${testCases[i].testId}`)
                const sign = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Sign", `${testCases[i].testId}`);
                const preferredTimeText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "PreferredTimeText", `${testCases[i].testId}`)
                const thankYouText = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "ThankYouText", `${testCases[i].testId}`)
                const testDescription = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", "Test Description", `${testCases[i].testId}`)
                allureReporter.addDescription(testDescription);
                await Keywords.waitForDisplay(Locatoronboard.startNow, 90000, "Start Now Button")
                await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button");
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                console.log({ userName, password })
                await Keywords.SetValue(locator.userName, userName);
                await Keywords.SetValue(locator.password, password);
                if (!await locator.loginButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
                await Keywords.click(locator.loginButton, "Login Button")

                await Keywords.waitForDisplay(Locatoronboard.allowButton, 40000, "Get notified dialog box")
                await Keywords.click(Locatoronboard.allowButton, "Allow button");
                await Keywords.waitForDisplay(Locatoronboard.androidAllowNotificationButton, 40000, "Default Allow notification")
                await Keywords.click(Locatoronboard.androidAllowNotificationButton, "Default Allow notification button");
                if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
                    await Keywords.click(locator.allowButton, "allow button");
                    if (await Locatoronboard.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                        await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
                    }
                }
                await Keywords.AllureInfo("LogIn Screen Completed!!!");
                console.log('Login process completed successfully.');

                await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
                await Keywords.verifyElementDisplayed(Locatoronboard.cancer, "Cancer card")
                await Keywords.click(Locatoronboard.cancer, "Cancer Health card")
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyText(Locatoronboard.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
                await Keywords.click(Locatoronboard.openChecklist, "Open Checklist Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.requiredInformation, "Required Information");
                await Keywords.verifyListOfText(Locatoronboard.checkListScreen, "content-desc", checklistText, "Texts present in checklist screen");
                await Keywords.verifyElementIsEnabled(Locatoronboard.startOnboardingButton, "Start Onboarding button");
                await Keywords.click(Locatoronboard.startOnboardingButton, "Start Onboarding Button");
                await Keywords.AllureInfo("Required Information Screen Completed!!!");

                await Keywords.verifyElementDisplayed(Locatoronboard.contactInformation, "Contact Information Screen");
                await Keywords.verifyText(Locatoronboard.homeNumberText, "content-desc", homePhoneNumberText, "Home Number")
                await Keywords.verifyText(Locatoronboard.cellNumberText, "content-desc", cellNumberText, "Cell Number")
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

                await Keywords.waitForDisplay(Locatoronboard.healthCardNumberField, 45000, "Health card Information Screen");
                await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
                await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
                const getDob = await Locatoronboard.dobInHealthCard.getText();
                const formattedGetDob = getDob.replace(/-/g, '');
                expect(dob).to.be.equal(formattedGetDob);
                if (!await Locatoronboard.nextButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(30), "30% complete status")
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
                await Keywords.SetValue(Locatoronboard.nameFieldInAdobe, nameMultipleOptionsInAdobe);
                if (!await Locatoronboard.nextArrowButton(12).isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(12), "12 required fields remaining")
                await Keywords.click(Locatoronboard.nextArrowButton(12), "Next Arrow Button");
                await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                await Keywords.verifyElementDisplayed(Locatoronboard.typeInInitialBox, "Type option");
                await Keywords.verifyElementDisplayed(Locatoronboard.drawInInitialBox, "Draw option");
                await Keywords.click(Locatoronboard.typeInInitialBox, "Type option");
                await Keywords.SetValue(Locatoronboard.enterInitials, sign);
                await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                await Keywords.click(Locatoronboard.nextArrowButton(11), "Next Arrow Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(11), "11 required fields remaining")
              
                let number = 11;
                while (true) {
                    await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                    await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                    await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                    await browser.pause(2500);
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
                await Keywords.verifyElementDisplayed(Locatoronboard.typeInInitialBox, "Type option");
                await Keywords.click(Locatoronboard.typeInInitialBox, "Type option");
                await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                await browser.pause(2000);
                await Keywords.waitForDisplay(Locatoronboard.requiredFieldsCompletedText, 90000, "Required MultipleOptions completed");
                await Keywords.verifyElementDisplayed(Locatoronboard.reviewAgreementText, "Review Agreement Text");
                await Keywords.verifyElementIsEnabled(Locatoronboard.reviewAgreementButton, "Review Agreement button");
                await Keywords.click(Locatoronboard.reviewAgreementButton, "Review Agreement button");
                await Keywords.waitForDisplay(Locatoronboard.requiredFieldsCompletedText, 45000, "Required MultipleOptions Completed");
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

                await Keywords.verifyElementDisplayed(Locatoronboard.esasSentences, "ESAS _R page");
                await Keywords.verifyElementIsEnabled(Locatoronboard.cancerStartAssessment, "Start Assessment Button")
                await Keywords.click(Locatoronboard.cancerStartAssessment, " Start Assessment Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(72), "72% complete status");

                for (let j = 1; j <= 9; j++) {
                    const cancerQuestions = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", `CancerAssess_Q${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), `CancerAssess_Q${j}`);
                    await Keywords.click(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), "Option for the questions");
                    const cancerAssessOption = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", `Cancer_${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), `Cancer_${j}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), "Option for the questions");
                    await Keywords.click(Locatoronboard.cancerNext, " Next Button");
                }
                await Keywords.verifyText(Locatoronboard.review, "content-desc", "Review", "Review");
                for (let k = 1; k <= 6; k++) {
                    const cancerQuestions1 = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", `Esasr-Q${k}`, `${testCases[i].testId}`);
                    console.log("Cancer question " + cancerQuestions1)
                    await Keywords.verifyElementDisplayed(Locatoronboard.cancerReviewAssessmentQuestions(cancerQuestions1.toString()), cancerQuestions1);

                    const cancerAssessOption1 = await readData1("onboarding", "onboardingCancer", "MulipleOptionCancer", `Cancer_${k}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.reviewAssessmentCancer(cancerAssessOption1.toString()), cancerAssessOption1);
                }
                await Keywords.verifyElementIsEnabled(Locatoronboard.submitcancleField, "Submit  Button")
                await Keywords.click(Locatoronboard.submitcancleField, " Submit Button");
                await Keywords.waitForDisplay(Locatoronboard.preferredTimeForClinic, 45000, "Preferred Time for Clinic");
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(98), "98% complete status");
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
                await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
                await Keywords.AllureInfo("Onboard Flow Completed!!!");
            } catch (err) {
                throw new Error(err);
            }
        });
    }
});