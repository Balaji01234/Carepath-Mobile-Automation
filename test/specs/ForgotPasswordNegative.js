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


    it('ForgotpasswordNegativeFlow', async () => {
         allureReporter.addDescription(`
             1. Click on the "Start Now" button.
             2.Click on Forgot password
             3.Chnage the password
             4.Provide invalied password
         `);
         try {


            const Email = await readData1("Testdata", "ForgotPassword","Testdata1","Valied Mail");
            const Valied = await readData1("Testdata", "ForgotPassword","Testdata1","Numbers");
            const OnlyNumbers = await readData1("Testdata", "ForgotPassword","Testdata1","NumbersOnly");
            const SpecialCharacters = await readData1("Testdata", "ForgotPassword","Testdata1","Special Characters");
            const Capitalletters= await readData1("Testdata", "ForgotPassword","Testdata1","Capital letters");
            const SmallLettes = await readData1("Testdata", "ForgotPassword","Testdata1","Small Lettes");
            const OneLetter = await readData1("Testdata", "ForgotPassword","Testdata1","One Letter");
            const WithOutNumber = await readData1("Testdata", "ForgotPassword","Testdata1","With Out Number");
            const WithOutCaptitalLetter = await readData1("Testdata", "ForgotPassword","Testdata1","With Out Captital Letter");
            const WithOutSmallLetter = await readData1("Testdata", "ForgotPassword","Testdata1","With Out Smal lLetter");
            const WithOutSpecialChar = await readData1("Testdata", "ForgotPassword","Testdata1","With Out Special Char");
            const EmptySpace = await readData1("Testdata", "ForgotPassword","Testdata1","Empty Space");


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
             const oldPass = await readData1("Testdata", "ForgotPassword","Testdata1","Old Password");

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


                await Keywords.SetValue(Forgot.newpasswordField, OnlyNumbers);
                await Keywords.SetValue(Forgot.repeatPasswordField, OnlyNumbers);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.Numbers, "Password must have at least one special character");


                await Keywords.SetValue(Forgot.newpasswordField, SpecialCharacters);
                await Keywords.SetValue(Forgot.repeatPasswordField, SpecialCharacters);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.SpecialChar, "Password must have a number");


                await Keywords.SetValue(Forgot.newpasswordField, Capitalletters);
                await Keywords.SetValue(Forgot.repeatPasswordField, Capitalletters);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.Numbers, "Password must have at least one special character");


                await Keywords.SetValue(Forgot.newpasswordField, SmallLettes);
                await Keywords.SetValue(Forgot.repeatPasswordField, SmallLettes);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.Numbers, "Password must have at least one special character");


                await Keywords.SetValue(Forgot.newpasswordField, OneLetter);
                await Keywords.SetValue(Forgot.repeatPasswordField, OneLetter);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.oneletter, "Password must be 8 digit long");
                // await Keywords.verifyElementDisplayed(Forgot.notmatch, "Password do not match");

                await Keywords.SetValue(Forgot.newpasswordField, WithOutNumber);
                await Keywords.SetValue(Forgot.repeatPasswordField, WithOutNumber);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.Numbers, "Password must have a number");

                await Keywords.SetValue(Forgot.newpasswordField, WithOutCaptitalLetter);
                await Keywords.SetValue(Forgot.repeatPasswordField, WithOutCaptitalLetter);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutCapital, "Password must have upper case");


                await Keywords.SetValue(Forgot.newpasswordField, WithOutSmallLetter);
                await Keywords.SetValue(Forgot.repeatPasswordField, WithOutSmallLetter);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutsmallLetter, "Password must have lower case");

                await Keywords.SetValue(Forgot.newpasswordField, WithOutSpecialChar);
                await Keywords.SetValue(Forgot.repeatPasswordField, WithOutSpecialChar);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutSpecialChar, "Password must have at least one special character");

              
                

                await Keywords.SetValue(Forgot.newpasswordField, WithOutNumber);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.Numbers, "Password must have a number");
                await Keywords.verifyElementDisplayed(Forgot.notmatch, "Password do not match");

                await Keywords.SetValue(Forgot.newpasswordField, WithOutCaptitalLetter);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutCapital, "Password must have upper case");
                await Keywords.verifyElementDisplayed(Forgot.notmatch, "Password do not match");


                await Keywords.SetValue(Forgot.newpasswordField, WithOutSmallLetter);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutsmallLetter, "Password must have lower case");
                await Keywords.verifyElementDisplayed(Forgot.notmatch, "Password do not match");

                await Keywords.SetValue(Forgot.newpasswordField, WithOutSpecialChar);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.withoutSpecialChar, "Password must have at least one special character");
             

                await Keywords.SetValue(Forgot.newpasswordField, EmptySpace);
                await Keywords.SetValue(Forgot.repeatPasswordField, EmptySpace);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.newpassword, "Please enter new password");
  

                await Keywords.SetValue(Forgot.repeatPasswordField, EmptySpace);
                await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                await Keywords.click(Forgot.savebutton, "Save Button"); 
                await Keywords.verifyElementDisplayed(Forgot.newpassword, "Please enter new password");

                
                   await Keywords.SetValue(Forgot.newpasswordField, oldPass);
                   await Keywords.SetValue(Forgot.repeatPasswordField, oldPass);
                   await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
                   await Keywords.click(Forgot.savebutton, "Save Button"); 
                   const loginDisplay2 = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
                   expect(loginDisplay2).to.be.true;
               
                   
                

         } catch (err) {
             throw new Error(err);
         }
     });



});