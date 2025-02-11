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


    it('ForgotpasswordMyProfile', async () => {
         allureReporter.addDescription(`
             1. Click on the "Start Now" button.
             2.Click on Forgot password
             3.Chanage the password
             4.Go to setting
             5.click on Forgot password
         `);
         try {

            const Email = await readData1("Testdata", "ForgotPassword","Testdata1","My profile");
            const Password = await readData1("Testdata", "ForgotPassword","Testdata1","Old Password");
            const newPassword = await readData1("Testdata", "ForgotPassword","Testdata1","New Password");
            const OldPasswords = await readData1("Testdata", "ForgotPassword","Testdata1","OldPasswordForTesting");
            

            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;
            await Keywords.SetValue(locator.userName, Email);
            await Keywords.SetValue(locator.password, OldPasswords);
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 20000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 20000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(Forgot.cancer, "Cancer")
            await Keywords.click(Forgot.cancer, "Cancer")
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await browser.implicitWait(10000);
            await Keywords.click(Forgot.Hambugar, "Hambugar button");
            await browser.implicitWait(10000);
            await Keywords.click(Forgot.myprofile, "My profile Page");
            await Keywords.verifyText(Forgot.myprofilepa, "content-desc", "My Profile", "My Profile")
            await Keywords.click(Forgot.edit, "Edit");
            await Keywords.verifyText(Forgot.myprofilepa, "content-desc", "My Profile", "My Profile");
            await Keywords.verifyElementIsEnabled(Forgot.changePassword, "change Password");
            await Keywords.click(Forgot.changePassword, "change Password");
            await Keywords.verifyText(Forgot.changepasswordScreen, "content-desc", "Change my password", "Change my password");
            await Keywords.verifyElementDisplayed(Forgot.changepasswordpage, "current password");
            await Keywords.verifyElementDisplayed(Forgot.newpass, "New password");
            await Keywords.verifyElementDisplayed(Forgot.repeatpass, "Repeat password");

            await Keywords.verifyElementDisplayed(Forgot.currentHide, "current Hide");
            await Keywords.verifyElementDisplayed(Forgot.newHide, "New password hide ");
            await Keywords.verifyElementDisplayed(Forgot.repeathide, "Repeate password hide");

            await Keywords.click(Forgot.currentHide, "current Hide");
            await Keywords.click(Forgot.newHide, "New password hide ");


            await Keywords.SetValue(Forgot.changepasswordpage, Password);
            await Keywords.SetValue(Forgot.newpass, newPassword);
            await Keywords.SetValue(Forgot.repeatpass, newPassword);

            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
            await Keywords.click(Forgot.savebutton, "Save Button");
            await browser.implicitWait(10000);
           
            await Keywords.click(Forgot.Hambugar, "Hambugar button");
            await browser.implicitWait(10000);
            await Keywords.click(Forgot.myprofile, "My profile Page");
            await browser.implicitWait(10000);
            await Keywords.verifyText(Forgot.myprofilepa, "content-desc", "My Profile", "My Profile")
            await Keywords.click(Forgot.edit, "Edit");
            await Keywords.verifyText(Forgot.myprofilepa, "content-desc", "My Profile", "My Profile");
            await Keywords.verifyElementIsEnabled(Forgot.changePassword, "change Password");
            await Keywords.click(Forgot.changePassword, "change Password");
            await Keywords.verifyText(Forgot.changepasswordScreen, "content-desc", "Change my password", "Change my password");
            await Keywords.verifyElementDisplayed(Forgot.changepasswordpage, "current password");
            await Keywords.verifyElementDisplayed(Forgot.newpass, "New password");
            await Keywords.verifyElementDisplayed(Forgot.repeatpass, "Repeat password");

            await Keywords.verifyElementDisplayed(Forgot.currentHide, "current Hide");
            await Keywords.verifyElementDisplayed(Forgot.newHide, "New password hide ");
            await Keywords.verifyElementDisplayed(Forgot.repeathide, "Repeate password hide");

            await Keywords.click(Forgot.currentHide, "current Hide");
            await Keywords.click(Forgot.newHide, "New password hide ");
    
            await Keywords.SetValue(Forgot.changepasswordpage, newPassword);
            await Keywords.SetValue(Forgot.newpass, Password);
            await Keywords.SetValue(Forgot.repeatpass, Password);

            await Keywords.verifyElementIsEnabled(Forgot.savebutton, "Save Button");
            await Keywords.click(Forgot.savebutton, "Save Button");
            await browser.implicitWait(10000);
            await Keywords.verifyElementDisplayed(Forgot.Hambugar, "Hambugar Button");


        } catch (err) {
            throw new Error(err);
        }


     });



});