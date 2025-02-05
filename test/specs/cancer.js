import { locators } from '../page/locators.js';
import { mygoal_locators } from '../page/mygoalsLocatoe.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { Cancerlocators } from '../page/cancerLocator.js';

describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const locator_mygoal = new mygoal_locators();
    const locator_cancer = new Cancerlocators();
    const timestamp = new Date();
    const shortDate = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')}`;
    const shortTime = `${timestamp.getHours().toString().padStart(2, '0')}-${timestamp.getMinutes().toString().padStart(2, '0')}`;
    const formattedTimestamp = `${shortDate}_${shortTime}`;

    it('cancerhealthcare', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. Cancer
             
            `);

        await browser.implicitWait(10000);
        await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
        const startnow = await readData("Mindzone", "Field", "Start now", "Testdata1");
        await Keywords.verifyText(locator.startnowver, "content-desc", "START NOW", "start now button")
        await Keywords.click(locator.startnowOption, "Start Now Button")
        await Keywords.verifyElementDisplayed(locator.loginScreenpage, "Login screen");
        await Keywords.verifyElementIsEnabled(locator.loginbutton, "Login button");
        await Keywords.SetValue(locator.userName, process.env.User_Elder_cancer);
        await Keywords.SetValue(locator.password, process.env.PASSWORD);
        await browser.keys('Enter');
        await Keywords.verifyElementDisplayed(locator.notifiedPopupscreen, "Get notified dialog box");
        await Keywords.click(locator.allowButton, "Allow button");
        await browser.pause(2000);
        await Keywords.verifyElementDisplayed(locator.allowOption, "Allow notification");
        await Keywords.click(locator.allowOption, "Allow notification button");
        console.log('Login process completed successfully.');
        if (await locator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
            await Keywords.click(locator_cancer.cancer, "Cancer health");
        }
        await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
        await Keywords.click(locator.continuebutton, "Continue Button")
        await browser.pause(1000);
        if (await locator.goalCheck.isDisplayed({ timeout: 45000 })) {
            await Keywords.click(locator.remindMeLater, "Remind me later")
        }

       await Keywords.verifyText(locator_cancer.healthass, "content-desc", "Health Assessment", "Health Assessment option")
       await Keywords.verifyElementDisplayed(locator_cancer.cancerpage, "Health Assessment");
       await Keywords.click(locator_cancer.healthassessment, "Health Assessment Button")
       await Keywords.verifyText(locator_cancer.healthassessmentpage, "content-desc", "Health Assessment", "Health Assessment page")
       await Keywords.verifyText(locator_cancer.CurrentCancerDiagnosis, "content-desc", "Current Cancer Diagnosis", "Current Cancer Diagnosis page")
       await Keywords.click(locator_cancer.CurrentCancerDiagnosisOption, "Current Cancer Diagnosis Button")
       await Keywords.verifyElementDisplayed(locator_cancer.CurrentCancerDiagnosispage, "Current Cancer Diagnosis");
       await Keywords.verifyElementDisplayed(locator_cancer.Whatisyourcancertype, "What is your cancer type?");
       await Keywords.click(locator_cancer.CurrentCancerDiagnosDropdown, "Current Cancer Diagnosis Drop Down");
       await Keywords.verifyElementDisplayed(locator_cancer.Breast, "Current Cancer Diagnosis drop down page"); 
       await Keywords.click(locator_cancer.cnsOption, "CNS Option");
       await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
       await Keywords.click(locator_cancer.submitbutton, "Submit Button");
       await Keywords.verifyElementDisplayed(locator_cancer.thanku, "Thank you page"); 
       await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
       await browser.pause(1000);
       await Keywords.verifyText(locator_cancer.PastCancerDiagnosis, "content-desc", "Past Cancer Diagnosis", "Past Cancer Diagnosis option")
       await Keywords.click(locator_cancer.PastCancerDiagnosisOption, "Past Cancer Diagnosis Option");
       await Keywords.verifyElementDisplayed(locator_cancer.PastCancerPage, "Past Cancer Diagnosis page");
       await Keywords.verifyElementDisplayed(locator_cancer.DoyouhaveanyPastCancerDiagnosis, "Do you have any Past Cancer Diagnosis?");
       await Keywords.click(locator_cancer.No, "No Option");
       await Keywords.verifyText(locator_cancer.PastCancerDiagnosis, "content-desc", "Past Cancer Diagnosis", "Past Cancer Diagnosis option")
       await Keywords.verifyElementDisplayed(locator_cancer.PastCancerDiagnosis, "Past Cancer Diagnosis");
       await Keywords.click(locator_cancer.PastCancerDiagnosisOption, "Past Cancer Diagnosis Option");
       await Keywords.verifyElementDisplayed(locator_cancer.PastCancerPage, "Past Cancer Diagnosis page");
       await Keywords.verifyElementDisplayed(locator_cancer.DoyouhaveanyPastCancerDiagnosis, "Do you have any Past Cancer Diagnosis?");
       await Keywords.click(locator_cancer.Yes, "Yes Option");
       await Keywords.verifyElementDisplayed(locator_cancer.DoyouhaveanyPastCancerDiagnosis, "Do you have any Past Cancer Diagnosis?");
       await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
       await Keywords.click(locator_cancer.PleasespecifyDropdown, "Please specify Drop down");
       await Keywords.click(locator_cancer.cnsOption, "CNS Option");
       await Keywords.verifyElementDisplayed(locator_cancer.CancerDiagnosisDetails, "Cancer Diagnosis Details");
       await Keywords.click(locator_cancer.CancerDiagnosisDetailspage, "Cancer Diagnosis Details");
       await Keywords.verifyElementDisplayed(locator_cancer.AcousticNeuroma, "Acoustic Neuroma");
       await Keywords.click(locator_cancer.AcousticNeuroma, "Acoustic Neuroma");
       await Keywords.click(locator_cancer.SAVE, "SAVE button");
       await Keywords.click(locator_cancer.edit, "EDIT button");
       await Keywords.click(locator_cancer.delecte, "Delete button");
       await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
       await Keywords.click(locator_cancer.submitbutton, "Submit Button");
       await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
       await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
       await browser.pause(1000);
    //    await Keywords.click(locator_cancer.SocialHistory, "Social History option");
    //    await Keywords.verifyText(locator_cancer.socialHistorypage, "content-desc", "Social History", "Social History page option")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyouhaveafamilyhistoryofcancer, "Do you have a family history of cancer");
    //    await Keywords.click(locator_cancer.No, "No Option");
    //    await Keywords.verifyText(locator_cancer.SocialHistory, "content-desc", "Social History", "Social History option")
    //    await Keywords.click(locator_cancer.SocialHistory, "Social History option");
    //    await Keywords.verifyText(locator_cancer.socialHistorypage, "content-desc", "Social History", "Social History page option")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyouhaveafamilyhistoryofcancer, "Do you have a family history of cancer");
    //    await Keywords.click(locator_cancer.Yes, "Yes Option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyouconsumealcohol, "Do you consume alcohol?");
    //    await Keywords.click(locator_cancer.No, "No Option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyousmokecigarettes, "Do you consume alcohol?");
    //    await Keywords.click(locator_cancer.No, "No Option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyouuserecreationaldrugs, "Do you consume alcohol?");
    //    await Keywords.click(locator_cancer.No, "No Option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.SocialHistory, "Describe your social history");
    //    const SocialHistory = await readData("Cancer", "Field", "Social History", "Testdata1");
    //    await Keywords.SetValue(locator.SocialHistoryInput, SocialHistory);
    //    await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.click(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
    //    await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
       await browser.pause(1000);
       await Keywords.verifyText(locator_cancer.allergies, "content-desc", "Allergies", "Allergies option")
       await Keywords.click(locator_cancer.allergies, "Allergies option");
       await Keywords.verifyElementDisplayed(locator_cancer.Doyouhaveanyallergies, "Do you have any allergies?");
       await Keywords.click(locator_cancer.No, "No Option");
       await Keywords.verifyText(locator_cancer.allergies, "content-desc", "Allergies", "Allergies option")
    //    await Keywords.click(locator_cancer.allergies, "Allergies option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyouhaveanyallergies, "Do you have any allergies?");
    //    await Keywords.click(locator_cancer.Yes, "Yes Option");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Allergytype, "Allergy type");
    //    await Keywords.click(locator_cancer.AllergytypeDropDown, "Allergy type drop down");
    //    await Keywords.verifyElementDisplayed(locator_cancer.AllergytypeDropDownpage, "Allergy type drop down page");
    //    await browser.pause(1000);
    //    await Keywords.click(locator_cancer.Environmental, "Environmental");
    //    await Keywords.verifyElementDisplayed(locator_cancer.Pleasespecify, "Please specify");
    //    const Allergytype = await readData("Allergytype", "Field", "Social History", "Testdata1");
    //    await Keywords.SetValue(locator.AllergytypeInputField, Allergytype);
    //    await Keywords.click(locator_cancer.SAVE, "SAVE button");
    //    await Keywords.click(locator_cancer.edit, "EDIT button");
    //    await Keywords.click(locator_cancer.delecte, "Delete button");
    //    await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.click(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
    //    await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
    //    await browser.pause(1000);
    //    await Keywords.verifyText(locator_cancer.ComorbiditiesandImpactonCancerTreatment, "content-desc", "Comorbidities and Impact on Cancer Treatment", "Comorbidities and Impact on Cancer Treatment option")
    //    await Keywords.click(locator_cancer.ComorbiditiesandImpactonCancerTreatment, "Comorbidities and Impact on Cancer Treatment");
    //    await Keywords.verifyText(locator_cancer.ComorbiditiesandImpactonCancerTreatmentPage, "content-desc", "Comorbidities and Impact on Cancer Treatment", "Comorbidities and Impact on Cancer Treatment page option")
    //    await Keywords.verifyElementDisplayed(locator_cancer.ComorbiditiesandImpactonCancerTreatmentque, "Any other health history you would like to provide to your Carepath clinician?");
    //    await Keywords.verifyElementDisplayed(locator_cancer.ComorbiditiesandImpactoncancertreatment, "Comorbidities and Impact on cancer treatment");
    //    const comorbridities = await readData("Cancer", "Field", "ComorbiditiesandImpactoncancertreatment", "Testdata1");
    //    await browser.pause(1000);
    //    await Keywords.SetValue(locator_cancer.ComorbiditiesandImpactoncancertreatmentInput,comorbridities);
    //    await Keywords.click(locator_cancer.SAVE, "SAVE button");
    //    await Keywords.click(locator_cancer.edit, "EDIT button");
    //    await Keywords.click(locator_cancer.delecte, "Delete button");
    //    await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.click(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
    //    await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
       await browser.pause(1000);
       await Keywords.verifyText(locator_cancer.UseofIntegrativeTherapies, "content-desc", "Use of Integrative Therapies", "Use of Integrative Therapies option")
       await Keywords.click(locator_cancer.UseofIntegrativeTherapies, "Use of Integrative Therapies option");
       await Keywords.verifyText(locator_cancer.UseofIntegrativeTherapiesPage, "content-desc", "Use of Integrative Therapies", "Use of Integrative Therapies")
       await Keywords.verifyElementDisplayed(locator_cancer.UseofIntegrativeTherapiesDrop, "Integrative Therapies");
       await Keywords.click(locator_cancer.UseofIntegrativeTherapiesDropDown, "Use of Integrative Therapies ");
       await Keywords.click(locator_cancer.Meditation, "Meditation Option");
       await Keywords.click(locator_cancer.SAVESELECTION, "SAVE SELECTION Option");
       await Keywords.click(locator_cancer.edit, "EDIT button");
       await Keywords.click(locator_cancer.deletemeditation, "Delete button");
       await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
       await Keywords.click(locator_cancer.submitbutton, "Submit Button");
       await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
       await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
       await browser.pause(1000);
       await Keywords.scrollToElement("accessibility id","assessment_action_Nutrition")
       await Keywords.verifyElementDisplayed(locator_cancer.Nutrition, "Nutrition");
       await Keywords.click(locator_cancer.Nutrition, "Nutrition Option");
       await Keywords.verifyText(locator_cancer.Nutritionpage, "content-desc", "Nutrition", "Nutrition")
       await Keywords.verifyElementDisplayed(locator_cancer.Doyoufollowaspecificdiet, "Do you follow a specific diet?");
       await Keywords.click(locator_cancer.No, "No Option");
       await browser.pause(1000);
    //    await Keywords.scrollToElement("accessibility id","assessment_action_Nutrition")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Nutrition, "Nutrition");
    //    await Keywords.click(locator_cancer.Nutrition, "Nutrition Option");
    //    await Keywords.verifyText(locator_cancer.Nutritionpage, "content-desc", "Nutrition", "Nutrition")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyoufollowaspecificdiet, "Do you follow a specific diet?");
    //    await Keywords.click(locator_cancer.Yes, "Yes Option");
    //    await Keywords.verifyText(locator_cancer.Doyoufollowaspecificdietget, "content-desc", "Nutrition", "Nutrition")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Doyoufollowaspecificdiet, "Do you follow a specific diet?");
    //    await Keywords.SetValue(locator_cancer.NutritionInputField, process.env.Nutrition);
    //    await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.click(locator_cancer.submitbutton, "Submit Button");
    //    await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
    //    await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");
    //    await browser.pause(1000);
       await Keywords.scrollToElement("accessibility id","Cancer Treatments")
       await Keywords.verifyElementDisplayed(locator_cancer.CancerTreatments, "Cancer Treatments");
       await Keywords.click(locator_cancer.CancerTreatments, "Cancer Treatments Option");
       await Keywords.verifyText(locator_cancer.CancerTreatmentspage, "content-desc", "Cancer Treatments", "Cancer Treatments option")
       await Keywords.verifyElementDisplayed(locator_cancer.Areyoucurrentlyreceivinganycancertreatment, "Are you currently receiving any cancer treatment?");
       await Keywords.click(locator_cancer.No, "No Option");
    //    await Keywords.scrollToElement("accessibility id","Cancer Treatments")
    //    await Keywords.verifyElementDisplayed(locator_cancer.CancerTreatments, "Cancer Treatments");
    //    await Keywords.click(locator_cancer.CancerTreatments, "Cancer Treatments Option");
    //    await Keywords.verifyText(locator_cancer.CancerTreatmentspage, "content-desc", "Cancer Treatments", "Cancer Treatments option")
    //    await Keywords.verifyElementDisplayed(locator_cancer.Areyoucurrentlyreceivinganycancertreatment, "Are you currently receiving any cancer treatment?");
    //    await Keywords.click(locator_cancer.Yes, "Yes Option");
    //    await Keywords.verifyText(locator_cancer.cancertext, "content-desc", "Cancer Treatments", "Cancer Treatments option")
    //    await Keywords.verifyElementDisplayed(locator_cancer.treatment, "Please provide information for each treatment:");
    //    await Keywords.click(locator_cancer.Radiation, "Radiation Option");
    //    await Keywords.click(locator_cancer.addnew, "addnew Option");
    //    await Keywords.click(locator_cancer.startdate, "Start date");
    //    await Keywords.click(locator_cancer.startingdatefeb, "Starting date");
    //    await Keywords.click(locator_cancer.ok, "Ok button");
    //    await Keywords.click(locator_cancer.enddate, "End date button");
    //    await Keywords.click(locator_cancer.startingdatefeb, "end date");
    //    await Keywords.click(locator_cancer.ok, "Ok button");
    //    await Keywords.verifyText(locator_cancer.chemotherapytext, "content-desc", "Chemotherapy", "Chemotherapy option");
    //    await Keywords.click(locator_cancer.Chemotherapy, "Chemotherapy");
    //    await Keywords.click(locator_cancer.addnew, "addnew Option");
    //    await Keywords.click(locator_cancer.startdate, "Start date");
    //    await Keywords.click(locator_cancer.startingdatefeb, "Starting date");
    //    await Keywords.click(locator_cancer.ok, "Ok button");
    //    await Keywords.click(locator_cancer.enddate, "End date button");
    //    await Keywords.click(locator_cancer.startingdatefeb, "end date");
    //    await Keywords.click(locator_cancer.ok, "Ok button");
       await Keywords.scrollToElement("accessibility id","Cancer Treatments")
       await Keywords.verifyElementDisplayed(locator_cancer.PhysicalActivities, "Physical Activities");
       await Keywords.verifyText(locator_cancer.PhysicalActivitiesPage, "content-desc", "Physical Activities", "Physical Activities option");
       await Keywords.click(locator_cancer.PhysicalActivitiesopt, "PhysicalActivitiesoption button");
       await Keywords.verifyElementDisplayed(locator_cancer.PhysicalActivitiesoption, "Physical Activities tex");
       await Keywords.click(locator_cancer.PhysicalActivitiesdropdown, "PhysicalActivitiesdropdown button");
       await Keywords.click(locator_cancer.bike, "Biking button");
       await Keywords.click(locator_cancer.SAVESELECTION, "SAVE SELECTION Option");
       await Keywords.click(locator_cancer.edit, "EDIT button");
       await Keywords.click(locator_cancer.deleteforphysical, "Delete button");
       await Keywords.verifyElementIsEnabled(locator_cancer.submitbutton, "Submit Button");
       await Keywords.click(locator_cancer.submitbutton, "Submit Button");
       await Keywords.verifyText(locator_cancer.thanku, "content-desc", "Thank you!", "Thank you! option")
       await Keywords.click(locator_cancer.BackToAssessment, "Back To Assessment Option");




    });
});
