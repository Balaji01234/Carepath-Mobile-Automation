import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { ForgotPasswordLocators } from '../../page/ForgotLocator.js'

describe('Resources In Mental Health', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const Forgot = new ForgotPasswordLocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    //const testCases = getFilteredTests("forgotPassword", "ForgotPassword-Negative", "ForgotPassword");
    let testName = '';

    describe('Carepath Automation My Zones', () => {

        const locator = new locators();
        const Keywords = new keywords(locator);
    
        it.only('Resources_MentalHealth', async () => {
                allureReporter.addDescription(`
                    1. Click on the "Start Now" button.
                    2. Check if the login screen is displayed.
                    3. Enter the username and password.
                    4. Check if the login button is enabled.
                    5. Handle any dialog boxes related to notifications.
                    6. Log in successfully if all steps are completed.
                    7. click on lesson.
                    8. Check if the Lesson one are done.
                `);
                try {
                    const userName = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Email", `OnboardingMH_0${1}`);
                    const password = await readData1("onboarding", "onboardingMH", "MulipleOptionMH", "Password", `OnboardingMH_0${1}`);
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button");
                await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button");
                await Keywords.click(locator.startNow, "Start Now Button");
                await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
                console.log({ userName, password })
                await Keywords.SetValue(locator.userName, userName);
                await Keywords.SetValue(locator.password, password);
                if (!await locator.loginButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
                expect(loginBtnEnable).to.be.true;
                await Keywords.click(locator.loginButton, "Login Button")
    
                await Keywords.waitForDisplay(locator.getNotifiedDialogBox, 40000, "Get notified dialog box")
                await Keywords.click(locator.allowButton, "Allow button");
                await Keywords.waitForDisplay(locator.androidAllowNotification, 40000, "Default Allow notification")
                await Keywords.click(locator.androidAllowNotificationButton, "Default Allow notification button");
                await Keywords.waitForDisplay(locator.allowNotification, 40000, "Allow notification")
                await Keywords.click(locator.allowNotificationButton, "Allow notification button");
                await Keywords.click(locator.backDefaultNotification, "Back arrow for Default notification button");    
                await Keywords.AllureInfo("LogIn Screen Completed!!!");
                console.log('Login process completed successfully.');
    
                if (await locator.welcometocarepath.isDisplayed({timeout:20000})){
                    await Keywords.click(locator.mentalhealth,"Mental health");
                }
                await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
                await Keywords.click(locator.continuebutton, "Continue Button")
                await Keywords.verifyElementDisplayed(locator.resourcesCardTitle, "Resources Card");
                await Keywords.click(locator.resourcesCard, "Click on Resources Card");
                await Keywords.click(locator.resourcesCardTitle, "Resources")
                await browser.pause(3000);
            
                await Keywords.waitForDisplay(locator.resouceAnxiety, "Anxiety");
                await Keywords.verifyElementDisplayed(locator.resouceFeelBetter, "Approaches to Feel Better");
                await Keywords.verifyElementDisplayed(locator.resouceEatingDisorders, "Body Image and Eating Disorders");
                await Keywords.verifyElementDisplayed(locator.resouceDepression, "Depression");
               
                await Keywords.verifyElementDisplayed(locator.resouceHealthyRelationships, "Healthy Relationships");
                await Keywords.verifyElementDisplayed(locator.resouceTraumaandViolence, "Interpersonal Trauma and Violence");
                await Keywords.verifyElementDisplayed(locator.resouceAttentionDifficulties, "Learning and Attention Difficulties");
                await Keywords.verifyElementDisplayed(locator.resouceLoneliness, "Loneliness");
               
                await Keywords.verifyElementDisplayed(locator.resouceLowSelfEsteem, "Low Self-Esteem");
                await Keywords.verifyElementDisplayed(locator.resouceDistressingEmotions, "Managing Distressing Emotions");
                await Keywords.verifyElementDisplayed(locator.resouceSleepProblems, "Sleep Problems");
                await Keywords.verifyElementDisplayed(locator.resouceStress, "Stress");
               
                await Keywords.verifyElementDisplayed(locator.resouceAddictions, "Substance Abuse and Addictions");
                await Keywords.verifyElementDisplayed(locator.resouceSuicidePrevention, "Suicide Prevention");
                await Keywords.verifyElementDisplayed(locator.resouceTrauma, "Trauma");
            
                await Keywords.click(locator.resouceAnxiety, "Anxiety Tab")
                await Keywords.waitForDisplay(locator.readMoreResource, "Read More");
                await Keywords.click(locator.readMoreResource, "Read More")
                // await Keywords.verifyElementDisplayed(locator.readMoreAnxiety, "If anxiety is a problem for you, you might want to explore the “Mind Zone” course offered through Carepath Digital Health. There you will find lots of good information and, over the course of 8 chapters or lessons, you will learn some simple strategies to help. There are some short documents here and other links that provide some information about different kinds of anxiety. Don’t forget to contact a counsellor if you need some more direction – they can help!");
            
                // await Keywords.verifyElementDisplayed(locator.video1Des, "Generalized Anxiety Disorder – Causes, Symptoms and Treatment");
                // await Keywords.verifyElementDisplayed(locator.video1Link, "www.youtube.com/watch?v=9mPwQTiMSj8");
                // await Keywords.verifyElementDisplayed(locator.videoBy1, "By: Osmosis");
                // await Keywords.click(locator.video1Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.video2Des, "How to Stop Struggling with Anxiety and Intense Emotions");
                // await Keywords.verifyElementDisplayed(locator.video2Link, "www.youtube.com/watch?v=CwVN5e1YavM");
                // await Keywords.verifyElementDisplayed(locator.videoBy2, "By: Therapy in a Nutshells")
                // await Keywords.click(locator.video2Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.video3Des, "TEDx Talk - Social Anxiety in the Modern World");
                // await Keywords.verifyElementDisplayed(locator.video3Link, "www.youtube.com/watch?v=EFhP4wP1TzU");
                // await Keywords.verifyElementDisplayed(locator.videoBy3, "By: Dr. Fallon Goodman");
                // await Keywords.click(locator.video3Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.video4Des, "Guide: Facing Your Fears - Exposure");
                // await Keywords.verifyElementDisplayed(locator.video4Link, "www.anxietycanada.com/sites/default/files/FacingFears_Exposure.pdf");
                // await Keywords.verifyElementDisplayed(locator.videoBy4, "By: Anxiety Canada");
                // await Keywords.click(locator.video4Link, "Click on Link")
                // await browser.pause(3000);
                // // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.video5Des, "What is Obsessive Compulsive Disorder?");
                // await Keywords.verifyElementDisplayed(locator.video5Link, "www.youtube.com/watch?v=ivyLkTcvanQ");
                // await Keywords.verifyElementDisplayed(locator.videoBy5, "By: Psych Hub");
                // await Keywords.click(locator.video5Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.selfHelpApps, "Self-Help Apps");
                // await Keywords.verifyElementDisplayed(locator.selfHelpAppsDes, "To explore a range of breathing, imagery, and meditation strategies that help with anxiety there are dozens of apps to experiment with. The following are just a few that are (mostly) free and very helpful – ranging from the very simple (Breath Ball) to the much more comprehensive (Insight Timer with more than 80,000 tracks and 10,000 teachers) – available for both android and apple devices.");
                // await Keywords.verifyElementDisplayed(locator.insightTimerApp, "Insight Timer App");
                // await Keywords.verifyElementDisplayed(locator.insightTimerApp1, "Free meditation app for sleep, anxiety and stress");
                // await Keywords.verifyElementDisplayed(locator.insightTimerAppLink, "insighttimer.com/en-ca");
                // await Keywords.click(locator.insightTimerAppLink, "insighttimer.com/en-ca")
                // await browser.pause(3000);
                // //await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // //await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.breathBallApp, "Breath Ball App");
                // await Keywords.verifyElementDisplayed(locator.breathBallApp1, "How to relieve stress through breathing");
                // await Keywords.verifyElementDisplayed(locator.breathBallAppLink, "breathball.com/");
                // await Keywords.click(locator.breathBallAppLink, "breathball.com/")
                // await browser.pause(3000);
                // //await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // //await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.uCLAMindfulApp, "UCLA Mindful App");
                // await Keywords.verifyElementDisplayed(locator.uCLAMindfulApp1, "Practice mindfulness meditation");
                // await Keywords.verifyElementDisplayed(locator.uCLAMindfulAppLink, "www.uclahealth.org/programs/marc/free-programming-resources/ucla-mindful-app");
                // await Keywords.click(locator.uCLAMindfulAppLink, "www.uclahealth.org/programs/marc/free-programming-resources/ucla-mindful-app")
                // await browser.pause(3000);
                // //await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // //await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.smilingMindApp, "Smiling Mind App");
                // await Keywords.verifyElementDisplayed(locator.smilingMindApp1, "Meditation program to help bring mindfulness into your life");
                // await Keywords.verifyElementDisplayed(locator.smilingMindAppLink, "www.smilingmind.com.au/");
                // await Keywords.click(locator.smilingMindAppLink, "www.smilingmind.com.au/")
                // await browser.pause(3000);
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // //await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // //await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.guideAnxiety, "Guide: Anxiety – The Common Cold of Mental Health");
                // await Keywords.verifyElementDisplayed(locator.openButtonResources, "Open Button");
                // await Keywords.click(locator.openButtonResources, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // //await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.guideBreathlessness, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.openButtonResources1, "Open Button");
                // await Keywords.click(locator.openButtonResources, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // //await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // //await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.resouceFeelBetter, "Approaches to Feel Better");
                // await Keywords.click(locator.resouceFeelBetter, "Approaches to Feel Better")
                // await Keywords.verifyElementDisplayed(locator.readMoreResource, "Read More");
                // await Keywords.click(locator.readMoreResource, "Read More")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo1Des, "Video: What is CBT? Making Sense of Cognitive Behavioural Therapy");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo1Link, "www.youtube.com/watch?v=9c_Bv_FBE-c");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo1By, "By: Mind, The Mental Health Charity");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin1, "(3 minutes)");
                // await Keywords.click(locator.feelBetterVideo1Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo2Des, "What is Obsessive Compulsive Disorder?");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo2Link, "www.youtube.com/watch?v=ivyLkTcvanQ");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo2By, "By: Psych Hub");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin2, "(3 minutes)");
                // await Keywords.click(locator.feelBetterVideo2Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo3Des, "What is Obsessive Compulsive Disorder?");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo3Link, "www.youtube.com/watch?v=ivyLkTcvanQ");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo3By, "By: Psych Hub");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin3, "(17 minutes)");
                // await Keywords.click(locator.feelBetterVideo3Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc1Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc1Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc1Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc2Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc2Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc2Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc3Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc3Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc3Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc4Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc4Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc4Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc5Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc5Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc5Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc6Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc6Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc6Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc7Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc7Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc7Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc8Des, "Guide – Breathlessness and Anxiety Connection");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDocBy, "Guide – Breathlessness and Anxiety Connection");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc8Open, "Open Button");
                // await Keywords.click(locator.feelBetterDoc8Open, "Open Button")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDescription, "ACT takes a different approach than CBT in helping us to feel better – and, according to research, it seems to be just as effective! It also teaches a number of skills, but the focus is to learn “unhooking” skills so that difficult thoughts or feelings don’t control us and our behaviour. Instead, it helps us to consider our values as a pathway to living a more meaningful, satisfying life.\n\nOne very helpful book on the market is called “The Happiness Trap” by Dr. Russ Harris. Dr. Harris also has a lot of YouTube videos about various aspects of ACT – as well as a website with some MPS files of one of the key “unhooking” strategies called “Dropping and Anchor”. Most communities have mental health clinicians who use ACT as one approach in their work. If you want to know more, explore the links here and don’t forget we are happy to talk with you and help you get started with either CBT or ACT.");
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo1Des1, "Audio Recordings: Dropping Anchor");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo1Des2, "Find Audio recordings of “Dropping the Anchor” and podcasts here");
                // await Keywords.verifyElementDisplayed(locator.feelBetterActVideo2Link, "www.actmindfully.com.au/free-stuff/free-audio/");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterActVideo2By, "By: ACT Mindfully. Workshops with Russ Harris");    
                // await Keywords.click(locator.feelBetterActVideo2Link, "Open Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc9Des, "Audio Recordings: Dropping Anchor");
                // await Keywords.verifyElementDisplayed(locator.feelBetterDoc9Link, "www.actmindfully.com.au/free-stuff/free-audio/");    
                // await Keywords.verifyElementDisplayed(locator.feelBetterActDoc9By, "By: ACT Mindfully. Workshops with Russ Harris");    
                // await Keywords.click(locator.feelBetterDoc9Link, "Open Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonResource, "Back Arrow Button");
                // await Keywords.click(locator.backButtonResource, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo4Des, "Video: The Three Happiness Myths Video");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo4Link, "www.youtube.com/watch?v=CwVN5e1YavM");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoBy, "By: Therapy in a Nutshells")
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin4, "By: Therapy in a Nutshells")
                // await Keywords.click(locator.feelBetterVideo4Link, "YouTube Link")
                // await browser.pause(2000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo5Des, "Video: The Three Happiness Myths Video");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo5Link, "www.youtube.com/watch?v=CwVN5e1YavM");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoBy, "By: Therapy in a Nutshells")
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin5, "By: Therapy in a Nutshells")
                // await Keywords.click(locator.feelBetterVideo5Link, "YouTube Link")
                // await browser.pause(2000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo6Des, "Video: The Three Happiness Myths Video");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo6Link, "www.youtube.com/watch?v=CwVN5e1YavM");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoBy, "By: Therapy in a Nutshells")
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin6, "By: Therapy in a Nutshells")
                // await Keywords.click(locator.feelBetterVideo6Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")
    
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo7Des, "Video: The Three Happiness Myths Video");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideo7Link, "www.youtube.com/watch?v=CwVN5e1YavM");
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoBy, "By: Therapy in a Nutshells")
                // await Keywords.verifyElementDisplayed(locator.feelBetterVideoMin7, "By: Therapy in a Nutshells")
                // await Keywords.click(locator.feelBetterVideo7Link, "YouTube Link")
                // await browser.pause(3000);
                // await Keywords.captureScreenshot("Login_exp", "baseline");  
                // //await Keywords.captureScreenshot("Login_act", "actual");
                // //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                // await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                // await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")

            await browser.implicitWait(20000);
            for (let i = 1; i <= 39; i++) {
                const docText = await readData1("MentalHealth_Data", "ResourcesMH", "ResourcesText", `Anxiety_Text_${i}`, `ResourcesMH_0${1}`);
                await Keywords.verifyText(locator.anxietyResourcesTexts(docText), "content-desc", docText, docText)
            }

            for (let i = 1; i <= 9; i++) {
                const videoLinks = await readData1("MentalHealth_Data", "ResourcesMH", "ResourcesText", `Video_Link_${i}`, `ResourcesMH_0${1}`);
                await Keywords.verifyText(locator.anxietyResourcesVideos(videoLinks), "content-desc", videoLinks, videoLinks)
                await Keywords.click(locator.anxietyResourcesVideos(videoLinks), "Youtube Videos")    
                await browser.pause(3000);
                await Keywords.captureScreenshot("Login_exp", "baseline");  
                //await Keywords.captureScreenshot("Login_act", "actual");
                //await Keywords.compareScreenshots("Login_exp", "Login_act"); 
                await Keywords.verifyElementDisplayed(locator.backButtonYouTube, "Back Arrow Button");
                await Keywords.click(locator.backButtonYouTube, "Back Arrow Button")    
            }

            await Keywords.verifyElementDisplayed(locator.resouceFeelBetter, "Approaches to Feel Better");
            await Keywords.click(locator.resouceFeelBetter, "Approaches to Feel Better")
            await Keywords.waitForDisplay(locator.readMoreResource, "Read More");
            await Keywords.click(locator.readMoreResource, "Read More")
        }
        catch (err) {
            throw new Error(err);
        }
        });   
    });     
    });    