import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { expect } from 'chai';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Onboarding - Mental Health Program', async () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("onboarding", "onboardingMH", "MulipleOptionMH");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Email", `${testCases[i].testId}`);
                const password = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Password", `${testCases[i].testId}`);
                const welcomeOnboardText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "WelcomeOnboarding", `${testCases[i].testId}`);
                const accessApproveText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "AccessApprovedText", `${testCases[i].testId}`);
                const checklistText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "CheckListText", `${testCases[i].testId}`);
                const homePhoneNumber = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "HomePhoneNumber", `${testCases[i].testId}`)
                const cellNumber = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "CellNumber", `${testCases[i].testId}`)
                const homePhoneNumberText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "HomeNumberText", `${testCases[i].testId}`)
                const cellNumberText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "CellNumberText", `${testCases[i].testId}`)
                const NextButtonText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "NextButtonText", `${testCases[i].testId}`)
                const firstNameText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "FirstNameText", `${testCases[i].testId}`)
                const lastNameText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "LastNameText", `${testCases[i].testId}`)
                const relationText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "RelationText", `${testCases[i].testId}`)
                const cellPhoneText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "CellPhoneText", `${testCases[i].testId}`)
                const firstName = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "FirstName", `${testCases[i].testId}`)
                const lastName = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "LastName", `${testCases[i].testId}`)
                const relation = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Relation", `${testCases[i].testId}`)
                const relationCellNumber = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "RelationCellNumber", `${testCases[i].testId}`)
                const address = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Address", `${testCases[i].testId}`)
                const unit = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Unit", `${testCases[i].testId}`)
                const province = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Province", `${testCases[i].testId}`)
                const city = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "City", `${testCases[i].testId}`)
                const postal = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Postal", `${testCases[i].testId}`)
                const addressText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "AddressText", `${testCases[i].testId}`)
                const unitText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "UnitText", `${testCases[i].testId}`)
                const provinceText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "ProvinceText", `${testCases[i].testId}`)
                const cityText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "CityText", `${testCases[i].testId}`)
                const postalText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "PostalText", `${testCases[i].testId}`)
                const healthCardNumber = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "HealthCard", `${testCases[i].testId}`)
                const dob = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "DOB", `${testCases[i].testId}`);
                const termsAndConditions = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "TermsAndConditionsText", `${testCases[i].testId}`)
                const provideMyConsentText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "ProvideMyConsentText", `${testCases[i].testId}`)
                const continueButtonText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "ContinueButton", `${testCases[i].testId}`)
                const nameMultipleOptionsInAdobe = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "nameFieldInAdobe", `${testCases[i].testId}`)
                const sign = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Sign", `${testCases[i].testId}`);
                const assessmentOverviewText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "AssessmentOverview", `${testCases[i].testId}`)
                const startAssessmentButtonText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "StartAssessmentButtonText", `${testCases[i].testId}`)
                const SaveGAD7Text = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "SaveGAD7Text", `${testCases[i].testId}`)
                const haveYouBotherText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "HaveYouBotheredText", `${testCases[i].testId}`)
                const preferredTimeText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "PreferredTimeText", `${testCases[i].testId}`)
                const thankYouText = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "ThankYouText", `${testCases[i].testId}`)
                const testDescription = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Test Description", `${testCases[i].testId}`)
                const Role = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Role", `${testCases[i].testId}`)
                const Country = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Country", `${testCases[i].testId}`) 
                const addressname = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "addressname", `${testCases[i].testId}`) 

                allureReporter.addDescription(testDescription);
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button");
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
                await Keywords.waitForDisplay(locator.allowButton, 60000, "Get notified dialog box")
                await Keywords.click(locator.allowButton, "Allow button");
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
               if(Role =="Employee"){
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
            }else{
                await Keywords.click(Locatoronboard.addressname, "Countryname Dropdown");
                await Keywords.click(Locatoronboard.countryName(Country), "countryname");
            }
                await Keywords.click(Locatoronboard.nextButton, "Next Button");
                await Keywords.AllureInfo("Address Information Screen Completed!!!");

            if(Role == "Employee"){
                await Keywords.waitForDisplay(Locatoronboard.healthCardInformationScreen, 45000, "Health card Information Screen");
                await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
                await Keywords.SetValue(Locatoronboard.healthCardNumberField, healthCardNumber);
            }
            
                const getDob = await Locatoronboard.dobInHealthCard.getText();
                const formattedGetDob = getDob.replace(/-/g, '');
                expect(dob).to.be.equal(formattedGetDob);
                if (!await Locatoronboard.nextButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                if(Role == "Employee"){
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(30), "30% complete status")
                }
                else{
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(34), "34% complete status")
                }

                await Keywords.click(Locatoronboard.nextButton, "Next Button");
                await Keywords.AllureInfo("Health card Information Screen Completed!!!");
                
                if (Role == "Employee") {
                    await Keywords.waitForDisplay(Locatoronboard.employmentInformationScreen, 45000, "Employment Information Screen");
                    await Keywords.click(Locatoronboard.workStatusDropdown, "Work Status");
                    await Keywords.click(Locatoronboard.fullTime, "Select Fulltime option");
                    await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(34), "34% complete status")
                    await Keywords.click(Locatoronboard.nextButton, "Next Button");
                    await Keywords.AllureInfo("Employment Information Screen Completed!!!");
                  } 
                
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
                    if (await Locatoronboard.applyButtonInInitials.isDisplayed({ timeout: 45000 })) {
                        await Keywords.click(Locatoronboard.applyButtonInInitials, "Apply Button");
                    }
                    try {
                        await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(number - 1), `${number - 1} required fields remaining`)
                    } catch (err) {
                        await Keywords.verifyElementDisplayed(Locatoronboard.remainingFields(number - 1), `${number - 1} required fields remaining`)
                    }
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
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(62), "62% complete status");
                let phqAssessmentOption = [];
                let GAD7AssessmentOption = [];
                for (let j = 1; j <= 10; j++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber(j), `Page No: ${j}/10`)
                    await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                    await Keywords.verifyText(Locatoronboard.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")

                    let option = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", `PHQ9_Question_${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(option), `PHQ9_Question_${j}: ${option}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessment(option), "Option for the questions");
                    phqAssessmentOption.push(option);
                }
                await Keywords.verifyElementDisplayed(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
                await Keywords.click(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(82), "82% complete status");
                await Keywords.AllureInfo("-->>> 'Patient Health Questionnaire Completed' <<<--")
                await Keywords.verifyElementDisplayed(Locatoronboard.GADScreen, "General Anxiety Disorder Screen");
                for (let k = 1; k <= 8; k++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber1(k), `Page No: ${k}/8`)
                    await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                    await Keywords.verifyText(Locatoronboard.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")

                    let option = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", `GAD7_Question_${k}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(option), `GAD7_Question_${k}: ${option}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessment(option), "Option for the questions");
                    GAD7AssessmentOption.push(option);
                }
                await Keywords.verifyText(Locatoronboard.saveGeneralAnxietyDisorder7ButtonText, "content-desc", SaveGAD7Text, "Save GAD7 Button")
                await Keywords.verifyElementIsEnabled(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
                await Keywords.verifyElementDisplayed(Locatoronboard.completeStatus(96), "96% complete status");
                await Keywords.click(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
                await Keywords.AllureInfo("-->>> 'General Anxiety Disorder Screen Completed' <<<--")
                await Keywords.waitForDisplay(Locatoronboard.reviewScreen, 45000, "Review Screen");
                for (let m = 1; m <= 4; m++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.getPhqLocator(m), `PHQ9 - Question ${m}`)
                    if (m !== 10) {
                        await Keywords.verifyElementDisplayed(Locatoronboard.reviewAnswer(phqAssessmentOption[m]), phqAssessmentOption[m]);
                    } else {
                        await Keywords.verifyElementDisplayed(Locatoronboard.somewhatDifficult, " Somewhat Difficult Option ");
                    }
                }
                await Keywords.click(Locatoronboard.submitPHQButton, "Submit PHQ button");
                await Keywords.waitForDisplay(Locatoronboard.GAD7Review, 90000, "GAD7 Review")
                for (let i = 1; i <= 4; i++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.getGADLocator(i), `GAD7 - Question ${i}`)
                    if (i !== 8) {
                        await Keywords.verifyElementDisplayed(Locatoronboard.reviewAnswer(GAD7AssessmentOption[i]), GAD7AssessmentOption[i]);
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
                await Keywords.click(Locatoronboard.preferredTimeDropdown, "Preferred Time dropdown");
                await Keywords.verifyElementDisplayed(Locatoronboard.selectTime, "Select Preferred Time for clinic")
                await Keywords.click(Locatoronboard.selectTime, "Select Preferred Time for clinic");
                await Keywords.verifyElementIsEnabled(Locatoronboard.saveButton, "Save Button");
                await Keywords.click(Locatoronboard.saveButton, "Save Button");
                await Keywords.waitForDisplay(Locatoronboard.thankYouText, 45000, "Thank you ");
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
    }
});