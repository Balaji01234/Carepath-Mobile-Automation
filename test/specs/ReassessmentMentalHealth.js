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
        if (await lessonLocator.goalCheck.isDisplayed({ timeout: 45000 })) {
            await Keywords.click(lessonLocator.remindMeLater, "Remind me later")
        }
         await Keywords.verifyText(MentalHealthReAss.Reminders, "content-desc", "Reminders", "Reminders")
         await Keywords.click(MentalHealthReAss.GAD7option, "GAD7 action");
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pageone, "1/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pagetwo, "2/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pagethree, "3/8");
        //  await Keywords.verifyText(MentalHealthReAss.pagethree, "content-desc", "3/8", "3/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pagefour, "4/8");
        //  await Keywords.verifyText(MentalHealthReAss.pagefour, "content-desc", "4/8", "4/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pagefive, "5/8");
        //  await Keywords.verifyText(MentalHealthReAss.pagefive, "content-desc", "5/8", "5/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pagesix, "6/8");
        //  await Keywords.verifyText(MentalHealthReAss.pagesix, "content-desc", "6/8", "6/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");


         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pageseven, "7/8");
        //  await Keywords.verifyText(MentalHealthReAss.pageseven, "content-desc", "7/8", "7/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");

         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.GAD7Page, "content-desc", "GAD7", "GAD7");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.GeneralAnxietyDisorder, "General Anxiety Disorder");
         await Keywords.verifyText(MentalHealthReAss.overlast, "content-desc", "Over the last two weeks how often have you been bothered by following problem?", "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not Difficult at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "Somewhat Difficult");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "Very Difficult");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Extremely Difficult");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.pageeight, "8/8");
        //  await Keywords.verifyText(MentalHealthReAss.pageeight, "content-desc", "8/8", "8/8");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(1000);
        //  await Keywords.click(MentalHealthReAss.saveSad, "SAVE GAD-7");
         await MentalHealthReAss.saveSad.click();
         await browser.pause(1000);
         await Keywords.verifyText(MentalHealthReAss.reviewoption, "content-desc", "Review", "Review");
         const gad7value1 = await readData("Reassessment", "Field", "GAD71", "Testdata1");
         const gadsval = await Keywords.getattribute(MentalHealthReAss.GAD7INputone,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval), "not at all Field");

         const gad7value2 = await readData("Reassessment", "Field", "GAD72", "Testdata1");
         const gadsval1 = await Keywords.getattribute(MentalHealthReAss.GAD7INputwo,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval1), "Not at all Field");

         const gad7value3 = await readData("Reassessment", "Field", "GAD73", "Testdata1");
         const gadsval2 = await Keywords.getattribute(MentalHealthReAss.GAD7INputhree,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval2), "not at all Field");

         const gad7value4 = await readData("Reassessment", "Field", "GAD74", "Testdata1");
         const gadsval3 = await Keywords.getattribute(MentalHealthReAss.GAD7Inputfour,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval3), "not at all Field");

         const gad7value5 = await readData("Reassessment", "Field", "GAD75", "Testdata1");
         const gadsval5= await Keywords.getattribute(MentalHealthReAss.GAD7Inputfive,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval5), "not at all Field");

         const gad7value6 = await readData("Reassessment", "Field", "GAD76", "Testdata1");
         const gadsval6= await Keywords.getattribute(MentalHealthReAss.GAD7Inputsix,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval6), "not at all Field");

         const gad7value7 = await readData("Reassessment", "Field", "GAD77", "Testdata1");
         const gadsval7= await Keywords.getattribute(MentalHealthReAss.GAD7Inputseven,"content-desc","Not at all")
         await Keywords.verifyElementDisplayed(onboardLocator.personalInformation(gadsval7), "not at all Field");

        await browser.pause(7000);
        await Keywords.verifyText(MentalHealthReAss.Reminders, "content-desc", "Reminders", "Reminders");
        await Keywords.scrollToElement("accessibility id","Your clinician has requested a PHQ-9 assessment");
        await Keywords.click(MentalHealthReAss.phq9, " PHQ9 Button");
        //  for (let i = 1; i <= 10; i++) {
        //     await Keywords.verifyElementDisplayed(onboardLocator.questionNumber(i), `Page No: ${i}/10`)
        //     await Keywords.verifyElementDisplayed(onboardLocator.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
        //     await browser.pause(900);
        //     await Keywords.verifyText(onboardLocator.overLastWeekBotherText, "content-desc", haveYouBotherText, "Have you Bother")
        //     await Keywords.verifyElementDisplayed(onboardLocator.getPhqLocator(i), `PHQ9 - Question ${i}`)
        //     if (i !== 10) {
        //         await Keywords.verifyElementIsEnabled(onboardLocator.severalDays, " Several Days Option");
        //         await Keywords.click(onboardLocator.severalDays, " Several Days Option ")
        //     } else {
        //         await Keywords.verifyElementIsEnabled(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ");
        //         await Keywords.click(onboardLocator.somewhatDifficult, " Somewhat Difficult Option ")
        //     }
        // }
        // await Keywords.verifyElementDisplayed(onboardLocator.savePHQ9Button, "Save PHQ9 Button");
        // await Keywords.click(onboardLocator.savePHQ9Button, "Save PHQ9 Button");

        await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
        await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
        await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
        await Keywords.verifyElementDisplayed(MentalHealthReAss.phq91, "1/10");
        await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq92, "2/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq93, "3/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq94, "4/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq95, "5/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq96, "6/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq97, "7/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");

         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq98, "8/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq99, "9/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "SEveral days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "More than half the days");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Nearly every day");
         await Keywords.click(MentalHealthReAss.notatall, "Not at all");
         await browser.pause(7000);
         await Keywords.verifyText(MentalHealthReAss.phq9val, "content-desc", "PHQ9", "PHQ9");
         await Keywords.verifyText(MentalHealthReAss.PatientHealthQuestionnaire, "content-desc", "Patient Health Questionnaire", "Patient Health Questionnaire");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.overthe, "Over the last two weeks how often have you been bothered by following problem?");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.phq910, "10/10");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.notatall, "Not Difficult at all");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.severaldays, "Somewhat Difficult");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.morethan, "Very Difficult");
         await Keywords.verifyElementDisplayed(MentalHealthReAss.nearlyEveryDay, "Extremely Difficult");
         await Keywords.click(MentalHealthReAss.notatall, "Not Difficult at all");
         await browser.pause(7000);
         await Keywords.click(MentalHealthReAss.savephq9, "Save PHQ9");
         await Keywords.verifyText(MentalHealthReAss.reviewoption, "content-desc", "Review", "Review");
         await Keywords.click(MentalHealthReAss.submitphq9, "Submit PHQ9");


        }
        
       

        catch(err){
           
            throw new Error(err);
        }

    });
});