import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);

    it('should login with valid credentials', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
        `);
        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startNow, 10000, "Start Now Button")
        await Keywords.click(locator.startNow, "Start Now Button")
        const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
        expect(loginDisplay).to.be.true;
        await Keywords.SetValue(locator.userName, process.env.USER_NAME);
        await Keywords.SetValue(locator.password, process.env.PASSWORD);
        const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
        expect(loginBtnEnable).to.be.true;
        await Keywords.click(locator.loginButton, "Login Button")
        if (await Keywords.isDisplayed(locator.getNotifiedDialogBox, "Get notified dialog box")) {
            await Keywords.click(locator.allowButton, "Allow button");
        }
        await browser.pause(2000);
        if (await Keywords.isDisplayed(locator.allowNotification, "Allow notification")) {
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
        }
        console.log('Login process completed successfully.');

    });

    it("TC-001-Sign Up", async () => {
        await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
        await Keywords.click(locator.startNow, "Start Now Button")
        const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
        expect(loginDisplay).to.be.true;
        const createAccountButton = await Keywords.isEnabled(locator.createAccountButton, "Create Account button")
        expect(createAccountButton).to.be.true;
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
        await writeExcelData("TC_01", "Field", "Firstname", "Writedata1", FirstName);
        const LastName = (`${getRandomString()}`).toLowerCase();
        await writeExcelData("TC_01", "Field", "Lastname", "Writedata1", LastName);
        const mail = `test${getRandomString()}@mailinator.com`;
        await writeExcelData("TC_01", "Field", "Email", "Writedata1", mail);
        const phoneNumber = await readData("TC_01", "Field", "Phone number", "Testdata1");
        const password = await readData("TC_01", "Field", "Password", "Testdata1");
        const employerName = await readData("TC_01", "Field", "Employer name", "Testdata1");
        const referral = await readData("TC_01", "Field", "Referrals", "Testdata1");
        const dob = await readData("TC_01", "Field", "DOB", "Testdata1");
        const relation = await readData("TC_01", "Field", "Relation", "Testdata1");
        console.log({
            FirstName,
            LastName,
            mail,
            phoneNumber,
            password,
        });
        await Keywords.SetValue(locator.firstName, FirstName);
        await Keywords.SetValue(locator.lastName, LastName);
        await Keywords.SetValue(locator.emailId, mail);
        await Keywords.SetValue(locator.phoneNumber, phoneNumber);
        await Keywords.SetValue(locator.passwordField, password);
        await Keywords.SetValue(locator.repeatPassword, password);
        const nextButton1 = await Keywords.isEnabled(locator.nextButton, "Next button")
        expect(nextButton1).to.be.true;
        await Keywords.click(locator.nextButton, "Next Button")
        await Keywords.SetValue(locator.employerName, employerName);
        await Keywords.click(locator.referral, "Referral dropdown")
        await Keywords.click(locator.referrals(referral), "referral")
        await Keywords.SetValue(locator.dob, dob);
        await Keywords.SetValue(locator.relationToEmployee, relation);
        await Keywords.click(locator.signUpButton, "Signup button")
        await Keywords.waitForDisplay(locator.verifyYourAccount, 10000, "Verify your account");
        await Keywords.click(locator.getMail, "Get by email card")
        const verifyButton = await Keywords.isEnabled(locator.verifyButton, "Verify button")
        expect(verifyButton).to.be.true;
        await Keywords.click(locator.verifyButton, "Verify Button");
        const otp = await Keywords.getOTPFromMailinator(mail);
        console.log("otp retrieved: " + otp)
        await driver.switchContext('NATIVE_APP');
        await Keywords.waitForDisplay(locator.otpPage(0), 10000, "OTP input");
        await Keywords.SetValue(locator.otpPage(0), "1");
        await locator.homePage.waitForDisplayed({ timeout: 30000 })
    })

    afterEach(async () => {

        // const appPackage = 'com.carepath.app.dev';
        // const appActivity = 'com.carepath.MainActivity';
        // await browser.terminateApp(appPackage);
        // console.log('App terminated successfully.');
        // await browser.startActivity(appPackage, appActivity);
        // console.log('App relaunched successfully.');
    });

});
