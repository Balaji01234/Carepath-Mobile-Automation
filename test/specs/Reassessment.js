import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { Cancerlocators } from '../page/cancerLocator.js';
import { Elderlocators } from '../page/ElderCareLocator.js';
import {ReAssessmentlocators} from '../page/ReAssessmentLocators.js';


describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const locator_cancer = new Cancerlocators();
    const Locator_Elder =new Elderlocators();
    const Locator_Reassessment =new ReAssessmentlocators();


    const timestamp = new Date();
    const shortDate = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')}`;
    const shortTime = `${timestamp.getHours().toString().padStart(2, '0')}-${timestamp.getMinutes().toString().padStart(2, '0')}`;
    const formattedTimestamp = `${shortDate}_${shortTime}`;

    it('Re Assessment', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. Re Assesment Chromic 
             
            `);

        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
        const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
        await Keywords.verifyText(locator.startnowver, "content-desc", "START NOW", "start now button")
        await Keywords.click(locator.startnowOption, "Start Now Button")
        await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
        await Keywords.verifyElementIsEnabled(locator.loginbutton, "Login button");

        const username = await readData("ReAssessmentSheet", "Field", "user", "Testdata1");
        await Keywords.SetValue(locator.userName, username);
        // await Keywords.SetValue(locator.userName, process.env.User_Re_Assessment);
        await Keywords.SetValue(locator.password, process.env.PASSWORD);
        await browser.keys('Enter');
        await browser.implicitWait(80000);
        await Keywords.verifyElementDisplayed(locator.notifiedPopupscreen, "Get notified dialog box");
        await Keywords.click(locator.allowButton, "Allow button");
        await browser.pause(2000);
        await Keywords.verifyElementDisplayed(locator.allowOption, "Allow notification");
        await Keywords.click(locator.allowOption, "Allow notification button");
        console.log('Login process completed successfully.');

        if (await locator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
           await Keywords.click(Locator_Reassessment.chromicField, "Elder care button");
        }
        await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
        await Keywords.click(locator.continuebutton, "Continue Button")
        await browser.pause(3000);
        await Keywords.verifyText(Locator_Reassessment.Reassementpage, "content-desc", "New assessment request", "New assessment request")
        await Keywords.verifyText(Locator_Reassessment.ReassementpageCount, "content-desc", "3", "3")
        await Keywords.scrollToElement("accessibility id","Reminders")
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Reminders, "Reminders");
        await Keywords.click(Locator_Reassessment.CurrentMedicationsKabaMenu, "kabab menu Button")
        await Keywords.verifyElementDisplayed(Locator_Reassessment.hideOption, "Hide Option");
        await Keywords.click(Locator_Reassessment.firtOPtion, "Your clinician has requested");
        await Keywords.verifyText(Locator_Reassessment.CurrentMedications, "content-desc", "Current Medications", "Current Medications")
        await Keywords.verifyElementDisplayed(Locator_Reassessment.currentMedition, "Please provide your current medications");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.MedicationName, "Medication Name");
        // const MedicationName = await readData("ReAssessmentSheet", "Field", "MedicationName", "Testdata1");
        // await Keywords.SetValue(Locator_Reassessment.MedicationNameField,MedicationName );
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.save, "Save button");
        await Keywords.click(Locator_Reassessment.save, "Save button");
        // await Keywords.click(Locator_Reassessment.editbutton, "Edit button");
        // await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        // await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
        // await browser.pause(1000);
        await Keywords.click(Locator_Reassessment.backaction, "Back Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.closeaction, "Close action");
        await Keywords.click(Locator_Reassessment.yescancle, "yes Button");
        await browser.pause(1000);
        await Keywords.click(Locator_Reassessment.hometab, "Home Button");
        await Keywords.scrollToElement("accessibility id","Reminders");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Reminders, "Reminders");
        await Keywords.click(Locator_Reassessment.esasAssessmentOption, "kabab menu Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.hideOption, "Hide Option");
        await Keywords.click(Locator_Reassessment.canadian, "Your clinician has requested a Canadian Problem Category assessment");
        await Keywords.verifyText(Locator_Reassessment.canadianPage, "content-desc", "Emotional", "Emotiona") 
        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "canadian Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.FearsWorries, "FearsWorries");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Sadness, "Sadness");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.FrustrationAnger, "FrustrationAnger");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.ChangesinAppearance, "Changesin Appearance");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.IntimacySexuality, "IntimacySexuality");
        await Keywords.click(Locator_Reassessment.firstoptiocn, "FearsWorries Button");
        await browser.pause(2000);
        const Emotionalval = await readData("ReAssessmentSheet", "Field", "Emotional", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.EmotionalTextField,Emotionalval);
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.NextOption, "next Button");
        await Keywords.click(Locator_Reassessment.NextOption, "next Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "canadian Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.ConcentrationMemory, "Concentration Memory Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.sleep, "Sleep Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Weight, "Weight Page");
        await Keywords.click(Locator_Reassessment.firstval, "Concentration Memory Button");
        await browser.pause(2000);
        const physical = await readData("ReAssessmentSheet", "Field", "Physical Comments", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.physicalinput,physical );
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.NextOption, "next Button");
        await Keywords.click(Locator_Reassessment.NextOption, "next Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "canadian Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.MeaningPurpose, "Meaning Purpose");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.life, "life");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Faith, "Faith");
        await Keywords.click(Locator_Reassessment.meaning, "meaning Button");
        await browser.pause(2000);
        const SpiritualComments = await readData("ReAssessmentSheet", "Field", "Spiritual Comments", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.Category,SpiritualComments );
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.NextOption, "next Button");
        await Keywords.click(Locator_Reassessment.NextOption, "next Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "canadian Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Makingtreatmentdecisions, "Making treatment decisions");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.illness, "Understanding my illness and/or treatment");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.taking, "Talking with the health care team");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.available, "Knowing about available resources");
        await Keywords.click(Locator_Reassessment.makingTreatement, "Making treatment decisions");
        await browser.pause(2000);
        const InformationalComments = await readData("ReAssessmentSheet", "Field", "Informational Comments", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.makingTreatement,InformationalComments );
        await Keywords.click(Locator_Reassessment.NextOption, "next Button");

        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "canadian Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.work, "work Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Finance, "Finance");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.Accommodations, "Accommodations");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.getting, "Getting to and from appointments");
        await Keywords.click(Locator_Reassessment.firstoptiocn, "Work/School Button");
        await browser.pause(2000);
        const PracticalComments = await readData("ReAssessmentSheet", "Field", "Practical Comments", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.workInput,PracticalComments );
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.NextOption, "next Button");
        await Keywords.click(Locator_Reassessment.NextOption, "next Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.canadianPages, "Social/Financial Page");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.worry, "Worry about family/friends");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.FeelingAlone, "Feeling Alone");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.feelingburden, "Feeling a burden to others");
        await Keywords.click(Locator_Reassessment.firstoptiocn, "Worry about family/friends");
        await browser.pause(2000);
        const Social = await readData("ReAssessmentSheet", "Field", "Financial Comments", "Testdata1");
        await Keywords.SetValue(Locator_Reassessment.socialInput,Social );
        // await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        // await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");


        await Keywords.verifyText(Locator_Reassessment.esasAssessment, "content-desc", "Your clinician has requested a ESAS-R assessment", "Your clinician has requested a ESAS-R assessment")
        await Keywords.click(Locator_Reassessment.esasAssessmentOption, "kabab menu Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.hideOption, "Hide Option");
        await Keywords.click(Locator_Reassessment.firtOPtion, "Your clinician has requested a ESAS-R assessment");
        await Keywords.verifyText(Locator_Reassessment.esarpage, "content-desc", "ESAS-r", "ESAS-r")
        // await Keywords.verifyElementDisplayed(Locator_Reassessment.esarpageval, "Esar page");
        await Keywords.verifyElementIsEnabled(Locator_Reassessment.startstatement, "Start statement button");
        await Keywords.click(Locator_Reassessment.startstatement, "Start statement Button");
        await Keywords.verifyElementDisplayed(Locator_Reassessment.pain, "pain Option");
       
        
    });

    afterEach(async () => {

        // const appPackage = 'com.carepath.app.dev';
        // const appActivity = 'com.carepath.MainActivity';
        // await browser.terminateApp(appPackage);
        // console.log('App terminated successfully.');
        // await browser.startActivity(appPackage, appActivity);
        // console.log('App relaunched successfully.');
    });



});