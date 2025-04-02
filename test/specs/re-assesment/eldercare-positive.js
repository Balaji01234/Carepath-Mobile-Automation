import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Re-Assessment - Eldercare Program', async () => {
    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);


    const testCases = getFilteredTests("re-assesment", "Eldercare - Canadian", "Canadian");



    //Canadian Problem
    for (let i = 0; i < testCases.length; i++) {
        it.only(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Email", `${testCases[i].testId}`);
                const password = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Password", `${testCases[i].testId}`);
                const thankYouText = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "ThankYouText", `${testCases[i].testId}`)
                const program = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Program", `${testCases[i].testId}`)
                const testDescription = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Test Description", `${testCases[i].testId}`)
                const emotional = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Emotional", `${testCases[i].testId}`);
                const physical = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Physical", `${testCases[i].testId}`);
                const spiritual = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Spiritual", `${testCases[i].testId}`);
                const informational = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Informational", `${testCases[i].testId}`);
                const Practical = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Practical", `${testCases[i].testId}`);
                const Social = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Social", `${testCases[i].testId}`);
                const selectOptionText = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "SelectOptionText", `${testCases[i].testId}`);
                const emotionalComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Emotional Comments", `${testCases[i].testId}`);
                const physicalComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Physical Comments", `${testCases[i].testId}`);
                const spiritualComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Spiritual Comments", `${testCases[i].testId}`);
                const informationalComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Informational Comments", `${testCases[i].testId}`);
                const practicalComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Practical Comments", `${testCases[i].testId}`);
                const socialComments = await readData1("re-assesment", "Eldercare - Canadian", "Canadian", "Social Comments", `${testCases[i].testId}`);

                allureReporter.addDescription(testDescription);
                await Keywords.login(userName, password, program);
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("ELDER CARE PROGRAM"), "ELDER CARE PROGRAM");
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
                await Keywords.verifyText(locator.thankYouForCompletingEldercareAssessment, 'content-desc', thankYouText);
                await Keywords.verifyElementDisplayed(locator.thankYouText, "Thank you!");
                await Keywords.verifyElementIsEnabled(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.click(locator.goHomeButtonInCancer, "Go to home button");
                await Keywords.verifyElementDisplayed(locator.accessibilityLocator("ELDER CARE PROGRAM"), "ELDER CARE PROGRAM");
            } catch (err) {
                throw new Error(err);
            }
        });
    }
});