import { locators } from '../../page/locators.js';
import { myGoallocators } from '../../page/myGoals.locators.js';
import { keywords } from '../../page/keywords.js';
import allureReporter from '@wdio/allure-reporter'
import { readData1, getFilteredTests } from '../../../utils/common.js';
import { expect } from 'chai';
import { onboardLocators } from '../../page/onboard.locators.js';


describe('Onboarding - Mental Health Program', async () => {
    const locator = new locators();
    const goallocator = new myGoallocators();
    const Locatoronboard = new onboardLocators();
    const Keywords = new keywords(locator);
    const testCases = getFilteredTests("myGoalsMentalHealth", "eldercare", "goalsElderCare");

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const userName = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "Email", `${testCases[i].testId}`);
                const password = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "Password", `${testCases[i].testId}`);
                const Text1 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "WhatText", `${testCases[i].testId}`);
                const Text2 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "WhenText", `${testCases[i].testId}`);
                const Text3 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "WhereText", `${testCases[i].testId}`);
                const Text4 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "WithText", `${testCases[i].testId}`);
                const Text5 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "MightPreventText", `${testCases[i].testId}`);
                const Text6 = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "BarriesText", `${testCases[i].testId}`);
                const testDescription = await readData1("myGoalsMentalHealth", "eldercare", "goalsElderCare", "testDescription", `${testCases[i].testId}`);
                allureReporter.addDescription(testDescription);
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.startNow, "Start Now Button");
                await Keywords.click(locator.startNow, "Start Now Button");
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                console.log({ userName, password })
                await Keywords.SetValue(locator.userName, userName);
                await Keywords.SetValue(locator.password, password);
                if (!await locator.loginButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
                await Keywords.click(locator.loginButton, "Login Button")
                await Keywords.waitForDisplay(locator.allowButton, 60000, "Get notified dialog box")
                await Keywords.click(locator.allowButton, "Allow button");
                await Keywords.waitForDisplay(locator.allowNotificationButton, 60000, "Allow notification")
                await Keywords.click(locator.allowNotificationButton, "Allow notification button");
                if (await locator.allowButton.isDisplayed({ timeout: 60000 })) {
                    await Keywords.click(locator.allowButton, "allow button");
                    if (await Locatoronboard.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                        await Keywords.click(Locatoronboard.backDefaultNotification, "Back arrow for Default notification button");
                    }
                }
                await Keywords.AllureInfo("LogIn Screen Completed!!!");
                console.log('Login process completed successfully.');
                await Keywords.waitForDisplay(Locatoronboard.homePage, 45000, "Home Page")
                await Keywords.verifyElementDisplayed(Locatoronboard.mentalHealthCard, "Mental Health card")
                await Keywords.click(Locatoronboard.mentalHealthCard, "Mental Health card")
                await Keywords.waitForDisplay(Locatoronboard.mentalHealthText, 60000, "Mental Health Text");
                await Keywords.verifyElementDisplayed(Locatoronboard.pickADifferentProgram, "Pick a different program button");
                await Keywords.verifyElementIsEnabled(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(Locatoronboard.continueButton, "Continue Button");
                await Keywords.click(goallocator.myGoals, "myGoals");
                await Keywords.click(goallocator.newGoal, "newGoal");
                await Keywords.SetValue(goallocator.whatEnterText, Text1);
                await Keywords.SetValue(goallocator.whenEnterText, Text2);
                await Keywords.click(goallocator.remindDaily, "remindDaily");
                await Keywords.click(goallocator.remindDailyClick, "remindDailyClick");
                await Keywords.click(goallocator.scheduleTextField, "scheduleTextField");
                await Keywords.click(goallocator.selectDate, "selectDate");
                await Keywords.click(goallocator.endDate, "endDate");
                await Keywords.click(goallocator.saveButton, "saveButton");
                await Keywords.SetValue(goallocator.whereEnterText, Text3);
                await Keywords.SetValue(goallocator.withEnterText, Text4);
                await Keywords.SetValue(goallocator.mightPrevent, Text5);
                await Keywords.scrollToEnd(2);
                await Keywords.SetValue(goallocator.barriersGoal, Text6);
                await Keywords.click(goallocator.saveLastButton, "saveLastButton");
                await Keywords.click(goallocator.okButtonGoals, "okButtonGoals")
                await Keywords.click(goallocator.weekButton, "weekButton");
                await Keywords.click(goallocator.newGoal, "newGoal");
                await Keywords.SetValue(goallocator.whatEnterText, Text1);
                await Keywords.SetValue(goallocator.whenEnterText, Text2);
                await Keywords.click(goallocator.remindDaily, "remindDaily");
                await Keywords.click(goallocator.remindDailyClick, "remindDailyClick");
                await Keywords.click(goallocator.scheduleTextField, "scheduleTextField");
                await Keywords.click(goallocator.selectDate, "selectDate");
                await Keywords.click(goallocator.endDate, "endDate");
                await Keywords.click(goallocator.saveButton, "saveButton");
                await Keywords.SetValue(goallocator.whereEnterText, Text3);
                await Keywords.SetValue(goallocator.withEnterText, Text4);
                await Keywords.SetValue(goallocator.mightPrevent, Text5);
                await Keywords.scrollToEnd(2);
                await Keywords.SetValue(goallocator.barriersGoal, Text6);
                await Keywords.click(goallocator.saveLastButton, "saveLastButton");
                await Keywords.click(goallocator.okButtonGoals, "okButtonGoals");
                await Keywords.click(goallocator.monthTabButton, "monthTabButton")
                await Keywords.click(goallocator.newGoal, "newGoal");
                await Keywords.SetValue(goallocator.whatEnterText, Text1);
                await Keywords.SetValue(goallocator.whenEnterText, Text2);
                await Keywords.click(goallocator.remindDaily, "remindDaily");
                await Keywords.click(goallocator.remindDailyClick, "remindDailyClick");
                await Keywords.click(goallocator.scheduleTextField, "scheduleTextField");
                await Keywords.click(goallocator.selectDate, "selectDate");
                await Keywords.click(goallocator.endDate, "endDate");
                await Keywords.click(goallocator.saveButton, "saveButton");
                await Keywords.SetValue(goallocator.whereEnterText, Text3);
                await Keywords.SetValue(goallocator.withEnterText, Text4);
                await Keywords.SetValue(goallocator.mightPrevent, Text5);
                await Keywords.scrollToEnd(2);
                await Keywords.SetValue(goallocator.barriersGoal, Text6);
                await Keywords.click(goallocator.saveLastButton, "saveLastButton");
                await Keywords.click(goallocator.okButtonGoals, "okButtonGoals");
            }
            catch (err) {
                throw new Error(err);
            }
        })
    }
});