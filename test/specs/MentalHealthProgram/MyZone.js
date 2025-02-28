import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
//import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);

    it.only('Lesson', async () => {
            allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. click on lesson.
                8. Check if the Lesson one are done.
            `);
            
            await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
            const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
            await Keywords.verifyText(locator.startnowver,"content-desc","START NOW","start now button")
            await Keywords.click(locator.startnowOption, "Start Now Button")
            await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
            await Keywords.verifyElementIsEnabled(locator.loginScreenpage, "Login button");
            await Keywords.SetValue(locator.userName, process.env.USER_NAME);
            await Keywords.SetValue(locator.password, process.env.PASSWORD);  
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")

            await Keywords.waitForDisplay(locator.getNotifiedDialogBox, 40000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.androidAllowNotification, 40000, "Default Allow notification")
            await Keywords.click(locator.androidAllowNotificationButton, "Default Allow notification button");
            await Keywords.waitForDisplay(locator.allowNotification, 40000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            await Keywords.click(locator.backDefaultNotification, "Back arrow for Default notification button");    
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');

            if (await locator.welcometocarepath.isDisplayed({timeout:20000})){
                await Keywords.click(locator.mentalhealth,"Mental health");
            }
            await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
            await Keywords.click(locator.continuebutton, "Continue Button")

            await Keywords.verifyElementDisplayed(locator.myZonesCard, "My Zones card");
            await Keywords.click(locator.clickMyZonesCard, "My Zones card");
            await Keywords.verifyElementDisplayed(locator.myZonesTitle, "My Zones Title");
            await Keywords.verifyElementDisplayed(locator.sootheMyZones, "Soothe Zone");
            await Keywords.verifyElementDisplayed(locator.writeMyZones, "Write Zone");
            await Keywords.verifyElementDisplayed(locator.thinkMyZones, "Think Zone");
            await Keywords.verifyElementDisplayed(locator.infoIconMyZones, "Information Icon");
            await Keywords.click(locator.infoIconMyZones, "Information Icon")
            await Keywords.verifyElementDisplayed(locator.infoMyZonesDescription, "My Zones card");
            await Keywords.click(locator.closeInfoIcon, "Close Info Icon")

            await Keywords.click(locator.sootheMyZones, "Soothe Tab")
            await Keywords.verifyElementDisplayed(locator.sootheZoneTitle, "Soothe Zone Title");

            await Keywords.click(locator.infoIconSoothe, "Info Icon")
            await Keywords.verifyElementDisplayed(locator.sootheZoneTitleInfo, "Soothe Zone Title");
            await Keywords.verifyElementDisplayed(locator.sootheZoneInfoDescription, "Soothe Zone Title");
            await Keywords.click(locator.closeInfoIcon, "Close Info Icon")

            await Keywords.verifyElementDisplayed(locator.sootheRelaxationTab, "Relaxation Tab");
            await Keywords.verifyElementDisplayed(locator.sootheMomentsOfPleasure, "Moment of Pleasure");
            await Keywords.verifyElementDisplayed(locator.sootheAttentionRestoration, "Attention Restoration Title");
            await Keywords.verifyElementDisplayed(locator.sootheWorkingOnAcceptance, "Working On Acceptance");
            await Keywords.click(locator.sootheRelaxationTab, "Relaxation Tab")

            await Keywords.verifyElementDisplayed(locator.exitRelaxation, "Exit Relaxation");
            await Keywords.verifyElementDisplayed(locator.relaxationTitle, "Relaxation Title");
            await Keywords.verifyElementDisplayed(locator.breathMeditation, "Breath Meditation");

            await Keywords.verifyElementIsDisabled(locator.previousButtonAudio, "Continue Button");
            await Keywords.verifyElementIsEnabled(locator.nextButtonAudio, "Continue Button");
            await Keywords.verifyElementIsEnabled(locator.pauseButtonAudio, "Continue Button");

            await Keywords.verifyElementDisplayed(locator.sootheRelaxationTab, "Relaxation Tab");
            const voiceCompletedPercentage = await readData1("MentalHealth_MyZones, Testdata", "MyZones", "AudioPercentage", "Testdata1");
            await Keywords.verifyText(locator.audiopercentage,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")


        });
    });