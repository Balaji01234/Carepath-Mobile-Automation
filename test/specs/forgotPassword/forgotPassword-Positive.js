import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { ForgotPasswordLocators } from '../../page/ForgotLocator.js'


describe('Forgot Password Positive', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const Forgot = new ForgotPasswordLocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    const testCases1 = getFilteredTests("forgotPassword","ForgotPassword-Positive", "ForgotPassword");
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });

    for (let i = 0; i < testCases1.length; i++) {
        it(`${testCases1[i].testId} - ${testCases1[i].testDescription}`, async () => {
            allureReporter.addDescription(`${testCases1[i].testDescription}`);
            try {
                const Email = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "ValidMail", `${testCases1[i].testId}`);
                const newPassword = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "NewPassword", `${testCases1[i].testId}`);
                const oldPassword = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "OldPassword", `${testCases1[i].testId}`);
                const forgotPasswordScreen = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "ForgotPasswordScreen", `${testCases1[i].testId}`);
                const forgotPasswordText = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "ForgotPasswordText", `${testCases1[i].testId}`);
                const resetPasswordText = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "ResetYourPasswordText", `${testCases1[i].testId}`);
                const program = await readData1("forgotPassword","ForgotPassword-Positive", "ForgotPassword", "Program", `${testCases1[i].testId}`);
                console.log({ Email, newPassword, oldPassword, program });
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button")
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login screen");
                await Keywords.waitForDisplay(Forgot.forgot, 60000, "Forgot Password")
                await Keywords.verifyText(Forgot.forgot, "content-desc", forgotPasswordText, forgotPasswordText)
                await Keywords.click(Forgot.forgot, "Forgot password?");
                await Keywords.verifyElementDisplayed(Forgot.Pleaseentertheemailaddress, "Please enter the email address");
                await Keywords.verifyElementDisplayed(Forgot.forgotpage, "In case you have forgotten your password, please send us a request to reset it. You will receive an email with instructions to update your password.");
                await Keywords.SetValue(Forgot.EmailField, Email);
                await Keywords.verifyElementIsEnabled(Forgot.sendRequest, "Send Request");
                await Keywords.click(Forgot.sendRequest, "Send Request");
                await Keywords.verifyText(Forgot.forgotScreen, "content-desc", forgotPasswordScreen, forgotPasswordScreen);
                await Keywords.verifyElementDisplayed(Forgot.conform, "We need to send you the code to reset password");
                await Keywords.verifyElementDisplayed(Forgot.verifymessage, "Verified and recommended for you");
                await Keywords.click(Forgot.sendrequest, "Send Request");
                await Keywords.verifyText(Forgot.forgotScreen, "content-desc", forgotPasswordScreen, forgotPasswordScreen);
                const otp = await Keywords.getForForgotOTPFromMailinator(Email);
                expect(otp).to.not.equal("");
                await driver.switchContext('NATIVE_APP');
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), otp[i]);
                }
                await Keywords.waitForDisplay(Forgot.resetpass, 60000, "Reset your password")
                await Keywords.verifyText(Forgot.Reset, "content-desc", resetPasswordText, resetPasswordText);
                await Keywords.verifyElementDisplayed(Forgot.newpass, "New Password");
                await Keywords.verifyElementDisplayed(Forgot.repeatpassword, "Repeat Password");
                await Keywords.click(Forgot.newpassunhide, "Un hide");
                await Keywords.SetValue(Forgot.newpasswordField, newPassword);
                await Keywords.SetValue(Forgot.repeatPasswordField, newPassword);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button");
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login screen");
                await Keywords.SetValue(locator.userName, Email);
                await Keywords.SetValue(locator.password, newPassword);
                await Keywords.click(locator.loginButton, "Login Button");
                await Keywords.waitForDisplay(locator.allowButton, 30000, "Get notified dialog box")
                await Keywords.click(locator.allowButton, "Allow button");
                await Keywords.waitForDisplay(locator.allowNotificationButton, 30000, "Allow notification")
                await Keywords.click(locator.allowNotificationButton, "Allow notification button");
                console.log('Login process completed successfully.');
                await Keywords.verifyElementDisplayed(locator.homePage, "Home Page");
                await Keywords.resetPassword(program, oldPassword, newPassword);
                await Keywords.logOut();
            } catch (err) {
                throw new Error(err);
            }
        });
    }
});
