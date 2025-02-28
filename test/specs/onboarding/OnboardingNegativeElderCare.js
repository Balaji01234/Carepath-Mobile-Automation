import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import {onboardLocators} from '../page/onboard.locators.js';
import {AssessmentLocators} from '../page/HealthAssessmentLocator.js'

describe('Carepath Automation', () => {
    const locator = new locators();
    const locator_HAssessment = new AssessmentLocators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    it('TC-002-NewUserOnboarding', async () => {
        try {
            const userName = await readData("TC_01", "Field", "Email", `Writedata${1}`);
            const userName1 = await readData("TC_01", "Field", "Email1", `Writedata${1}`);
            const password1 = await readData("TC_01", "Field", "Password1", `Testdata${1}`);
            const password2 = await readData("TC_01", "Field", "Password2", `Testdata${1}`);
            const password = await readData("TC_01", "Field", "Password", `Testdata${1}`);
            const welcomeOnboardText = await readData("TC_02", "Field", "WelcomeOnboarding", `Testdata${1}`);
            const accessApproveText = await readData("TC_02", "Field", "AccessApprovedText", `Testdata${1}`);
            const checklistText = await readData("TC_02", "Field", "CheckListText", `Testdata${1}`);
            const homePhoneNumber1 = await readData("TC_02", "Field", "HomePhoneNumber1", `Testdata${1}`)
            const homePhoneNumber = await readData("TC_02", "Field", "HomePhoneNumber", `Testdata${1}`)
            const cellNumber1 = await readData("TC_02", "Field", "CellNumber1", `Testdata${1}`)
            const cellNumber = await readData("TC_02", "Field", "CellNumber", `Testdata${1}`)
            const homePhoneNumberText = await readData("TC_02", "Field", "HomeNumberText", `Testdata${1}`)
            const cellNumberText = await readData("TC_02", "Field", "CellNumberText", `Testdata${1}`)
            const NextButtonText = await readData("TC_02", "Field", "NextButtonText", `Testdata${1}`)
            const firstNameText = await readData("TC_02", "Field", "FirstNameText", `Testdata${1}`)
            const lastNameText = await readData("TC_02", "Field", "LastNameText", `Testdata${1}`)
            const relationText = await readData("TC_02", "Field", "RelationText", `Testdata${1}`)
            const cellPhoneText = await readData("TC_02", "Field", "CellPhoneText", `Testdata${1}`)
            const firstName1 = await readData("TC_02", "Field", "FirstName1", `Testdata${1}`)
            const firstName = await readData("TC_02", "Field", "FirstName", `Testdata${1}`)
            const lastName1 = await readData("TC_02", "Field", "LastName1", `Testdata${1}`)
            const lastName = await readData("TC_02", "Field", "LastName", `Testdata${1}`)
            const relation = await readData("TC_02", "Field", "Relation", `Testdata${1}`)
            const relationCellNumber1 = await readData("TC_02", "Field", "RelationCellNumber1", `Testdata${1}`)
            const relationCellNumber = await readData("TC_02", "Field", "RelationCellNumber", `Testdata${1}`)
            const address1 = await readData("TC_02", "Field", "Address1", `Testdata${1}`)
            const address = await readData("TC_02", "Field", "Address", `Testdata${1}`)
            const unit1 = await readData("TC_02", "Field", "Unit1", `Testdata${1}`)
            const unit = await readData("TC_02", "Field", "Unit", `Testdata${1}`)
            const province = await readData("TC_02", "Field", "Province", `Testdata${1}`)
            const city = await readData("TC_02", "Field", "City", `Testdata${1}`)
            const postal1 = await readData("TC_02", "Field", "Postal1", `Testdata${1}`)
            const postal = await readData("TC_02", "Field", "Postal", `Testdata${1}`)
            const addressText = await readData("TC_02", "Field", "AddressText", `Testdata${1}`)
            const unitText = await readData("TC_02", "Field", "UnitText", `Testdata${1}`)
            const provinceText = await readData("TC_02", "Field", "ProvinceText", `Testdata${1}`)
            const cityText = await readData("TC_02", "Field", "CityText", `Testdata${1}`)
            const postalText = await readData("TC_02", "Field", "PostalText", `Testdata${1}`)
            const healthCardNumber1 = await readData("TC_02", "Field", "HealthCard1", `Testdata${1}`)
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
            await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button");
            await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
            console.log({ userName, password })

            await browser.pause(7000);
            await Keywords.click(Locatoronboard.loginButton, "Login Button")
            await Keywords.verifyElementDisplayed(Locatoronboard.enterEmailID, "Please enter Email ID");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterPassword, "Please enter Password");

            await Keywords.SetValue(Locatoronboard.userName, userName1);
            await Keywords.click(Locatoronboard.loginButton, "Login Button")
            await Keywords.verifyElementDisplayed(Locatoronboard.invalidEmail, "Please enter valid Email ID");

            await Keywords.SetValue(Locatoronboard.userName, userName);
            await Keywords.SetValue(Locatoronboard.password, password1);
            await Keywords.click(Locatoronboard.loginButton, "Login Button")
            await Keywords.verifyElementDisplayed(Locatoronboard.loginFailed, "Login Failed!");
            await Keywords.verifyElementDisplayed(Locatoronboard.loginFailedDes, "Login Failed!");

            await Keywords.verifyElementIsEnabled(Locatoronboard.tryAgainBtn, "Try Again")
            await Keywords.click(Locatoronboard.tryAgainBtn, "Try Again");

            await Keywords.SetValue(Locatoronboard.userName, userName);
            await Keywords.SetValue(Locatoronboard.password, password);
            if (!await Locatoronboard.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }

            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            // if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
            //     await Keywords.click(locator.allowButton, "Allow button");
            // }
            // if (await locator.allowNotificationButton.isDisplayed({ timeout: 60000 })) {
            //     await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            // }
            await Keywords.waitForDisplay(Locatoronboard.getNotifiedDialogBox, 40000, "Get notified dialog box")
            await Keywords.click(Locatoronboard.allowButton, "Allow button");
            await Keywords.waitForDisplay(Locatoronboard.androidAllowNotification, 40000, "Default Allow notification")
            await Keywords.click(Locatoronboard.androidAllowNotificationButton, "Default Allow notification button");
            await Keywords.waitForDisplay(Locatoronboard.allowNotification, 40000, "Allow notification")
            await Keywords.click(Locatoronboard.allowNotificationButton, "Allow notification button");
            await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");    
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(locator.eldercare, "Elder card")
            await Keywords.click(locator.eldercare, "Elder care Health card")
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
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(20), "20% onboard complete status")
            await Keywords.verifyElementDisplayed(Locatoronboard.whoisOnboarding, "Who is onboarding? Screen");
            await Keywords.click(Locatoronboard.Eldernext, "Next Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(40), "40% onboard complete status")
            await Keywords.verifyElementDisplayed(Locatoronboard.contactInformation, "Contact Information Screen");
            await Keywords.verifyText(Locatoronboard.homeNumberText, "content-desc", homePhoneNumberText, "Home Number")
            await Keywords.verifyText(Locatoronboard.cellNumberText, "content-desc", cellNumberText, "Cell Number")

            await Keywords.SetValue(Locatoronboard.homePhoneNumber, homePhoneNumber1);
            await Keywords.SetValue(Locatoronboard.cellNumber, cellNumber1);
            await Keywords.click(Locatoronboard.nextButton, "Next Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidHomeNumber, "Enter valid home phone number");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidCellNumber, "Please enter valid cell phone number");

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

            await browser.pause(7000);
            await Keywords.SetValue(Locatoronboard.firstName, firstName1);
            await Keywords.SetValue(Locatoronboard.lastName, lastName1);
            await Keywords.SetValue(Locatoronboard.relation, relation);
            await Keywords.SetValue(Locatoronboard.relationCellPhone, relationCellNumber1)
            await Keywords.click(Locatoronboard.nextButton, "Next Button");

            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidfirstName, "Please enter valid first name");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidLastName, "Please enter valid last name");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidPhoneNumber, "Please enter valid cell phone number");
            await browser.pause(7000);

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
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(60), "60% onboard complete status");
            await Keywords.waitForDisplay(Locatoronboard.addressInformationScreen, 45000, "Address Information Screen");
            const text1 = [addressText, unitText, cityText, provinceText, postalText];
            const locators1 = [Locatoronboard.backgroundText('address'), Locatoronboard.backgroundText('unit #'), Locatoronboard.backgroundText('city'), Locatoronboard.backgroundText('province'), Locatoronboard.backgroundText('postal_code')];
            for (let i = 0; i < text1.length; i++) {
                await Keywords.verifyText(locators1[i], "content-desc", text1[i], `Verify text in address information screen->${text1[i]}`);
            }

            await browser.pause(7000);
            await Keywords.SetValue(Locatoronboard.addressField, address);
            await Keywords.SetValue(Locatoronboard.unitField, unit);
            await Keywords.SetValue(Locatoronboard.cityField, city);
            await Keywords.click(Locatoronboard.provinceDropdown, "Province Dropdown")
            await Keywords.click(Locatoronboard.accessibilityLocator(province), `${province} option`)
            await Keywords.SetValue(Locatoronboard.postalCode, postal1);
            await browser.pause(7000);
            await Keywords.click(Locatoronboard.nextButton, "Next Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.enterValidPostalCode, "Please enter valid postal code");

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

            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(80), "80% onboard complete status");
            await Keywords.waitForDisplay(Locatoronboard.termsAndConditionsScreen, 90000, "Terms & Conditions Screen");
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
            await Keywords.SetValue(Locatoronboard.cancerinput, nameFieldInAdobe);
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
            await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(11), "11 required fields remaining")
            await Keywords.click(Locatoronboard.nextArrowButton(11), "Next Arrow Button");
            let number = 11
            while (true) {
                await Keywords.click(Locatoronboard.initialHere, "Initial Here");
                await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
                await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                await driver.pause(2500);
                await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(number - 1), `${number - 1} required fields remaining`)
                await Keywords.click(Locatoronboard.nextArrowButton(number - 1), "Next Arrow Button");
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
            await browser.pause(12000);
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
         
        } catch (err) {
            throw new Error(err);
        }

        });
    });