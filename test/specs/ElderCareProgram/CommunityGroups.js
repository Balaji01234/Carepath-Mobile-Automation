import { locators } from '../../page/locators.js';
import { onboardLocators } from '../../page/onboard.locators.js'
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'

describe('Carepath Automation', () => {

    const locator = new locators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);
    const testCases = getFilteredTests("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "Email", `${testCases[i].testId}`);
                const password = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "Password", `${testCases[i].testId}`);
                const addCommentText = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "AddComment", `${testCases[i].testId}`);
                const groupText = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "GroupHeadlineText", `${testCases[i].testId}`);
                const textContent = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "ContentText", `${testCases[i].testId}`);
                const YourComment2 = await readData1("ElderCareProgram", "ElderCare-CommunityGroups", "ElderCarePositiveCommunityGroup", "YourComment2", `${testCases[i].testId}`);
                allureReporter.addDescription(`${testCases[i].testId} - ${testCases[i].testDescription}`);
                const groupeventDetails = await Keywords.CreationInAdminGroupsPortal(groupText, textContent)
                // console.log(groupeventDetails.eventDate, groupeventDetails.time);
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
                await Keywords.click(locator.communityGroup, "communityGroup")
                await Keywords.click(locator.testGroup, "testGroup")
                await Keywords.click(locator.automationTestPost, "automationTestPost")
                await Keywords.click(locator.automationTestPostName, "automationTestPostName")
                await Keywords.verifyElementDisplayed(locator.carePathAdmin, "carePathAdmin");
                console.log("Carepath Admin");
                await Keywords.click(locator.likesClick, "likesClick");
                console.log("Succesfully clicked like button");
                if (!await locator.wouldYouLike.isDisplayed()) {
                    await Keywords.click(locator.clickSaveButton, "clickSaveButton");
                }
                await Keywords.click(locator.clickSaveButton, "clickSaveButton");
                await browser.pause(2000);
                await Keywords.click(locator.saveToFavorites, "saveToFavorites");
                await browser.pause(2000);
                await Keywords.click(locator.clickCloseButton, "clickCloseButton");
                await browser.pause(2000);
                await Keywords.click(locator.groupTitleImage, "groupTitleImage");
                console.log("Successfully opened groupTitleImage");
                await browser.pause(2000);
                await Keywords.click(locator.groupTitleCloseWidgetButton, "groupTitleCloseWidgetButton")
                await browser.pause(2000);
                await Keywords.click(locator.addComment, "addComment");
                await Keywords.click(locator.createCommandRequest, "createCommandRequest");
                await Keywords.SetValue(locator.createCommandRequest, addCommentText);
                await Keywords.click(locator.publishComment, "publishComment")
                await Keywords.click(locator.backAction, "backAction")
                await Keywords.waitForDisplay(locator.addCommentGroup, 90000, "addCommentGroup");
                await Keywords.click(locator.newPostButton, "newPostButton")
                await Keywords.click(locator.postyourComment, "postyourComment")
                await Keywords.SetValue(locator.postyourComment, YourComment2)
                await Keywords.click(locator.sendRequest, "sendRequest")
                await Keywords.click(locator.requestCloseButton, "requestCloseButton")
                await Keywords.verifyElementDisplayed(locator.adminLogout, "Admin Logout");
                await Keywords.click(locator.adminLogout, "Admin Logout");
                await Keywords.groupTabDelete("testdelete", "")
            } catch (err) {
                throw new Error(err)
            }
        });
    }
})