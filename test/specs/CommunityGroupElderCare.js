import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, readTestcase, writeExcelData, saveTestDataToJson, readData, readData1, generateRandomNumber, dataSets, writeExcelData1 } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import {CommunityLocators} from '../page/CommunityGroup.js';




describe('Carepath Automation', async () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const community = new CommunityLocators();
    
    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    let iterationValue = dataSets(iterations)
    let testName = '';

    it('TS_001Community Group Elder Care', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
            7. Click on Elder care
            8.Verify that the user is able to see all the groups given inside the Community Groups tab just by clicking on the Open button.

        `);
        try {

            const mail = await readData1("Community", "ElderCare", "Mail", "Testdata1");
            const Password = await readData1("Community", "ElderCare", "Password", "Testdata1");

            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;

            await Keywords.SetValue(locator.userName, mail);
            await Keywords.SetValue(locator.password, Password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 20000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 20000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(community.eldercare, "Elder care")
            await Keywords.click(community.eldercare, "Elder card");
            await driver.pause(5000);
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await Keywords.waitForDisplay(community.logo, 45000, "logo");
            await Keywords.verifyElementDisplayed(community.Nurserecommendations, "Nursere commendations");
            await Keywords.verifyElementDisplayed(community.CommunityGroups, "Community Groups");
            await Keywords.verifyElementDisplayed(community.CommunityEvents, "Community Events");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.open, "open");
            await Keywords.click(community.open, "Open Button");
            await driver.pause(5000);
            await Keywords.verifyText(community.group, "content-desc", "Test automation group", "Test automation group");
            await Keywords.verifyElementDisplayed(community.posts, "Posts");
            await Keywords.click(community.GroupVal, "Test automation group");
            await Keywords.verifyText(community.GroupValPage, "content-desc", "Test automation group", "Test automation group");
            await driver.pause(9000);
            await Keywords.verifyElementDisplayed(community.postesva, "post:");
            await Keywords.verifyElementDisplayed(community.test, "test");           
            await Keywords.verifyElementDisplayed(community.newpost, "new post");  
            await Keywords.verifyElementDisplayed(community.automationdate, "Date");          


        } catch (err) {
            throw new Error(err);
        }

    });

    it('TS_002Community Group Elder Care', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
            7. Click on Elder care
            8.Verify that when the user likes the post whether the icon changes to a blue color and whether the count gets increased or not.

        `);
        try {

            const mail = await readData1("Community", "ElderCare", "Mail", "Testdata1");
            const Password = await readData1("Community", "ElderCare", "Password", "Testdata1");

            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;

            await Keywords.SetValue(locator.userName, mail);
            await Keywords.SetValue(locator.password, Password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 20000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 20000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(community.eldercare, "Elder care")
            await Keywords.click(community.eldercare, "Elder card");
            await driver.pause(5000);
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await Keywords.waitForDisplay(community.logo, 45000, "logo");
            await Keywords.verifyElementDisplayed(community.Nurserecommendations, "Nursere commendations");
            await Keywords.verifyElementDisplayed(community.CommunityGroups, "Community Groups");
            await Keywords.verifyElementDisplayed(community.CommunityEvents, "Community Events");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.open, "open");
            await Keywords.click(community.open, "Open Button");
            await driver.pause(5000);
            await Keywords.verifyText(community.group, "content-desc", "Test automation group", "Test automation group");
            await Keywords.verifyElementDisplayed(community.posts, "Posts");
            await Keywords.click(community.GroupVal, "Test automation group");
            await Keywords.verifyText(community.GroupValPage, "content-desc", "Test automation group", "Test automation group");
            await driver.pause(9000);
            await Keywords.verifyElementDisplayed(community.postesva, "post:");
            await Keywords.verifyElementDisplayed(community.test, "test");           
            await Keywords.verifyElementDisplayed(community.newpost, "new post");  
            await Keywords.verifyElementDisplayed(community.automationdate, "Date");          
            await Keywords.click(community.testoption, "test option");   
            await driver.pause(9000);
            await Keywords.verifyText(community.likepage, "content-desc", "automation post", "automation post");
            await Keywords.verifyElementDisplayed(community.test, "test");
            await Keywords.verifyElementDisplayed(community.Browsearticlesabout, "Browse articles about:");
            await Keywords.verifyElementDisplayed(community.image, "image");    
            await Keywords.verifyElementDisplayed(community.like, "like Button");   
            await Keywords.verifyElementDisplayed(community.saveButton, "save Button");   
            await Keywords.verifyText(community.commonds, "content-desc", "Comments (0)", "Comments (0)");
            await Keywords.verifyText(community.beforelike, "content-desc", "(0)", "(0)");
            await Keywords.click(community.clickonlike, "like"); 
            await driver.pause(1000);
            await Keywords.verifyText(community.afterLike, "content-desc", "(1)", "(1)");
            await Keywords.click(community.clickonlike, "like"); 
            await driver.pause(1000);
            await Keywords.verifyText(community.beforelike, "content-desc", "(0)", "(0)");
            await Keywords.verifyElementIsEnabled(community.addComment, "Add Comment Button");


        } catch (err) {
            throw new Error(err);
        }

    });

    it('TS_003Community Group Elder Care', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
            7. Click on Elder care
            8.Ensure that when the user clicks on the right arrow given for the Posts inside the group, the below options are displayed on the screen or not.

        `);
        try {

            const mail = await readData1("Community", "ElderCare", "Mail", "Testdata1");
            const Password = await readData1("Community", "ElderCare", "Password", "Testdata1");

            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;

            await Keywords.SetValue(locator.userName, mail);
            await Keywords.SetValue(locator.password, Password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
            expect(loginBtnEnable).to.be.true;
            await Keywords.click(locator.loginButton, "Login Button")
            await Keywords.waitForDisplay(locator.allowButton, 20000, "Get notified dialog box")
            await Keywords.click(locator.allowButton, "Allow button");
            await Keywords.waitForDisplay(locator.allowNotificationButton, 20000, "Allow notification")
            await Keywords.click(locator.allowNotificationButton, "Allow notification button");
            console.log('Login process completed successfully.');
            await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
            await Keywords.verifyElementDisplayed(community.eldercare, "Elder care")
            await Keywords.click(community.eldercare, "Elder card");
            await driver.pause(5000);
            await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
            await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
            await Keywords.click(onboardLocator.continueButton, "Continue Button");
            await Keywords.waitForDisplay(community.logo, 45000, "logo");
            await Keywords.verifyElementDisplayed(community.Nurserecommendations, "Nursere commendations");
            await Keywords.verifyElementDisplayed(community.CommunityGroups, "Community Groups");
            await Keywords.verifyElementDisplayed(community.CommunityEvents, "Community Events");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.MyResources, "My Resources");
            await Keywords.verifyElementDisplayed(community.open, "open");
            await Keywords.click(community.open, "Open Button");
            await driver.pause(5000);
            await Keywords.verifyText(community.group, "content-desc", "Test automation group", "Test automation group");
            await Keywords.verifyElementDisplayed(community.posts, "Posts");
            await Keywords.click(community.GroupVal, "Test automation group");
            await Keywords.verifyText(community.GroupValPage, "content-desc", "Test automation group", "Test automation group");
            await driver.pause(9000);
            await Keywords.verifyElementDisplayed(community.postesva, "post:");
            await Keywords.verifyElementDisplayed(community.test, "test");           
            await Keywords.verifyElementDisplayed(community.newpost, "new post");  
            await Keywords.verifyElementDisplayed(community.automationdate, "Date");          
            await Keywords.click(community.testoption, "test option");   
            await driver.pause(9000);
            await Keywords.verifyText(community.likepage, "content-desc", "automation post", "automation post");
            await Keywords.verifyElementDisplayed(community.test, "test");
            await Keywords.verifyElementDisplayed(community.Browsearticlesabout, "Browse articles about:");
            await driver.pause(5000);
            await Keywords.verifyElementDisplayed(community.image, "image");    
            await Keywords.verifyElementIsEnabled(community.addComment, "Add Comment Button");
            await Keywords.click(community.clickonimage, "Image");   
            await Keywords.verifyElementDisplayed(community.imagescreen, "Image Screen");    
            await Keywords.verifyElementDisplayed(community.imagesScreenClose, "Image Screen close");   
            await Keywords.click(community.imagesScreenClose, "Image Screen close");   
            await Keywords.verifyElementDisplayed(community.Browsearticlesabout, "Browse articles about:");



        } catch (err) {
            throw new Error(err);
        }

    });





});