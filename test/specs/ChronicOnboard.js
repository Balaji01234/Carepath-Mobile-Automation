import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData, generateRandomNumber, dataSets } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    const iterationValue = dataSets(iterations);
    console.log("iterationValue" + iterationValue)

it('TC-004-NewUserOnboardingChronic', async () => {
        try {

            // const userName = await readData("TC_01", "Field", "Email", `Writedata${1}`);
            const userName = await readData("TC_01", "Field", "Email", `Testdata${1}`);
            const password = await readData("TC_01", "Field", "Password", `Testdata${1}`);
            const welcomeOnboardText = await readData("TC_02", "Field", "WelcomeOnboarding", `Testdata${1}`);
            const accessApproveText = await readData("TC_02", "Field", "AccessApprovedText", `Testdata${1}`);
            const checklistText = await readData("TC_02", "Field", "CheckListText", `Testdata${1}`);
            const homePhoneNumber = await readData("TC_02", "Field", "HomePhoneNumber", `Testdata${1}`)
            const cellNumber = await readData("TC_02", "Field", "CellNumber", `Testdata${1}`)
            const homePhoneNumberText = await readData("TC_02", "Field", "HomeNumberText", `Testdata${1}`)
            const cellNumberText = await readData("TC_02", "Field", "CellNumberText", `Testdata${1}`)
            const NextButtonText = await readData("TC_02", "Field", "NextButtonText", `Testdata${1}`)
            const firstNameText = await readData("TC_02", "Field", "FirstNameText", `Testdata${1}`)
            const lastNameText = await readData("TC_02", "Field", "LastNameText", `Testdata${1}`)
            const relationText = await readData("TC_02", "Field", "RelationText", `Testdata${1}`)
            const cellPhoneText = await readData("TC_02", "Field", "CellPhoneText", `Testdata${1}`)
            const firstName = await readData("TC_02", "Field", "FirstName", `Testdata${1}`)
            const lastName = await readData("TC_02", "Field", "LastName", `Testdata${1}`)
            const relation = await readData("TC_02", "Field", "Relation", `Testdata${1}`)
            const relationCellNumber = await readData("TC_02", "Field", "RelationCellNumber", `Testdata${1}`)
            const address = await readData("TC_02", "Field", "Address", `Testdata${1}`)
            const unit = await readData("TC_02", "Field", "Unit", `Testdata${1}`)
            const province = await readData("TC_02", "Field", "Province", `Testdata${1}`)
            const city = await readData("TC_02", "Field", "City", `Testdata${1}`)
            const postal = await readData("TC_02", "Field", "Postal", `Testdata${1}`)
            const addressText = await readData("TC_02", "Field", "AddressText", `Testdata${1}`)
            const unitText = await readData("TC_02", "Field", "UnitText", `Testdata${1}`)
            const provinceText = await readData("TC_02", "Field", "ProvinceText", `Testdata${1}`)
            const cityText = await readData("TC_02", "Field", "CityText", `Testdata${1}`)
            const postalText = await readData("TC_02", "Field", "PostalText", `Testdata${1}`)
            const healthCardNumber = await readData("TC_02", "Field", "HealthCard", `Testdata${1}`)
            const dob = await readData("TC_01", "Field", "DOB", `Testdata${1}`);
            const termsAndConditions = await readData("TC_02", "Field", "TermsAndConditionsText", `Testdata${1}`)
            const provideMyConsentText = await readData("TC_02", "Field", "ProvideMyConsentText", `Testdata${1}`)
            const continueButtonText = await readData("TC_02", "Field", "ContinueButton", `Testdata${1}`)
            const mentalHealthTextInAdobe = await readData("TC_02", "Field", "MentalHealthTextInAdobe", `Testdata${1}`)
            const nameFieldInAdobe = await readData("TC_02", "Field", "nameFieldInAdobe", `Testdata${1}`)
            const sign = await readData("TC_02", "Field", "Sign", `Testdata${1}`);
            const assessmentOverviewText = await readData("TC_02", "Field", "AssessmentOverview", `Testdata${1}`)
            const startAssessmentButtonText = await readData("TC_02", "Field", "StartAssessmentButtonText", `Testdata${1}`)
            const SaveGAD7Text = await readData("TC_02", "Field", "SaveGAD7Text", `Testdata${1}`)
            const haveYouBotherText = await readData("TC_02", "Field", "HaveYouBotheredText", `Testdata${1}`)
            const preferredTimeText = await readData("TC_02", "Field", "PreferredTimeText", `Testdata${1}`)
            const thankYouText = await readData("TC_02", "Field", "ThankYouText", `Testdata${1}`)
            const SkipAndGoHome = await readData("TC_02", "Field", "SkipAndGoHome", `Testdata${1}`)
            allureReporter.addDescription(`Onboard Flow for New User !!! `);
            await driver.implicitWait(15000);
            await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button");
            await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
            console.log({ userName, password })
         
            await Keywords.SetValue(locator.userName, userName);
            await Keywords.SetValue(locator.password, password);
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
             
            await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(onboardLocator.ChronicDi, "Chronic card")
            await Keywords.click(onboardLocator.ChronicDi, "chronic Health card");
            await driver.implicitWait(15000);
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await driver.implicitWait(1500);
            await Keywords.verifyText(onboardLocator.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
            await Keywords.click(onboardLocator.openChecklist, "Open Checklist Button");
            await Keywords.verifyElementDisplayed(onboardLocator.requiredInformation, "Required Information");
            await Keywords.verifyListOfText(onboardLocator.checkListScreen, "content-desc", checklistText, "Texts present in checklist screen");
            await Keywords.verifyElementIsEnabled(onboardLocator.startOnboardingButton, "Start Onboarding button");
            await Keywords.click(onboardLocator.startOnboardingButton, "Start Onboarding Button");
            await Keywords.AllureInfo("Required Information Screen Completed!!!");
            await Keywords.verifyElementDisplayed(onboardLocator.contactInformation, "Contact Information Screen");
            await Keywords.verifyText(onboardLocator.homeNumberText, "content-desc", homePhoneNumberText, "Home Number")
            await Keywords.verifyText(onboardLocator.cellNumberText, "content-desc", cellNumberText, "Cell Number")
            await Keywords.SetValue(onboardLocator.homePhoneNumber, homePhoneNumber);
            await Keywords.SetValue(onboardLocator.cellNumber, cellNumber);
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(15), "15% onboard complete status")
            if (!await onboardLocator.nextButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(onboardLocator.nextButton, "Next button");
            await Keywords.verifyText(onboardLocator.nextButtonText, "content-desc", NextButtonText, "Next button");
            await Keywords.click(onboardLocator.nextButton, "Next Button");
            await Keywords.AllureInfo("Contact Information Screen Completed!!!");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(20), "20% onboard complete status")
            await Keywords.waitForDisplay(onboardLocator.emergencyContactScreen, 45000, "Emergency Contact Screen");
            const text = [firstNameText, lastNameText, relationText, cellPhoneText];
            const locators = [onboardLocator.firstNameText, onboardLocator.lastNameText, onboardLocator.relationText, onboardLocator.cellPhoneText];
            for (let i = 0; i < text.length; i++) {
                await Keywords.verifyText(locators[i], "content-desc", text[i], `${text[i]} in Emergency Contact screen`);
            }

            await Keywords.SetValue(onboardLocator.firstName, firstName);
            await Keywords.SetValue(onboardLocator.lastName, lastName);
            await Keywords.SetValue(onboardLocator.relation, relation);
            await Keywords.SetValue(onboardLocator.relationCellPhone, relationCellNumber)
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(20), "20% onboard complete status")
            if (!await onboardLocator.nextButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(onboardLocator.nextButton, "Next button");
            await Keywords.verifyText(onboardLocator.nextButtonText, "content-desc", NextButtonText, "Next button");
            await Keywords.click(onboardLocator.nextButton, "Next Button");
            await Keywords.AllureInfo("Emergency Contact Screen Completed!!!");
            await Keywords.waitForDisplay(onboardLocator.addressInformationScreen, 45000, "Address Information Screen");
            const text1 = [addressText, unitText, cityText, provinceText, postalText];
            const locators1 = [onboardLocator.backgroundText('address'), onboardLocator.backgroundText('unit #'), onboardLocator.backgroundText('city'), onboardLocator.backgroundText('province'), onboardLocator.backgroundText('postal_code')];
            for (let i = 0; i < text1.length; i++) {
                await Keywords.verifyText(locators1[i], "content-desc", text1[i], `Verify text in address information screen->${text1[i]}`);
            }
            await Keywords.SetValue(onboardLocator.addressField, address);
            await Keywords.SetValue(onboardLocator.unitField, unit);
            await Keywords.SetValue(onboardLocator.cityField, city);
            await Keywords.click(onboardLocator.provinceDropdown, "Province Dropdown")
            await Keywords.click(onboardLocator.accessibilityLocator(province), `${province} option`)
            await Keywords.SetValue(onboardLocator.postalCode, postal);
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(28), "28% onboard complete status")
            if (!await onboardLocator.nextButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(onboardLocator.nextButton, "Next button");
            await Keywords.verifyText(onboardLocator.nextButtonText, "content-desc", NextButtonText, "Verify Next button text");
            await Keywords.click(onboardLocator.nextButton, "Next Button");
            await Keywords.AllureInfo("Address Information Screen Completed!!!");

            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(30), "30% onboard complete status")
            await Keywords.waitForDisplay(onboardLocator.healthCardInformationScreen, 45000, "Health card Information Screen");
            await Keywords.SetValue(onboardLocator.healthCardNumberField, healthCardNumber);
            await Keywords.SetValue(onboardLocator.healthCardNumberField, healthCardNumber);
            const getDob = await onboardLocator.dobInHealthCard.getText();
            const formattedGetDob = getDob.replace(/-/g, '');
            await expect(dob).to.be.equal(formattedGetDob);
            if (!await onboardLocator.nextButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.click(onboardLocator.nextButton, "Next Button");
            await Keywords.AllureInfo("Health card Information Screen Completed!!!");
            await Keywords.waitForDisplay(onboardLocator.employmentInformationScreen, 45000, "Employment Information Screen");
            await Keywords.click(onboardLocator.workStatusDropdown, "Work Status");
            await Keywords.click(onboardLocator.fullTime, "Select Fulltime option");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(34), "34% complete status")
            await Keywords.click(onboardLocator.nextButton, "Next Button");
            await Keywords.AllureInfo("Employment Information Screen Completed!!!");
            await Keywords.waitForDisplay(onboardLocator.termsAndConditionsScreen, 90000, "Terms & Conditions Screen");
            await Keywords.verifyText(onboardLocator.acceptTermsAndConditions, "content-desc", termsAndConditions, "Accept Terms & Conditions")
            await Keywords.click(onboardLocator.acceptTermsAndConditions, "Accept Terms and Conditions Radio button");
            await Keywords.verifyText(onboardLocator.provideMyConsent, "content-desc", provideMyConsentText, "Provide My Consent");
            await Keywords.click(onboardLocator.provideMyConsent, "Provide Consent Radio Button");
            await Keywords.waitForDisplay(onboardLocator.consentFormPopup, 90000, "Consent Form Popup");
            await Keywords.verifyText(onboardLocator.continueBtn, "content-desc", continueButtonText, "Continue Button");
            await browser.pause(3000);
            await Keywords.click(onboardLocator.continueBtn, "Continue Button in Consent Popup");
            console.log(await browser.getContexts());
            await Keywords.waitForDisplay(onboardLocator.adobeAcknowledgeMessage, 90000, "Adobe Acknowledge Message");
            await Keywords.click(onboardLocator.continueBtnInAdobe, "Continue Button in Adobe")
            console.log(await browser.getContexts());
            await Keywords.verifyElementIsEnabled(onboardLocator.startButton, "Start Button");
            await Keywords.click(onboardLocator.startButton, "Start Button");
            await Keywords.SetValue(onboardLocator.cancerinput, nameFieldInAdobe);
            if (!await onboardLocator.nextArrowButton(12).isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(onboardLocator.nextArrowButton(12), "Next Arrow Button");
            await Keywords.verifyElementDisplayed(onboardLocator.remainingFields(12), "12 required fields remaining")
            await Keywords.click(onboardLocator.nextArrowButton(12), "Next Arrow Button");
            await Keywords.click(onboardLocator.initialHere, "Initial Here");
            await browser.pause(3000);
            await Keywords.verifyElementDisplayed(onboardLocator.consentformType, "Type option");
            await Keywords.verifyElementDisplayed(onboardLocator.consentformDraw, "Draw option");
            await Keywords.click(onboardLocator.consentformType, "Type option");
            await Keywords.SetValue(onboardLocator.enterInitials, sign);
            await Keywords.verifyElementIsEnabled(onboardLocator.applyButtonInInitials, "Apply Button")
            await Keywords.click(onboardLocator.applyButtonInInitials, "Apply Button");
            await Keywords.verifyElementDisplayed(onboardLocator.remainingFields(11), "11 required fields remaining")
            await Keywords.click(onboardLocator.nextArrowButton(11), "Next Arrow Button");
            let number = 11
            while (true) {
                await Keywords.click(onboardLocator.initialHere, "Initial Here");
                await Keywords.verifyElementIsEnabled(onboardLocator.applyButtonInInitials, "Apply Button")
                await Keywords.click(onboardLocator.applyButtonInInitials, "Apply Button");
                await driver.pause(2500);
                await Keywords.verifyElementDisplayed(onboardLocator.remainingFields(number - 1), `${number - 1} required fields remaining`)
                await Keywords.click(onboardLocator.nextArrowButton(number - 1), "Next Arrow Button");
                if (!await onboardLocator.initialHere.isDisplayed()) {
                    break;
                }
                number = number - 1;
            }
            await Keywords.verifyElementDisplayed(onboardLocator.signHere, "Sign Here");
            await Keywords.click(onboardLocator.signHere, "Sign Here");
            await Keywords.verifyElementDisplayed(onboardLocator.consentformType, "Type option");
            await Keywords.click(onboardLocator.consentformType, "Type option");
            await Keywords.verifyElementIsEnabled(onboardLocator.applyButtonInInitials, "Apply Button")
            await Keywords.click(onboardLocator.applyButtonInInitials, "Apply Button");
            await browser.pause(2000);
            await Keywords.waitForDisplay(onboardLocator.requiredFieldCompleted, 90000, "Required Fields completed");
            await Keywords.verifyElementDisplayed(onboardLocator.reviewAgreementText, "Review Agreement Text");
            await Keywords.verifyElementIsEnabled(onboardLocator.reviewAgreementButton, "Review Agreement button");
            await Keywords.click(onboardLocator.reviewAgreementButton, "Review Agreement button");
            await Keywords.waitForDisplay(onboardLocator.requiredFieldsCompletedText, 45000, "Required Fields Completed");
            await Keywords.verifyElementIsEnabled(onboardLocator.finishButton, "Finish Button")
            await Keywords.click(onboardLocator.finishButton, "Finish Button");
            await Keywords.verifyElementIsEnabled(onboardLocator.tapToSign, "Tap to sign Button")
            await Keywords.click(onboardLocator.tapToSign, "Tap to sign Button");
            await browser.pause(1200);
            await Keywords.waitForDisplay(onboardLocator.continueNextStepButton, 60000, "Continue Next Step Button");
            await Keywords.verifyElementDisplayed(onboardLocator.acceptTermsAndConditions, "Accept Terms and Conditions screen");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(54), "54% complete status");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueNextStepButton, "Continue Next Step Button")
            await Keywords.click(onboardLocator.continueNextStepButton, "Continue Next Step Button");
            await Keywords.AllureInfo("Consent Screen Completed!!!");
            await browser.pause(12000);
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(98), "98% onboard complete status");
            await Keywords.waitForDisplay(onboardLocator.preferredTimeForClinic, 45000, "Preferred Time for Clinic");
            await Keywords.verifyText(onboardLocator.preferredTimeForClinic, "content-desc", preferredTimeText, "Preferred Time for Clinic")
            await Keywords.verifyElementIsEnabled(onboardLocator.preferredTimeDropdown, "Preferred Time dropdown")
            await Keywords.click(onboardLocator.preferredTimeDropdown, "Preferred Time dropdown");
            await Keywords.verifyElementDisplayed(onboardLocator.selectTime, "Select Preferred Time for clinic")
            await Keywords.click(onboardLocator.selectTime, "Select Preferred Time for clinic");
            await Keywords.verifyElementIsEnabled(onboardLocator.saveButton, "Save Button");
            await Keywords.click(onboardLocator.saveButton, "Save Button")
            await Keywords.waitForDisplay(onboardLocator.thankYouText, 45000, "Thank you ")
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(100), "100% complete status");
            await Keywords.verifyText1(onboardLocator.thankYouMessage, "content-desc", thankYouText, "Thank You for Onboarding");
            await Keywords.verifyElementDisplayed(onboardLocator.goToProgramSelection, "Go to program selection button")
            await Keywords.click(onboardLocator.goToProgramSelection, "Go to program selection button");
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.AllureInfo("Onboard Flow Completed!!!");

        } catch (err) {
            throw new Error(err);
        }

        });
    });