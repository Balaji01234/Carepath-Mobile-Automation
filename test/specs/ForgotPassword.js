import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { readData1, dataSets } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { ForgotPasswordLocators } from '../page/ForgotLocator.js'


describe('Carepath Automation', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const Forgot = new ForgotPasswordLocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.FORGOT_PASSWORD_ITERATIONS

    let iterationValue = dataSets(iterations);
    console.log("iterations: " + iterationValue);
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });

    for (let i = 0; i < iterationValue.length; i++) {
        it(`Forgot Password - Positive iteration${iterationValue[i]}`, async () => {
            allureReporter.addDescription(`Forgot Password Scenario`);
            try {
                const Email = await readData1("ForgotPassword-Positive", "ForgotPassword", "ValidMail", `Testdata${iterationValue[i]}`);
                const newPassword = await readData1("ForgotPassword-Positive", "ForgotPassword", "NewPassword", `Testdata${iterationValue[i]}`);
                const oldPassword = await readData1("ForgotPassword-Positive", "ForgotPassword", "OldPassword", `Testdata${iterationValue[i]}`);
                const forgotPasswordScreen = await readData1("ForgotPassword-Positive", "ForgotPassword", "ForgotPasswordScreen", `Testdata${iterationValue[i]}`);
                const forgotPasswordText = await readData1("ForgotPassword-Positive", "ForgotPassword", "ForgotPasswordText", `Testdata${iterationValue[i]}`);
                const resetPasswordText = await readData1("ForgotPassword-Positive", "ForgotPassword", "ResetYourPasswordText", `Testdata${iterationValue[i]}`);
                const program = await readData1("ForgotPassword-Positive", "ForgotPassword", "Program", `Testdata${iterationValue[i]}`);
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

    for (let i = 0; i < iterationValue.length; i++) {
        it(`ForgotpasswordNegativeFlow${iterationValue[i]}`, async () => {
            allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2.Click on Forgot password
            3.Chnage the password
            4.Provide invalied password
        `);
            try {
                const Email = await readData1("ForgotPassword-Negative", "ForgotPassword", "Valid Mail", `Testdata${iterationValue[i]}`);
                const invalidPassword = await readData1("ForgotPassword-Negative", "ForgotPassword", "InvalidNewPasswordInput", `Testdata${iterationValue[i]}`);
                const invalidRepeatPassword = await readData1("ForgotPassword-Negative", "ForgotPassword", "InvalidRepeatPassword", `Testdata${iterationValue[i]}`);
                const invalidPasswordError = await readData1("ForgotPassword-Negative", "ForgotPassword", "NewPasswordErrorText", `Testdata${iterationValue[i]}`);
                const invalidRepeatPasswordError = await readData1("ForgotPassword-Negative", "ForgotPassword", "RepeatPasswordErrorText", `Testdata${iterationValue[i]}`);
                const oldpass = await readData1("ForgotPassword-Negative", "ForgotPassword", "Old Password", `Testdata${iterationValue[i]}`);
                const program = await readData1("ForgotPassword-Negative", "ForgotPassword", "Program", `Testdata${iterationValue[i]}`);
               const newPassword = await readData1("ForgotPassword-Negative", "ForgotPassword", "New Password", `Testdata${iterationValue[i]}`);
               
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
