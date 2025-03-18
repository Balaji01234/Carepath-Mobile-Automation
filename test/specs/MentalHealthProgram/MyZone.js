import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { getRandomString, writeExcelData, readData, readData1 } from '../../utils/common.js';
//import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation My Zones', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);

    const timeout = process.env.DISPLAY_TIMEOUT
    const testCases = getFilteredTests("forgotPassword", "ForgotPassword-Negative", "ForgotPassword");
    let testName = '';

    it.only('MyZones_MentalHealth', async () => {
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
            await Keywords.verifyElementDisplayed(locator.infoMyZonesDescription, "If you worry a lot, schedule worry time. Choose a time of day that you want to devote to worrying.");
            await Keywords.click(locator.closeInfoIcon, "Close Info Icon")

            // await Keywords.click(locator.sootheMyZones, "Soothe Tab")
            // await Keywords.verifyElementDisplayed(locator.sootheZoneTitle, "Soothe Zone Title");

            // await Keywords.click(locator.infoIconSoothe, "Info Icon")
            // await Keywords.verifyElementDisplayed(locator.sootheZoneTitleInfo, "Soothe Zone Information Icon");
            // await Keywords.verifyElementDisplayed(locator.sootheZoneInfoDescription, "If you want to access Soothe Zone exercises Choose a time of day that you want to devote.");
            // await Keywords.click(locator.closeInfoIcon, "Close Info Icon")

            // await Keywords.verifyElementDisplayed(locator.sootheRelaxationTab, "Relaxation Tab");
            // await Keywords.verifyElementDisplayed(locator.sootheMomentsOfPleasure, "Moment of Pleasure Tab");
            // await Keywords.verifyElementDisplayed(locator.sootheAttentionRestoration, "Attention Restoration Tab");
            // await Keywords.verifyElementDisplayed(locator.sootheWorkingOnAcceptance, "Working On Acceptance Tab");
            // await Keywords.click(locator.sootheRelaxationTab, "Relaxation Tab")

            // await Keywords.verifyElementDisplayed(locator.exitRelaxation, "Exit Relaxation");
            // await Keywords.verifyElementDisplayed(locator.relaxationTitle, "Relaxation Title");
            // await Keywords.verifyElementDisplayed(locator.breathMeditation, "Breath Meditation");

            // await Keywords.verifyElementIsDisabled(locator.previousButtonAudio, "Previous Play Button");
            // await Keywords.verifyElementIsEnabled(locator.nextButtonAudio, "Next Play Button");
            // await Keywords.verifyElementIsEnabled(locator.pauseButtonAudio, "Pause/Play Button");


            // await locator.initialPlayDuration.isDisplayed({timeout: 15*1000})
            // await Keywords.click(locator.pauseButtonAudio, "Click on Pause Button")
            // const voiceCompletedPercentage = await readData("MyZones", "Field", "AudioPercentage_1", "Testdata1");
            // await Keywords.verifyText(locator.voicePlayPercentage5,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")

            //Modify
            //await Keywords.verifyElementDisplayed(locator.initialPlayDuration, "Initial Play Duration");
            //await locator.afterPlayLastDuration.waitForDisplayed({timeout: 15*1000})
            //await locator.afterPlayLastDuration.isDisplayed({timeout: 20*1000})
            //await Keywords.waitForDisplay(locator.playPercentage(15), "10% Audio Play Completed")
            //await Keywords.click(locator.playPercentage(10), "10% Audio Play Completed")
            //await Keywords.verifyElementDisplayed(locator.playPercentage(15), "15% Audio Play Completed")
            //await Keywords.verifyElementDisplayed(locator.afterPlay1stDuration, "Initial Play Duration");
            //await Keywords.verifyElementDisplayed(locator.afterPlayLastDuration, "End Play Duration");

            // await Keywords.click(locator.nextButtonAudio, "Next Play Button")
            // await Keywords.verifyElementDisplayed(locator.progressiveMuscleRelaxation, "Progressive Muscle Relaxation");
            // await Keywords.verifyElementDisplayed(locator.initialPlayDuration, "Initial Play Duration");
            // await locator.afterPlayLastDuration.waitForDisplayed({timeout: 960*1000})
            // await Keywords.verifyText(locator.voicePlayPercentage,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")
            // await Keywords.verifyElementDisplayed(locator.afterPlay1stDuration, "Initial Play Duration");
            // await Keywords.verifyElementDisplayed(locator.afterPlayLastDuration, "End Play Duration");

            // await Keywords.click(locator.nextButtonAudio, "Next Play Button")
            // await Keywords.verifyElementDisplayed(locator.miniBodyScanTitle, "Mini Body Scan");
            // await Keywords.verifyElementDisplayed(locator.initialPlayDuration, "Initial Play Duration");
            // await locator.afterPlayLastDuration.waitForDisplayed({timeout: 960*1000})
            // await Keywords.verifyText(locator.voicePlayPercentage,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")
            // await Keywords.verifyElementDisplayed(locator.afterPlay1stDuration, "Initial Play Duration");
            // await Keywords.verifyElementDisplayed(locator.afterPlayLastDuration, "End Play Duration");

            // await Keywords.click(locator.nextButtonAudio, "Next Play Button")
            // await Keywords.verifyElementDisplayed(locator.VisualizationTitle, "Visualization Audio");
            // await Keywords.verifyElementDisplayed(locator.initialPlayDuration, "Initial Play Duration");
            // await locator.afterPlayLastDuration.waitForDisplayed({timeout: 840*1000})
            // await Keywords.verifyText(locator.voicePlayPercentage,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")
            // await Keywords.verifyElementDisplayed(locator.afterPlay1stDuration, "Initial Play Duration");
            // await Keywords.verifyElementDisplayed(locator.afterPlayLastDuration, "End Play Duration");

            // await Keywords.click(locator.nextButtonAudio, "Next Play Button")
            // await Keywords.verifyElementDisplayed(locator.workingWithDifficulty, "Working with difficulty");
            // await Keywords.verifyElementDisplayed(locator.initialPlayDuration, "Initial Play Duration");
            // await locator.afterPlayLastDuration.waitForDisplayed({timeout: 500*1000})
            // await Keywords.verifyText(locator.voicePlayPercentage,"content-desc",voiceCompletedPercentage,"Audio Play Percentage")
            // await Keywords.verifyElementDisplayed(locator.afterPlayLastDuration, "End Play Duration");

            // await Keywords.verifyElementIsDisabled(locator.nextPlayButtonAfter, "Next Play Button");
            // await Keywords.verifyElementIsEnabled(locator.previousPlayButtonAfter, "Previous Play Button");

            // await Keywords.click(locator.exitRelaxation, "Relaxation Tab")
            // await Keywords.verifyElementDisplayed(locator.sootheMomentsOfPleasure, "Moment of Pleasure");
            // await Keywords.click(locator.sootheMomentsOfPleasure, "Moment of Pleasure")

            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureTitle, "Moment of Pleasure");
            // await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP1, "Happiness research suggests that many of us fail to notice pleasurable events and experiences as much as we might.");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP2, "To practice this, begin to look for small moments of pleasure that you encounter day to day.");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP3, "Examples of these include:");
            
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP4, "The sky, cloud formations, The sound of a bird or a child playing");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP5, "Think of a few things like this - Sunset; the moon; the water; birds, that you find pleasurable");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureP6, "This week begin to notice some of these - I noticed the birds when I was walking.");
            // await Keywords.verifyElementIsEnabled(locator.buttonSAVE, "Previous Play Button");

            // await Keywords.click(locator.myEntrieAction, "My Entries")
            // await Keywords.verifyElementDisplayed(locator.exitMomentsofPleasure, "Exit Moments of Pleasure");
            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureTitle, "Moment of Pleasure");
            // await Keywords.verifyElementDisplayed(locator.myEntriesTitle, "My Entries Title");
            // await Keywords.verifyElementDisplayed(locator.emptyEntries, "You don't have any entry. Start writing!");
            // await Keywords.click(locator.newEntrieAction, "My Entries")

            // await Keywords.verifyElementDisplayed(locator.momentsofPleasureTitle, "Moment of Pleasure");
            // await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");
            // await Keywords.click(locator.buttonSAVE, "Save Button")

            // await browser.implicitWait(20000);
            // // CLose Button Should be Clicked
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupTitle, "New entry");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupDescription, "You made some new entry, would you like to save it before exiting?");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupSave, "SAVE AND CLOSE");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupClose, "Close Button");
            // await Keywords.click(locator.newEntriePopupClose, "Close Button")

            // await Keywords.verifyElementDisplayed(locator.sootheAttentionRestoration, "Attention Restoration Tab");
            // await Keywords.click(locator.sootheAttentionRestoration, "Attention Restoration Tab")
            // await Keywords.verifyElementDisplayed(locator.attentionRestorationTitle, "Attention Restoration");
            // await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");

            // await Keywords.verifyElementDisplayed(locator.attentionRestorationP1, "Attention restoration is a healing activity. These are the aimless, often in nature, kinds of things that are restorative.");
            // await Keywords.verifyElementDisplayed(locator.attentionRestorationP2, "Consider things you do now, things you did in the past but no longer do, or things that you would like to do in the future.");
            // await Keywords.verifyElementDisplayed(locator.attentionRestorationP3, "Gazing at clouds, Watching a sunset or sunrise");
            // await Keywords.verifyElementDisplayed(locator.attentionRestorationP4, "Record a few attention restoration activities:");

            // await Keywords.click(locator.myEntrieAction, "My Entries")
            // await Keywords.verifyElementDisplayed(locator.eXITATTENTIONRESTORATION, "Exit Moments of Pleasure");
            // await Keywords.verifyElementDisplayed(locator.attentionRestorationTitle, "Attention Restoration Title");
            // await Keywords.verifyElementDisplayed(locator.myEntriesTitle, "My Entries Title");
            // await Keywords.verifyElementDisplayed(locator.emptyEntries, "You don't have any entry. Start writing!");
            // await Keywords.click(locator.newEntrieAction, "My Entries")

            // await Keywords.verifyElementDisplayed(locator.attentionRestorationTitle, "Attention Restoration Title");
            // await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");
            // await Keywords.click(locator.buttonSAVE, "Save Button")

            // await browser.implicitWait(20000);
            // // CLose Button Should be Clicked
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupTitle, "New entry Popup Title");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupDescription, "You made some new entry, would you like to save it before exiting?");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupSave, "SAVE AND CLOSE");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupClose, "Close Button");
            // await Keywords.click(locator.newEntriePopupClose, "Close Button")

            // await Keywords.verifyElementDisplayed(locator.sootheWorkingOnAcceptance, "Working On Acceptance Tab");
            // await Keywords.click(locator.sootheWorkingOnAcceptance, "Working On Acceptance Tab")
            // await Keywords.verifyElementDisplayed(locator.workingonAcceptanceTitle, "Working On Acceptance Title");
            // await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");
            // await Keywords.verifyElementDisplayed(locator.descriptionTitle, "New Entry");

            // // CLose Button Should be Clicked
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupTitle, "New entry Popup Title");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupDescription, "You made some new entry, would you like to save it before exiting?");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupSave, "SAVE AND CLOSE");
            // await Keywords.verifyElementDisplayed(locator.newEntriePopupClose, "Close Button");
            // await Keywords.click(locator.newEntriePopupClose, "Close Button")
            // await Keywords.click(locator.homeTab, "Home Tab")

            // await Keywords.verifyElementDisplayed(locator.myZonesCard, "My Zones Card");
            // await Keywords.click(locator.clickMyZonesCard, "My Zones Card");
            await Keywords.verifyElementDisplayed(locator.writeMyZones, "Write Zone Tab");
            await Keywords.click(locator.writeMyZones, "Write Zone Tab");

            await Keywords.click(locator.writeZoneInfoIcon, "Information Icon");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes1, "Welcome to your journaling experience!");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes2, "Remember, there is no right or wrong way to keep a journal");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes3, "Commit to writing in your journal on a daily basis.");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes4, "Find a quiet time and place to journal that will allow you to reflect on your day.");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes5, "Don't critique your journal entries, be open to exploring.");
            await Keywords.verifyElementDisplayed(locator.writeZoneInfoDes6, "Let your creativity guide you!");
            await Keywords.click(locator.closeInfoIcon, "Close Information Popup");

            await Keywords.verifyElementDisplayed(locator.writeZoneTitle, "Write Zone Title");
            await Keywords.verifyElementDisplayed(locator.myEntriesTitle, "My Entries Title");
            await Keywords.verifyElementDisplayed(locator.emptyEntries, "You don't have any entry. Start writing!");
            //await Keywords.click(locator.newEntrieAction, "My Entries")
            await Keywords.verifyElementDisplayed(locator.writeZoneTitle, "Write Zone Title");
            await Keywords.verifyElementDisplayed(locator.newEntryTitle, "New Entry");

            await Keywords.click(locator.writeZoneInfoIcon, "Information Icon");
            await Keywords.verifyElementDisplayed(locator.writeZoneTitle, "Write Zone Title");
            await Keywords.verifyElementDisplayed(locator.NewEntryInfoDescription, "If you worry a lot and are comfortable with writing, schedule write time.");
            await Keywords.click(locator.closeInfoIcon, "Close Information Popup");

            await Keywords.verifyElementDisplayed(locator.NewEntryTextField1, "Write Zone New Entry Title");
            //const writeZoneEntryTextField1 = await readData1("Testdata", "MyZonesMental", "writeZoneTitle", `Testdata${1}`);
            const writeZoneEntryTextField1= await readData("MyZones", "Field", "writeZoneTitle", "Testdata1");
            await Keywords.SetValue(locator.NewEntryTextBox1, writeZoneEntryTextField1)

            await Keywords.verifyElementDisplayed(locator.NewEntryTextField2, "Write Zone New Entry Title");
            //const writeZoneEntryTextField2 = await readData1("Testdata", "MyZonesMental", "writeZoneTypeHere", `Testdata${1}`);
            const writeZoneEntryTextField2= await readData("MyZones", "Field", "writeZoneTypeHere", "Testdata1");
            await Keywords.SetValue(locator.NewEntryTextBox2, writeZoneEntryTextField2)

            await Keywords.verifyElementDisplayed(locator.imageUpload, "Image Upload Title");
            const filePath = "./dataFiles/Image.png"
            const fileContent = fs.readFileSync(filePath, { encoding: 'base64' });
        
            // Push file to the Android device
            await driver.pushFile('/sdcard/Download/testFile.pdf', fileContent);
        
            // Interact with the file upload input field
            const uploadButton = await $('~upload_button'); // Replace with the actual locator
            await uploadButton.click();
        
            // Select the file from the Android storage (simulate user selecting file)
            const filePicker = await $('(//android.widget.ImageView[@resource-id="com.google.android.providers.media.module:id/icon_thumbnail"])[1]'); // Replace with actual locator
            await filePicker.setValue('/sdcard/Download/testFile.pdf');
        });
    });