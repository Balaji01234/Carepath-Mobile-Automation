import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Re-Assessment - Cancer Program', async () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("re-assesment", "Cancer - ESAS", "MulipleOptionCancer");
    const testCases2 = getFilteredTests("re-assesment", "Cancer - Canadian", "Canadian");
    const testCases3 = getFilteredTests("re-assesment", "Cancer - Physical", "Physical");
    const testCases4 = getFilteredTests("re-assesment", "Cancer - Medications", "Medications");

    //ESAS-r Assessment
    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", "Email", `${testCases[i].testId}`);
                const password = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", "Password", `${testCases[i].testId}`);
                const thankYouText = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", "ThankYouText", `${testCases[i].testId}`)
                const program = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", "Program", `${testCases[i].testId}`)
                const testDescription = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", "Test Description", `${testCases[i].testId}`)
                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program);
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
                await driver.pause(4000)
                while (true) {
                    await Keywords.scrollToEnd(3);
                    if (await locator.ESASAssesment.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.ESASAssesment, "ESAS-r Assessment")
                await Keywords.click(locator.ESASAssesment, "ESAS-r Assessment");
                await Keywords.verifyElementDisplayed(locator.ESASscreen, "ESAS-r screen");
                await Keywords.verifyElementDisplayed(locator.ESASOverviewText, "ESAS-r text");
                await Keywords.click(Locatoronboard.cancerStartAssessment, "Start Assessment Button")
                for (let j = 1; j <= 9; j++) {
                    const cancerQuestions = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", `CancerAssess_Q${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), `CancerAssess_Q${j}`);
                    await Keywords.click(Locatoronboard.cancerAssessmentQuestions(cancerQuestions), "Option for the questions");
                    const cancerAssessOption = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", `Cancer_${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), `Cancer_${j}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessmentCancer(cancerAssessOption), "Option for the questions");
                    await Keywords.click(Locatoronboard.cancerNext, " Next Button");
                }
                await Keywords.verifyText(Locatoronboard.review, "content-desc", "Review", "Review");
                for (let k = 1; k <= 6; k++) {
                    const cancerQuestions1 = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", `Esasr-Q${k}`, `${testCases[i].testId}`);
                    console.log("Cancer question " + cancerQuestions1)
                    await Keywords.verifyElementDisplayed(Locatoronboard.cancerReviewAssessmentQuestions(cancerQuestions1.toString()), cancerQuestions1);

                    const cancerAssessOption1 = await readData1("re-assesment", "Cancer - ESAS", "MulipleOptionCancer", `Cancer_${k}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.reviewAssessmentCancer(cancerAssessOption1.toString()), cancerAssessOption1);
                }
                await Keywords.click(locator.submitESAS, "submitESAS button")
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
            } catch (err) {
                throw new Error(err);
            }
        });
    }

    //Canadian Problem
    for (let i = 0; i < testCases2.length; i++) {
        it(`${testCases2[i].testId} - ${testCases2[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Email", `${testCases2[i].testId}`);
                const password = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Password", `${testCases2[i].testId}`);
                const thankYouText = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "ThankYouText", `${testCases2[i].testId}`)
                const program = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Program", `${testCases2[i].testId}`)
                const testDescription = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Test Description", `${testCases2[i].testId}`)
                const emotional = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Emotional", `${testCases2[i].testId}`);
                const physical = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Physical", `${testCases2[i].testId}`);
                const spiritual = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Spiritual", `${testCases2[i].testId}`);
                const informational = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Informational", `${testCases2[i].testId}`);
                const Practical = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Practical", `${testCases2[i].testId}`);
                const Social = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Social", `${testCases2[i].testId}`);
                const selectOptionText = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "SelectOptionText", `${testCases2[i].testId}`);
                const emotionalComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Emotional Comments", `${testCases2[i].testId}`);
                const physicalComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Physical Comments", `${testCases2[i].testId}`);
                const spiritualComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Spiritual Comments", `${testCases2[i].testId}`);
                const informationalComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Informational Comments", `${testCases2[i].testId}`);
                const practicalComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Practical Comments", `${testCases2[i].testId}`);
                const socialComments = await readData1("re-assesment", "Cancer - Canadian", "Canadian", "Social Comments", `${testCases2[i].testId}`);

                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program);
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
                await driver.pause(4000)
                while (true) {
                    await Keywords.scrollToEnd(3);
                    if (await locator.canadianProblemCategory.isDisplayed({ timeout: 45000 })) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.canadianProblemCategory, "Canadian Problem Category");
                await Keywords.click(locator.canadianProblemCategory, "Canadian Problem Category");
                await Keywords.verifyElementDisplayed(locator.emotionalScreen, "Emotional Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(emotional), emotional);
                await Keywords.click(locator.accessibilityLocator(emotional), emotional)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Emotional'), 'Emotional');
                await Keywords.SetValue(locator.emotionalCommentsField, emotionalComments);
                await Keywords.verifyElementIsEnabled(locator.nextButtonInAssessment, 'Next button');
                await Keywords.click(locator.nextButtonInAssessment, 'Next button');

                await Keywords.verifyElementDisplayed(locator.physicalScreen, "Physical Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(physical), physical);
                await Keywords.click(locator.accessibilityLocator(physical), physical)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Physical'), 'Physical');
                await Keywords.SetValue(locator.physicalCommentsField, physicalComments);
                await Keywords.verifyElementIsEnabled(locator.nextButtonInAssessment, 'Next button');
                await Keywords.click(locator.nextButtonInAssessment, 'Next button');

                await Keywords.verifyElementDisplayed(locator.spiritualScreen, "Spiritual Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(spiritual), spiritual);
                await Keywords.click(locator.accessibilityLocator(spiritual), spiritual)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Spiritual'), 'Spiritual');
                await Keywords.SetValue(locator.spiritualCommentsField, spiritualComments);
                await Keywords.verifyElementIsEnabled(locator.nextButtonInAssessment, 'Next button');
                await Keywords.click(locator.nextButtonInAssessment, 'Next button');

                await Keywords.verifyElementDisplayed(locator.informationalScreen, "Information Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(informational), informational);
                await Keywords.click(locator.accessibilityLocator(informational), informational)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Informational'), 'Informational');
                await Keywords.SetValue(locator.informationalCommentsField, informationalComments);
                await Keywords.verifyElementIsEnabled(locator.nextButtonInAssessment, 'Next button');
                await Keywords.click(locator.nextButtonInAssessment, 'Next button');

                await Keywords.verifyElementDisplayed(locator.practicalScreen, "Practical Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(Practical), Practical);
                await Keywords.click(locator.accessibilityLocator(Practical), Practical)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Practical'), 'Practical');
                await Keywords.SetValue(locator.practicalCommentsField, practicalComments);
                await Keywords.verifyElementIsEnabled(locator.nextButtonInAssessment, 'Next button');
                await Keywords.click(locator.nextButtonInAssessment, 'Next button');

                await Keywords.verifyElementDisplayed(locator.socialScreen, "Social Screen");
                await Keywords.verifyText(locator.selectOptionText, "content-desc", selectOptionText, selectOptionText);
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(Social), Social);
                await Keywords.click(locator.accessibilityLocator(Social), Social)
                await Keywords.verifyElementDisplayed(locator.commentsFiled('Social/Financial'), 'Social/Financial');
                await Keywords.SetValue(locator.socialCommentsField, socialComments);
                await Keywords.verifyElementIsEnabled(locator.submitButtonInAssessment, 'Submit button');
                await Keywords.click(locator.submitButtonInAssessment, 'Submit button');
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
            } catch (err) {
                throw new Error(err);
            }
        });
    }

    //Physical Assessment
    for (let i = 0; i < testCases3.length; i++) {
        it(`${testCases3[i].testId} - ${testCases3[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "Cancer - Physical", "Physical", "Email", `${testCases3[i].testId}`);
                const password = await readData1("re-assesment", "Cancer - Physical", "Physical", "Password", `${testCases3[i].testId}`);
                const thankYouText = await readData1("re-assesment", "Cancer - Physical", "Physical", "ThankYouText", `${testCases3[i].testId}`)
                const program = await readData1("re-assesment", "Cancer - Physical", "Physical", "Program", `${testCases3[i].testId}`)
                const testDescription = await readData1("re-assesment", "Cancer - Physical", "Physical", "Test Description", `${testCases3[i].testId}`)
                const heightFtText = await readData1("re-assesment", "Cancer - Physical", "Physical", "Height (feet) Text", `${testCases3[i].testId}`)
                const heightInText = await readData1("re-assesment", "Cancer - Physical", "Physical", "Height (inches) Text", `${testCases3[i].testId}`)
                const WeightText = await readData1("re-assesment", "Cancer - Physical", "Physical", "WeightText", `${testCases3[i].testId}`)
                const heightFt = await readData1("re-assesment", "Cancer - Physical", "Physical", "Height (ft)", `${testCases3[i].testId}`)
                const heightIn = await readData1("re-assesment", "Cancer - Physical", "Physical", "Height (in)", `${testCases3[i].testId}`)
                const Weight = await readData1("re-assesment", "Cancer - Physical", "Physical", "Weight", `${testCases3[i].testId}`)

                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program);
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
                await driver.pause(4000)
                while (true) {
                    await Keywords.scrollToEnd(3);
                    if (await locator.physicalAssessment.isDisplayed({ timeout: 45000 })) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.physicalAssessment, "Physical Assessment");
                await Keywords.click(locator.physicalAssessment, "Physical Assessment");
                await Keywords.verifyElementDisplayed(locator.physicalAssessmentScreen, "Physical Assessment Screen");
                await Keywords.verifyElementDisplayed(locator.yourHeight, "Your Height");
                await Keywords.verifyText(locator.heightInFtText, "content-desc", heightFtText, heightFtText)
                await Keywords.verifyText(locator.heightInInText, "content-desc", heightInText, heightInText)
                await Keywords.verifyText(locator.weightInInText, "content-desc", WeightText, WeightText);
                await Keywords.SetValue(locator.heightFtTextField, heightFt)
                await Keywords.SetValue(locator.heightInTextField, heightIn)
                await Keywords.verifyElementDisplayed(locator.yourWeight, "Your Weight");
                await Keywords.SetValue(locator.weightTextField, Weight);
                await Keywords.click(locator.submitButtonInAssessment, 'Submit button');
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
            } catch (err) {
                throw new Error(err);
            }
        })
    }

    //Current Medications
    for (let i = 0; i < testCases4.length; i++) {
        it(`${testCases4[i].testId} - ${testCases4[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "Cancer - Medications", "Medications", "Email", `${testCases4[i].testId}`);
                const password = await readData1("re-assesment", "Cancer - Medications", "Medications", "Password", `${testCases4[i].testId}`);
                const program = await readData1("re-assesment", "Cancer - Medications", "Medications", "Program", `${testCases4[i].testId}`)
                const testDescription = await readData1("re-assesment", "Cancer - Medications", "Medications", "Test Description", `${testCases4[i].testId}`)
                const medicationsText = await readData1("re-assesment", "Cancer - Medications", "Medications", "MedicationText", `${testCases4[i].testId}`)
                const provideMedicationsText = await readData1("re-assesment", "Cancer - Medications", "Medications", "ProvideMedicationsText", `${testCases4[i].testId}`)
                const medicationName = await readData1("re-assesment", "Cancer - Medications", "Medications", "MedicationName", `${testCases4[i].testId}`)
                const medicationName2 = await readData1("re-assesment", "Cancer - Medications", "Medications", "MedicationName2", `${testCases4[i].testId}`)
                const thankYouText = await readData1("re-assesment", "Cancer - Medications", "Medications", "ThankYouText", `${testCases4[i].testId}`)

                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program);
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
                await driver.pause(4000)
                while (true) {
                    await Keywords.scrollToEnd(3);
                    if (await locator.currentMedications.isDisplayed({ timeout: 45000 })) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.currentMedications, "Current Medications");
                await Keywords.click(locator.currentMedications, "Current Medications");
                await Keywords.verifyText(locator.currentMedicationsText, "content-desc", medicationsText, medicationsText);
                await Keywords.verifyText(locator.provideMedicationsText, "content-desc", provideMedicationsText, provideMedicationsText);
                await Keywords.verifyElementDisplayed(locator.medicationNameText, "Medication Name");
                await Keywords.SetValue(locator.medicationTextField, medicationName);
                await Keywords.verifyElementDisplayed(locator.saveButtonInAssessment, "Save Button")
                await Keywords.click(locator.saveButtonInAssessment, "Save Button")
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(medicationName), medicationName);
                await Keywords.verifyElementDisplayed(locator.addNewEntry, "Add New entry")
                await Keywords.click(locator.addNewEntry, "Add New entry");
                await Keywords.verifyText(locator.currentMedicationsText, "content-desc", medicationsText, medicationsText);
                await Keywords.verifyText(locator.provideMedicationsText, "content-desc", provideMedicationsText, provideMedicationsText);
                await Keywords.verifyElementDisplayed(locator.medicationNameText, "Medication Name");
                await Keywords.SetValue(locator.medicationTextField, medicationName2);
                await Keywords.verifyElementDisplayed(locator.saveButtonInAssessment, "Save Button")
                await Keywords.click(locator.saveButtonInAssessment, "Save Button")
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator(medicationName2), medicationName2);
                await Keywords.click(locator.submitButtonInAssessment, 'Submit button');
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompletingCancerAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("CANCER PROGRAM"), "CANCER PROGRAM");
            } catch (err) {
                throw new Error(err);
            }
        })

    }
});