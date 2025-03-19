import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { getRandomString, saveTestDataToJson, readData1, generateRandomNumber, writeExcelData1, getFilteredTests } from '../../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Sign-Up Positive', async () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    let testName = '';
    const testCases = getFilteredTests("signup", "Signup-Positive", "TC_01");


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
            try {
                const role = await readData1("signup", "Signup-Positive", "TC_01", "Role", `${testCases[i].testId}`);
                const description = await readData1("signup", "Signup-Positive", "TC_01", "Test Description", `${testCases[i].testId}`);
                allureReporter.addDescription(description)
                console.log(`Role: ${role}`)
                const employeeText = await readData1("signup", "Signup-Positive", "TC_01", "EmployeeText", `${testCases[i].testId}`);
                const studentText = await readData1("signup", "Signup-Positive", "TC_01", "StudentText", `${testCases[i].testId}`);
                const FirstName = `PrabhaAuto${getRandomString()}`
                await writeExcelData1("signup", "Signup-Positive", "TC_01", `${testCases[i].testId}`, "Firstname", FirstName);
                const LastName = (`Automation${getRandomString()}`).toLowerCase();
                await writeExcelData1("signup", "Signup-Positive", "TC_01", `${testCases[i].testId}`, "Lastname", LastName);
                const mailPrefix = await readData1("signup", "Signup-Positive", "TC_01", "MailPrefix", `${testCases[i].testId}`);
                const mail = `${mailPrefix}${getRandomString() + generateRandomNumber()}@mailinator.com`;
                await writeExcelData1("signup", "Signup-Positive", "TC_01", `${testCases[i].testId}`, "Email", mail);
                const phoneNumber = await readData1("signup", "Signup-Positive", "TC_01", "Phone number", `${testCases[i].testId}`);
                const password = await readData1("signup", "Signup-Positive", "TC_01", "Password", `${testCases[i].testId}`);
                const employerName = await readData1("signup", "Signup-Positive", "TC_01", "Employer name", `${testCases[i].testId}`);
                const referral = await readData1("signup", "Signup-Positive", "TC_01", "Referrals", `${testCases[i].testId}`);
                const dob = await readData1("signup", "Signup-Positive", "TC_01", "DOB", `${testCases[i].testId}`);
                const relation = await readData1("signup", "Signup-Positive", "TC_01", "Relation", `${testCases[i].testId}`);
                const referralDropdownText = await readData1("signup", "Signup-Positive", "TC_01", "ReferralText", `${testCases[i].testId}`);
                const dobText = await readData1("signup", "Signup-Positive", "TC_01", "dobText", `${testCases[i].testId}`);
                const studentId = await readData1("signup", "Signup-Positive", "TC_01", "StudentId", `${testCases[i].testId}`);
                const courseEnrolled = await readData1("signup", "Signup-Positive", "TC_01", "CourseEnrolled", `${testCases[i].testId}`);
                const program = await readData1("signup", "Signup-Positive", "TC_01", "Program", `${testCases[i].testId}`);
                await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
                await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
                await Keywords.click(locator.startNow, "Start Now Button")
                await Keywords.verifyElementIsEnabled(locator.createAccountButton, "Create Account button");
                const createBtnTxt = await locator.createAccountButton.getText();
                console.log(createBtnTxt)
                await Keywords.click(locator.createAccountButton, "Create Account button")
                await Keywords.verifyElementIsEnabled(locator.createRequestButton, "Create Request button")
                await Keywords.click(locator.createRequestButton, "Create Account button")
                await Keywords.verifyElementDisplayed(locator.signUpPage, "Signup screen")
                if (role == "Employee") {
                    await Keywords.verifyText(locator.employeeText, "content-desc", employeeText, "I am a Employee")
                    await Keywords.isEnabled(locator.employeeButton, "Employee Button")
                    await Keywords.click(locator.employeeButton, "Employee Button");
                } else {
                    await Keywords.verifyText(locator.studentText, "content-desc", studentText, "I am a Student")
                    await Keywords.isEnabled(locator.studentButton, "Student Button")
                    await Keywords.click(locator.studentButton, "Student Button");
                }
                await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                await Keywords.click(locator.nextButton, "Next Button")
                console.log({
                    FirstName,
                    LastName,
                    mail,
                    phoneNumber,
                    password, employerName, referral, dob, relation
                });
                await Keywords.SetValue(locator.firstName, FirstName);
                await Keywords.SetValue(locator.lastName, LastName);
                await Keywords.SetValue(locator.emailId, mail);
                await Keywords.SetValue(locator.phoneNumber, phoneNumber);
                await Keywords.SetValue(locator.passwordField, password);
                await Keywords.SetValue(locator.repeatPassword, password);
                if (!await locator.nextButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                await Keywords.click(locator.nextButton, "Next Button")
                if (role === "Employee") {
                    await Keywords.SetValue(locator.employerName, employerName);
                    await Keywords.verifyText(locator.referralDropdownText, "content-desc", referralDropdownText, "Referral dropdown")
                    await Keywords.click(locator.referral, "Referral dropdown");
                    await Keywords.click(locator.referrals(referral), referral)
                    await Keywords.verifyText(locator.dobText, "content-desc", dobText, "DOB")
                    await Keywords.SetValue(locator.dob, dob);
                    await Keywords.SetValue(locator.relationToEmployee, relation);
                } else {
                    await Keywords.verifyText(locator.referralDropdownText, "content-desc", referralDropdownText, "Referral dropdown")
                    await Keywords.click(locator.referral, "Referral dropdown");
                    await Keywords.click(locator.referrals(referral), referral)
                    await Keywords.verifyText(locator.dobText, "content-desc", dobText, "DOB")
                    await Keywords.SetValue(locator.dob, dob);
                }
                if (!await locator.signUpButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.click(locator.signUpButton, "Signup button");
                if (role === 'Student') {
                    await Keywords.waitForDisplay(locator.studentInformationScreen, 60000, "Student Information Screen")
                    await Keywords.isDisplayed(locator.athabascaUniversity, "Athabasca University");
                    await Keywords.SetValue(locator.studentId, studentId)
                    await Keywords.SetValue(locator.courseEnrolled, courseEnrolled);
                    if (!await locator.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                    await Keywords.click(locator.nextButton, "Next Button")
                }
                await Keywords.verifyElementIsEnabled(locator.verifyYourAccount, "Verify your account")
                await Keywords.waitForDisplay(locator.verifyYourAccount, timeout, "Verify your account");
                await Keywords.click(locator.getMail, "Get by email card")
                await Keywords.verifyElementIsEnabled(locator.verifyButton, "Verify button")
                await Keywords.click(locator.verifyButton, "Verify Button");
                const otp = await Keywords.getOTPFromMailinator(mail);
                expect(otp).to.not.equal("");
                await driver.switchContext('NATIVE_APP');
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), otp[i]);
                }
                await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                if (role.toLowerCase() === "student") {
                    await Keywords.verifyElementIsEnabled(locator.mentalHealthCard, "Mental Health card");
                    await Keywords.click(locator.mentalHealthCard, "Mental Health card")
                } else {
                    await Keywords.verifyElementIsEnabled(locator.program(program), program);
                    await Keywords.click(locator.program(program), program)
                }
                await Keywords.verifyElementIsEnabled(locator.sendRequestButton, "Send Request Button")
                await Keywords.click(locator.sendRequestButton, "Send Request Button")
                await driver.pause(5000);
                if (await Keywords.isDisplayed(locator.allowNotificationButton, "Allow Notification Button")) {
                    await Keywords.locator.allowNotificationButton.click();
                }
                await Keywords.waitForDisplay(locator.success, 45000, "Success Message!!!");
                await Keywords.click(locator.closeButton, "Close Button");
                await Keywords.waitForDisplay(locator.startNow, 30000, "Start Now Button");
                await saveTestDataToJson(testCases[i].testId, testCases[i].testDescription, role, FirstName, LastName, mail, password, program)
                await Keywords.programApprove(mail);
            } catch (err) {
                throw new Error(err);
            }
        })
    }
});
