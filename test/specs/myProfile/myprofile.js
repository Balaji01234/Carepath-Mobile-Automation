import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'



describe('My Profile Positive', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);

    const testCases = getFilteredTests("myProfile", "myProfile-Positive", "myProfile-positive");
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });

    for (let i = 0; i < testCases.length; i++) {
        it(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            allureReporter.addDescription(`${testCases[i].testDescription}`);
            try {
                const email = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Email", `${testCases[i].testId}`);
                const password = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Password", `${testCases[i].testId}`);
                const program = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Program", `${testCases[i].testId}`);
                const firstName = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Firstname", `${testCases[i].testId}`);
                const lastName = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Lastname", `${testCases[i].testId}`);
                const userNameInput = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Username", `${testCases[i].testId}`);
                const gender = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Gender", `${testCases[i].testId}`);
                const preferredLanguage = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Preferred Language", `${testCases[i].testId}`);
                const maritalStatus = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Marital Status", `${testCases[i].testId}`);
                const children = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Children", `${testCases[i].testId}`);
                const reasonForCare = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Reason for care", `${testCases[i].testId}`);
                const upcomingTreatment = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Upcoming Treatment", `${testCases[i].testId}`);
                const treatmentDate = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Treatment Date", `${testCases[i].testId}`);

                const completeYourProfile = {
                    gender: gender,
                    preferredLanguage: preferredLanguage,
                    maritalStatus: maritalStatus,
                    children: children,
                    reasonForCare: reasonForCare,
                    upcomingTreatment: upcomingTreatment,
                    treatmentDate: treatmentDate
                }
                console.log({ email, password, program });
                await Keywords.login(email, password, program);
                await browser.pause(3000);
                if (await locator.completeYourProfilePopup.isDisplayed({ timeout: 90000 })) {
                    await Keywords.completeYourProfile(completeYourProfile);
                }
                // await Keywords.verifyElementDisplayed(locator.program(program), program);
                await Keywords.verifyElementDisplayed(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.click(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.verifyElementDisplayed(locator.myProfile, "My Profile");
                await Keywords.click(locator.myProfile, "My Profile");
                await Keywords.verifyElementDisplayed(locator.editInformationIcon("My Profile"), "Edit Information Icon");
                await Keywords.click(locator.editInformationIcon("My Profile"), "Edit Information Icon");
                await Keywords.SetValue(locator.editFirstName, firstName);
                await Keywords.SetValue(locator.editLastName, lastName);
                if(program.toLowerCase() == "elder care"){
                    await Keywords.verifyElementDisplayed(locator.userNameField, "User Name Field");
                    await Keywords.verifyElementDisplayed(locator.userNameHintText, "User Name Hint Text");
                    await Keywords.SetValue(locator.userNameInput, userNameInput);
                }
              

            } catch (err) {
                throw new Error(err);
            }
        });
    }

    it.only("admin", async () => {
        await Keywords.eventCreationInAdminPortal("AutomationTest","Test Event");
    })
});
