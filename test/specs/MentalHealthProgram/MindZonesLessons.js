import { lessonsLocators } from '../../page/lessons.locators.js';
import { onboardLocators } from '../../page/onboard.locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'


const testCases = getFilteredTests("MindZoneLessons", "Lessons", "Mindzone");
for (let i = 0; i < testCases.length; i++) {
    describe(`${testCases[i].testId} - ${testCases[i].testDescription}`, () => {

        const locator = new lessonsLocators();
        const commonLocator = new onboardLocators();
        const Keywords = new keywords(locator);

        before(async () => {
            await Keywords.waitForDisplay(locator.startnowOption, 90000, "Start Now Button")
            const startNow = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Start now", `${testCases[i].testId}`);
            const email = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Email", `${testCases[i].testId}`);
            const password = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Password", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.startnowver, "content-desc", startNow, "start now button")
            await Keywords.click(locator.startnowOption, "Start Now Button")
            await Keywords.waitForDisplay(locator.loginScreenpage,90000, "Login screen");
            await Keywords.verifyElementIsEnabled(locator.loginScreenpage, "Login button");
            await Keywords.SetValue(locator.userName, email);
            await Keywords.SetValue(locator.password, password);
            if (!await locator.loginButton.isDisplayed()) {
                await browser.hideKeyboard();
            }
            await Keywords.verifyElementIsEnabled(locator.loginButton, "Login button")
            await Keywords.click(locator.loginButton, "Login button")
            await Keywords.waitForDisplay(commonLocator.allowButton, 60000, "Get notified dialog box")
            await Keywords.click(commonLocator.allowButton, "Allow button");
            await Keywords.waitForDisplay(commonLocator.allowNotificationButton, 60000, "Allow notification")
            await Keywords.click(commonLocator.allowNotificationButton, "Allow notification button");
            await browser.pause(2000);
            if (await commonLocator.allowButton.isDisplayed({ timeout: 90000 })) {
                await Keywords.click(commonLocator.allowButton, "allow button");
                if (await commonLocator.backDefaultNotification.isDisplayed({ timeout: 90000 })) {
                    await Keywords.click(commonLocator.backDefaultNotification, "Back arrow for Default notification button");
                }
            }
            await Keywords.AllureInfo("LogIn Screen Completed!!!");
            console.log('Login process completed successfully.');

            if (await locator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
                await Keywords.click(locator.mentalhealth, "Mental health");
            }
            await Keywords.verifyElementIsEnabled(locator.continuebutton, "Continue Button");
            await Keywords.click(locator.continuebutton, "Continue Button");
            await browser.pause(12000);
            if (await locator.goalCheck.isExisting({ timeout: 90000 })) {
                if (await locator.goalCheck.isDisplayed({ timeout: 90000 })) {
                    await Keywords.click(locator.remindMeLater, "Remind me later")
                }
            }
            await Keywords.verifyElementIsEnabled(locator.mindzone, "Mind zone Button");
            const mindZone = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Mind_Zone", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.mindzoneval, "content-desc", mindZone, "verify the mindzone option")
            await browser.pause(4000);
            await Keywords.click(locator.mindzone, "Mind zone");
            await Keywords.verifyElementDisplayed(locator.mindzoneCourse, "Mind Zone Course Title")
        })


        it('Lesson_1', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonOne", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await Keywords.verifyElementDisplayed(locator.lessonOne, "Lesson 1: Anxiety, Depression & Emotions");
            await browser.pause(2000)
            await Keywords.verifyText(locator.lessonOne, "content-desc", "Lesson 1: Anxiety, Depression & Emotions", "verify the mindzone option")
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(1), "Start Button");
            } else {
                await Keywords.click(locator.review(1), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.lesson1, "Welcome to the Mind Zone Course!\nWe are pleased you have decided to participate.");
            await Keywords.verifyElementDisplayed(locator.page1, "1 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson2, "Research suggests that learning a few core skills can help people to manage");
            await Keywords.verifyElementDisplayed(locator.page2, "2 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson3, "We suggest you review the lesson at the beginning of each week");
            await Keywords.verifyElementDisplayed(locator.page3, "3 / 56");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lesson4, "Listening to others' experiences with low mood and anxiety can be helpful.");
            await Keywords.verifyElementDisplayed(locator.page4, "4 / 56");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lesson5, "I'm 35 years old and live in Calgary Alberta");

            await Keywords.verifyElementDisplayed(locator.page5, "5 / 56");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lesson6, "I got a promotion at work a few months ago");

            await Keywords.verifyElementDisplayed(locator.page6, "6 / 56");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const voiceperlessonOne = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonOne, "Audio Play Percentage")

            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lesson7, "Hi, I'm Susan");
            await Keywords.verifyElementDisplayed(locator.page7, "7 / 56");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonOne, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8, "I feel squeezed between caring for Mom and my girls");
            await Keywords.verifyElementDisplayed(locator.page8, "8 / 56");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonOne, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson9, "You have just met Matt and Susan. While everyone's story is different");
            await Keywords.verifyElementDisplayed(locator.page9, "9 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson10, "Before we begin the first lesson");
            await Keywords.verifyElementDisplayed(locator.page10, "10 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson11, "Anxiety is a feeling of nervousness, feeling on edge, or worry");
            await Keywords.verifyElementDisplayed(locator.page11, "11 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson12, "Anxiety is a normal and healthy response to situations that cause fear");
            await Keywords.verifyElementDisplayed(locator.page12, "12 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson13, "Anxiety is a natural part of life that can protect us");
            await Keywords.verifyElementDisplayed(locator.page13, "13 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson14, "Anxiety has many symptoms. These include emotions (feelings)");
            await Keywords.verifyElementDisplayed(locator.page14, "14 / 56");
            await Keywords.click(locator.lesson14Radio1, "radio button 1");
            await Keywords.click(locator.lesson14Radio2, "radio button 2");
            await Keywords.click(locator.lesson14Radio3, "radio button 3");
            await Keywords.click(locator.lesson14Radio4, "radio button 4");
            await Keywords.click(locator.lesson14Radio5, "radio button 5");
            await Keywords.click(locator.lesson14Radio6, "radio button 6");
            await Keywords.click(locator.lesson14Radio7, "radio button 7");
            await Keywords.click(locator.lesson14Radio8, "radio button 8");
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.page15, "15 / 56");

            await Keywords.click(locator.lesson15Radio1, "radio button 1");
            await Keywords.click(locator.lesson15Radio2, "radio button 2");
            await Keywords.click(locator.lesson15Radio3, "radio button 3");
            await Keywords.click(locator.lesson15Radio4, "radio button 4");
            await Keywords.click(locator.lesson15Radio5, "radio button 5");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.page16, "16 / 56");
            await browser.pause(2000);
            await Keywords.click(locator.lesson16Radio1, "radio button 1");
            await Keywords.click(locator.lesson16Radio2, "radio button 2");
            await Keywords.click(locator.lesson16Radio3, "radio button 3");
            await Keywords.click(locator.lesson16Radio4, "radio button 4");
            await Keywords.click(locator.next, "next");

            await browser.pause(4000);
            await Keywords.verifyElementDisplayed(locator.lesson17, "Feeling sad, like anxiety, is a natural part of life");
            await Keywords.verifyElementDisplayed(locator.page17, "17 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson18, "Most of the time a low mood lasts a few hours or maybe a couple of days");
            await Keywords.verifyElementDisplayed(locator.page18, "18 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson19, "The difference between low mood and major depression is one of degrees");
            await Keywords.verifyElementDisplayed(locator.page19, "19 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson20, "Treatment can help with low mood, allowing people to return to enjoying life");
            await Keywords.verifyElementDisplayed(locator.page20, "20 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson21, "Like anxiety, depression affects our emotions, our thoughts, and how we behave or respond");
            await Keywords.verifyElementDisplayed(locator.page21, "21 / 56");
            await Keywords.click(locator.lesson21Radio1, "radio button 1");
            await Keywords.click(locator.lesson21Radio2, "radio button 2");
            await Keywords.click(locator.lesson21Radio3, "radio button 3");
            await Keywords.click(locator.lesson21Radio4, "radio button 4");
            await Keywords.click(locator.lesson21Radio5, "radio button 5");
            await Keywords.click(locator.lesson21Radio6, "radio button 6");
            await Keywords.click(locator.lesson21Radio7, "radio button 7");
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.page22, "22 / 56");
            await Keywords.click(locator.lesson22Radio1, "radio button 1");
            await Keywords.click(locator.lesson22Radio2, "radio button 2");
            await Keywords.click(locator.lesson22Radio3, "radio button 3");
            await Keywords.click(locator.lesson22Radio4, "radio button 4");
            await Keywords.click(locator.lesson22Radio5, "radio button 5");
            await Keywords.click(locator.lesson22Radio6, "radio button 6");
            await Keywords.click(locator.lesson22Radio7, "radio button 7");
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.page23, "23 / 56");
            await Keywords.click(locator.lesson23Radio1, "radio button 1");
            await Keywords.click(locator.lesson23Radio2, "radio button 2");
            await Keywords.click(locator.lesson23Radio3, "radio button 3");
            await Keywords.click(locator.lesson23Radio4, "radio button 4");
            await Keywords.click(locator.lesson23Radio5, "radio button 5");
            await Keywords.click(locator.lesson23Radio6, "radio button 6");
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.lesson24, "As you saw from Matt and Susan, there are many symptoms that can occur");
            await Keywords.verifyElementDisplayed(locator.page24, "24 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson25, "In our experience, no one can tackle all symptoms at once");
            await Keywords.verifyElementDisplayed(locator.page25, "25 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson26, "Not everyone experiences all of these symptoms");
            await Keywords.verifyElementDisplayed(locator.page26, "26 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson27, "There are two basic approaches to treating anxiety and depression");
            await Keywords.verifyElementDisplayed(locator.page27, "27 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson28, "Some people have trouble asking for help for emotional problems");
            await Keywords.verifyElementDisplayed(locator.page28, "28 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson29, "There are some core skills that research has shown can help low mood and anxiety");
            await Keywords.verifyElementDisplayed(locator.page29, "29 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson30, "Everyone experiences problems with mood and anxiety from time to time but this is usually passing. Some people have more of a problem with mood and find it negatively affects their life in some way");
            await Keywords.verifyElementDisplayed(locator.page30, "30 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson31, "Anxiety disorders are the most common mental health problem in Canada");
            await Keywords.verifyElementDisplayed(locator.page31, "31 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson32, "Depression is less common than anxiety, though they often occur together");
            await Keywords.verifyElementDisplayed(locator.page32, "32 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson33, "Though they often occur together");
            await Keywords.verifyElementDisplayed(locator.page33, "33 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson34, "There is no one cause of low mood or anxiety");
            await Keywords.verifyElementDisplayed(locator.page34, "34 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson35, "Some of the things that contribute to low mood/anxiety are things that we cannot change");
            await Keywords.verifyElementDisplayed(locator.page35, "35 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson36, "Research has shown that what we do and how we think about things have a big role to play in how we feel. As well, behaviour and thinking is something we can learn to change");
            await Keywords.verifyElementDisplayed(locator.page36, "36 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson37, "Looking at the content of the lesson, I could see how my own feelings");
            await Keywords.verifyElementDisplayed(locator.page37, "37 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson38, "Matt's Thoughts, Feelings & Behaviours");
            await Keywords.verifyElementDisplayed(locator.page38, "38 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson39, "Susan");
            await Keywords.verifyElementDisplayed(locator.page39, "39 / 56");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonOne, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.lesson40, "Susan's Thoughts, Feelings & Behaviours");
            await Keywords.verifyElementDisplayed(locator.page40, "40 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson41, "Feelings");
            await Keywords.verifyElementDisplayed(locator.page41, "41 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson42, "Take a moment to identify what you are feeling... ");
            await Keywords.verifyElementDisplayed(locator.page42, "42 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.page43, "43 / 56");
            await browser.pause(2000);
            await Keywords.click(locator.lesson43Radio1, "radio button 1");
            await Keywords.click(locator.lesson43Radio2, "radio button 2");
            await Keywords.click(locator.lesson43Radio3, "radio button 3");
            await Keywords.click(locator.lesson43Radio4, "radio button 4");
            await Keywords.click(locator.lesson43Radio5, "radio button 5");
            await Keywords.click(locator.lesson43Radio6, "radio button 6");
            await Keywords.click(locator.lesson43Radio7, "radio button 7");
            await Keywords.click(locator.lesson43Radio8, "radio button 8");
            await Keywords.click(locator.lesson43Radio9, "radio button 9");
            await Keywords.click(locator.lesson43Radio10, "radio button 10");
            await Keywords.click(locator.next, "next");
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.lesson44, "Now let's think about behaviours");
            await Keywords.verifyElementDisplayed(locator.page44, "44 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson45, "If we feel anxious or our mood is low, there are some common behaviours");
            await Keywords.verifyElementDisplayed(locator.page45, "45 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson46, "Physical activity deserves some special mention");
            await Keywords.verifyElementDisplayed(locator.page46, "46 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson47, "The recommended amount of physical activity for all Canadian adults is 150 minutes per week");
            await Keywords.verifyElementDisplayed(locator.page47, "47 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson48, "Always let your body guide you - if you feel pain something is wrong");
            await Keywords.verifyElementDisplayed(locator.page48, "48 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson49, "Another area of research that is important to mood has been called");
            await Keywords.verifyElementDisplayed(locator.page49, "49 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson50, "Fortunately, with time and practice, we can correct this focus on the negative");
            await Keywords.verifyElementDisplayed(locator.page50, "50 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson51, "If you have a chance to see it, there is a wonderful PBS documentary");
            await Keywords.verifyElementDisplayed(locator.page51, "51 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson52, "In Lesson One we reviewed low mood, depression and anxiety");
            await Keywords.verifyElementDisplayed(locator.page52, "52 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson53, "Depression, or low mood, is a feeling of sadness and lack of enjoyment in life");
            await Keywords.verifyElementDisplayed(locator.page53, "53 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson54, "here are two basic approaches to treating anxiety and depression");
            await Keywords.verifyElementDisplayed(locator.page54, "54 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson55, "Anxiety is the most common mental health concern in Canada");
            await Keywords.verifyElementDisplayed(locator.page55, "55 / 56");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson56, "Symptoms of anxiety and depression show up in our emotions, thoughts, and behaviours");
            await Keywords.verifyElementDisplayed(locator.page56, "56 / 56");
            await Keywords.click(locator.next, "next");
        });

        it('Lesson_2', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonTwo", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            const Lessontwoexp = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonTwo", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.lessontowval, "content-desc", Lessontwoexp, "Lesson two option")
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(2), "Start Button");
            } else {
                await Keywords.click(locator.review(2), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.lessontwo1, "Welcome to Lesson 2 of the Mind Zone Course");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo2, "Let`s check in with Matt and Susan");
            await Keywords.verifyElementDisplayed(locator.pagelessontow2, "2 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action");
            const voiceperlessonTwo = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonTwo, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo3, "Susan");
            await Keywords.verifyElementDisplayed(locator.pagelessontow3, "3 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action");
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonTwo, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo4, "In Lesson 2, we continue to focus on the relationship between behaviours and mood");
            await Keywords.verifyElementDisplayed(locator.pagelessontow4, "4 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo5, "Achievement oriented activities are those that often require skill");
            await Keywords.verifyElementDisplayed(locator.pagelessontow5, "5 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo6, "Take a moment to think about a time when you were performing a skill well");
            await Keywords.verifyElementDisplayed(locator.pagelessontow6, "6 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo7, "Hobbies are another activity that can contribute to achievement or sense of mastery");
            await Keywords.verifyElementDisplayed(locator.pagelessontow7, "7 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo8, "Social activities are all those things that we do with family, friends, and our community");
            await Keywords.verifyElementDisplayed(locator.pagelessontow8, "8 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo9, "The activities we engage in, or those that we avoid, have big impacts on our mood");
            await Keywords.verifyElementDisplayed(locator.pagelessontow9, "9 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessontow10, "10 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay Action");
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonTwo, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo11, "I didn't want to have to tell them I'm struggling at my job");
            await Keywords.verifyElementDisplayed(locator.pagelessontow11, "11 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessontow12, "12 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay Action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonTwo, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo13, "I worry about how stressed my husband is too");
            await Keywords.verifyElementDisplayed(locator.pagelessontow13, "13 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo14, "Are Matt and Susan's story different than yours");
            await Keywords.verifyElementDisplayed(locator.pagelessontow14, "14 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo15, "Attention can be directed and focused, like when we are concentrating on something. It can also be more undirected or aimless, like when we are gazing at clouds, a sunset or listening to a babbling brook.\nWhen people are fatigued by concentrating or have difficulty with concentration, research suggests that periods of undirected attention restores the ability to concentrate, hence the term attention restoratio");
            await Keywords.verifyElementDisplayed(locator.pagelessontow15, "15 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo16, "People who are troubled by mood can benefit from incorporating periods of attention restoration into their day-to-day lives.\nTypically, this involves being in natural environments - for example:\nwalking in the woods\nbeing at the beach\nlistening to birds\nHowever, even looking at pictures of nature or listening to audio­ recordings of nature can be helpful");
            await Keywords.verifyElementDisplayed(locator.pagelessontow16, "16 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo17, "Another element of attention that we can learn is focusing on the here and now");
            await Keywords.verifyElementDisplayed(locator.pagelessontow17, "17 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo18, "There are two types of attention exercises that we suggest for this week");
            await Keywords.verifyElementDisplayed(locator.pagelessontow18, "18 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo19, "We can train our mind to focus on what we are doing in the present moment as a way");
            await Keywords.verifyElementDisplayed(locator.pagelessontow19, "19 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo20, "Think about some of the activities that you do every day that are done automatically");
            await Keywords.verifyElementDisplayed(locator.pagelessontow20, "20 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo21, "Step 1: Direct your attention to the task and your senses");
            await Keywords.verifyElementDisplayed(locator.pagelessontow21, "21 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo22, "Step 2: Notice when you are no longer thinking about what you are doing and gently");
            await Keywords.verifyElementDisplayed(locator.pagelessontow22, "22 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo23, "Remember that the wandering mind is not a mistake or a failure");
            await Keywords.verifyElementDisplayed(locator.pagelessontow23, "23 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo24, "Another activity that research has shown to be very helpful for mood is relaxation");
            await Keywords.verifyElementDisplayed(locator.pagelessontow24, "24 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo25, "While these can be helpful, here we are talking about specific relaxation activities");
            await Keywords.verifyElementDisplayed(locator.pagelessontow25, "25 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo26, "When we feel stressed or anxious, typically our body tenses up and releases stress");
            await Keywords.verifyElementDisplayed(locator.pagelessontow26, "26 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo27, "A deep breathing exercise has 4 steps:\nTake 3 minutes and sit or lie quietly");
            await Keywords.verifyElementDisplayed(locator.pagelessontow27, "27 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo28, "There are many forms of meditation and all of them are likely helpful");
            await Keywords.verifyElementDisplayed(locator.pagelessontow28, "28 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo29, "A common way of focusing attention on the present moment is to focus on breath");
            await Keywords.verifyElementDisplayed(locator.pagelessontow29, "29 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo30, "First, sit in a comfortable position with your feet on the floor and your back straight but not rigid.\n1.\nLet your eyes rest a little lower than straight ahead and your gaze soften. Some people prefer to sit cross-legged on the floor or on a cushion.\n2.\nNotice the physical sensations you can feel where the chair or floor touches your legs and bottom. Spend a moment or two noticing these sensations.\n3.\nNow turn your attention to the physical sensations of your breath moving into and out of your abdomen. There is no need to change your breathing in any way");
            await Keywords.verifyElementDisplayed(locator.pagelessontow30, "30 / 39");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessontwo31, "Sooner or later your mind will wander. When you notice that your mind has wandered");
            await Keywords.verifyElementDisplayed(locator.pagelessontow31, "31 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo32, "The third type of directed relaxation is called Progressive Muscle Relaxation");
            await Keywords.verifyElementDisplayed(locator.pagelessontow32, "32 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo33, "Progress through all the major muscle groups: shoulder, back, chest, upper and lower arms, buttocks, upper and lower legs and feet. Hold each muscle group for a count of 3, release for 3 and repeat 2-3 times for each muscle group");
            await Keywords.verifyElementDisplayed(locator.pagelessontow33, "33 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo34, "A word about sleep\nSleep is one activity that is often affected by mood");
            await Keywords.verifyElementDisplayed(locator.pagelessontow34, "34 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo35, "First, recognize that sleep is a habit. Good habits maintain good sleep");
            await Keywords.verifyElementDisplayed(locator.pagelessontow35, "35 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo36, "Go to bed and get up at the same time, every night, weekends included, regardles");
            await Keywords.verifyElementDisplayed(locator.pagelessontow36, "36 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo37, "Consider your sleep environmen");
            await Keywords.verifyElementDisplayed(locator.pagelessontow37, "37 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo38, "We have introduced a lot of important information. Let's review the key points");
            await Keywords.verifyElementDisplayed(locator.pagelessontow38, "38 / 39");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lessontwo39, "When we avoid certain activities to control strong emotions");
            await Keywords.verifyElementDisplayed(locator.pagelessontow39, "39 / 39");
            await Keywords.click(locator.next, "next");
        });

        it('Lesson_3', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonThree", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(3), "Start Button");
            } else {
                await Keywords.click(locator.review(3), "Review Button");
            }
            await browser.pause(2000);
            await Keywords.verifyElementDisplayed(locator.lessonThree1, "Welcome to Lesson 3 of the Mind Zone Course");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree1, "1 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree2, "I chose to focus on the progressive muscle relaxation as I've never done anything");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree2, "2 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const voiceperlessonThree = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree3, "I'm not sure I notice any other changes yet but I'm going to keep at it");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree3, "3 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree4, "I really noticed how much being alone and higher anxiety go together for me");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree4, "4 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree5, "I haven't tried any of the other meditation or relaxation exercises");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree5, "5 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree6, "In Lesson 3 we look at uncomfortable feelings");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree6, "6 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree7, "Fear");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree7, "7 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree8, "FeEmotions are a natural part of being human and range from the very pleasantar");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree8, "8 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree9, "Unpleasant emotions can result in feeling physically");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree9, "9 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree10, "No one likes unpleasant feelings but most people are able to accept these as an inevitable");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree10, "10 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree11, "People who are distress intolerant often fight against, or try to avoid such feelings");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree11, "11 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree12, "No one knows why some people avoid unpleasant feelings while others do not");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree12, "12 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree13, "Do you think you are someone who is distress intolerant");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree13, "13 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree14, "My feelings of distress or being upset scare me");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree14, "14 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree15, "In contrast people who are better at tolerating unpleasant emotions are more likely to agree with statements like:\nI can tolerate being distressed or upset as well as most people.\nMy feelings of distress or being upset are just an acceptable part of life.\nFeelings don't last - they come and go.\nReflecting on what I am feeling often helps me to clarify");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree15, "15 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree16, "Managing distressing feelings is part of being");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree16, "16 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree17, "Think of distress tolerance on a continuum, with extreme tolerance at one end and extreme intolerance at the other. The healthy balance is somewhere in the middle. Neither extreme is healthy.\nAfter all, unpleasant emotions help us to identify when something is wrong and needs attention.\nIf we never take action (because we are tolerating those emotions so well) then we may stay in an unhealthy situation or fai");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree17, "17 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree18, "On the other hand, there is a range of potentially negative effects of being too intolerant of unpleasant emotions. Managing unpleasant emotions is all about finding a balance");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree18, "18 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree19, "Avoiding or controlling unpleasant emotions can take many forms");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree19, "19 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree20, "Avoiding situations that create unpleasant emotions");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree20, "20 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree21, "Avoiding situations works in that you don't experience the unpleasant feelings");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree21, "21 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree22, "Excessively Seeking Reassurance\nAnother more indirect form of avoidance is excessively");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree22, "22 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree23, "Distracting From or Suppressing Emotions\nA third way of avoiding unpleasant");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree23, "23 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree24, "Or, you may try to suppress your emotions using self-talk such as");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree24, "24 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree25, "The stop it message can be used as a container for thoughts or feelings for short");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree25, "25 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree26, "People who struggle with low mood may withdraw (or numb) emotions, through excessive sleep, eating, or even drugs and alcohol. Or they may withdraw socially, avoiding time with family and friends.\nObviously this can have a negative effect on our life if these behaviours continue for long periods of time");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree26, "26 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree27, "I guess avoiding my friends and Sarah has been a way to avoid having to face some");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree27, "27 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree28, "It was kind of exhausting trying to keep up to his standards");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree28, "28 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree29, "I could relate to the idea of avoiding my anxiety");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree29, "29 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree30, "The main message is...");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree30, "30 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree31, "At the heart of unpleasant emotions is a paradox");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree31, "31 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree32, "There are 3 main steps in learning to face unpleasant emotions");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree32, "32 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree33, "We all hold beliefs about distressing feelings");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree33, "33 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree34, "I can see some of the beliefs I hold");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree34, "34 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceperlessonThree, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree35, "In contrast, people who manage unpleasant feelings well are more likely to believe");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree35, "35 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree36, "Metaphors and similes can be helpful in seeing strong emotions in a different light");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree36, "36 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree37, "Some examples of metaphors for managing strong emotions are");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree37, "37 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree38, "Similes compare two things by saying one");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree38, "38 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree39, "Remember: There is nothing wrong with feeling mad, sad, or fearful");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree39, "39 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree40, "We have introduced a lot of important information.");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree40, "40 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree41, "Distress intolerance comes from a combination of factors");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree41, "41 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonThree42, "Facing unpleasant emotions is a skill that can be learned. There are three main steps");
            await Keywords.verifyElementDisplayed(locator.pagelessonThree42, "42 / 42");
            await Keywords.click(locator.next, "next");

        });

        it('Lesson_4', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonFour", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await Keywords.scrollWithUiScroll("resourceId", "Lesson 6: Challenging Thoughts")
            const Lesson4act = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonFour", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.lesson4Cared, "content-desc", Lesson4act, Lesson4act)
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(4), "Start Button");
            } else {
                await Keywords.click(locator.review(4), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.firstScreenContent, "Welcome to Lesson 4. We hope that you have found the exercises last week helpful.\nWe know it's not easy to keep practicing.");
            await Keywords.verifyElementDisplayed(locator.checkFirstScreen, "1 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.secScreenContent, "You may also be noticing some improvement in physical symptoms if these were an issue for you - more energy, sleeping better, perhaps less muscle tension.");
            await Keywords.verifyElementDisplayed(locator.checkSecScreen, "2 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage3, "I've been thinking a lot about unpleasant emotions.");
            await Keywords.verifyElementDisplayed(locator.checkScreen3, "3 / 53");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfour1 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfour1, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage4, "I haven't been all that keen to try the meditation activities");
            await Keywords.verifyElementDisplayed(locator.checkScreen4, "4 / 53");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfour2 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfour2, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage5, "I have found anxiety really unpleasant and do a lot to try and avoid it.");
            await Keywords.verifyElementDisplayed(locator.checkScreen5, "5 / 53");
            await Keywords.click(locator.playaction, "Play action");
            const lessonfour3 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfour3, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage6, "I have found anxiety really unpleasant and do a lot to try and avoid it.");
            await Keywords.verifyElementDisplayed(locator.checkScreen6, "6 / 53");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfour4 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfour4, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage7, "Matt and Susan are becoming aware of their avoidance behaviours and some of the potential benefits");
            await Keywords.verifyElementDisplayed(locator.checkScreen7, "7 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage8, "The meditation activities that you have been practicing");
            await Keywords.verifyElementDisplayed(locator.checkScreen8, "8 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage9, "The meditation activities that you have been practicing");
            await Keywords.verifyElementDisplayed(locator.checkScreen9, "9 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage10, "Learning to dwell with distress by paying attention to it");
            await Keywords.verifyElementDisplayed(locator.checkScreen10, "10 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage11, "Activating activities are those positive");
            await Keywords.verifyElementDisplayed(locator.checkScreen11, "11 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage12, "Soothing activities are those that are comforting");
            await Keywords.verifyElementDisplayed(locator.checkScreen12, "12 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage13, "While acceptance and activating or soothing activities are all helpful");
            await Keywords.verifyElementDisplayed(locator.checkScreen13, "13 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage14, "Distressing emotions sometimes arise from a situation or problem that we need to address.");
            await Keywords.verifyElementDisplayed(locator.checkScreen14, "14 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage15, "Deliberately going through a structured problem solving process");
            await Keywords.verifyElementDisplayed(locator.checkScreen15, "15 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage16, "Identify the problem, being as specific as possible.");
            await Keywords.verifyElementDisplayed(locator.checkScreen16, "16 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage17, "Another kind of problem might be financial:\nSusan was especially worried about money.");
            await Keywords.verifyElementDisplayed(locator.checkScreen17, "17 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage18, "Write as many ideas as we can think of without evaluating them.");
            await Keywords.verifyElementDisplayed(locator.checkScreen18, "18 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage19, "Example: Susan's possible solutions to financial stress:");
            await Keywords.verifyElementDisplayed(locator.checkScreen19, "19 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage20, "Evaluate several of the solutions that were listed in step 2.");
            await Keywords.verifyElementDisplayed(locator.checkScreen20, "20 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage21, "He decided to evaluate the other 3 options:");
            await Keywords.verifyElementDisplayed(locator.checkScreen21, "21 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage22, "Susan also selected 3 potential solutions and eliminated 3.");
            await Keywords.verifyElementDisplayed(locator.checkScreen22, "22 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage23, "In this step we evaluate each solution and choose 1 or 2.");
            await Keywords.verifyElementDisplayed(locator.checkScreen23, "23 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage24, "Talking to his co-worker was uncomfortable and anxiety producing for Matt.");
            await Keywords.verifyElementDisplayed(locator.checkScreen24, "24 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage25, "Would allow Matt to construct his thoughts carefully.");
            await Keywords.verifyElementDisplayed(locator.checkScreen25, "25 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage26, "Sends a message that he does not want to be disturbed.");
            await Keywords.verifyElementDisplayed(locator.checkScreen26, "26 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage27, "After thinking it through, Matt decided to send an email.");
            await Keywords.verifyElementDisplayed(locator.checkScreen27, "27 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage28, "AfteSusan's Financial Problem");
            await Keywords.verifyElementDisplayed(locator.checkScreen28, "28 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage29, "Tracking in a notebook required a certain amount of discipline.");
            await Keywords.verifyElementDisplayed(locator.checkScreen29, "29 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage30, "2. Ask husband for ideas.");
            await Keywords.verifyElementDisplayed(locator.checkScreen30, "30 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage31, "No restaurant eating for now.");
            await Keywords.verifyElementDisplayed(locator.checkScreen31, "31 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage32, "Both Susan and her husband enjoyed the time they spent together in restaurants");
            await Keywords.verifyElementDisplayed(locator.checkScreen32, "32 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage33, "Making a specific plan is helpful in taking action.");
            await Keywords.verifyElementDisplayed(locator.checkScreen33, "33 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage34, "What might get in the way:");
            await Keywords.verifyElementDisplayed(locator.checkScreen34, "34 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage35, "What I plan to do");
            await Keywords.verifyElementDisplayed(locator.checkScreen35, "35 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage36, "Matt and Susan both implemented their plans.");
            await Keywords.verifyElementDisplayed(locator.checkScreen36, "36 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage37, "Susan and her husband came to an agreement");
            await Keywords.verifyElementDisplayed(locator.checkScreen37, "37 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage38, "One barrier to solving problems");
            await Keywords.verifyElementDisplayed(locator.checkScreen38, "38 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage39, "Scheduling Worry Time");
            await Keywords.verifyElementDisplayed(locator.checkScreen39, "39 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage40, "After you have written your list");
            await Keywords.verifyElementDisplayed(locator.checkScreen40, "40 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage41, "Sometimes anxiety and worry are associated with certain activities.");
            await Keywords.verifyElementDisplayed(locator.checkScreen41, "41 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage42, "One tool that can help is called a Fear Ladder.");
            await Keywords.verifyElementDisplayed(locator.checkScreen42, "42 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage43, "The idea with exposure is that you will plan to do the first thing that causes the least amount of fear.");
            await Keywords.verifyElementDisplayed(locator.checkScreen43, "43 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage44, "Matt: Public Speaking\nMatt found speaking in groups very anxiety provoking.");
            await Keywords.verifyElementDisplayed(locator.checkScreen44, "44 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage45, "Fear Ladder");
            await Keywords.verifyElementDisplayed(locator.checkScreen45, "45 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage46, "Matt decided to begin with the first rung on the ladder.");
            await Keywords.verifyElementDisplayed(locator.checkScreen46, "46 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage47, "Susan found conflict very anxiety provoking.");
            await Keywords.verifyElementDisplayed(locator.checkScreen47, "47 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage48, "Susan constructed her Fear Ladder like this:");
            await Keywords.verifyElementDisplayed(locator.checkScreen48, "48 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage49, "Like Matt, Susan decided to begin with the first rung on the ladder.");
            await Keywords.verifyElementDisplayed(locator.checkScreen49, "49 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage50, "While we will hear from Matt and Susan in future lessons");
            await Keywords.verifyElementDisplayed(locator.checkScreen50, "50 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage51, "We have introduced a lot of important information.");
            await Keywords.verifyElementDisplayed(locator.checkScreen51, "51 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage52, "Observing, labelling, and dwelling with emotions with kindness and non-judgement");
            await Keywords.verifyElementDisplayed(locator.checkScreen52, "52 / 53")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.contantPage53, "Worry is very common and affects us all from time to time.");
            await Keywords.verifyElementDisplayed(locator.checkScreen53, "53 / 53")
            await Keywords.click(locator.nextButton, "next");
            await Keywords.verifyElementDisplayed(locator.mindzoneCourse, "Mind Zone Course Title");
        });

        it('Lesson_5', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonFive", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await Keywords.scrollWithUiScroll("resourceId", "Lesson 6: Challenging Thoughts")
            const Lesson5act = await readData1("MindZoneLessons", "Lessons", "Mindzone", "LessonFive", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.lesson5Cared, "content-desc", Lesson5act, Lesson5act)
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(5), "Start Button");
            } else {
                await Keywords.click(locator.review(5), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.Page1_L5, "Welcome to Lesson 5.");
            await Keywords.verifyElementDisplayed(locator.checkScreen1_L5, "1 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page2_L5, "Perhaps you have found time to try the problem-solving exercise or the worry tree.");
            await Keywords.verifyElementDisplayed(locator.checkScreen2_L5, "2 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page3_L5, "You may recall that at the beginning of the course we discussed the idea that thoughts");
            await Keywords.verifyElementDisplayed(locator.checkScreen3_L5, "3 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page4_L5, "You may recall that at the beginning of the course we discussed the idea that thoughts");
            await Keywords.verifyElementDisplayed(locator.checkScreen4_L5, "4 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page5_L5, "Yesterday in a meeting with my manager, I was filling everyone in about my project.");
            await Keywords.verifyElementDisplayed(locator.checkScreen5_L5, "5 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfive1 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfive1, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page6_L5, "Yesterday when I came into the office my colleague Anne completely ignored me.");
            await Keywords.verifyElementDisplayed(locator.checkScreen6_L5, "6 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfive2 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfive2, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page7_L5, "Now let's look at some other possibilities for understanding these two situations.");
            await Keywords.verifyElementDisplayed(locator.checkScreen7_L5, "7 / 39");
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page8_L5, "In both of these situations");
            await Keywords.verifyElementDisplayed(locator.checkScreen8_L5, "8 / 39");
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page9_L5, "We all interpret situations around us.");
            await Keywords.verifyElementDisplayed(locator.checkScreen9_L5, "9 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page10_L5, "This would not be a problem");
            await Keywords.verifyElementDisplayed(locator.checkScreen10_L5, "10 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page11_L5, "Your friend cancels a date with you for the second time in 2 weeks:");
            await Keywords.verifyElementDisplayed(locator.checkScreen11_L5, "11 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page12_L5, "Your manager brushes past you looking irritable.");
            await Keywords.verifyElementDisplayed(locator.checkScreen12_L5, "12 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page13_L5, "In these examples, it becomes clear that the situation itself is not the problem.");
            await Keywords.verifyElementDisplayed(locator.checkScreen13_L5, "13 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page14_L5, "question_mindzone");
            await Keywords.verifyElementDisplayed(locator.checkScreen14_L5, "14 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page15_L5, "Learning to pay attention to your emotional and physical responses");
            await Keywords.verifyElementDisplayed(locator.checkScreen15_L5, "15 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page16_L5, "We all develop beliefs about ourselves, others, and the world around us.");
            await Keywords.verifyElementDisplayed(locator.checkScreen16_L5, "16 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page17_L5, "Sometimes beliefs arise because we focused on some aspects of the event while ignoring others.");
            await Keywords.verifyElementDisplayed(locator.checkScreen17_L5, "17 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page18_L5, "How we choose to interpret an event sometimes has little to do with facts");
            await Keywords.verifyElementDisplayed(locator.checkScreen18_L5, "18 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page19_L5, "Unhelpful thinking patterns are patterns of thought that can contribute to low mood or anxiety.");
            await Keywords.verifyElementDisplayed(locator.checkScreen19_L5, "19 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page20_L5, "Black and White Thinking (BWT)");
            await Keywords.verifyElementDisplayed(locator.checkScreen20_L5, "20 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page21_L5, "Focusing on the Negative:\nWhen we focus on the negative");
            await Keywords.verifyElementDisplayed(locator.checkScreen21_L5, "21 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page22_L5, "Fortune Telling:\nWhen we engage in fortune telling we behave as though we have a crystal ball");
            await Keywords.verifyElementDisplayed(locator.checkScreen22_L5, "22 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page23_L5, "Mind Reading:\nBelieving that you know what others are thinking and feeling");
            await Keywords.verifyElementDisplayed(locator.checkScreen23_L5, "23 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page24_L5, "Thinking with Your Feelings:\nIf I feel stupid or awkward");
            await Keywords.verifyElementDisplayed(locator.checkScreen24_L5, "24 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page25_L5, "Involves using words like should, must, ought, often.");
            await Keywords.verifyElementDisplayed(locator.checkScreen25_L5, "25 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page26_L5, "Generalizing one or two qualities into a negative global judgment about you.");
            await Keywords.verifyElementDisplayed(locator.checkScreen26_L5, "26 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page27_L5, "Involves believing that events have some personal meaning");
            await Keywords.verifyElementDisplayed(locator.checkScreen27_L5, "27 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page28_L5, "Either blaming someone else for your own pain");
            await Keywords.verifyElementDisplayed(locator.checkScreen28_L5, "28 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page29_L5, "Coming to a general conclusion based upon a single event or incident.");
            await Keywords.verifyElementDisplayed(locator.checkScreen29_L5, "29 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page30_L5, "Expecting disaster, or the worst possible outcome.");
            await Keywords.verifyElementDisplayed(locator.checkScreen30_L5, "30 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page31_L5, "If you feel externally controlled");
            await Keywords.verifyElementDisplayed(locator.checkScreen31_L5, "31 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page32_L5, "You decide what is fair and feel resentful when other people don't agree with you.");
            await Keywords.verifyElementDisplayed(locator.checkScreen32_L5, "32 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page33_L5, "You expect that others will change to suit you if you could just pressure them enough.");
            await Keywords.verifyElementDisplayed(locator.checkScreen33_L5, "33 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page34_L5, "Beginning to notice your habitual ways of thinking about situations");
            await Keywords.verifyElementDisplayed(locator.checkScreen34_L5, "34 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page35_L5, "After reviewing the unhelpful thought list");
            await Keywords.verifyElementDisplayed(locator.checkScreen35_L5, "35 / 39");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfive5 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfive5, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page36_L5, "I could see some of those patterns in myself.");
            await Keywords.verifyElementDisplayed(locator.checkScreen36_L5, "36 / 39");
            await Keywords.click(locator.playaction, "Play action");

            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonfive6 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Audio", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonfive6, "Audio Play Percentage")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page37_L5, "We have introduced a lot of important information.");
            await Keywords.verifyElementDisplayed(locator.checkScreen37_L5, "37 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page38_L5, "There are many possible interpretations of each situation");
            await Keywords.verifyElementDisplayed(locator.checkScreen38_L5, "38 / 39")
            await Keywords.click(locator.nextButton, "next");

            await Keywords.verifyElementDisplayed(locator.Page39_L5, "In order for thoughts/beliefs to be balanced");
            await Keywords.verifyElementDisplayed(locator.checkScreen39_L5, "39 / 39")
            await Keywords.click(locator.nextButton, "next");
            await Keywords.verifyElementDisplayed(locator.mindzoneCourse, "Mind Zone Course Title")
        });

        it('Lesson_6', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Lesson Six", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await browser.pause(2000);
            await Keywords.scrollToElement("accessibility id", "Lesson 6: Challenging Thoughts")
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(6), "Start Button");
            } else {
                await Keywords.click(locator.review(6), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.pagelessonSix1, "1 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix1, "Little interest or pleasure in doing things");
            await Keywords.click(locator.lessonsix1Radio1, "radio button 1");
            await locator.lessonSix1page2.isDisplayed({ timeout: 20000 })
            await Keywords.click(locator.lessonsix2Radio1, "radio button 2");
            await locator.lessonSix2page2.isDisplayed({ timeout: 20000 })
            await Keywords.click(locator.lessonsix3Radio1, "radio button 2");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix2, "2 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix2, "Welcome to Lesson 6! Last week we began looking at thoughts more carefully");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix3, "3 / 55");
            await Keywords.click(locator.lessonsixpage3Radio1, "radio button 1");
            await Keywords.click(locator.lessonsixpage3Radio2, "radio button 2");
            await Keywords.click(locator.lessonsixpage3Radio3, "radio button 3");
            await Keywords.click(locator.lessonsixpage3Radio4, "radio button 4");
            await Keywords.click(locator.lessonsixpage3Radio5, "radio button 5");
            await Keywords.click(locator.lessonsixpage3Radio6, "radio button 6");
            await Keywords.click(locator.lessonsixpage3Radio7, "radio button 7");
            await Keywords.click(locator.lessonsixpage3Radio8, "radio button 8");
            await Keywords.click(locator.lessonsixpage3Radio9, "radio button 9");
            await Keywords.click(locator.lessonsixpage3Radio10, "radio button 10");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessonSix4, "4 / 55");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const lessonsicx = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonsicx, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix5, "5 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix5, "Welcome to Lesson 6! Last week we began looking at thoughts more carefully");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix6, "6 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix6, "I am starting to feel better");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonsicx, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix7, "7 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix7, "I did get anxious but found just using the deep breathing technique and trying");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", lessonsicx, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix8, "8 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix8, "This week we are going to address the things that Matt and Susan are wondering about and work on challenging unhelpful thoughts using a tool called a thought record.\nThe purpose of the thought record is to help you to develop more balanced, realistic thoughts.\nSome people equate this with positive thinking. It's not the same. Positive thinking is usually not helpful, partly because it is not believable and partly because it does not address the negative well");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix9, "9 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix9, "When we learn to develop realistic, balanced thinking");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix10, "10 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix10, "Before we get into the thought record");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix11, "11 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix11, "While you may not always be able to state what you believe");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix12, "12 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix12, "I must be perfect in all that I do or I am a failure");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix13, "13 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix13, "lf we hold ourselves to super human standards we are likely to be stressed a lot");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix14, "14 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix14, "I must always be at my best");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix15, "15 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix15, "Doing vs being as the source of valuet");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix16, "16 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix16, "To challenge this belief, consider a baby or a frail elderly person");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix17, "17 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix17, "If someone disagrees with me");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix18, "18 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix18, "If disagreement is not acceptable");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix19, "19 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix19, "I must be liked by everyone");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix20, "20 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix20, "Emotions like anger are bad and should not be expressed");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix21, "21 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix21, "A better approach is to consider that all emotions are a part of life");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix22, "22 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix22, "If I try hard enough");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix23, "23 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix23, "I will be happy in the future once X, Y, or Z changes");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix24, "24 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix24, "I need someone to look after me");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix25, "25 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix25, "A more balanced or realistic belief might be:");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix26, "26 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix26, "It's easier to avoid conflict or other upsetting situations than to face them");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix27, "27 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix27, "Here is the list of beliefs again ");
            await Keywords.click(locator.lessonsixpage27Radio1, "radio button 1");
            await Keywords.click(locator.lessonsixpage27Radio2, "radio button 2");
            await Keywords.click(locator.lessonsixpage27Radio3, "radio button 3");
            await Keywords.click(locator.lessonsixpage27Radio4, "radio button 4");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.pagelessonSix28, "28 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix28, "And some others —check off any that are close to something you believe.");
            await Keywords.click(locator.lessonsixpage28Radio1, "radio button 1");
            await Keywords.click(locator.lessonsixpage28Radio2, "radio button 2");
            await Keywords.click(locator.lessonsixpage28Radio3, "radio button 3");
            await Keywords.click(locator.lessonsixpage28Radio4, "radio button 4");
            await Keywords.click(locator.lessonsixpage28Radio5, "radio button 3");
            await Keywords.click(locator.lessonsixpage28Radio6, "radio button 4");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix29, "29 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix29, "Now that we have looked at both unhelpful thoughts and your own beliefs");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix30, "30 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix30, "Choose one situation from last week");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix31, "31 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix31, "Write your thoughts here. Rate each thought on a scale of 1-10");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix32, "32 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix32, "Re-consider the feelings you had, whether these were emotional or physical sensation");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix33, "33 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix33, "Identify what you did at the time and how that affected the situation");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix34, "34 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix34, "Now we will move on to the newer elements");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix35, "35 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix35, "First, write down all of the facts that you can possibly think of that suppor");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix36, "36 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix36, "For the evidence in support of this thought he identifies the following");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix37, "37 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix37, "Now move to arguing the other side");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix38, "38 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix38, "The next step in the thought record is to consider both sides of the evidence");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix39, "39 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix39, "Let's look at Matt's example");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix40, "40 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix40, "The final step is to reconsider how the new thought feels");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix41, "41 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix41, "Susan's Example\nIdentify a situation in which you felt distressed");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix42, "42 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix42, "Identify the feeling");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix43, "43 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix43, "Identify all the facts you can think of that support");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix44, "44 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix44, "Sometimes now I feel anxious but I don't necessarily have a full blown anxiety attack");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix45, "45 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix45, "Considering both #5 and #6, write a statement that addresses both");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix46, "46 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix46, "Consider your original feelings identified in ");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix47, "47 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix47, "How might you use the thought record in everyday life ");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix48, "48 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix48, "Many people find the thought record is the most valuable tool of all that they learn");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix49, "49 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix49, "his week we will ask you to write out 2 thought records");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix50, "50 / 55");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix51, "51 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix51, "Some common beliefs that can have a negative impact on our mood");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix52, "52 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix52, "Some common beliefs that can have a negative impact on our mood");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix53, "53 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix53, "One means of challenging unhelpful or distressing thoughts and beliefs");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix54, "54 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix54, "Identify the feelings that you had in response");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSix55, "55 / 55");
            await Keywords.verifyElementDisplayed(locator.lessonSix55, "Consider your original feelings identified in step");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.mindzoneCourse, "Mind Zone Course Title")
        });

        it('Lesson_7', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Lesson Seven", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await browser.pause(2000);
            await Keywords.scrollWithUiScroll("resourceId", "lesson 8: moving forward_text")
            if (await locator.lessonStartBtn.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.startButton(7), "Start Button");
            } else {
                await Keywords.click(locator.review(7), "Review Button");
            }

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven1, "1 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSeven1, "Little interest or pleasure in doing things");
            await Keywords.verifyElementDisplayed(locator.lessonSeven1page2, "option 1")
            await Keywords.click(locator.lessonSeven1Radio1, "radio button 1");
            await Keywords.verifyElementDisplayed(locator.lessonseven2Radio1, "option 2")
            await Keywords.click(locator.lessonseven2Radio1, "radio button 2");
            await Keywords.verifyElementDisplayed(locator.lessonSeven3page2, "option 3")
            await Keywords.click(locator.lessonSeven3page2, "radio button 3");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven2, "2 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage2, "Welcome to Lesson 7");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven3, "3 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage3, "One of the areas that is sometimes a problem for people struggling with low mood");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven4, "4 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage4, "Unfortunately, when we are not feeling emotionally well");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven5, " 5/ 48");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven6, "6 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSeven1page1, "I have close friends");
            await Keywords.click(locator.lessonSeven5Radio1, "radio button 1");
            await locator.lessonSeven1page2.isDisplayed({ timeout: 20000 })
            await Keywords.click(locator.lessonseven2Radio2, "radio button 2");
            await Keywords.click(locator.lessonSeven3page3, "radio button 3");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven7, "7 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage7, "Susan");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven8, "8 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage8, "First, consider if there are people in your current social network");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven9, "9 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage9, "Offer openness, but don't push it");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven10, "10 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage10, "Assess the reaction of your friend to your openness");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven11, "11 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage11, "Assess the reaction of your friend to your opennesCultivate a wide circle. One or two relationships are never enough to meet all our social needs.\n3.\nIf you want to make some new connections, join a club or a group activity that you are interested in. Try volunteering or attend events in your community. And remember to unplug! If you are buried in an iPad or your phone, you will appear less available.\nRelationships typically grow out of shared interests. Even if no close friends come out of a certain activity at least you will have found a group to do things with, which meets some of our social needss");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven12, "12 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage12, "If you are more introverted, shy, or anxious about connecting with people");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven13, "13 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage13, "Consider the people in your social network who are acquaintances");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven14, "14 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage14, "Barriers to building relationships");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven15, "15 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage15, "Fear of reaching out - you may have some anxiety about being rejected");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven16, "16 / 48");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven17, "17 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage17, "Think about how your relationships feel to you");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven18, "18 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage18, "TYou can also evaluate a relationship by thinking about how you feel when you are with that person (or after you leave them). Healthy relationships allow you to be yourself. Thinking about a particular relationship, do you:\nFeel respected and valued?\nFeel good about yourself when you're with this person?\nFeel safe and able to trust the person?\nCan you be yourself with them?\nThese are hallmarks of a healthy relationship");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven19, "19 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage19, "Our primary relationships are often the romantic kind, with a partner, spouse");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven20, "20 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage20, "When we are struggling with low mood, anxiety or other emotional things");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven21, "21 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage21, "John Gottman is a leading researcher in the area of successful marriages");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven22, "22 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage22, "Gottman has studied communication patterns of successful couples over a 30-year period");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven23, "23 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage23, "The negative interactions that happen for couples who are struggling include 4");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven24, "24 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage24, "Criticism...is the first horseman");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven25, "25 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage25, "Contempt...");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven26, "26 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage26, "Defensiveness...");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven27, "27 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage27, "Stonewalling..");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven28, "28 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage28, "Think about your relationship with your partner... ");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven29, "29 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage29, "A second area that has come out of Gottman's work with couples");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven30, "30 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage30, "Assertive communication is a key aspect of healthy relationships, at home");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven31, "31 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage31, "Let's look at an example");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven32, "32 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage32, "In this instance, the manager is the more aggressive party");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven33, "33 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage33, "Assertiveness has a great many benefits");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven34, "34 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage34, "In contrast, people with a passive communication");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven35, "35 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage35, "People who use an aggressive style can be experienced as intimidating or humiliating");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven36, "36 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage36, "To develop a more assertive style, remember the following");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven37, "37 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage37, "Assertive people do not take responsibility for others");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven38, "38 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage38, "Another skill that assertive people use is to effectively express their");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven39, "39 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage39, "Receiving complaints or compliments is not easy for many of us");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven40, "40 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage40, "Assertive people know how to say no");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven41, "41 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage41, "To assess your own style, think about whether you voice your opinions and are");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven42, "42 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage42, "Pay attention to your emotions");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven43, "43 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage43, "We have introduced a lot of important information");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven44, "44 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage44, "Cultivate a wide circle of relationships");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven45, "45 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage45, "Gattman, a relationship expert, identified that a ratio of 5 positive interactions");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven46, "46 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage46, "The way in which we respond when our partner asks for attention");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven47, "47 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage47, "Passive communication often leads one to get pushed around");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessonSeven48, "48 / 48");
            await Keywords.verifyElementDisplayed(locator.lessonSevenpage48, "Do not take responsibility for other's reactions to them");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.mindzoneCourse, "Mind Zone Course Title")
        });

        it('Lesson_8', async () => {
            const description = await readData1("MindZoneLessons", "Lessons", "Mindzone", "Lesson Eight", `${testCases[i].testId}`);
            allureReporter.addDescription(description);
            await browser.pause(2000);
            await Keywords.scrollWithUiScroll("resourceId", "lesson 8: moving forward_text");
            while (true) {
                await Keywords.scrollToEnd(3);
                if (await locator.startButton(8).isDisplayed({ timeout: 80000 })) {
                    break;
                } else if (await locator.review(8).isDisplayed({ timeout: 80000 })) {
                    break;
                }
            }
            if (await locator.startButton(8).isDisplayed({ timeout: 80000 })) {
                await Keywords.click(locator.startButton(8), "Start Button");
            } else {
                await Keywords.click(locator.review(8), "Review Button");
            }
            await Keywords.verifyElementDisplayed(locator.lessoneight1, "Little interest or pleasure in doing things");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight1, "1 / 42");
            await Keywords.click(locator.pagelessoneight1, "not at all");
            await Keywords.click(locator.lessoneight2Radio1, "several days");
            await Keywords.click(locator.lessoneight3Radio1, "not at all");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight2, "Little interest or pleasure in doing things");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight2, "2 / 42");
            await Keywords.click(locator.next, "next");

            await browser.pause(2000)
            await Keywords.verifyElementDisplayed(locator.lessoneight3, "In Lesson 8 we will address these thoughts and feelings. We also focus on how you can build on what you have learned so far and what to do if your mood or anxiety should be more of a problem down the road.\nBefore we move into our topics for this week though, let's check back with Matt and Susan to see what they have been thinking about");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight3, "3 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight4, "I can't believe how quickly the course has gone by");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight4, "4 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const voiceper = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceper, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight5, "I have been watching and thinking about that a lot this past week");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight5, "5 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            const voiceper1 = await readData1("MindZoneLessons", "Lessons", "Mindzone", "voice", `${testCases[i].testId}`);
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceper1, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight6, "I am feeling a lot better");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight6, "6 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceper1, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight7, "I have continued to use the worry tree and thought record. These seem helpful too but I need to practice more with them before I really get it.\nThis past week I have been thinking about my social network and that I don't have enough relationships in my life. I do have friends but I don't keep up with them very well. I am pushing myself to go out more often and I do see my anxiety is better. When I get a little further along, my next step will be to try reaching out a bit more and plan activities with people I want to have a relationship with.");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight7, "7 / 42");
            await Keywords.click(locator.playaction, "Play action");
            await Keywords.verifyElementDisplayed(locator.replayaction, "Replay action")
            await Keywords.verifyText(locator.audiopercentage, "content-desc", voiceper1, "Audio Play Percentage")
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight8, "While most people are helped by a course such as this one");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight8, "8 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight9, "You might be able to relate this to other experiences in your life. For example");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight9, "9 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight10, "You may have already experienced this");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight10, "10 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight11, "You may have already experienced this");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight11, "11 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.pagelessoneight12, "12 / 42");
            await Keywords.click(locator.lessoneight11Radio1, "Tracking");
            await Keywords.click(locator.lessoneight12Radio1, "radio button 2");
            await Keywords.click(locator.lessoneight13Radio1, "=radio button 3");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight13, "Feelings");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight13, "13 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight14, "Thoughts");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight14, "14 / 42");
            await Keywords.click(locator.lessoneight14Radio1, "Tracking");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight15, "My Moving Forward Goal statement\nGO TO MY GOALS");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight15, "15 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight16, "Now that you have started to think about which activities you want to continue, let's talk about managing lapses");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight16, "16 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight17, "Learning to manage relapses");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight17, "17 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight18, "Learning to manage relapses");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight18, "18 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight19, "There are two main things for me. If things are not going well at work and I think my manager is unhappy about what I am doing");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight19, "19 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lessoneight20, "There are two main things for me. If things are not going well at work and I think my manager is unhappy about what I am doing");
            await Keywords.verifyElementDisplayed(locator.pagelessoneight20, "20 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page21Text, "Text in Lesson 8 page 21");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(21), "21 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page22Text, "Text in Lesson 8 page 22");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(22), "22 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page23Text, "Text in Lesson 8 page 23");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(23), "23 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page24Text, "Text in Lesson 8 page 24");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(24), "24 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page25Text, "Text in Lesson 8 page 25");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(25), "25 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page26Text, "Text in Lesson 8 page 26");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(26), "26 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page27Text, "Text in Lesson 8 page 27");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(27), "27 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page28Text, "Text in Lesson 8 page 28");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(28), "28 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page29Text, "Text in Lesson 8 page 29");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(29), "29 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page30Text, "Text in Lesson 8 page 30");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(30), "30 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page31Text, "Text in Lesson 8 page 31");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(31), "31 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page32Text, "Text in Lesson 8 page 32");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(32), "32 / 42");
            await Keywords.click(locator.next, "next");


            await Keywords.verifyElementDisplayed(locator.lesson8Page33Text, "Text in Lesson 8 page 33");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(33), "33 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page34Text, "Text in Lesson 8 page 34");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(34), "34 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page35Text, "Text in Lesson 8 page 35");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(35), "35 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page36Text, "Text in Lesson 8 page 36");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(36), "36 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page37Text, "Text in Lesson 8 page 37");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(37), "37 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page38Text, "Text in Lesson 8 page 38");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(38), "38 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page39Text, "Text in Lesson 8 page 39");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(39), "39 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page40Text, "Text in Lesson 8 page 40");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(40), "40 / 42");
            await Keywords.click(locator.next, "next");

            await Keywords.verifyElementDisplayed(locator.lesson8Page41Text, "Text in Lesson 8 page 41");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(41), "41 / 42");
            await Keywords.click(locator.next, "next");
            await Keywords.verifyElementDisplayed(locator.lesson8Page42Text, "Text in Lesson 8 page 42");
            await Keywords.verifyElementDisplayed(locator.lesson8PageNumber(42), "42 / 42");
            await Keywords.click(locator.next, "next");
            await Keywords.waitForDisplay(locator.mindzoneCourse, 90000, "Mind zone course")
        });

        afterEach(async () => {

            if (await locator.exitLesson.isDisplayed({ timeout: 60000 })) {
                await Keywords.click(locator.exitLesson, "Exit lesson");
                await Keywords.waitForDisplay(locator.youAreAboutToLeave, 90000, "You are about to leave");
                await Keywords.verifyElementIsEnabled(locator.yesButton, "Yes Button");
                await Keywords.click(locator.yesButton, "Yes Button");
                await Keywords.waitForDisplay(locator.mindzoneCourse, 90000, "Mind zone course");
            }
        });
    });
}