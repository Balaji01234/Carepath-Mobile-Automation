import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'

describe('Carepath Automation', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("ElderCareProgram", "ElderCare-NurseRecommendation", "NurseRecommendation");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("ElderCareProgram", "ElderCare-NurseRecommendation", "NurseRecommendation", "Email", `${testCases[i].testId}`);
                const password = await readData1("ElderCareProgram", "ElderCare-NurseRecommendation", "NurseRecommendation", "Password", `${testCases[i].testId}`);
                const automationText = await readData1("ElderCareProgram", "ElderCare-NurseRecommendation", "NurseRecommendation", "automationText", `${testCases[i].testId}`);
                // const carepathApplicationText = await readData1("ElderCareProgram", "ElderCare-NurseRecommendation", "NurseRecommendation", "carepathApplication", `${testCases[i].testId}`);

                allureReporter.addDescription(`${testCases[i].testId} - ${testCases[i].testDescription}`);
                await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button");
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                console.log({ userName, password })
                await Keywords.SetValue(locator.userName, userName);
                await Keywords.SetValue(locator.password, password);
                await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
                await Keywords.click(locator.loginButton, "Login Button")
                await Keywords.waitForDisplay(Locatoronboard.allowButton, 40000, "Get notified dialog box")
                await Keywords.click(Locatoronboard.allowButton, "Allow button");
                await Keywords.waitForDisplay(Locatoronboard.androidAllowNotificationButton, 40000, "Default Allow notification")
                await Keywords.click(Locatoronboard.androidAllowNotificationButton, "Default Allow notification button");
                if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
                    await Keywords.click(locator.allowButton, "allow button");
                    if (await Locatoronboard.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                        await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
                    }
                }
                await Keywords.AllureInfo("LogIn Screen Completed!!!");
                console.log('Login process completed successfully.');
                await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                await Keywords.verifyElementDisplayed(Locatoronboard.elderCareProgram, "Elder  card")
                await Keywords.click(Locatoronboard.elderCareProgram, "Elder care Health card")
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await browser.pause(2000);
                if (await locator.closeCompleteProfileButton.isDisplayed({ timeout: 100000 })) {
                    await Keywords.click(locator.closeCompleteProfileButton, "closeCompleteProfileButton");
                }
                await Keywords.click(locator.nurseRecommendation, "nurseRecommendation")
                await Keywords.verifyText(locator.titleNurseRecommentation, "content-desc", automationText, "automation")
                await Keywords.click(locator.nameNurseRecommendtation, "nameNurseRecommendtation")
                // await Keywords.verifyText(locator.automationTextSentence, "content-desc", carepathApplicationText, "carepathApplication")
                await Keywords.click(locator.nurseBackButton, "nurseBackButton")
                await Keywords.click(locator.closeButtonNurse, "closeButtonNurse");
                await Keywords.click(locator.myProgram, "myProgram");
                await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page");
                await Keywords.verifyElementDisplayed(Locatoronboard.elderCareProgram, "Elder  card")
                await Keywords.click(Locatoronboard.elderCareProgram, "Elder care Health card");
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
            } catch (err) {
                throw new Error(err)
            }
        });
    }
})
