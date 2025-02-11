import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, readTestcase, writeExcelData, saveTestDataToJson, readData, readData1, generateRandomNumber, dataSets, writeExcelData1 } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import {Forgotslocators} from '../page/ForgotLocator.js'


describe('Carepath Automation', async () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const Forgot = new Forgotslocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    let iterationValue = dataSets(iterations)
    let testName = '';

    // beforeEach(async function () {
    //     try {
    //         testName = this.currentTest.title;
    //         console.log(`Starting test: ${testName}`);
    //     } catch (error) {
    //         console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
    //     }
    // });


    it('ForgotpasswordNegativeOtp', async () => {
         allureReporter.addDescription(`
             1. Click on the "Start Now" button.
             2.Click on Forgot password
             3.Change the password
             4.Enter the Invalied otp
             5.Provide invalied password
         `);
         try {


            const Email = await readData1("Testdata", "ForgotPassword","Testdata1","Valied Mail");
            const Valied = await readData1("Testdata", "ForgotPassword","Testdata1","New Password");
            const Otp = await readData1("Testdata", "ForgotPassword","Testdata1","Otp");


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

                
             expect(Otp).to.not.equal("");
             await driver.switchContext('NATIVE_APP');
             await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
             for (let i = 0; i < 6; i++) {
                 await Keywords.SetValue(locator.otpPage(i), Otp[i]);
             }

             await Keywords.waitForDisplay(Forgot.resetpass, 60000, "Reset your password")
             await Keywords.verifyText(Forgot.Reset, "content-desc", "Reset your password", "Reset your password");
             await Keywords.verifyElementDisplayed(Forgot.newpass, "New Password");
             await Keywords.verifyElementDisplayed(Forgot.repeatpassword, "Repeat Password");
             await Keywords.click(Forgot.newpassunhide, "Un hide"); 

             await Keywords.SetValue(Forgot.newpasswordField, Valied);
             await Keywords.SetValue(Forgot.repeatPasswordField, Valied);
             await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
             await Keywords.click(Forgot.savebutton, "Save Button"); 
             await Keywords.verifyText(Forgot.wrongotp, "content-desc", "Password reset failed!", "Password reset failed!");
             await Keywords.verifyElementDisplayed(Forgot.tryagain, "try again");
             await Keywords.verifyElementIsEnabled(Forgot.tryagainButton, "Try Again");
             await Keywords.verifyElementDisplayed(Forgot.cancle, "Cancle");
             await Keywords.click(Forgot.tryagainButton, "try again"); 
             

             await Keywords.SetValue(Forgot.EmailField, Email);
             await Keywords.verifyElementIsEnabled(Forgot.sendRequest, "Send Request");
             await Keywords.click(Forgot.sendRequest, "Send Request"); 
             await Keywords.verifyText(Forgot.forgotScreen, "content-desc", "FORGOT PASSWORD?", "Forgot password");
             await Keywords.verifyElementDisplayed(Forgot.conform, "We need to send you the code to reset password");
             await Keywords.verifyElementDisplayed(Forgot.verifymessage, "Verified and recommended for you");
             await Keywords.click(Forgot.sendrequest, "Send Request"); 
             await Keywords.verifyText(Forgot.forgotScreen, "content-desc", "FORGOT PASSWORD?", "Forgot password");

                const otp = await Keywords.getOTPFromMailinator(Email);
                
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


                await Keywords.SetValue(Forgot.newpasswordField, Valied);
                await Keywords.SetValue(Forgot.repeatPasswordField, Valied);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                const loginDisplay1 = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
                expect(loginDisplay1).to.be.true;
                await Keywords.verifyText(Forgot.forgot, "content-desc", "Forgot password?", "Forgot password?")


            } catch (err) {
                throw new Error(err);
            }
        });
   
   });