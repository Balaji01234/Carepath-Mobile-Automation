import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1 } from '../../utils/common.js';
import { expect } from 'chai';
import { onboardLocators } from '../page/onboard.locators.js';


describe('Carepath Automation', () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    it.only('Onboarding Mental Health', async () => {
        try {
            const userName = await readData1("Signup-Positive", "TC_01", "Email", `Writedata${1}`);
            const password = await readData1("Signup-Positive", "TC_01", "Password", `Testdata${1}`);
            const welcomeOnboardText = await readData1("onboardingMH", "MulipleOptionMH", "WelcomeOnboarding", `Testdata${1}`);
            const accessApproveText = await readData1("onboardingMH", "MulipleOptionMH", "AccessApprovedText", `Testdata${1}`);
            const checklistText = await readData1("onboardingMH", "MulipleOptionMH", "CheckListText", `Testdata${1}`);
            const homePhoneNumber = await readData1("onboardingMH", "MulipleOptionMH", "HomePhoneNumber", `Testdata${1}`)
            const cellNumber = await readData1("onboardingMH", "MulipleOptionMH", "CellNumber", `Testdata${1}`)
            const homePhoneNumberText = await readData1("onboardingMH", "MulipleOptionMH", "HomeNumberText", `Testdata${1}`)
            const cellNumberText = await readData1("onboardingMH", "MulipleOptionMH", "CellNumberText", `Testdata${1}`)
            const NextButtonText = await readData1("onboardingMH", "MulipleOptionMH", "NextButtonText", `Testdata${1}`)
            const firstNameText = await readData1("onboardingMH", "MulipleOptionMH", "FirstNameText", `Testdata${1}`)
            const lastNameText = await readData1("onboardingMH", "MulipleOptionMH", "LastNameText", `Testdata${1}`)
            const relationText = await readData1("onboardingMH", "MulipleOptionMH", "RelationText", `Testdata${1}`)
            const cellPhoneText = await readData1("onboardingMH", "MulipleOptionMH", "CellPhoneText", `Testdata${1}`)
            const firstName = await readData1("onboardingMH", "MulipleOptionMH", "FirstName", `Testdata${1}`)
            const lastName = await readData1("onboardingMH", "MulipleOptionMH", "LastName", `Testdata${1}`)
            const relation = await readData1("onboardingMH", "MulipleOptionMH", "Relation", `Testdata${1}`)
            const relationCellNumber = await readData1("onboardingMH", "MulipleOptionMH", "RelationCellNumber", `Testdata${1}`)
            const address = await readData1("onboardingMH", "MulipleOptionMH", "Address", `Testdata${1}`)
            const unit = await readData1("onboardingMH", "MulipleOptionMH", "Unit", `Testdata${1}`)
            const province = await readData1("onboardingMH", "MulipleOptionMH", "Province", `Testdata${1}`)
            const city = await readData1("onboardingMH", "MulipleOptionMH", "City", `Testdata${1}`)
            const postal = await readData1("onboardingMH", "MulipleOptionMH", "Postal", `Testdata${1}`)
            const addressText = await readData1("onboardingMH", "MulipleOptionMH", "AddressText", `Testdata${1}`)
            const unitText = await readData1("onboardingMH", "MulipleOptionMH", "UnitText", `Testdata${1}`)
            const provinceText = await readData1("onboardingMH", "MulipleOptionMH", "ProvinceText", `Testdata${1}`)
            const cityText = await readData1("onboardingMH", "MulipleOptionMH", "CityText", `Testdata${1}`)
            const postalText = await readData1("onboardingMH", "MulipleOptionMH", "PostalText", `Testdata${1}`)
            const healthCardNumber = await readData1("onboardingMH", "MulipleOptionMH", "HealthCard", `Testdata${1}`)
            const dob = await readData1("Signup-Positive", "TC_01", "DOB", `Testdata${1}`);
            const termsAndConditions = await readData1("onboardingMH", "MulipleOptionMH", "TermsAndConditionsText", `Testdata${1}`)
            const provideMyConsentText = await readData1("onboardingMH", "MulipleOptionMH", "ProvideMyConsentText", `Testdata${1}`)
            const continueButtonText = await readData1("onboardingMH", "MulipleOptionMH", "ContinueButton", `Testdata${1}`)
            const mentalHealthTextInAdobe = await readData1("onboardingMH", "MulipleOptionMH", "MentalHealthTextInAdobe", `Testdata${1}`)
            const nameMultipleOptionsInAdobe = await readData1("onboardingMH", "MulipleOptionMH", "nameFieldInAdobe", `Testdata${1}`)
            const sign = await readData1("onboardingMH", "MulipleOptionMH", "Sign", `Testdata${1}`);
            const assessmentOverviewText = await readData1("onboardingMH", "MulipleOptionMH", "AssessmentOverview", `Testdata${1}`)
            const startAssessmentButtonText = await readData1("onboardingMH", "MulipleOptionMH", "StartAssessmentButtonText", `Testdata${1}`)
            const SaveGAD7Text = await readData1("onboardingMH", "MulipleOptionMH", "SaveGAD7Text", `Testdata${1}`)
            const haveYouBotherText = await readData1("onboardingMH", "MulipleOptionMH", "HaveYouBotheredText", `Testdata${1}`)
            const preferredTimeText = await readData1("onboardingMH", "MulipleOptionMH", "PreferredTimeText", `Testdata${1}`)
            const thankYouText = await readData1("onboardingMH", "MulipleOptionMH", "ThankYouText", `Testdata${1}`)
            const SkipAndGoHome = await readData1("onboardingMH", "MulipleOptionMH", "SkipAndGoHome", `Testdata${1}`)
            allureReporter.addDescription(`Onboard Flow for New User !!! `);
            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button");
            await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
            console.log({ userName, password })
            await Keywords.SetValue(locator.userName, userName);
            await Keywords.SetValue(locator.password, password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 60000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 60000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');

            await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(Locatoronboard.mentalHealthCard, "Mental Health card")
            await Keywords.click(Locatoronboard.mentalHealthCard, "Mental Health card")
            await Keywords.waitForDisplay(Locatoronboard.mentalHealthText, 60000, "Mental Health Text");
            await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
            await Keywords.click(Locatoronboard.continueButton, "Continue Button");

            await Keywords.verifyText(Locatoronboard.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
            await Keywords.verifyText(Locatoronboard.mentalHealthProgramApproveText, "content-desc", accessApproveText, "Access approve");
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
            await Keywords.waitForDisplay(Locatoronboard.healthCardInformationScreen, 45000, "Health card Information Screen");
            await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
            await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
            const getDob = await Locatoronboard.dobInHealthCard.getText();
            const formattedGetDob = getDob.replace(/-/g, '');
            await expect(dob).to.be.equal(formattedGetDob);
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

            await Keywords.waitForDisplay(Locatoronboard.assessmentOverview, 45000, "Health Assessment Overview");
            await Keywords.verifyText1(Locatoronboard.assessmentOverviewText, "content-desc", assessmentOverviewText, "Assessment Overview Text")
            await Keywords.verifyText(Locatoronboard.startAssessmentButtonText, "content-desc", startAssessmentButtonText, "Start Assessment Button Text")
            await Keywords.click(Locatoronboard.startAssessmentButton, " Start Assessment Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(60), "60% complete status");
            for (let i = 1; i <= 10; i++) {
                await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber(i), `Page No: ${i}/10`)
                await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                await Keywords.verifyText(Locatoronboard.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")

                const notAtAllOptionQ1 = await readData1("onboardingMH", "MulipleOptionMH", `PHQ9_Question_${i}`, `Testdata${1}`);
                await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(notAtAllOptionQ1), `PHQ9_Question_${i}`);
                await Keywords.click(Locatoronboard.multipleOptionsAssessment(notAtAllOptionQ1), "Option for the questions");
            }
            await Keywords.verifyElementDisplayed(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
            await Keywords.click(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(80), "80% complete status");
            await Keywords.AllureInfo("-->>> 'Patient Health Questionnaire Completed' <<<--")
            await Keywords.verifyElementDisplayed(Locatoronboard.GADScreen, "General Anxiety Disorder Screen");
            for (let i = 1; i <= 8; i++) {
                await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber1(i), `Page No: ${i}/8`)
                await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                await Keywords.verifyText(Locatoronboard.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")

                const notAtAllOptionQ1 = await readData1("onboardingMH", "MulipleOptionMH", `GAD7_Question_${i}`, `Testdata${1}`);
                await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(notAtAllOptionQ1), `GAD7_Question_${i}`);
                await Keywords.click(Locatoronboard.multipleOptionsAssessment(notAtAllOptionQ1), "Option for the questions");
            }
            await Keywords.verifyText(Locatoronboard.saveGeneralAnxietyDisorder7ButtonText, "content-desc", SaveGAD7Text, "Save GAD7 Button")
            await Keywords.verifyElementIsEnabled(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(96), "96% complete status");
            await Keywords.click(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
            await Keywords.AllureInfo("-->>> 'General Anxiety Disorder Screen Completed' <<<--")
            await Keywords.waitForDisplay(Locatoronboard.reviewScreen, 45000, "Review Screen");
            for (let i = 1; i <= 4; i++) {
                await Keywords.verifyElementDisplayed(Locatoronboard.getPhqLocator(i), `PHQ9 - Question ${i}`)
                if (i !== 10) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.severalDays, " Several Days Option");
                } else {
                    await Keywords.verifyElementDisplayed(Locatoronboard.somewhatDifficult, " Somewhat Difficult Option ");
                }
            }
            await Keywords.click(Locatoronboard.submitPHQButton, "Submit PHQ button");
            await Keywords.waitForDisplay(Locatoronboard.GAD7Review, "GAD7 Review")
            for (let i = 1; i <= 4; i++) {
                await Keywords.verifyElementDisplayed(Locatoronboard.getGADLocator(i), `GAD7 - Question ${i}`)
                if (i !== 8) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.severalDays, " Several Days Option");
                } else {
                    await Keywords.verifyElementDisplayed(Locatoronboard.somewhatDifficult, " Somewhat Difficult Option ");
                }
            }
            await Keywords.click(Locatoronboard.submitGAD7Button, "Submit GAD7 button");
            await Keywords.AllureInfo("--> Health Assessment Review completed <--");
            await Keywords.waitForDisplay(Locatoronboard.preferredTimeForClinic, 45000, "Preferred Time for Clinic")
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(98), "98% complete status");
            await Keywords.verifyText(Locatoronboard.preferredTimeForClinic, "content-desc", preferredTimeText, "Preferred Time for Clinic")
            await Keywords.verifyElementIsEnabled(Locatoronboard.preferredTimeDropdown, "Preferred Time dropdown");
            await Keywords.verifyElementIsEnabled(Locatoronboard.saveButton, "Save Button");
            await Keywords.click(Locatoronboard.saveButton, "Save Button")
            await Keywords.waitForDisplay(Locatoronboard.thankYouText, 45000, "Thank you ")
            await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(100), "100% complete status");
            await Keywords.verifyText1(Locatoronboard.thankYouMessage, "content-desc", thankYouText, "Thank You for Onboarding");
            await Keywords.verifyElementDisplayed(Locatoronboard.goToProgramSelection, "Go to program selection button")
            await Keywords.click(Locatoronboard.goToProgramSelection, "Go to program selection button");
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page");
            await Keywords.AllureInfo("Onboard Flow Completed!!!");
        }
        catch (err) {
            throw new Error(err);
        }
    })

    it('OnboardingMultipleOptionCancer', async () => {
        try {
            const userName = await readData1("Signup-Positive", "TC_01", "Email", `Writedata${1}`);
            const password = await readData1("Signup-Positive", "TC_01", "Password", `Writedata${1}`);
            const welcomeOnboardText = await readData1("onboardingCancer", "MulipleOptionCancer", "WelcomeOnboarding", `Testdata${1}`);
            const accessApproveText = await readData1("onboardingCancer", "MulipleOptionCancer", "AccessApprovedText", `Testdata${1}`);
            const checklistText = await readData1("onboardingCancer", "MulipleOptionCancer", "CheckListText", `Testdata${1}`);
            const homePhoneNumber = await readData1("onboardingCancer", "MulipleOptionCancer", "HomePhoneNumber", `Testdata${1}`)
            const cellNumber = await readData1("onboardingCancer", "MulipleOptionCancer", "CellNumber", `Testdata${1}`)
            const homePhoneNumberText = await readData1("onboardingCancer", "MulipleOptionCancer", "HomeNumberText", `Testdata${1}`)
            const cellNumberText = await readData1("onboardingCancer", "MulipleOptionCancer", "CellNumberText", `Testdata${1}`)
            const NextButtonText = await readData1("onboardingCancer", "MulipleOptionCancer", "NextButtonText", `Testdata${1}`)
            const firstNameText = await readData1("onboardingCancer", "MulipleOptionCancer", "FirstNameText", `Testdata${1}`)
            const lastNameText = await readData1("onboardingCancer", "MulipleOptionCancer", "LastNameText", `Testdata${1}`)
            const relationText = await readData1("onboardingCancer", "MulipleOptionCancer", "RelationText", `Testdata${1}`)
            const cellPhoneText = await readData1("onboardingCancer", "MulipleOptionCancer", "CellPhoneText", `Testdata${1}`)
            const firstName = await readData1("onboardingCancer", "MulipleOptionCancer", "FirstName", `Testdata${1}`)
            const lastName = await readData1("onboardingCancer", "MulipleOptionCancer", "LastName", `Testdata${1}`)
            const relation = await readData1("onboardingCancer", "MulipleOptionCancer", "Relation", `Testdata${1}`)
            const relationCellNumber = await readData1("onboardingCancer", "MulipleOptionCancer", "RelationCellNumber", `Testdata${1}`)
            const address = await readData1("onboardingCancer", "MulipleOptionCancer", "Address", `Testdata${1}`)
            const unit = await readData1("onboardingCancer", "MulipleOptionCancer", "Unit", `Testdata${1}`)
            const province = await readData1("onboardingCancer", "MulipleOptionCancer", "Province", `Testdata${1}`)
            const city = await readData1("onboardingCancer", "MulipleOptionCancer", "City", `Testdata${1}`)
            const postal = await readData1("onboardingCancer", "MulipleOptionCancer", "Postal", `Testdata${1}`)
            const addressText = await readData1("onboardingCancer", "MulipleOptionCancer", "AddressText", `Testdata${1}`)
            const unitText = await readData1("onboardingCancer", "MulipleOptionCancer", "UnitText", `Testdata${1}`)
            const provinceText = await readData1("onboardingCancer", "MulipleOptionCancer", "ProvinceText", `Testdata${1}`)
            const cityText = await readData1("onboardingCancer", "MulipleOptionCancer", "CityText", `Testdata${1}`)
            const postalText = await readData1("onboardingCancer", "MulipleOptionCancer", "PostalText", `Testdata${1}`)
            const healthCardNumber = await readData1("onboardingCancer", "MulipleOptionCancer", "HealthCard", `Testdata${1}`)
            const dob = await readData1("Signup-Positive", "TC_01", "DOB", `Testdata${1}`);
            const termsAndConditions = await readData1("onboardingCancer", "MulipleOptionCancer", "TermsAndConditionsText", `Testdata${1}`)
            const provideMyConsentText = await readData1("onboardingCancer", "MulipleOptionCancer", "ProvideMyConsentText", `Testdata${1}`)
            const continueButtonText = await readData1("onboardingCancer", "MulipleOptionCancer", "ContinueButton", `Testdata${1}`)
            const mentalHealthTextInAdobe = await readData1("onboardingCancer", "MulipleOptionCancer", "MentalHealthTextInAdobe", `Testdata${1}`)
            const nameMultipleOptionsInAdobe = await readData1("onboardingCancer", "MulipleOptionCancer", "nameMultipleOptionsInAdobe", `Testdata${1}`)
            const sign = await readData1("onboardingCancer", "MulipleOptionCancer", "Sign", `Testdata${1}`);
            const assessmentOverviewText = await readData1("onboardingCancer", "MulipleOptionCancer", "AssessmentOverview", `Testdata${1}`)
            const startAssessmentButtonText = await readData1("onboardingCancer", "MulipleOptionCancer", "StartAssessmentButtonText", `Testdata${1}`)
            const SaveGAD7Text = await readData1("onboardingCancer", "MulipleOptionCancer", "SaveGAD7Text", `Testdata${1}`)
            const haveYouBotherText = await readData1("onboardingCancer", "MulipleOptionCancer", "HaveYouBotheredText", `Testdata${1}`)
            const preferredTimeText = await readData1("onboardingCancer", "MulipleOptionCancer", "PreferredTimeText", `Testdata${1}`)
            const thankYouText = await readData1("onboardingCancer", "MulipleOptionCancer", "ThankYouText", `Testdata${1}`)
            const SkipAndGoHome = await readData1("onboardingCancer", "MulipleOptionCancer", "SkipAndGoHome", `Testdata${1}`)
            allureReporter.addDescription(`Onboard Flow for New User !!! `);
            await driver.implicitWait(15000);
            await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button");
            await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
            console.log({ userName, password })
            await Keywords.SetValue(locator.userName, userName);
            await Keywords.SetValue(locator.password, password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")

            await Keywords.waitForDisplay(Locatoronboard.getNotifiedDialogBox, 40000, "Get notified dialog box")
            await Keywords.click(Locatoronboard.allowButton, "Allow button");
            await Keywords.waitForDisplay(Locatoronboard.androidAllowNotification, 40000, "Default Allow notification")
            await Keywords.click(Locatoronboard.androidAllowNotificationButton, "Default Allow notification button");
            await Keywords.waitForDisplay(Locatoronboard.allowNotification, 40000, "Allow notification")
            await Keywords.click(Locatoronboard.allowNotificationButton, "Allow notification button");
            await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');

            await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(Locatoronboard.cancer, "Cancer card")
            await Keywords.click(Locatoronboard.cancer, "Cancer Health card")
            await Keywords.waitForDisplay(Locatoronboard.mentalHealthText, 60000, "Mental Health Text");
            await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
            await Keywords.click(Locatoronboard.continueButton, "Continue Button");
            await Keywords.verifyText(Locatoronboard.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
            await Keywords.verifyText(Locatoronboard.mentalHealthProgramApproveText, "content-desc", accessApproveText, "Access approve");
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
            await Keywords.SetValue(Locatoronboard.addressMultipleOptions, address);
            await Keywords.SetValue(Locatoronboard.unitMultipleOptions, unit);
            await Keywords.SetValue(Locatoronboard.cityMultipleOptions, city);
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
            await Keywords.SetValue(Locatoronboard.healthCardNumberMultipleOptions, healthCardNumber);
            await Keywords.SetValue(Locatoronboard.healthCardNumberMultipleOptions, healthCardNumber);
            const getDob = await Locatoronboard.dobInHealthCard.getText();
            const formattedGetDob = getDob.replace(/-/g, '');
            await expect(dob).to.be.equal(formattedGetDob);
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
            await Keywords.SetValue(Locatoronboard.nameMultipleOptionsInAdobe, nameMultipleOptionsInAdobe);
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
            await Keywords.verifyElementDisplayed(Locatoronboard.typeInInitialBox, "Type option");
            await Keywords.click(Locatoronboard.typeInInitialBox, "Type option");
            await Keywords.verifyElementIsEnabled(Locatoronboard.applyButtonInInitials, "Apply Button")
            await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
            await browser.pause(2000);
            await Keywords.waitForDisplay(Locatoronboard.requiredMultipleOptionsCompleted, 90000, "Required MultipleOptionss completed");
            await Keywords.verifyElementDisplayed(Locatoronboard.reviewAgreementText, "Review Agreement Text");
            await Keywords.verifyElementIsEnabled(Locatoronboard.reviewAgreementButton, "Review Agreement button");
            await Keywords.click(Locatoronboard.reviewAgreementButton, "Review Agreement button");
            await Keywords.waitForDisplay(Locatoronboard.requiredFieldsCompletedText, 45000, "Required MultipleOptionss Completed");
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

            for (let i = 1; i <= 9; i++) {
                const cancerQuestions = await readData1("onboardingCancer", "MulipleOptionCancer", `CancerAssess_Q${i}`, `Testdata${1}`);
                await Keywords.verifyElementDisplayed(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), `CancerAssess_Q${i}`);
                await Keywords.click(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), "Option for the questions");

                const cancerAssessOption = await readData1("onboardingCancer", "MulipleOptionCancer", `Cancer_${i}`, `Testdata${1}`);
                await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), `Cancer_${i}`);
                await Keywords.click(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), "Option for the questions");
                await Keywords.click(Locatoronboard.cancerNext, " Next Button");
            }

            //await Keywords.verifyElementIsEnabled(Locatoronboard.saveSEAEButton, "SAVE ESAS-R  Button");
            //await Keywords.click(Locatoronboard.saveSEAEButton, "SAVE ESAS-R  Button");
            await Keywords.verifyText(Locatoronboard.review, "content-desc", "Review", "Review");

            for (let i = 1; i <= 9; i++) {
                const cancerQuestions1 = await readData1("onboardingCancer", "MulipleOptionCancer", `Esasr-Q${i}`, `Testdata${1}`);
                console.log("Cancer question " + cancerQuestions1)
                await Keywords.verifyElementDisplayed(Locatoronboard.cancerReviewAssessmentQuestions(cancerQuestions1.toString()), cancerQuestions1);

                const cancerAssessOption1 = await readData1("onboardingCancer", "MulipleOptionCancer", `Cancer_${i}`, `Testdata${1}`);
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
});