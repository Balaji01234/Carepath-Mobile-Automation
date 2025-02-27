import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { ForgotPasswordLocators } from '../../page/ForgotLocator.js'


describe('Forgot Password Negative', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const Forgot = new ForgotPasswordLocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    const testCases = getFilteredTests("forgotPassword", "ForgotPassword-Negative", "ForgotPassword");
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            allureReporter.addDescription(`${testCases[i].testDescription}`);
            try {
                const Email = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "Valid Mail", `${testCases[i].testId}`);
                const invalidPassword = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "InvalidNewPasswordInput", `${testCases[i].testId}`);
                const invalidRepeatPassword = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "InvalidRepeatPassword", `${testCases[i].testId}`);
                const invalidPasswordError = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "NewPasswordErrorText", `${testCases[i].testId}`);
                const invalidRepeatPasswordError = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "RepeatPasswordErrorText", `${testCases[i].testId}`);
                const oldpass = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "Old Password", `${testCases[i].testId}`);
                const program = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "Program", `${testCases[i].testId}`);
                const newPassword = await readData1("forgotPassword", "ForgotPassword-Negative", "ForgotPassword", "New Password", `${testCases[i].testId}`);

                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button")
                const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
                expect(loginDisplay).to.be.true;
                await Keywords.verifyText(Forgot.forgot, "content-desc", "Forgot password?", "Forgot password?")
                await Keywords.click(Forgot.forgot, "Forgot password?");
                await Keywords.verifyElementDisplayed(Forgot.Pleaseentertheemailaddress, "Please enter the email address");
                await Keywords.verifyElementDisplayed(Forgot.forgotpage, "In case you have forgotten your password, please send us a request to reset it. You will receive an email with instructions to update your password.");
                await Keywords.SetValue(Forgot.EmailField, Email);
                await Keywords.verifyElementIsEnabled(Forgot.sendRequest, "Send Request");
                await Keywords.click(Forgot.sendRequest, "Send Request");
                await Keywords.verifyText(Forgot.forgotScreen, "content-desc", "FORGOT PASSWORD?", "Forgot password");
                await Keywords.verifyElementDisplayed(Forgot.conform, "We need to send you the code to reset password");
                await Keywords.verifyElementDisplayed(Forgot.verifymessage, "Verified and recommended for you");
                await Keywords.click(Forgot.sendrequest, "Send Request");
                await Keywords.verifyText(Forgot.forgotScreen, "content-desc", "FORGOT PASSWORD?", "Forgot password");
                const otp = await Keywords.getForForgotOTPFromMailinator(Email);
                expect(otp).to.not.equal("");
                await driver.switchContext('NATIVE_APP');
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), otp[i]);
                }
                await Keywords.waitForDisplay(Forgot.resetpass, 60000, "Reset your password")
                await Keywords.verifyText(Forgot.Reset, "content-desc", "Reset your password", "Reset your password");
                await Keywords.verifyElementDisplayed(Forgot.newpass, "New Password");
                await Keywords.verifyElementDisplayed(Forgot.repeatpassword, "Repeat Password");
                await Keywords.click(Forgot.newpassunhide, "Un hide");
                const errorTexts1 = [invalidPasswordError, invalidRepeatPasswordError]
                for (const errorText of errorTexts1) {
                    if (errorText === invalidPasswordError) {
                        if ((invalidPassword.trim()).toLowerCase() == "empty") {
                            await Keywords.SetValue(Forgot.newpasswordField, "");
                            await Keywords.SetValue(Forgot.repeatPasswordField, oldpass);
                            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                            await Keywords.click(Forgot.savebutton, "Save Button");
                            await Keywords.verifyElementDisplayed2(invalidPasswordError, "invalidPasswordError");
                        } else {
                            await Keywords.SetValue(Forgot.newpasswordField, invalidPassword);
                            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                            await Keywords.click(Forgot.savebutton, "Save Button");
                            await Keywords.verifyElementDisplayed2(invalidPasswordError, "invalidPasswordError");
                        }
                    } else if (errorText === invalidRepeatPasswordError) {
                        if ((invalidRepeatPassword.trim()).toLowerCase() == "empty") {
                            await Keywords.SetValue(Forgot.repeatPasswordField, "");
                            await Keywords.SetValue(Forgot.newpasswordField, oldpass);
                            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                            await Keywords.click(Forgot.savebutton, "Save Button");
                            await Keywords.verifyElementDisplayed2(invalidRepeatPasswordError, invalidRepeatPasswordError);
                        } else {
                            await Keywords.SetValue(Forgot.newpasswordField, oldpass);
                            await Keywords.SetValue(Forgot.repeatPasswordField, invalidRepeatPassword);
                            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                            await Keywords.click(Forgot.savebutton, "Save Button");
                            await Keywords.verifyElementDisplayed2(invalidRepeatPasswordError, invalidRepeatPasswordError);
                        }
                    }
                }
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
                await Keywords.resetPassword(program, oldpass, newPassword);
                await Keywords.logOut();
            } catch (err) {
                throw new Error(err);
            }
        });
    }
});
