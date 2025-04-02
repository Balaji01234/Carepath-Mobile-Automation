import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Re-Assessment - Mental Health Program', async () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("re-assesment", "MentalHealth", "MulipleOptionMH");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "Email", `${testCases[i].testId}`);
                const password = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "Password", `${testCases[i].testId}`);
                const program = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "Program", `${testCases[i].testId}`);
                const SaveGAD7Text = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "SaveGAD7Text", `${testCases[i].testId}`)
                const thankYouText = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "Thank You Text", `${testCases[i].testId}`)
                const testDescription = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", "Test Description", `${testCases[i].testId}`)
                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program)
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("MENTAL HEALTH PROGRAM"), "MENTAL HEALTH PROGRAM");
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.phq9Assessment.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.phq9Assessment, "PHQ9 Assessment")
                await Keywords.click(locator.phq9Assessment, "PHQ9 Assessment");
                let phqAssessmentOption = [];
                let GAD7AssessmentOption = [];
                for (let j = 1; j <= 10; j++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber(j), `Page No: ${j}/10`)
                    await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")

                    let option = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", `PHQ9_Question_${j}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(option), `PHQ9_Question_${j}: ${option}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessment(option), "Option for the questions");
                    phqAssessmentOption.push(option);
                }
                await Keywords.verifyElementDisplayed(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
                await Keywords.click(Locatoronboard.savePHQ9Button, "Save PHQ9 Button");
                await Keywords.AllureInfo("-->>> 'Patient Health Questionnaire Completed' <<<--")
                await Keywords.waitForDisplay(Locatoronboard.reviewScreen, 45000, "Review Screen");
                for (let m = 1; m <= 4; m++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.getPhqLocator(m), `PHQ9 - Question ${m}`)
                    if (m !== 10) {
                        await Keywords.verifyElementDisplayed(Locatoronboard.reviewAnswer(phqAssessmentOption[m]), phqAssessmentOption[m]);
                    } else {
                        await Keywords.verifyElementDisplayed(Locatoronboard.somewhatDifficult, " Somewhat Difficult Option ");
                    }
                }
                await Keywords.click(Locatoronboard.submitPHQButton, "Submit PHQ button");
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompleting, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goToHomeButton, "Go to home button");
                await Keywords.click(locator.goToHomeButton, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("MENTAL HEALTH PROGRAM"), "MENTAL HEALTH PROGRAM");
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.gad7Assessment.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.gad7Assessment, "GAD7 Assessment")
                await Keywords.click(locator.gad7Assessment, "GAD7 Assessment");

                await Keywords.verifyElementDisplayed(Locatoronboard.GADScreen, "General Anxiety Disorder Screen");
                for (let k = 1; k <= 8; k++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.questionNumber1(k), `Page No: ${k}/8`)
                    await Keywords.verifyElementDisplayed(Locatoronboard.overLastWeekBotherText, "Over Last 2 weeks have you bothered text")
                    let option = await readData1("re-assesment", "MentalHealth", "MulipleOptionMH", `GAD7_Question_${k}`, `${testCases[i].testId}`);
                    await Keywords.verifyElementDisplayed(Locatoronboard.multipleOptionsAssessment(option), `GAD7_Question_${k}: ${option}`);
                    await Keywords.click(Locatoronboard.multipleOptionsAssessment(option), "Option for the questions");
                    GAD7AssessmentOption.push(option);
                }
                await Keywords.verifyText(Locatoronboard.saveGeneralAnxietyDisorder7ButtonText, "content-desc", SaveGAD7Text, "Save GAD7 Button")
                await Keywords.verifyElementIsEnabled(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
                await Keywords.click(Locatoronboard.saveGeneralAnxietyDisorder7Button, "Save-GAD7 Button");
                await Keywords.AllureInfo("-->>> 'General Anxiety Disorder Screen Completed' <<<--")
                await Keywords.waitForDisplay(Locatoronboard.GAD7Review, 90000, "GAD7 Review")
                for (let i = 1; i <= 4; i++) {
                    await Keywords.verifyElementDisplayed(Locatoronboard.getGADLocator(i), `GAD7 - Question ${i}`)
                    if (i !== 8) {
                        await Keywords.verifyElementDisplayed(Locatoronboard.reviewAnswer(GAD7AssessmentOption[i]), GAD7AssessmentOption[i]);
                    } else {
                        await Keywords.verifyElementDisplayed(Locatoronboard.somewhatDifficult, " Somewhat Difficult Option ");
                    }
                }
                await Keywords.click(Locatoronboard.submitGAD7Button, "Submit GAD7 button");
                await Keywords.AllureInfo("--> Health Assessment Review completed <--");
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyText(locator.thankYouForCompleting, 'content-desc', thankYouText);
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("MENTAL HEALTH PROGRAM"), "MENTAL HEALTH PROGRAM");
            }
            catch (err) {
                throw new Error(err);
            }
        })
    }
});