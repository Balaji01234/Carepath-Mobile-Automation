import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'

describe('Carepath Automation', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);
    const testCases = getFilteredTests("ElderCareProgram", "ElderCare-CommunityEvents", "CommunityEvents");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("ElderCareProgram", "ElderCare-CommunityEvents", "CommunityEvents", "Email", `${testCases[i].testId}`);
                const password = await readData1("ElderCareProgram", "ElderCare-CommunityEvents", "CommunityEvents", "Password", `${testCases[i].testId}`);
                const textdescription = await readData1("ElderCareProgram", "ElderCare-CommunityEvents", "CommunityEvents", "Description", `${testCases[i].testId}`);
                const eventnametext = await readData1("ElderCareProgram", "ElderCare-CommunityEvents", "CommunityEvents", "EventName", `${testCases[i].testId}`);
                allureReporter.addDescription(`${testCases[i].testId} - ${testCases[i].testDescription}`);
                const eventDetails = await Keywords.eventCreationInAdminPortal(eventnametext, textdescription, "AM")
                console.log(eventDetails.eventDate, eventDetails.time);
                await driver.terminateApp('com.android.chrome');
                await driver.switchContext('NATIVE_APP');
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
                await Keywords.click(locator.communityEvents, "communityEvents");
                await Keywords.verifyElementDisplayed(locator.clickRegister, "clickRegister");
                await Keywords.click(locator.clickRegister, "clickRegister");
                await Keywords.verifyElementDisplayed(locator.testName(eventnametext), eventnametext);
                const updatedDate = await Keywords.getUpdatedDate(eventDetails.eventDate)
                await Keywords.verifyElementDisplayed(locator.verifyDate(updatedDate), "dateVerify");
                await Keywords.verifyElementDisplayed(locator.verifyTime(((eventDetails.time).toLowerCase()).replace(/^0/, "")), "time1Verify");
                await Keywords.verifyElementDisplayed(locator.testName(textdescription), textdescription);
                console.log("eventText");
                await Keywords.click(locator.registerForEvent, "registerForEvent");
                await Keywords.click(locator.confirmRegistration, "confirmRegistration")
                await Keywords.eventTabDelete("testdelete", "", "AM")
            } catch (err) {
                throw new Error(err)
            }
        });
    }
})