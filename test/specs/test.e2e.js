import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, readTestcase, writeExcelData, saveTestDataToJson, readData, readData1, generateRandomNumber, dataSets, writeExcelData1 } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', async () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    let iterationValue = dataSets(iterations)
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });


    it('should login with valid credentials', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
        `);
        try {
            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;
            await Keywords.SetValue(locator.userName, process.env.USER_NAME);
            await Keywords.SetValue(locator.password, process.env.PASSWORD);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 20000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 20000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(locator.mentalHealthCard, "Mental Health card")
            await Keywords.click(locator.mentalHealthCard, "Mental Health card")
            await Keywords.waitForDisplay(onboardLocator.mentalHealthText, 60000, "Mental Health Text");
        } catch (err) {
            throw new Error(err);
        }
    });

    for (let i = 0; i < iterationValue.length; i++) {
        it(`TC-001-Sign Up - Iteration${iterationValue[i]}`, async () => {
            try {
                const role = await readData1("Signup-Positive", "TC_01", "Role", `Testdata${iterationValue[i]}`);
                allureReporter.addDescription(`New User Sign Up for: "${role} role" `)
                console.log(`Role: ${role}`)
                const employeeText = await readData1("Signup-Positive", "TC_01", "EmployeeText", `Testdata${iterationValue[i]}`);
                const studentText = await readData1("Signup-Positive", "TC_01", "StudentText", `Testdata${iterationValue[i]}`);
                const FirstName = `Prabha${getRandomString()}`
                await writeExcelData1("Signup-Positive", "TC_01", `Writedata${iterationValue[i]}`, "Firstname", FirstName);
                const LastName = (`Automation${getRandomString()}`).toLowerCase();
                await writeExcelData1("Signup-Positive", "TC_01", `Writedata${iterationValue[i]}`, "Lastname", LastName);
                const mail = `prabha${getRandomString() + generateRandomNumber()}@mailinator.com`;
                await writeExcelData1("Signup-Positive", "TC_01", `Writedata${iterationValue[i]}`, "Email", mail);
                const phoneNumber = await readData1("Signup-Positive", "TC_01", "Phone number", `Testdata${iterationValue[i]}`);
                const password = await readData1("Signup-Positive", "TC_01", "Password", `Testdata${iterationValue[i]}`);
                const employerName = await readData1("Signup-Positive", "TC_01", "Employer name", `Testdata${iterationValue[i]}`);
                const referral = await readData1("Signup-Positive", "TC_01", "Referrals", `Testdata${iterationValue[i]}`);
                const dob = await readData1("Signup-Positive", "TC_01", "DOB", `Testdata${iterationValue[i]}`);
                const relation = await readData1("Signup-Positive", "TC_01", "Relation", `Testdata${iterationValue[i]}`);
                const referralDropdownText = await readData1("Signup-Positive", "TC_01", "ReferralText", `Testdata${iterationValue[i]}`);
                const dobText = await readData1("Signup-Positive", "TC_01", "dobText", `Testdata${iterationValue[i]}`);
                const studentId = await readData1("Signup-Positive", "TC_01", "StudentId", `Testdata${iterationValue[i]}`);
                const courseEnrolled = await readData1("Signup-Positive", "TC_01", "CourseEnrolled", `Testdata${iterationValue[i]}`);
                const program = await readData1("Signup-Positive", "TC_01", "Program", `Testdata${iterationValue[i]}`);
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
                await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button")
                await Keywords.verifyElementIsEnabled(locator.createAccountButton, "Create Account button");
                const createBtnTxt = await locator.createAccountButton.getText();
                console.log(createBtnTxt)
                await Keywords.click(locator.createAccountButton, "Create Account button")
                await Keywords.verifyElementIsEnabled(locator.createRequestButton, "Create Request button")
                await Keywords.click(locator.createRequestButton, "Create Account button")
                await Keywords.verifyElementDisplayed(locator.signUpPage, "Signup screen")
                if (role == "Employee") {
                    await Keywords.verifyText(locator.employeeText, "content-desc", employeeText, "I am a Employee")
                    await Keywords.isEnabled(locator.employeeButton, "Employee Button")
                    await Keywords.click(locator.employeeButton, "Employee Button");
                } else {
                    await Keywords.verifyText(locator.studentText, "content-desc", studentText, "I am a Student")
                    await Keywords.isEnabled(locator.studentButton, "Student Button")
                    await Keywords.click(locator.studentButton, "Student Button");
                }
                await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                await Keywords.click(locator.nextButton, "Next Button")
                console.log({
                    FirstName,
                    LastName,
                    mail,
                    phoneNumber,
                    password, employerName, referral, dob, relation
                });
                await Keywords.SetValue(locator.firstName, FirstName);
                await Keywords.SetValue(locator.lastName, LastName);
                await Keywords.SetValue(locator.emailId, mail);
                await Keywords.SetValue(locator.phoneNumber, phoneNumber);
                await Keywords.SetValue(locator.passwordField, password);
                await Keywords.SetValue(locator.repeatPassword, password);
                if (!await locator.nextButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                await Keywords.click(locator.nextButton, "Next Button")
                if (role === "Employee") {
                    await Keywords.SetValue(locator.employerName, employerName);
                    await Keywords.verifyText(locator.referralDropdownText, "content-desc", referralDropdownText, "Referral dropdown")
                    await Keywords.click(locator.referral, "Referral dropdown");
                    await Keywords.click(locator.referrals(referral), "referral")
                    await Keywords.verifyText(locator.dobText, "content-desc", dobText, "DOB")
                    await Keywords.SetValue(locator.dob, dob);
                    await Keywords.SetValue(locator.relationToEmployee, relation);
                } else {
                    await Keywords.verifyText(locator.referralDropdownText, "content-desc", referralDropdownText, "Referral dropdown")
                    await Keywords.click(locator.referral, "Referral dropdown");
                    await Keywords.click(locator.referrals(referral), "referral")
                    await Keywords.verifyText(locator.dobText, "content-desc", dobText, "DOB")
                    await Keywords.SetValue(locator.dob, dob);
                }
                if (!await locator.signUpButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.click(locator.signUpButton, "Signup button");
                if (role === 'Student') {
                    await Keywords.waitForDisplay(locator.studentInformationScreen, "Student Information Screen")
                    await Keywords.isDisplayed(locator.athabascaUniversity, "Athabasca University");
                    await Keywords.SetValue(locator.studentId, studentId)
                    await Keywords.SetValue(locator.courseEnrolled, courseEnrolled);
                    if (!await locator.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                    await Keywords.click(locator.nextButton, "Next Button")
                }
                await Keywords.verifyElementIsEnabled(locator.verifyYourAccount, "Verify your account")
                await Keywords.waitForDisplay(locator.verifyYourAccount, timeout, "Verify your account");
                await Keywords.click(locator.getMail, "Get by email card")
                await Keywords.verifyElementIsEnabled(locator.verifyButton, "Verify button")
                await Keywords.click(locator.verifyButton, "Verify Button");
                const otp = await Keywords.getOTPFromMailinator(mail);
                expect(otp).to.not.equal("");
                await driver.switchContext('NATIVE_APP');
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), otp[i]);
                }
                await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                if (role.toLowerCase() === "student") {
                    await Keywords.verifyElementIsEnabled(locator.mentalHealthCard, "Mental Health card");
                    await Keywords.click(locator.mentalHealthCard, "Mental Health card")
                } else {
                    await Keywords.verifyElementIsEnabled(locator.program(program), program);
                    await Keywords.click(locator.program(program), program)
                }
                await Keywords.verifyElementIsEnabled(locator.sendRequestButton, "Send Request Button")
                await Keywords.click(locator.sendRequestButton, "Send Request Button")
                await driver.pause(5000);
                if (await Keywords.isDisplayed(locator.allowNotificationButton, "Allow Notification Button")) {
                    await Keywords.locator.allowNotificationButton.click();
                }
                await Keywords.waitForDisplay(locator.success, 45000, "Success Message!!!");
                await Keywords.click(locator.closeButton, "Close Button");
                await Keywords.waitForDisplay(locator.startNow, 30000, "Start Now Button");
                await saveTestDataToJson(role, FirstName, LastName, mail, program)
            } catch (err) {
                throw new Error(err);
            }
        })
    }

    it('TC-002-NewUserOnboarding', async () => {
        try {
            const userName = await readData("TC_01", "Field", "Email", `Writedata${1}`);
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
            if (!await locator.loginButton.isDisplayed()) {
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
            await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(locator.mentalHealthCard, "Mental Health card")
            await Keywords.click(locator.mentalHealthCard, "Mental Health card")
            await Keywords.waitForDisplay(onboardLocator.mentalHealthText, 60000, "Mental Health Text");
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await Keywords.verifyText(onboardLocator.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Welcome Onboarding")
            await Keywords.verifyText(onboardLocator.mentalHealthProgramApproveText, "content-desc", accessApproveText, "Access approve");
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
            await Keywords.waitForDisplay(onboardLocator.healthCardInformationScreen, 45000, "Health card Information Screen");
            await Keywords.SetValue(onboardLocator.healthCardNumberField, healthCardNumber);
            await Keywords.SetValue(onboardLocator.healthCardNumberField, healthCardNumber);
            const getDob = await onboardLocator.dobInHealthCard.getText();
            const formattedGetDob = getDob.replace(/-/g, '');
            await expect(dob).to.be.equal(formattedGetDob);
            if (!await onboardLocator.nextButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(30), "30% complete status")
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
            await Keywords.SetValue(onboardLocator.nameFieldInAdobe, nameFieldInAdobe);
            if (!await onboardLocator.nextArrowButton(12).isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(onboardLocator.nextArrowButton(12), "Next Arrow Button");
            await Keywords.verifyElementDisplayed(onboardLocator.remainingFields(12), "12 required fields remaining")
            await Keywords.click(onboardLocator.nextArrowButton(12), "Next Arrow Button");
            await Keywords.click(onboardLocator.initialHere, "Initial Here");
            await Keywords.verifyElementDisplayed(onboardLocator.typeInInitialBox, "Type option");
            await Keywords.verifyElementDisplayed(onboardLocator.drawInInitialBox, "Draw option");
            await Keywords.click(onboardLocator.typeInInitialBox, "Type option");
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
            await Keywords.verifyElementDisplayed(onboardLocator.typeInInitialBox, "Type option");
            await Keywords.click(onboardLocator.typeInInitialBox, "Type option");
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
            await Keywords.waitForDisplay(onboardLocator.assessmentOverview, 45000, "Health Assessment Overview");
            await Keywords.verifyText1(onboardLocator.assessmentOverviewText, "content-desc", assessmentOverviewText, "Assessment Overview Text")
            await Keywords.verifyText(onboardLocator.startAssessmentButtonText, "content-desc", startAssessmentButtonText, "Start Assessment Button Text")
            await Keywords.click(onboardLocator.startAssessmentButton, " Start Assessment Button");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(60), "60% complete status");
            for (let i = 1; i <= 10; i++) {
                await Keywords.verifyElementDisplayed(onboardLocator.questionNumber(i), `Page No: ${i}/10`)
                await Keywords.verifyElementDisplayed(onboardLocator.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                await Keywords.verifyText(onboardLocator.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")
                await Keywords.verifyElementDisplayed(onboardLocator.getPhqLocator(i), `PHQ9 - Question ${i}`)
                if (i !== 10) {
                    await Keywords.verifyElementIsEnabled(onboardLocator.severalDays, " Several Days Option");
                    await Keywords.click(onboardLocator.severalDays, " Several Days Option ")
                } else {
                    await Keywords.verifyElementIsEnabled(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ");
                    await Keywords.click(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ")
                }
            }
            await Keywords.verifyElementDisplayed(onboardLocator.savePHQ9Button, "Save PHQ9 Button");
            await Keywords.click(onboardLocator.savePHQ9Button, "Save PHQ9 Button");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(80), "80% complete status");
            await Keywords.AllureInfo("-->>> 'Patient Health Questionnaire Completed' <<<--")
            await Keywords.verifyElementDisplayed(onboardLocator.GADScreen, "General Anxiety Disorder Screen");
            for (let i = 1; i <= 8; i++) {
                await Keywords.verifyElementDisplayed(onboardLocator.questionNumber1(i), `Page No: ${i}/8`)
                await Keywords.verifyElementDisplayed(onboardLocator.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                await Keywords.verifyText(onboardLocator.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")
                await Keywords.verifyElementDisplayed(onboardLocator.getGADLocator(i), `GAD7 - Question ${i}`)
                if (i !== 8) {
                    await Keywords.verifyElementIsEnabled(onboardLocator.severalDays, " Several Days Option");
                    await Keywords.click(onboardLocator.severalDays, " Several Days Option ")
                } else {
                    await Keywords.verifyElementIsEnabled(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ");
                    await Keywords.click(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ")
                }
            }
            await Keywords.verifyText(onboardLocator.saveGeneralAnxietyDisorder7ButtonText, "content-desc", SaveGAD7Text, "Save GAD7 Button")
            await Keywords.verifyElementIsEnabled(onboardLocator.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(96), "96% complete status");
            await Keywords.click(onboardLocator.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
            await Keywords.AllureInfo("-->>> 'General Anxiety Disorder Screen Completed' <<<--")
            await Keywords.waitForDisplay(onboardLocator.reviewScreen, 45000, "Review Screen");
            for (let i = 1; i <= 4; i++) {
                await Keywords.verifyElementDisplayed(onboardLocator.getPhqLocator(i), `PHQ9 - Question ${i}`)
                if (i !== 10) {
                    await Keywords.verifyElementDisplayed(onboardLocator.severalDays, " Several Days Option");
                } else {
                    await Keywords.verifyElementDisplayed(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ");
                }
            }
            await Keywords.click(onboardLocator.submitPHQButton, "Submit PHQ button");
            await Keywords.waitForDisplay(onboardLocator.GAD7Review, "GAD7 Review")
            for (let i = 1; i <= 4; i++) {
                await Keywords.verifyElementDisplayed(onboardLocator.getGADLocator(i), `GAD7 - Question ${i}`)
                if (i !== 8) {
                    await Keywords.verifyElementDisplayed(onboardLocator.severalDays, " Several Days Option");
                } else {
                    await Keywords.verifyElementDisplayed(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ");
                }
            }
            await Keywords.click(onboardLocator.submitGAD7Button, "Submit GAD7 button");
            await Keywords.AllureInfo("--> Health Assessment Review completed <--");
            await Keywords.waitForDisplay(onboardLocator.preferredTimeForClinic, 45000, "Preferred Time for Clinic")
            await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(98), "98% complete status");
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

    it("TC-003-Lesson1", async () => {
        try {
            allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
            7. click on lesson.
            8. Check if the Lesson one are done.
        `);

            await browser.implicitWait(10000);
            const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
            await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            await Keywords.verifyElementDisplayed(lessonLocator.loginScreenpage, "Login screen");
            await Keywords.SetValue(lessonLocator.userName, process.env.USER_NAME);
            await Keywords.SetValue(lessonLocator.password, process.env.PASSWORD);
            if (! await lessonLocator.loginScreenpage.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button");
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.verifyElementDisplayed(lessonLocator.notifiedPopupscreen, "Get notified dialog box");
            await Keywords.click(lessonLocator.allowButton, "Allow button");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.allowOption, "Allow notification");
            await Keywords.click(lessonLocator.allowOption, "Allow notification button");
            console.log('Login process completed successfully.');
            if (await lessonLocator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
                await Keywords.click(lessonLocator.mentalhealth, "Mental health");
            }
            await Keywords.verifyElementIsEnabled(lessonLocator.continuebutton, "Continue Button");
            await Keywords.click(lessonLocator.continuebutton, "Continue Button")
            await browser.pause(7000);
            if (await lessonLocator.goalCheck.isDisplayed({ timeout: 45000 })) {
                await Keywords.click(lessonLocator.remindMeLater, "Remind me later")
            }
            await Keywords.verifyElementIsEnabled(lessonLocator.mindzone, "Mind zone Button");
            await browser.pause(7000);
            const mindzone = await readData("Mindzone", "Field", "Mind zone", "Testdata1");
            await browser.pause(20000);
            await Keywords.verifyText(lessonLocator.mindzoneval, "content-desc", "Mind Zone", "verify the mindzone option")
            await Keywords.click(lessonLocator.mindzone, "Mind zone");
            await browser.pause(2000)
            const lessonone = await readData("Mindzone", "Field", "LessonOne", "Testdata1");
            await Keywords.verifyElementDisplayed(lessonLocator.lessonOne, "Allow notification");
            await browser.pause(2000)
            await Keywords.verifyText(lessonLocator.lessonOne, "content-desc", "Lesson 1: Anxiety, Depression & Emotions", "verify the mindzone option")
            await Keywords.click(lessonLocator.reviwe, "Review");
            await Keywords.verifyElementDisplayed(lessonLocator.lesson1, "Welcome to the Mind Zone Course!\nWe are pleased you have decided to participate.");
            await Keywords.verifyElementDisplayed(lessonLocator.page1, "1 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson2, "Research suggests that learning a few core skills can help people to manage");
            await Keywords.verifyElementDisplayed(lessonLocator.page2, "2 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson3, "We suggest you review the lesson at the beginning of each week");
            await Keywords.verifyElementDisplayed(lessonLocator.page3, "3 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await Keywords.verifyElementDisplayed(lessonLocator.lesson4, "Listening to others' experiences with low mood and anxiety can be helpful.");
            await Keywords.verifyElementDisplayed(lessonLocator.page4, "4 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await Keywords.verifyElementDisplayed(lessonLocator.lesson5, "I'm 35 years old and live in Calgary Alberta");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.page5, "5 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await Keywords.verifyElementDisplayed(lessonLocator.lesson6, "I got a promotion at work a few months ago");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.page6, "6 / 56");
            await Keywords.click(lessonLocator.playaction, "Play action");
            await browser.pause(9999);
            await lessonLocator.replayaction.isDisplayed({ timeout: 90000 })
            await Keywords.verifyText(lessonLocator.audiopercentage, "content-desc", "100%", "Audio Play Percentage")
            await Keywords.click(lessonLocator.next, "next");
            await Keywords.verifyElementDisplayed(lessonLocator.lesson7, "Hi, I'm Susan");
            await Keywords.verifyElementDisplayed(lessonLocator.page7, "7 / 56");
            await Keywords.click(lessonLocator.playaction, "Play action");
            await browser.pause(9999);
            await lessonLocator.replayaction.isDisplayed({ timeout: 90000 })
            await Keywords.verifyText(lessonLocator.audiopercentage, "content-desc", "100%", "Audio Play Percentage")
            await Keywords.click(lessonLocator.next, "next");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson8, "I feel squeezed between caring for Mom and my girls");
            await Keywords.verifyElementDisplayed(lessonLocator.page8, "8 / 56");
            await Keywords.click(lessonLocator.playaction, "Play action");
            await browser.pause(9999);
            await lessonLocator.replayaction.isDisplayed({ timeout: 90000 })
            await Keywords.verifyText(lessonLocator.audiopercentage, "content-desc", "100%", "Audio Play Percentage")
            await Keywords.click(lessonLocator.next, "next");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson9, "You have just met Matt and Susan. While everyone's story is different");
            await Keywords.verifyElementDisplayed(lessonLocator.page9, "9 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson10, "Before we begin the first lesson");
            await Keywords.verifyElementDisplayed(lessonLocator.page10, "10 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson11, "Anxiety is a feeling of nervousness, feeling on edge, or worry");
            await Keywords.verifyElementDisplayed(lessonLocator.page11, "11 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson12, "Anxiety is a normal and healthy response to situations that cause fear");
            await Keywords.verifyElementDisplayed(lessonLocator.page12, "12 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson13, "Anxiety is a natural part of life that can protect us");
            await Keywords.verifyElementDisplayed(lessonLocator.page13, "13 / 56");
            await browser.pause(2000);
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson14, "Anxiety has many symptoms. These include emotions (feelings)");
            await Keywords.verifyElementDisplayed(lessonLocator.page14, "14 / 56");
            await browser.pause(9999);
            await Keywords.click(lessonLocator.lesson14Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson14Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson14Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson14Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson14Radio5, "radio button 5");
            await Keywords.click(lessonLocator.lesson14Radio6, "radio button 6");
            await Keywords.click(lessonLocator.lesson14Radio7, "radio button 7");
            await Keywords.click(lessonLocator.lesson14Radio8, "radio button 8");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.page15, "15 / 56");

            await Keywords.click(lessonLocator.lesson15Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson15Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson15Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson15Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson15Radio5, "radio button 5");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.page16, "16 / 56");
            await browser.pause(2000);
            await Keywords.click(lessonLocator.lesson16Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson16Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson16Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson16Radio4, "radio button 4");
            // await Keywords.click(lessonLocator.lesson16Radio5,"radio button 5");
            // await Keywords.click(lessonLocator.lesson16Radio6,"radio button 6");
            // await Keywords.click(lessonLocator.lesson16Radio7,"radio button 7");
            // await Keywords.click(lessonLocator.lesson16Radio8,"radio button 8");
            // await Keywords.click(lessonLocator.lesson16Radio9,"radio button 9");
            // await Keywords.click(lessonLocator.lesson16Radio10,"radio button 10");
            await Keywords.click(lessonLocator.next, "next");

            await browser.pause(4000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson17, "Feeling sad, like anxiety, is a natural part of life");
            await Keywords.verifyElementDisplayed(lessonLocator.page17, "17 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson18, "Most of the time a low mood lasts a few hours or maybe a couple of days");
            await Keywords.verifyElementDisplayed(lessonLocator.page18, "18 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson19, "The difference between low mood and major depression is one of degrees");
            await Keywords.verifyElementDisplayed(lessonLocator.page19, "19 / 56");
            await lessonLocator.page19.isDisplayed({ timeout: 20000 })
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(5000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson20, "Treatment can help with low mood, allowing people to return to enjoying life");
            await Keywords.verifyElementDisplayed(lessonLocator.page20, "20 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson21, "Like anxiety, depression affects our emotions, our thoughts, and how we behave or respond");
            await Keywords.verifyElementDisplayed(lessonLocator.page21, "21 / 56");
            await Keywords.click(lessonLocator.lesson21Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson21Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson21Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson21Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson21Radio5, "radio button 5");
            await Keywords.click(lessonLocator.lesson21Radio6, "radio button 6");
            await Keywords.click(lessonLocator.lesson21Radio7, "radio button 7");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.page22, "22 / 56");
            await Keywords.click(lessonLocator.lesson22Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson22Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson22Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson22Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson22Radio5, "radio button 5");
            await Keywords.click(lessonLocator.lesson22Radio6, "radio button 6");
            await Keywords.click(lessonLocator.lesson22Radio7, "radio button 7");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.page23, "23 / 56");
            await Keywords.click(lessonLocator.lesson23Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson23Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson23Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson23Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson23Radio5, "radio button 5");
            await Keywords.click(lessonLocator.lesson23Radio6, "radio button 6");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson24, "As you saw from Matt and Susan, there are many symptoms that can occur");
            await Keywords.verifyElementDisplayed(lessonLocator.page24, "24 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson25, "In our experience, no one can tackle all symptoms at once");
            await Keywords.verifyElementDisplayed(lessonLocator.page25, "25 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson26, "Not everyone experiences all of these symptoms");
            await Keywords.verifyElementDisplayed(lessonLocator.page26, "26 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson27, "There are two basic approaches to treating anxiety and depression");
            await Keywords.verifyElementDisplayed(lessonLocator.page27, "27 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(5000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson28, "Some people have trouble asking for help for emotional problems");
            await Keywords.verifyElementDisplayed(lessonLocator.page28, "28 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson29, "There are some core skills that research has shown can help low mood and anxiety");
            await Keywords.verifyElementDisplayed(lessonLocator.page29, "29 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson30, "Everyone experiences problems with mood and anxiety from time to time but this is usually passing. Some people have more of a problem with mood and find it negatively affects their life in some way");
            await Keywords.verifyElementDisplayed(lessonLocator.page30, "30 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson31, "Anxiety disorders are the most common mental health problem in Canada");
            await Keywords.verifyElementDisplayed(lessonLocator.page31, "31 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson32, "Depression is less common than anxiety, though they often occur together");
            await Keywords.verifyElementDisplayed(lessonLocator.page32, "32 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson33, "Though they often occur together");
            await Keywords.verifyElementDisplayed(lessonLocator.page33, "33 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson34, "There is no one cause of low mood or anxiety");
            await Keywords.verifyElementDisplayed(lessonLocator.page34, "34 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson35, "Some of the things that contribute to low mood/anxiety are things that we cannot change");
            await Keywords.verifyElementDisplayed(lessonLocator.page35, "35 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson36, "Research has shown that what we do and how we think about things have a big role to play in how we feel. As well, behaviour and thinking is something we can learn to change");
            await Keywords.verifyElementDisplayed(lessonLocator.page36, "36 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson37, "Looking at the content of the lesson, I could see how my own feelings");
            await Keywords.verifyElementDisplayed(lessonLocator.page37, "37 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(6000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson38, "Matt's Thoughts, Feelings & Behaviours");
            await Keywords.verifyElementDisplayed(lessonLocator.page38, "38 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson39, "Susan");
            await Keywords.verifyElementDisplayed(lessonLocator.page39, "39 / 56");
            await Keywords.click(lessonLocator.playaction, "Play action");
            await browser.pause(9999);
            await lessonLocator.replayaction.isDisplayed({ timeout: 90000 })
            await Keywords.verifyText(lessonLocator.audiopercentage, "content-desc", "100%", "Audio Play Percentage")
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson40, "Susan's Thoughts, Feelings & Behaviours");
            await Keywords.verifyElementDisplayed(lessonLocator.page40, "40 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson41, "Feelings");
            await Keywords.verifyElementDisplayed(lessonLocator.page41, "41 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson42, "Take a moment to identify what you are feeling... ");
            await Keywords.verifyElementDisplayed(lessonLocator.page42, "42 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.page43, "43 / 56");
            await browser.pause(2000);
            await Keywords.click(lessonLocator.lesson43Radio1, "radio button 1");
            await Keywords.click(lessonLocator.lesson43Radio2, "radio button 2");
            await Keywords.click(lessonLocator.lesson43Radio3, "radio button 3");
            await Keywords.click(lessonLocator.lesson43Radio4, "radio button 4");
            await Keywords.click(lessonLocator.lesson43Radio5, "radio button 5");
            await Keywords.click(lessonLocator.lesson43Radio6, "radio button 6");
            await Keywords.click(lessonLocator.lesson43Radio7, "radio button 7");
            await Keywords.click(lessonLocator.lesson43Radio8, "radio button 8");
            await Keywords.click(lessonLocator.lesson43Radio9, "radio button 9");
            await Keywords.click(lessonLocator.lesson43Radio10, "radio button 10");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson44, "Now let's think about behaviours");
            await Keywords.verifyElementDisplayed(lessonLocator.page44, "44 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson45, "If we feel anxious or our mood is low, there are some common behaviours");
            await Keywords.verifyElementDisplayed(lessonLocator.page45, "45 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson46, "Physical activity deserves some special mention");
            await Keywords.verifyElementDisplayed(lessonLocator.page46, "46 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson47, "The recommended amount of physical activity for all Canadian adults is 150 minutes per week");
            await Keywords.verifyElementDisplayed(lessonLocator.page47, "47 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson48, "Always let your body guide you - if you feel pain something is wrong");
            await Keywords.verifyElementDisplayed(lessonLocator.page48, "48 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson49, "Another area of research that is important to mood has been called");
            await Keywords.verifyElementDisplayed(lessonLocator.page49, "49 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson50, "Fortunately, with time and practice, we can correct this focus on the negative");
            await Keywords.verifyElementDisplayed(lessonLocator.page50, "50 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson51, "If you have a chance to see it, there is a wonderful PBS documentary");
            await Keywords.verifyElementDisplayed(lessonLocator.page51, "51 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson52, "In Lesson One we reviewed low mood, depression and anxiety");
            await Keywords.verifyElementDisplayed(lessonLocator.page52, "52 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson53, "Depression, or low mood, is a feeling of sadness and lack of enjoyment in life");
            await Keywords.verifyElementDisplayed(lessonLocator.page53, "53 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson54, "here are two basic approaches to treating anxiety and depression");
            await Keywords.verifyElementDisplayed(lessonLocator.page54, "54 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson55, "Anxiety is the most common mental health concern in Canada");
            await Keywords.verifyElementDisplayed(lessonLocator.page55, "55 / 56");
            await Keywords.click(lessonLocator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(lessonLocator.lesson56, "Symptoms of anxiety and depression show up in our emotions, thoughts, and behaviours");
            await Keywords.verifyElementDisplayed(lessonLocator.page56, "56 / 56");
            await Keywords.click(lessonLocator.next, "next");
        } catch (err) {
            throw new Error(err);
        }
    })
});