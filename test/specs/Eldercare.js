import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { Cancerlocators } from '../page/cancerLocator.js';
import { Elderlocators } from '../page/ElderCareLocator.js';



describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const locator_cancer = new Cancerlocators();
    const Locator_Elder =new Elderlocators();

    const timestamp = new Date();
    const shortDate = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')}`;
    const shortTime = `${timestamp.getHours().toString().padStart(2, '0')}-${timestamp.getMinutes().toString().padStart(2, '0')}`;
    const formattedTimestamp = `${shortDate}_${shortTime}`;

    it('ElderCarehealthcare', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. Elder care
             
            `);

        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
        const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
        await Keywords.verifyText(locator.startnowver, "content-desc", "START NOW", "start now button")
        await Keywords.click(locator.startnowOption, "Start Now Button")
        await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
        await Keywords.verifyElementIsEnabled(locator.loginbutton, "Login button");
        await Keywords.SetValue(locator.userName, process.env.User_name_cancer);
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
           await Keywords.click(Locator_Elder.Eldercare, "Elder care button");
        }
        await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
        await Keywords.click(locator.continuebutton, "Continue Button")
        await browser.pause(1000);
        await Keywords.verifyText(Locator_Elder.healthAss, "content-desc", "Health Assessment", "Health Assessment button")
        await Keywords.click(Locator_Elder.ElderHealthAssessment, "Health Assessment Button")
        await Keywords.verifyText(Locator_Elder.healthAss, "content-desc", "Health Assessment", "Health Assessment button")
        await Keywords.verifyText(Locator_Elder.HealthHistory, "content-desc", "Health History", "Health History button")
        await Keywords.click(Locator_Elder.HealthHistory, "Health History Button")
        await Keywords.verifyText(Locator_Elder.HealthHistory, "content-desc", "Health History", "Health History button")
        await Keywords.click(Locator_Elder.concernDiagnosis, "What is your primary health concern/diagnosis?")
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        // const History = await readData("ElderCare", "Field", "Social History", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.HealthHistoryTextField,History );
        await browser.pause(6000);
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(Locator_Elder.healthPge, "please describe your health history?");
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await browser.pause(6000);
        // const Option = await readData("ElderCare", "Field", "Health History", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.optinVal,Option );
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(Locator_Elder.consume, "Do you consume alcohol?");
        await Keywords.click(Locator_Elder.consumeNo, "No");
        await Keywords.verifyElementDisplayed(locator_cancer.Doyousmokecigarettes, "Do you smoke cigarettes?");
        await Keywords.click(Locator_Elder.consumeNo, "No");
        await Keywords.verifyElementDisplayed(Locator_Elder.Doyouusedrugs, "Do you use drugs?");
        await Keywords.click(Locator_Elder.consumeNo, "No");
        await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
        await Keywords.verifyText(Locator_Elder.physicalAssessment, "content-desc", "Physical assessment and Mobility", "Physical assessment and Mobility option")
        await Keywords.click(Locator_Elder.physicalAssessmentOption, "assessment_action_Physical assessment and Mobility Option");
        await Keywords.verifyText(Locator_Elder.physicalAssessment, "content-desc", "Physical assessment and Mobility", "Physical assessment and Mobility option")
        await Keywords.verifyElementDisplayed(Locator_Elder.Areyouanolderadult, "Are you an older adult?");
        await Keywords.click(Locator_Elder.elderno, "No");
        await Keywords.verifyElementDisplayed(Locator_Elder.Whatisyourmobilitystatus, "What is your mobility status?");
        await Keywords.click(Locator_Elder.indepentent, "Independent");
        await Keywords.verifyElementDisplayed(Locator_Elder.mobilitydevices, "Are you using any mobility devices?");
        await Keywords.click(Locator_Elder.cane, "Cane");
        await Keywords.verifyElementDisplayed(Locator_Elder.describe, "How would you describe your fall risk?");
        await Keywords.click(Locator_Elder.Risk, "Risk");
        await Keywords.verifyElementDisplayed(Locator_Elder.management, "Do you have a fall management plan?");
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await browser.pause(6000);
        // const  PhysicalassessmentandMobility = await readData("ElderCare", "Field", "PhysicalassessmentandMobility", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.HealthHistoryTextField,PhysicalassessmentandMobility );
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next")
        await Keywords.verifyElementDisplayed(Locator_Elder.ability, "How would you describe your ability to transfer?");
        await Keywords.verifyText(Locator_Elder.TransferStatus, "content-desc", "Transfer Status", "Transfer Status option")
        await Keywords.click(Locator_Elder.TransferStatusDropdown, "Transfer Status");
        await Keywords.click(Locator_Elder.OnePerson, "One Person Assist");
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next")
        await Keywords.verifyElementDisplayed(Locator_Elder.HowWould, "How would you describe your ability to transfer?");
        // const  Describe = await readData("ElderCare", "Field", "Describe Ability", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.decribroption,Describe);
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(Locator_Elder.weight, "How would you describe your weight-bearing?")
        await Keywords.verifyText(Locator_Elder.weightDropdown, "content-desc", "Weight Bearing Status", "Weight Bearing Status option")
        await Keywords.click(Locator_Elder.weightDropdownOption, "weight Drop down Option")
        await Keywords.click(Locator_Elder.RtSide, "Rt Side Option");
        await Keywords.verifyElementIsEnabled(Locator_Elder.HealthHistoryNext, "Next Button");
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(Locator_Elder.weightbearing, "How would you describe your weight-bearing?");
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await browser.pause(6000);
        // const  weightbearing = await readData("ElderCare", "Field", "weightbearing", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.decribroption,weightbearing);
        await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
        await Keywords.verifyText(Locator_Elder.SleepandRest, "content-desc", "Sleep and rest", "Sleep and rest option")
        await Keywords.click(Locator_Elder.sleepandrestoption, "Sleep and rest Option");
        await Keywords.verifyText(Locator_Elder.SleepandRest, "content-desc", "Sleep and rest", "Sleep and rest option")
        await Keywords.verifyElementDisplayed(Locator_Elder.Describeyoursleeppatterns, "Describe your sleep patterns")
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await browser.pause(6000);
        // const  SleepandRest = await readData("ElderCare", "Field", "SleepandRest", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.sleepandRestInput,SleepandRest);
        await Keywords.verifyElementIsEnabled(Locator_Elder.HealthHistoryNext, "Next Button");
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(Locator_Elder.sleepoption, "How many hours of sleep do you get per night?");
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await browser.pause(6000);
        // const  SleepandRestVAl = await readData("ElderCare", "Field", "SleepandRest Second Field", "Testdata1");
        // await Keywords.SetValue(Locator_Elder.HowmanyHoursSleep,SleepandRestVAl);
        await Keywords.verifyElementIsEnabled(Locator_Elder.HealthHistoryNext, "Next Button");
        await Keywords.click(Locator_Elder.HealthHistoryNext, "Next");
        await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
        await Keywords.verifyElementDisplayed(Locator_Elder.SleepingProblem, "Would you like to share other comments about your sleep behavior or problem?");
        await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
        await browser.pause(1000);
        // await Keywords.verifyText(Locator_Elder.nutritionanddietary, "content-desc", "Nutrition and Dietary Needs", "Nutrition and Dietary Needs option");
        // await Keywords.click(Locator_Elder.nutritionanddietarytextval, "Nutrition and Dietary Needs")
        // await Keywords.verifyElementDisplayed(Locator_Elder.Whatbestdescribesyourabilitytoeat, "What best describes your ability to eat?");
        // await Keywords.click(Locator_Elder.cane, "Indepentenly");
        // await Keywords.verifyElementDisplayed(Locator_Elder.specialPrecautions, "Do you have any special precautions that need to be followed for");
        // await Keywords.verifyElementDisplayed(Locator_Elder.RiskofChoking, "Risk of Choking");
        // await Keywords.click(Locator_Elder.cane, "Yes Option");
        // await Keywords.verifyElementDisplayed(Locator_Elder.precautions, "Do you have any special precautions that need to be followed for:");
        // await Keywords.verifyElementDisplayed(Locator_Elder.NgFeeds, "NG Feeds");
        // await Keywords.click(Locator_Elder.cane, "Yes OPtion");
        // await Keywords.verifyElementDisplayed(Locator_Elder.specialDiet, "Special Diet");
        // await Keywords.click(Locator_Elder.cane, "Yes OPtion");
        // await Keywords.verifyElementDisplayed(Locator_Elder.FoodAllergies, "Food Allergies/Restrictions");
        // await Keywords.click(Locator_Elder.cane, "Yes Option");
        // await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.click(locator_cancer.submitbutton, "Submit Button");
        // await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
        // await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
        // await browser.pause(1000);

        await browser.implicitWait(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.actionToileting, "Toileting") 
        await Keywords.click(Locator_Elder.actionToileting, "Toileting")
    
        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.toiletingTitle, "Toileting") 
        await Keywords.verifyElementDisplayed(Locator_Elder.toiletingQ1, "What best describes your bladder function?")
        await Keywords.verifyElementDisplayed(Locator_Elder.Independent1, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.Incontinent, "Incontinent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.mildIncontinence, "Mild Incontinence") 
        await Keywords.verifyElementDisplayed(Locator_Elder.staffAssist, "Staff Assist") 
        await Keywords.verifyElementDisplayed(Locator_Elder.catheter, "Catheter") 
        await Keywords.verifyElementDisplayed(Locator_Elder.urostomy, "Urostomy") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.Independent1, "Independent")
    
        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.toiletingQ3, "What best describes your bowel function?")
        await Keywords.verifyElementDisplayed(Locator_Elder.Independent1, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.Incontinent, "Incontinent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.mildIncontinence, "Mild Incontinence") 
        await Keywords.verifyElementDisplayed(Locator_Elder.staffAssist, "Staff Assist") 
        await Keywords.verifyElementDisplayed(Locator_Elder.bowelRoutine, "Bowel Routine") 
        await Keywords.verifyElementDisplayed(Locator_Elder.colostomy, "Colostomy") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.Independent1, "Independent")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.toiletingQ2, "Raised Toilet seats required?") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionYes, "Yes")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNo, "No")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.optionNo, "No")
        await Keywords.verifyElementDisplayed(Locator_Elder.submitButton, "Submit Button")
        await Keywords.click(Locator_Elder.submitButton, "Submit Button")
    
        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouScreen, "Thank You Screen") 
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouDescriptionEC, "Thank you for completing the assessment!") 
        await Keywords.verifyElementDisplayed(Locator_Elder.goHomeButton, "Go Home Button") 
        await Keywords.verifyElementDisplayed(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS") 
        await Keywords.click(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS")
    
        await browser.implicitWait(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.actionGroomingHygiene, "action Grooming Hygiene") 
        await Keywords.click(Locator_Elder.actionGroomingHygiene, "action Grooming Hygiene")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneTitle, "Grooming-Hygiene") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ1, "What best describes your grooming abilities")
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneIndependent, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneSupervision, "Supervision") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneAssistance, "Assistance") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.groomingHygieneIndependent, "Independent")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ6, "What best describes your oral hygiene abilities")
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneIndependent, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneSupervision, "Supervision") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneAssistance, "Assistance") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.groomingHygieneIndependent, "Independent")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ2, "What best describes your dentures state")
        await Keywords.verifyElementDisplayed(Locator_Elder.ownOption, "Own")
        await Keywords.verifyElementDisplayed(Locator_Elder.fullOption, "Full")
        await Keywords.verifyElementDisplayed(Locator_Elder.partialOption, "Partial")
        await Keywords.verifyElementDisplayed(Locator_Elder.noteethOption, "Noteeth")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.partialOption, "Partial")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ3, "What best describes your dressing abilities")
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneIndependent, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneSupervision, "Supervision") 
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneAssistance, "Assistance") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.groomingHygieneIndependent, "Independent")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ4, "What best describes your bathing abilities")
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneIndependent, "Independent") 
        await Keywords.verifyElementDisplayed(Locator_Elder.staffAssist, "Staff Assist") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.groomingHygieneIndependent, "Independent")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.groomingHygieneQ5, "What best describes your skin integrity state")
        await Keywords.verifyElementDisplayed(Locator_Elder.goodOption, "Good")
        await Keywords.verifyElementDisplayed(Locator_Elder.DryOption, "Dry")
        await Keywords.verifyElementDisplayed(Locator_Elder.BrokenOption, "Broken")
        await Keywords.verifyElementDisplayed(Locator_Elder.woundUlcerOption, "Wound/Ulcer")
        await Keywords.verifyElementDisplayed(Locator_Elder.incisionRecentSurgery, "Incision Recent")
        await Keywords.verifyElementDisplayed(Locator_Elder.complexDressingOption, "Complex Dressing")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.BrokenOption, "Broken")
        await Keywords.verifyElementDisplayed(Locator_Elder.submitButton, "Submit Button")
        await Keywords.click(Locator_Elder.submitButton, "Submit Button")
    
        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouScreen, "Thank You Screen") 
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouDescriptionEC, "Thank you for completing the assessment!") 
        await Keywords.verifyElementDisplayed(Locator_Elder.goHomeButton, "Go Home Button") 
        await Keywords.verifyElementDisplayed(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS") 
        await Keywords.click(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS")
        
        await browser.implicitWait(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.actionHomeCare, "Home Care") 
        await Keywords.click(Locator_Elder.actionHomeCare, "Home Care")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.HomeCareQ1, "Do you have home care?") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionYes, "Yes")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNo, "No")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNA, "NA")
        await Keywords.click(Locator_Elder.optionNo, "No")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.HomeCareQ2, "Do you have Government Home Care?") 
        await Keywords.verifyElementDisplayed(Locator_Elder.optionYes, "Yes")
        await Keywords.verifyElementDisplayed(Locator_Elder.optionNo, "No")
        await Keywords.click(Locator_Elder.optionNo, "No")
        await Keywords.verifyElementDisplayed(Locator_Elder.submitButton, "Submit Button")
        await Keywords.click(Locator_Elder.submitButton, "Submit Button")
    
        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouScreen, "Thank You Screen") 
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouDescriptionEC, "Thank you for completing the assessment!") 
        await Keywords.verifyElementDisplayed(Locator_Elder.goHomeButton, "Go Home Button") 
        await Keywords.verifyElementDisplayed(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS") 
        await Keywords.click(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS")
    
        await browser.implicitWait(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategory, "Canadian Problem Category") 
        await Keywords.click(Locator_Elder.canadianProblemCategory, "Canadian Problem Category")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ1, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.fearWorries, "Fear Worries") 
        await Keywords.verifyElementDisplayed(Locator_Elder.sadness, "Sadness") 
        await Keywords.verifyElementDisplayed(Locator_Elder.frustrationAnger, "Frustration Anger") 
        await Keywords.verifyElementDisplayed(Locator_Elder.ChangesinAppearance, "Changes in Appearance") 
        await Keywords.verifyElementDisplayed(Locator_Elder.intimacySexuality, "Intimacy Sexuality") 
        await Keywords.verifyElementDisplayed(Locator_Elder.sadness1, "Sadness") 
        await Keywords.verifyElementDisplayed(Locator_Elder.emotionalComments, "Emotional Comments") 
        const canadianProblemCategorytxt1= await readData("ElderCare", "Field", "emotionalCommentstxtfield1", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield01, canadianProblemCategorytxt1)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Intimacy Sexuality") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ2, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.concentrationMemory, "Concentration/Memory") 
        await Keywords.verifyElementDisplayed(Locator_Elder.sleep, "Sleep") 
        await Keywords.verifyElementDisplayed(Locator_Elder.weight, "weight") 
    
        const canadianProblemCategorytxt2= await readData("ElderCare", "Field", "emotionalCommentstxtfield2", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield02, canadianProblemCategorytxt2)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Next Button") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ3, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.meaningPurpose, "Meaning Purpose") 
        await Keywords.verifyElementDisplayed(Locator_Elder.life, "life") 
        await Keywords.verifyElementDisplayed(Locator_Elder.faith, "faith") 
    
        const canadianProblemCategorytxt3= await readData("ElderCare", "Field", "emotionalCommentstxtfield3", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield3, canadianProblemCategorytxt3)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Next Button") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ4, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.Makingtreatmentdecisions, "Making treatment decisions") 
        await Keywords.verifyElementDisplayed(Locator_Elder.understandingmyillnessandortreatment, "understanding my illness and ortreatment") 
        await Keywords.verifyElementDisplayed(Locator_Elder.talkingwiththehealthcareteam, "talking with the health care team") 
        await Keywords.verifyElementDisplayed(Locator_Elder.Knowingaboutavailableresources, "Knowing about available resources") 
        await Keywords.verifyElementDisplayed(Locator_Elder.informationalComments, "informational Commentsth") 
    
        const canadianProblemCategorytxt4= await readData("ElderCare", "Field", "emotionalCommentstxtfield4", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield04, canadianProblemCategorytxt4)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Next Button") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ5, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.workSchool, "Making treatment decisions") 
        await Keywords.verifyElementDisplayed(Locator_Elder.finance, "understanding my illness and ortreatment") 
        await Keywords.verifyElementDisplayed(Locator_Elder.accommodations, "talking with the health care team") 
        await Keywords.verifyElementDisplayed(Locator_Elder.Gettingtoandfromappointments, "Knowing about available resources") 
        await Keywords.verifyElementDisplayed(Locator_Elder.practicalComments, "informational Commentsth") 
    
        const canadianProblemCategorytxt5= await readData("ElderCare", "Field", "emotionalCommentstxtfield5", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield05, canadianProblemCategorytxt5)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Next Button") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
    
        await Keywords.verifyElementDisplayed(Locator_Elder.canadianProblemCategoryQ6, "Please select what applies to you and add comments if you have any.") 
        await Keywords.verifyElementDisplayed(Locator_Elder.worryaboutfamilyfriends, "Worry About Family Friends") 
        await Keywords.verifyElementDisplayed(Locator_Elder.feelingAlone, "Feeling Alone") 
        await Keywords.verifyElementDisplayed(Locator_Elder.feelingaburdentoothers, "Feeling a burden to others") 
        await Keywords.verifyElementDisplayed(Locator_Elder.socialFinancialComments, "Social Financial Comments") 
    
        const canadianProblemCategorytxt6= await readData("ElderCare", "Field", "emotionalCommentstxtfield6", "Testdata1");
        await Keywords.SetValue(Locator_Elder.emotionalCommentstxtfield06, canadianProblemCategorytxt6)
        await Keywords.verifyElementDisplayed(Locator_Elder.nextButton, "Next Button") 
        await Keywords.click(Locator_Elder.nextButton, "Next Button")
        await Keywords.verifyElementDisplayed(Locator_Elder.submitButton, "Submit Button")
        await Keywords.click(Locator_Elder.submitButton, "Submit Button")
    

        await browser.pause(20000);
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouScreen, "Thank You Screen") 
        await Keywords.verifyElementDisplayed(Locator_Elder.thankyouDescriptionEC, "Thank you for completing the assessment!") 
        await Keywords.verifyElementDisplayed(Locator_Elder.goHomeButton, "Go Home Button") 
        await Keywords.verifyElementDisplayed(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS") 
        await Keywords.click(Locator_Elder.backtoAssessmentButton, "BACK TO ASSESSMENTS") 




    });
});