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

    it('Elder Care ReAssessment', async () => {
        try{
        allureReporter.addDescription(`Mental health Reassessment !!! `);      
        await driver.implicitWait(18000);

        const userName = await readData("Reassessment", "Field", "EmailField", `Testdata${1}`);
        const password = await readData("Reassessment", "Field", "Password", `Testdata${1}`);
        const EmotionalCommentsfield = await readData("Reassessment", "Field", "Emotional Comments", `Testdata${1}`);
        const physicalCommentsfield = await readData("Reassessment", "Field", "Physical", `Testdata${1}`);
        const spiritualinputfield = await readData("Reassessment", "Field", "spiritualinput", `Testdata${1}`);
        const informationalnputfield = await readData("Reassessment", "Field", "Informational Comments", `Testdata${1}`);
        const practicallnputfield = await readData("Reassessment", "Field", "Practical Comments", `Testdata${1}`);
        const sociallnputfield = await readData("Reassessment", "Field", "socialpage", `Testdata${1}`);


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
            await Keywords.verifyElementDisplayed(MentalHealthReAss.eldercare, "Elder care Screen");
            await Keywords.click(MentalHealthReAss.eldercare, "Eldercare Button")
        }
        await Keywords.verifyElementIsEnabled(lessonLocator.continuebutton, "Continue Button");
        await Keywords.click(lessonLocator.continuebutton, "Continue Button")
        await browser.pause(7000);
        if (await lessonLocator.goalCheck.isDisplayed({ timeout: 45000 })) {
            await Keywords.click(lessonLocator.remindMeLater, "Remind me later");
        }
        await Keywords.scrollToElement("accessibility id","Reminders");
         await Keywords.verifyText(MentalHealthReAss.Reminders, "content-desc", "Reminders", "Reminders");
        
         await Keywords.verifyElementDisplayed(MentalHealthReAss.Newassessmentrequest, "New assessment request");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.value, "1");
         await Keywords.click(MentalHealthReAss.got, "Your clinician has requested a Canadian Problem Category assessment option");
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.hide, "Hide Button");
         await Keywords.click(MentalHealthReAss.canadian, "Your clinician has requested a Canadian Problem Category assessment");
         await Keywords.verifyText(MentalHealthReAss.emotional, "content-desc", "Emotional", "Emotional");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.fearopti, "Fear/Worries");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sadness, "sadness");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.anger, "Frustration/Anger");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.changes, "Changes in Appearance");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.intimecy, "Intimacy/Sexuality");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sadnessopt, "Intimacy/Sexuality");
         await Keywords.click(MentalHealthReAss.fearopti, "Fear/Worries");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.EmotionalComments, "Emotional Comments");
         await Keywords.SetValue(MentalHealthReAss.EmotionalCommentsinput, EmotionalCommentsfield);
         await Keywords.scrollToElement("accessibility id","NEXT");
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.next, "Next Button");
         await Keywords.click(MentalHealthReAss.next, "Next Button");
         await Keywords.verifyText(MentalHealthReAss.physical, "content-desc", "Physical", "Physical");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.Memory, "Concentration/Memory");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sleep, "sleep");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.weight, "weight");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.physicalpage, "Physical Comments");
         await Keywords.click(MentalHealthReAss.Memory, "Concentration/Memory");
         await Keywords.SetValue(MentalHealthReAss.physicalinput, physicalCommentsfield);
         await Keywords.scrollToElement("accessibility id","NEXT");
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.next, "Next Button");
         await Keywords.click(MentalHealthReAss.next, "Next Button");
         await Keywords.verifyText(MentalHealthReAss.spiritual, "content-desc", "Spiritual", "Spiritual");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.purpose, "Meaning/Purpose");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.life, "Life");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.faith, "faith");
         await Keywords.click(MentalHealthReAss.purpose, "Meaning/Purpose Button");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.spiritualpage, "Spiritual Comments");
         await Keywords.SetValue(MentalHealthReAss.spiritualinput,spiritualinputfield);
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.next, "Next Button");
         await Keywords.click(MentalHealthReAss.next, "Next Button");
         await Keywords.verifyText(MentalHealthReAss.informational, "content-desc", "Informational", "Informational");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.fearopti, "Making treatment decisions");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sadness, "Understanding my illness and/or treatment");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.anger, "Talking with the health care team");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.changes, "Knowing about available resources");
         await Keywords.click(MentalHealthReAss.fearopti, "Making treatment decisions");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.informationalpage, "Informational Comments");
         await Keywords.SetValue(MentalHealthReAss.informationalinput,informationalnputfield);
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.next, "Next Button");
         await Keywords.click(MentalHealthReAss.next, "Next Button");
         await Keywords.verifyText(MentalHealthReAss.practical, "content-desc", "Practical", "Practical");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.fearopti, "Work/School");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sadness, "Finance");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.anger, "Accommodations");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.changes, "Getting to and from appointments");
         await Keywords.click(MentalHealthReAss.fearopti, "Work/School");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.practicalfiled, "Practical Comments");
         await Keywords.SetValue(MentalHealthReAss.practicalinput,practicallnputfield);
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.next, "Next Button");
         await Keywords.click(MentalHealthReAss.next, "Next Button");
         await Keywords.verifyText(MentalHealthReAss.social, "content-desc", "Social/Financial", "Social/Financial");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.emotionalpage, "Please select what applies to you and add comments if you have any.");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.Memory, "Worry about family/friends");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.sleep, "Feeling Alone");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.weight, "Feeling a burden to others");
         await Keywords.click(MentalHealthReAss.Memory, "Worry about family/friends");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.socialpage, "Social/Financial Comments");
         await Keywords.SetValue(MentalHealthReAss.socialinput,sociallnputfield);
         await Keywords.verifyElementIsEnabled(MentalHealthReAss.submit, "Submit Button");
         await Keywords.click(MentalHealthReAss.submit, "Submit Button");
         await Keywords.verifyText(MentalHealthReAss.thanku, "content-desc", "Thank you!", "Thank you!");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.thankupage, "Thank you page");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.goback, "Go back Button");
         await Keywords.click(MentalHealthReAss.backtoass, "BACK TO ASSESSMENTS");

        }
        catch(err){
           
            throw new Error(err);
        }

    });
});
