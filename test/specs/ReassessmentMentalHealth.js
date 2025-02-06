import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData, generateRandomNumber, dataSets } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import {MentalHealthReAssessment} from '../page/MentalHealthReassLocator.js';

describe('Carepath Automation', () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const MentalHealthReAss = new MentalHealthReAssessment();

    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    const iterationValue = dataSets(iterations);
    console.log("iterationValue" + iterationValue)

    it('MentalHealth ReAssessment', async () => {
        try{
        allureReporter.addDescription(`Mental health Reassessment !!! `);      
        await driver.implicitWait(18000);

        const userName = await readData("Reassessment", "Field", "Email", `Testdata${1}`);
        const password = await readData("Reassessment", "Field", "Password", `Testdata${1}`);
        
        await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
        await Keywords.click(locator.startNow, "Start Now Button");
        await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
        console.log({ userName, password })
     
        await Keywords.SetValue(locator.userName, userName);
        await Keywords.SetValue(locator.password, password);
        const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
        expect(loginBtnEnable).to.be.true;
        await Keywords.click(locator.loginButton, "Login Button")
         
        await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
        await Keywords.click(locator.allowButton, "Allow button");
        await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
        await Keywords.click(locator.allowNotificationButton, "Allow notification button");
        await Keywords.AllureInfo("LogIn Screen Completed!!!");
        console.log('Login process completed successfully.');
        if (await lessonLocator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
            await Keywords.click(lessonLocator.mentalhealth, "Mental health");
        }

        await Keywords.verifyElementIsEnabled(lessonLocator.continuebutton, "Continue Button");
        await Keywords.click(lessonLocator.continuebutton, "Continue Button")
        await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.Reminders, "content-desc", "Reminders", "Reminders")
         await Keywords.click(MentalHealthReAss.GAD7, "GAD7 action");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.hide, "Hide Screen");
         await Keywords.click(MentalHealthReAss.GAD7option, "GAD7 action");



        }
       

        catch(err){
           
            throw new Error(err);
        }

    });
});