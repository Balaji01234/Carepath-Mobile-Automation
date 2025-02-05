import { locators } from '../page/locators.js';
import { mygoal_locators } from '../page/mygoalsLocatoe.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const locator_mygoal = new mygoal_locators();

    const timestamp = new Date();
    const shortDate = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')}`;
    const shortTime = `${timestamp.getHours().toString().padStart(2, '0')}-${timestamp.getMinutes().toString().padStart(2, '0')}`;
    const formattedTimestamp = `${shortDate}_${shortTime}`;

    it('Mygoal', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. Mygoal
             
            `);

        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
        const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
        await Keywords.verifyText(locator.startnowver, "content-desc", "START NOW", "start now button")
        await Keywords.click(locator.startnowOption, "Start Now Button")
        await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
        await Keywords.verifyElementIsEnabled(locator.loginScreenpage, "Login button");
        await Keywords.SetValue(locator.userName, process.env.USER_NAME);
        await Keywords.SetValue(locator.password, process.env.PASSWORD);
        await browser.keys('Enter');   
        await Keywords.click(locator.loginScreenpage, "Login Button")
        await Keywords.verifyElementDisplayed(locator.notifiedPopupscreen, "Get notified dialog box");
        await Keywords.click(locator.allowButton, "Allow button");
        await browser.pause(2000);
        await Keywords.verifyElementDisplayed(locator.allowOption, "Allow notification");
        await Keywords.click(locator.allowOption, "Allow notification button");
        console.log('Login process completed successfully.');
        if (await locator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
            await Keywords.click(locator.mentalhealth, "Mental health");
        }

        await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
        await Keywords.click(locator.continuebutton, "Continue Button")
        await browser.pause(1000);
        if (await locator.goalCheck.isDisplayed({ timeout: 45000 })) {
            await Keywords.click(locator.remindMeLater, "Remind me later")
        }
        await Keywords.verifyElementIsEnabled(locator_mygoal.mygoal, "My goal Button");
        await browser.pause(7000);
        await Keywords.verifyText(locator_mygoal.mygoalVal, "content-desc", "My Goals", "verify the My goal option")
        await Keywords.click(locator_mygoal.mygoal, "My Goal");
        await browser.pause(1000);
        await Keywords.verifyElementDisplayed(locator_mygoal.mygoalpage, "My goal page");
        await Keywords.click(locator_mygoal.newgoal, "new Goal");
        await browser.pause(8000);
        await Keywords.verifyElementDisplayed(locator_mygoal.newgoalpage, "New my goal page");
        await browser.pause(8000);
        const whatinput = await readData("Mygoal", "Field", "whatfield", "Testdata1");
        const name = `${whatinput}_${formattedTimestamp}`;
        await Keywords.SetValue(locator_mygoal.whatfield, name);
        await browser.pause(8000);
        const wheninput = await readData("Mygoal", "Field", "whenfield", "Testdata1");
        await Keywords.SetValue(locator_mygoal.whetfield, wheninput);
        await Keywords.click(locator_mygoal.calendar, "calendar");
        await Keywords.verifyElementDisplayed(locator_mygoal.calendarpage, "calendar page");
        await Keywords.click(locator_mygoal.starting, "starting date");
        await Keywords.click(locator_mygoal.ending, "Ending date");
        await Keywords.click(locator_mygoal.savebuttonoption, "save button");
        const whereinput = await readData("Mygoal", "Field", "Wherefield", "Testdata1");
        await Keywords.SetValue(locator_mygoal.where, whereinput);
        await browser.pause(1000);
        const withinput = await readData("Mygoal", "Field", "with", "Testdata1");
        await Keywords.SetValue(locator_mygoal.with, withinput);
        await browser.pause(1000);
        const preventinput = await readData("Mygoal", "Field", "What might prevent me", "Testdata1");
        await Keywords.SetValue(locator_mygoal.prevent, preventinput);
        await browser.pause(1000);
        await Keywords.scrollToElement("accessibility id", "SAVE")
        await Keywords.click(locator_mygoal.saveOp, "save button");
        await browser.pause(8000);
        const savepop = await readData("Mygoal", "Field", "popup", "Testdata1");
        await Keywords.verifyElementDisplayed(locator_mygoal.poupok, "Success!");
        await Keywords.click(locator_mygoal.poupok, "Ok button");
        await Keywords.click(locator_mygoal.month, "Month "); 
        await Keywords.click(locator_mygoal.greaterval, "Feb month");  

        const dataname = '//android.view.View[contains(@content-desc,"goal_open_action")]';
        const elements = await $$(dataname);

    });


    it('assess my mood', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. assess my mood
             
            `);

        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
        const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
        await Keywords.verifyText(locator.startnowver, "content-desc", "START NOW", "start now button")
        await Keywords.click(locator.startnowOption, "Start Now Button")
        await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
        await Keywords.verifyElementIsEnabled(locator.loginScreenpage, "Login button");
        await Keywords.SetValue(locator.userName, process.env.USER_NAME);
        await Keywords.SetValue(locator.password, process.env.PASSWORD);
        await browser.keys('Enter');   
        await Keywords.verifyElementIsEnabled(locator.loginScreenpage, "Login button");
        await Keywords.click(locator.loginScreenpage, "Login Button")
        await Keywords.verifyElementDisplayed(locator.notifiedPopupscreen, "Get notified dialog box");
        await Keywords.click(locator.allowButton, "Allow button");
        await browser.pause(2000);
        await Keywords.verifyElementDisplayed(locator.allowOption, "Allow notification");
        await Keywords.click(locator.allowOption, "Allow notification button");
        console.log('Login process completed successfully.');
        if (await locator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
            await Keywords.click(locator.mentalhealth, "Mental health");
        }
        await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
        await Keywords.click(locator.continuebutton, "Continue Button")
        await browser.pause(1000);
        if (await locator.goalCheck.isDisplayed({ timeout: 45000 })) {
            await Keywords.click(locator.remindMeLater, "Remind me later")
        }
        await Keywords.click(locator_mygoal.accessmymode, "access my mode")
        await Keywords.verifyElementDisplayed(locator_mygoal.moodAssement, "Mood Assesment");
        await Keywords.click(locator_mygoal.joyful, "joy full")
        await Keywords.verifyElementIsEnabled(locator_mygoal.nextbutton, "next button");
        await Keywords.click(locator_mygoal.nextbutton, "next button")
        await browser.pause(2000);
        await Keywords.verifyElementDisplayed(locator_mygoal.moodAssementPage, "Mood Assesment page");
        await Keywords.click(locator_mygoal.lastRadioButton, "10th radio button")
        await browser.pause(2000);
        await Keywords.click(locator_mygoal.submit, "Submit button")
        await Keywords.verifyElementDisplayed(locator_mygoal.myprogress, "My progress page");
        await browser.pause(2000);
       
    });

 
});