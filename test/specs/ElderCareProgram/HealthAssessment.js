import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'

describe('Carepath Automation', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "Email", `${testCases[i].testId}`);
                const password = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "Password", `${testCases[i].testId}`);
                const validHealthSpecifyText = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "HealthSpecifyText", `${testCases[i].testId}`);
                const validHealthSpecifyText2 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "HealthSpecifyText1", `${testCases[i].testId}`);
                const physicalMobilitySpecifyText1 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "physicalMobilitySpecifyText", `${testCases[i].testId}`);
                const specifyNameText = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "SpecifyName", `${testCases[i].testId}`);
                const weightbearingtext = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "WeightBearingText", `${testCases[i].testId}`);
                const sleeppattern = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "Sleeppatternstext", `${testCases[i].testId}`);
                const SleepbehavesText1 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "SleepbehavesText", `${testCases[i].testId}`);
                const emotionaltext = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "emotionaltext", `${testCases[i].testId}`);
                const physicaltext1 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "physicaltext", `${testCases[i].testId}`);
                const spritualtext = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "SpritualTextComments", `${testCases[i].testId}`);
                const informationtext1 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "Informationaltext", `${testCases[i].testId}`);
                const practicalText1 = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "PracticalText", `${testCases[i].testId}`);
                const socialText = await readData1("ElderCareProgram", "ElderCare-HealthAssessment", "healthAssessment", "SocialFinanceText", `${testCases[i].testId}`);

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
                await Keywords.click(locator.closeCompleteProfileButton,"closeCompleteProfileButton")
                await Keywords.click(locator.healthassessmentbutton, "healthassessmentbutton");
                await Keywords.verifyElementDisplayed(locator.requestedHealthAssessment, "requestedHealthAssessment");
                console.log("requestedHealthAssessment");
                await Keywords.click(locator.healthHistory, "healthHistory");
                await Keywords.SetValue(locator.healthPleaseSpecify,validHealthSpecifyText);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.SetValue(locator.healthPleaseSpecify2, validHealthSpecifyText2);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.physicalAssessmentMobility, "physicalAssessmentMobility");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.independentPhysicalMobility, "independentPhysicalMobility");
                await Keywords.click(locator.scooterMobilityDevices, "scooterMobilityDevices");
                await Keywords.click(locator.riskOfFalls, "riskOfFalls");
                await Keywords.click(locator.physicalMobilitySpecify, "physicalMobilitySpecify");
                await Keywords.SetValue(locator.physicalMobilitySpecify, physicalMobilitySpecifyText1);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.showDialogAction, "showDialogAction");
                await Keywords.click(locator.dropdownIndependent, "dropdownIndependent");
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.SetValue(locator.describePleaseSpecify, specifyNameText);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.weightBearingStatus, "weightBearingStatus");
                await Keywords.click(locator.ltSide, "ltSide");
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.SetValue(locator.weightBearingPleaseSpecify, weightbearingtext);
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.sleepRest, "sleepRest");
                await Keywords.click(locator.sleepPatterns, "sleepPatterns");
                await Keywords.SetValue(locator.sleepPatterns, sleeppattern);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.SetValue(locator.hoursOfSleeping, sleeppattern);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.SetValue(locator.sleepBehaviour, SleepbehavesText1);
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.NutritionDietary, "NutritionDietary");
                await Keywords.click(locator.nutritionIndependent, "nutritionIndependent");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.toileting, "toileting");
                await Keywords.click(locator.toiletingIndependent, "toiletingIndependent");
                await Keywords.click(locator.toiletingIndependent, "toiletingIndependent");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.groomingHygiene, "groomingHygiene");
                await Keywords.click(locator.groomingIndependent, "groomingIndependent");
                await Keywords.click(locator.groomingIndependent, "groomingIndependent");
                await Keywords.click(locator.groomingOwn, "groomingOwn");
                await Keywords.click(locator.groomingIndependent, "groomingIndependent");
                await Keywords.click(locator.groomingIndependent, "groomingIndependent");
                await Keywords.click(locator.good, "good");
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.click(locator.homeCare, "homeCare");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.yesButton, "yesButton");
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");
                await Keywords.scrollToElement("accessibility id", "Canadian Problem Category")
                await Keywords.click(locator.canadianProblem, "canadianProblem");
                await Keywords.click(locator.fearWorries, "fearWorries");
                await Keywords.SetValue(locator.emotionalComment,emotionaltext);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.concentrationMemory, "concentrationMemory");
                await Keywords.SetValue(locator.physicalComments,physicaltext1);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.meaningPurpose, "meaningPurpose");
                await Keywords.SetValue(locator.spiritualComments,spritualtext);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.makingTreatment, "makingTreatment");
                await Keywords.SetValue(locator.informationalComments,informationtext1);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.workSchool, "workSchool");
                await Keywords.SetValue(locator.practicalComments,practicalText1);
                await Keywords.click(locator.nextButton1, "nextButton1");
                await Keywords.click(locator.worryFamilies, "worryFamilies");
                await Keywords.SetValue(locator.socialFinance,socialText);
                await Keywords.click(locator.submitButton, "submitButton");
                await Keywords.click(locator.backToAssessments, "backToAssessment");


            } catch (err) {
                throw new Error(err)
            }
        });
    }
})
