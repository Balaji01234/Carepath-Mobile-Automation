import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData, generateRandomNumber } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect, assert } from 'chai';

describe('Carepath Automation', () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    it('should login with valid credentials', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
        `);
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

    });

    const iterations = 5;
    for (let i = 1; i <= iterations; i++) {
        it(`TC-001-Sign Up - Iteration${i}`, async () => {
            allureReporter.addDescription(`New User Sign Up`)
            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const createAccountButton = await Keywords.isEnabled(locator.createAccountButton, "Create Account button")
            expect(createAccountButton).to.be.true;
            const createBtnTxt = await locator.createAccountButton.getText();
            console.log(createBtnTxt)
            await Keywords.click(locator.createAccountButton, "Create Account button")
            const requestButton = await Keywords.isEnabled(locator.createRequestButton, "Create Request button")
            expect(requestButton).to.be.true;
            await Keywords.click(locator.createRequestButton, "Create Account button")
            const singUpPage = await Keywords.isDisplayed(locator.signUpPage, "Signup screen")
            expect(singUpPage).to.be.true;
            await Keywords.click(locator.employeeButton, "Employee Button");
            const nextButton = await Keywords.isEnabled(locator.nextButton, "Next button")
            expect(nextButton).to.be.true;
            await Keywords.click(locator.nextButton, "Next Button")
            const FirstName = `Test${getRandomString()}`
            await writeExcelData("TC_01", "Field", "Firstname", `Writedata${i}`, FirstName);
            const LastName = (`Automation${getRandomString()}`).toLowerCase();
            await writeExcelData("TC_01", "Field", "Lastname", `Writedata${i}`, LastName);
            const mail = `test${getRandomString() + generateRandomNumber()}@mailinator.com`;
            await writeExcelData("TC_01", "Field", "Email", `Writedata${i}`, mail);
            const phoneNumber = await readData("TC_01", "Field", "Phone number", `Testdata${i}`);
            const password = await readData("TC_01", "Field", "Password", `Testdata${i}`);
            const employerName = await readData("TC_01", "Field", "Employer name", `Testdata${i}`);
            const referral = await readData("TC_01", "Field", "Referrals", `Testdata${i}`);
            const dob = await readData("TC_01", "Field", "DOB", `Testdata${i}`);
            const relation = await readData("TC_01", "Field", "Relation", `Testdata${i}`);
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
            const nextButton1 = await Keywords.isEnabled(locator.nextButton, "Next button")
            expect(nextButton1).to.be.true;
            await Keywords.click(locator.nextButton, "Next Button")
            await Keywords.SetValue(locator.employerName, employerName);
            await Keywords.click(locator.referral, "Referral dropdown");
            await Keywords.click(locator.referrals(referral), "referral")
            await Keywords.SetValue(locator.dob, dob);
            await Keywords.SetValue(locator.relationToEmployee, relation);
            if (!await locator.signUpButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.click(locator.signUpButton, "Signup button")
            await Keywords.waitForDisplay(locator.verifyYourAccount, timeout, "Verify your account");
            await Keywords.click(locator.getMail, "Get by email card")
            const verifyButton = await Keywords.isEnabled(locator.verifyButton, "Verify button")
            expect(verifyButton).to.be.true;
            await Keywords.click(locator.verifyButton, "Verify Button");
            const otp = await Keywords.getOTPFromMailinator(mail);
            expect(otp).to.not.equal("");
            await driver.switchContext('NATIVE_APP');
            await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
            for (let i = 0; i < 6; i++) {
                await Keywords.SetValue(locator.otpPage(i), otp[i]);
            }
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.click(locator.mentalHealthCard, "Mental Health card")
            const mentalHealth = await Keywords.isEnabled(locator.mentalHealthCard, "Mental Health card")
            expect(mentalHealth).to.equal(true);
            const sendRequestButton = await Keywords.isEnabled(locator.sendRequestButton, "Send Request Button")
            expect(sendRequestButton).to.equal(true);
            await Keywords.click(locator.sendRequestButton, "Send Request Button")
            if (i == 1) {
                await Keywords.waitForDisplay(locator.allowNotificationButton, 30000, "Allow notification")
                await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            }
            await Keywords.waitForDisplay(locator.success, 45000, "Success Message!!!");
            await Keywords.click(locator.closeButton, "Close Button");
            await Keywords.waitForDisplay(locator.startNow, 30000, "Start Now Button");
        })
    }

    it('TC-002-NewUserOnboarding', async () => {
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
        allureReporter.addDescription(`
                    1. Click on the "Start Now" button.
                    2. Check if the login screen is displayed.
                    3. Enter the username and password.
                    4. Check if the login button is enabled.
                    5. Handle any dialog boxes related to notifications.
                    6. Log in successfully if all steps are completed.
                `);
        await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
        await Keywords.click(locator.startNow, "Start Now Button")
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
        await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
        await Keywords.click(locator.allowButton, "Allow button");
        await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
        await Keywords.click(locator.allowNotificationButton, "Allow notification button");
        console.log('Login process completed successfully.');
        await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
        await Keywords.click(locator.mentalHealthCard, "Mental Health card")
        await Keywords.verifyElementDisplayed(locator.mentalHealthCard, "Mental Health card")
        await Keywords.verifyElementDisplayed(onboardLocator.mentalHealthText, "Mental Health Text");
        await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
        const continueButton = await Keywords.isEnabled(onboardLocator.continueButton, "Continue Button");
        expect(continueButton).to.equal(true);
        await Keywords.click(onboardLocator.continueButton, "Continue Button");
        await Keywords.verifyText(onboardLocator.welcomeTextOnboarding, "content-desc", welcomeOnboardText, "Verify Welcome Onboarding Text")
        await Keywords.verifyText(onboardLocator.mentalHealthProgramApproveText, "content-desc", accessApproveText, "Verify access approve Text");
        await Keywords.click(onboardLocator.openChecklist, "Open Checklist Button");
        await Keywords.verifyElementDisplayed(onboardLocator.requiredInformation, "Required Information");
        await Keywords.verifyListOfText(onboardLocator.checkListScreen, "content-desc", checklistText, "Verify the texts present in checklist screen");
        await Keywords.verifyElementIsEnabled(onboardLocator.startOnboardingButton, "Verify Start Onboarding button is enabled!");
        await Keywords.click(onboardLocator.startOnboardingButton, "Start Onboarding Button");
        await Keywords.verifyElementDisplayed(onboardLocator.contactInformation, "Contact Information Screen");
        await Keywords.verifyText(onboardLocator.homeNumberText, "content-desc", homePhoneNumberText, "Verify Home Number Text")
        await Keywords.verifyText(onboardLocator.cellNumberText, "content-desc", cellNumberText, "Verify the Cell Number Text")
        await Keywords.SetValue(onboardLocator.homePhoneNumber, homePhoneNumber);
        await Keywords.SetValue(onboardLocator.cellNumber, cellNumber);
        await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(15), "Verify the onboard complete percentage")
        if (!await onboardLocator.nextButton.isDisplayed()) {
            await browser.hideKeyboard();
        }
        await Keywords.verifyElementIsEnabled(onboardLocator.nextButton, "Verify next button button is enabled!");
        await Keywords.verifyText(onboardLocator.nextButtonText, NextButtonText, "Verify Next button text");
        await Keywords.click(onboardLocator.nextButton, "Next Button");
        await Keywords.waitForDisplay(onboardLocator.emergencyContactScreen, 45000, "Emergency Contact Screen");
        const text = [firstNameText, lastNameText, relationText, cellPhoneText];
        const locator = [onboardLocator.firstNameText, onboardLocator.lastNameText, onboardLocator.relationText, onboardLocator.cellPhoneText];
        for (let i = 0; i < text.length; i++) {
            await Keywords.verifyText(locator[i], NextButtonText, "Verify text in Emergency Contact screen");
        }
        await Keywords.SetValue(onboardLocator.firstName, firstName);
        await Keywords.SetValue(onboardLocator.lastName, lastName);
        await Keywords.SetValue(onboardLocator.relation, relation);
        await Keywords.SetValue(onboardLocator.relationCellPhone, relationCellNumber)
        await Keywords.verifyElementDisplayed(onboardLocator.completeStatus(20), "Verify the onboard complete percentage")
        if (!await onboardLocator.relationCellPhone.isDisplayed()) {
            await browser.hideKeyboard();
        }
        await Keywords.verifyElementIsEnabled(onboardLocator.nextButton, "Verify next button button is enabled!");
        await Keywords.verifyText(onboardLocator.nextButtonText, NextButtonText, "Verify Next button text");
        await Keywords.click(onboardLocator.nextButton, "Next Button");
        await Keywords.waitForDisplay(onboardLocator.addressInformationScreen, 45000, "Address Information Screen");

    });


    afterEach(async () => {
        // if (await locator.homePage.isDisplayed()) {
        //     await Keywords.click(locator.moreOptions, "More options");
        //     await Keywords.click(locator.logout, "Logout button")
        // }
    });

    after(async () => {
        await browser.terminateApp('com.carepath.app.dev');
    })
});
