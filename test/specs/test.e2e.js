import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData, generateRandomNumber } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', () => {

    const locator = new locators();
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
        await Keywords.waitForDisplay(locator.getNotifiedDialogBox, 20000, "Get notified dialog box")
        await Keywords.click(locator.allowButton, "Allow button");
        await Keywords.waitForDisplay(locator.allowNotification, 20000, "Allow notification")
        await Keywords.click(locator.allowNotificationButton, "Allow notification button");
        console.log('Login process completed successfully.');

    });

    const iterations = 1;
    for (let i = 1; i <= iterations; i++) {
        it(`TC-001-Sign Up - Iteration${i}`, async () => {
            allureReporter.addDescription(`New User Sign Up`)
            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            const startnow = await locator.startNow.getText();
            console.log(`StartNow Button Text: ${startnow}`);
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
            await writeExcelData("TC_01", "Field", "Firstname", "Writedata1", FirstName);
            const LastName = (`${getRandomString()}`).toLowerCase();
            await writeExcelData("TC_01", "Field", "Lastname", "Writedata1", LastName);
            const mail = `test${getRandomString() + generateRandomNumber()}@mailinator.com`;
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
            await locator.homePage.waitForDisplayed({ timeout: 45000 })
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.click(locator.mentalHealthCard, "Mental Health card")
            const mentalHealth = await Keywords.isEnabled(locator.mentalHealthCard, "Mental Health card")
            expect(mentalHealth).to.equal(true);
            const sendRequestButton = await Keywords.isEnabled(locator.sendRequestButton, "Send Request Button")
            expect(sendRequestButton).to.equal(true);
            await Keywords.click(locator.sendRequestButton, "Send Request Button")
            await Keywords.waitForDisplay(locator.allowNotificationButton, 30000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            const success = await Keywords.isDisplayed(locator.success, "Success Message!!!");
            expect(success).to.equal(true);
            await Keywords.click(locator.closeButton, "Close Button");
            await Keywords.waitForDisplay(locator.startNow, 30000, "Start Now Button")
        })
    }

    afterEach(async () => {
        if (await locator.homePage.isDisplayed()) {
            await Keywords.click(locator.moreOptions, "More options");
            await Keywords.click(locator.logout, "Logout button")
        }
    });

    after(async () => {
        await browser.terminateApp('com.carepath.app.dev');
    })
});
