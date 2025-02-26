import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, saveTestDataToJson, readData1, generateRandomNumber, dataSets, writeExcelData1, getFilteredTests } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', async () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.SIGN_UP_ITERATIONS
    console.log("iterations: " + iterations)
    let iterationValue = dataSets(iterations)
    let testName = '';
    const testCases = getFilteredTests("Signup-Positive", "TC_01");
    console.log("Filtered Test Cases from Excel:", testCases);

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });

    it.skip('should login with valid credentials', async () => {
        allureReporter.addDescription(`
            1. Click on the "Start Now" button.
            2. Check if the login screen is displayed.
            3. Enter the username and password.
            4. Check if the login button is enabled.
            5. Handle any dialog boxes related to notifications.
            6. Log in successfully if all steps are completed.
        `);
        try {
            await Keywords.waitForDisplay(locator.startNow, 60000, "Start Now Button")
            await Keywords.click(locator.startNow, "Start Now Button")
            const loginDisplay = await Keywords.isDisplayed(locator.loginScreen, "Login screen")
            expect(loginDisplay).to.be.true;
            await Keywords.SetValue(locator.userName, process.env.USER_NAME);
            await Keywords.SetValue(locator.password, process.env.PASSWORD);
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
            await Keywords.verifyElementDisplayed(locator.mentalHealthCard, "Mental Health card")
            await Keywords.click(locator.mentalHealthCard, "Mental Health card")
            await Keywords.waitForDisplay(onboardLocator.mentalHealthText, 60000, "Mental Health Text");
        } catch (err) {
            throw new Error(err);
        }
    });

    for (let i = 0; i < testCases.length; i++) {
        it.only(`${testCases[i].testId} - ${testCases[i].testDescription}`, async () => {
            try {
                const role = await readData1("Signup-Positive", "TC_01", "Role", `${testCases[i].testId}`);
                const description = await readData1("Signup-Positive", "TC_01", "Test Description", `${testCases[i].testId}`);
                allureReporter.addDescription(description)
                console.log(`Role: ${role}`)
                const employeeText = await readData1("Signup-Positive", "TC_01", "EmployeeText", `${testCases[i].testId}`);
                const studentText = await readData1("Signup-Positive", "TC_01", "StudentText", `${testCases[i].testId}`);
                const FirstName = `Prabha${getRandomString()}`
                await writeExcelData1("Signup-Positive", "TC_01", `${testCases[i].testId}`, "Firstname", FirstName);
                const LastName = (`Automation${getRandomString()}`).toLowerCase();
                await writeExcelData1("Signup-Positive", "TC_01", `${testCases[i].testId}`, "Lastname", LastName);
                const mailPrefix = await readData1("Signup-Positive", "TC_01", "MailPrefix", `${testCases[i].testId}`);
                const mail = `${mailPrefix}${getRandomString() + generateRandomNumber()}@mailinator.com`;
                await writeExcelData1("Signup-Positive", "TC_01", `${testCases[i].testId}`, "Email", mail);
                const phoneNumber = await readData1("Signup-Positive", "TC_01", "Phone number", `${testCases[i].testId}`);
                const password = await readData1("Signup-Positive", "TC_01", "Password", `${testCases[i].testId}`);
                const employerName = await readData1("Signup-Positive", "TC_01", "Employer name", `${testCases[i].testId}`);
                const referral = await readData1("Signup-Positive", "TC_01", "Referrals", `${testCases[i].testId}`);
                const dob = await readData1("Signup-Positive", "TC_01", "DOB", `${testCases[i].testId}`);
                const relation = await readData1("Signup-Positive", "TC_01", "Relation", `${testCases[i].testId}`);
                const referralDropdownText = await readData1("Signup-Positive", "TC_01", "ReferralText", `${testCases[i].testId}`);
                const dobText = await readData1("Signup-Positive", "TC_01", "dobText", `${testCases[i].testId}`);
                const studentId = await readData1("Signup-Positive", "TC_01", "StudentId", `${testCases[i].testId}`);
                const courseEnrolled = await readData1("Signup-Positive", "TC_01", "CourseEnrolled", `${testCases[i].testId}`);
                const program = await readData1("Signup-Positive", "TC_01", "Program", `${testCases[i].testId}`);
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
                    await Keywords.waitForDisplay(locator.studentInformationScreen, "Student Information Screen")
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
                await saveTestDataToJson(role, FirstName, LastName, mail, password, program)
            } catch (err) {
                throw new Error(err);
            }
        })
    }

    for (let i = 0; i < iterationValue.length; i++) {
        it(`Sign Up - Negative Iteration${iterationValue[i]}`, async () => {
            try {
                const role = await readData1("Signup-Positive", "TC_01", "Role", `${testCases[i].testId}`);
                const description = await readData1("Signup-Positive", "TC_01", "Test Description", `${testCases[i].testId}`);
                allureReporter.addDescription(description);
                console.log(`Role: ${role}`)
                const employeeText = await readData1("Signup-Positive", "TC_01", "EmployeeText", `${testCases[i].testId}`);
                const studentText = await readData1("Signup-Positive", "TC_01", "StudentText", `${testCases[i].testId}`);
                const FirstName = `Prabha${getRandomString()}`
                await writeExcelData1("Signup-Negative", "SignUpNegative", `${testCases[i].testId}`, "Firstname", FirstName);
                const LastName = (`Automation${getRandomString()}`).toLowerCase();
                await writeExcelData1("Signup-Negative", "SignUpNegative", `${testCases[i].testId}`, "Lastname", LastName);
                const mail = `prabha${getRandomString() + generateRandomNumber()}@mailinator.com`;
                await writeExcelData1("Signup-Negative", "SignUpNegative", `${testCases[i].testId}`, "Email", mail);
                const phoneNumber = await readData1("Signup-Positive", "TC_01", "Phone number", `${testCases[i].testId}`);
                const password = await readData1("Signup-Positive", "TC_01", "Password", `${testCases[i].testId}`);
                const validEmployerName = await readData1("Signup-Positive", "TC_01", "Employer name", `${testCases[i].testId}`);
                const employerName = await readData1("Signup-Negative", "SignUpNegative", "Employer name", `${testCases[i].testId}`);
                const referral = await readData1("Signup-Positive", "TC_01", "Referrals", `${testCases[i].testId}`);
                const dob = await readData1("Signup-Positive", "TC_01", "DOB", `${testCases[i].testId}`);
                const relation = await readData1("Signup-Positive", "TC_01", "Relation", `${testCases[i].testId}`);
                const referralDropdownText = await readData1("Signup-Positive", "TC_01", "ReferralText", `${testCases[i].testId}`);
                const studentId = await readData1("Signup-Positive", "TC_01", "StudentId", `${testCases[i].testId}`);
                const courseEnrolled = await readData1("Signup-Positive", "TC_01", "CourseEnrolled", `${testCases[i].testId}`);
                const program = await readData1("Signup-Positive", "TC_01", "Program", `${testCases[i].testId}`);
                const FirstNameErrorText = await readData1("Signup-Negative", "SignUpNegative", "FirstNameErrorText", `${testCases[i].testId}`);
                const LastNameErrorText = await readData1("Signup-Negative", "SignUpNegative", "LastNameErrorText", `${testCases[i].testId}`);
                const EmailIDErrorText = await readData1("Signup-Negative", "SignUpNegative", "EmailIDErrorText", `${testCases[i].testId}`);
                const PhoneNumberErrorText = await readData1("Signup-Negative", "SignUpNegative", "PhoneNumberErrorText", `${testCases[i].testId}`);
                const RepeatPasswordErrorText = await readData1("Signup-Negative", "SignUpNegative", "RepeatPasswordErrorText", `${testCases[i].testId}`);
                const PasswordHint = await readData1("Signup-Negative", "SignUpNegative", "PasswordHint", `${testCases[i].testId}`);
                const invalidFirstName = await readData1("Signup-Negative", "SignUpNegative", "Firstname", `${testCases[i].testId}`);
                const invalidLastName = await readData1("Signup-Negative", "SignUpNegative", "Lastname", `${testCases[i].testId}`);
                const invalidPhoneNumber = await readData1("Signup-Negative", "SignUpNegative", "InvalidPhoneNumber", `${testCases[i].testId}`);
                const invalidPassword = await readData1("Signup-Negative", "SignUpNegative", "InvalidPassword", `${testCases[i].testId}`);
                const invalidRepeatPassword = await readData1("Signup-Negative", "SignUpNegative", "InvalidRepeatPassword", `${testCases[i].testId}`);
                const invalidEmail = await readData1("Signup-Negative", "SignUpNegative", "Email", `${testCases[i].testId}`);
                const employerErrorText = await readData1("Signup-Negative", "SignUpNegative", "EmployerNameErrorText", `${testCases[i].testId}`);
                const dobErrorText = await readData1("Signup-Negative", "SignUpNegative", "DOBErrorText", `${testCases[i].testId}`);
                const studentDobErrorText = await readData1("Signup-Negative", "SignUpNegative", "StudentDOBErrorText", `${testCases[i].testId}`);
                const referralErrorText = await readData1("Signup-Negative", "SignUpNegative", "RefferalErrorText", `${testCases[i].testId}`);
                const invalidDOBbelow18 = await readData1("Signup-Negative", "SignUpNegative", "InvalidDOBbelow18", `${testCases[i].testId}`);
                const invalidDOB = await readData1("Signup-Negative", "SignUpNegative", "InvalidDOB", `${testCases[i].testId}`);
                const invalidOTP = await readData1("Signup-Negative", "SignUpNegative", "InvalidOTP", `${testCases[i].testId}`);
                const invalidOTPError = await readData1("Signup-Negative", "SignUpNegative", "InvalidOTPError", `${testCases[i].testId}`);
                const pinMustBe6DigitText = await readData1("Signup-Negative", "SignUpNegative", "PinMustBe6DigitText", `${testCases[i].testId}`);
                const programNotToDisplay = await readData1("Signup-Negative", "SignUpNegative", "ProgramNotToDisplay", `${testCases[i].testId}`);
                const programToDisplay = await readData1("Signup-Negative", "SignUpNegative", "ProgramToDisplay", `${testCases[i].testId}`);
                const studentIDErrorText = await readData1("Signup-Negative", "SignUpNegative", "StudentIDErrorText", `${testCases[i].testId}`);
                const courseEnrolledErrorText = await readData1("Signup-Negative", "SignUpNegative", "CourseEnrolledErrorText", `${testCases[i].testId}`);
                const phoneNumberErrorStudent = await readData1("Signup-Negative", "SignUpNegative", "PhoneNumberErrorStudent", `${testCases[i].testId}`);
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

                const errorTexts1 = [FirstNameErrorText, LastNameErrorText, EmailIDErrorText, PhoneNumberErrorText, PasswordHint, RepeatPasswordErrorText]
                for (const errorText of errorTexts1) {
                    if (errorText === FirstNameErrorText) {
                        console.log("invalidFirstName:" + invalidFirstName);
                        if ((invalidFirstName.trim()).toLowerCase() == "empty") {
                            await Keywords.SetValue(locator.firstName, "");
                            await Keywords.SetValue(locator.lastName, LastName);
                            await Keywords.SetValue(locator.emailId, mail);
                            await Keywords.SetValue(locator.phoneNumber, phoneNumber);
                            await Keywords.SetValue(locator.passwordField, password);
                            await Keywords.SetValue(locator.repeatPassword, password);
                            await Keywords.click(locator.nextButton, "Next Button")
                            await Keywords.verifyElementDisplayed2(FirstNameErrorText, "FirstNameErrorText");
                        } else {
                            await Keywords.SetValue(locator.firstName, invalidFirstName);
                            await Keywords.SetValue(locator.lastName, LastName);
                            await Keywords.SetValue(locator.emailId, mail);
                            await Keywords.SetValue(locator.phoneNumber, phoneNumber);
                            await Keywords.SetValue(locator.passwordField, password);
                            await Keywords.SetValue(locator.repeatPassword, password);
                            await Keywords.click(locator.nextButton, "Next Button");
                            await Keywords.verifyElementDisplayed2(FirstNameErrorText, "FirstNameErrorText");
                        }

                    } else if (errorText === LastNameErrorText) {
                        if ((invalidLastName.trim()).toLowerCase() == "empty") {
                            await Keywords.SetValue(locator.firstName, FirstName);
                            await Keywords.SetValue(locator.lastName, "");
                            await Keywords.click(locator.nextButton, "Next Button")
                            await Keywords.verifyElementDisplayed2(LastNameErrorText, "LastNameErrorText");
                        } else {
                            await Keywords.SetValue(locator.firstName, FirstName);
                            await Keywords.SetValue(locator.lastName, invalidLastName);
                            await Keywords.click(locator.nextButton, "Next Button");
                            await Keywords.verifyElementDisplayed2(LastNameErrorText, "LastNameErrorText");
                        }
                    } else if (errorText === EmailIDErrorText) {
                        if ((invalidEmail.trim()).toLowerCase() == "empty") {
                            await Keywords.SetValue(locator.lastName, LastName);
                            await Keywords.SetValue(locator.emailId, "");
                            await Keywords.click(locator.nextButton, "Next Button");
                            await Keywords.verifyElementDisplayed2(EmailIDErrorText, "EmailIDErrorText");
                        } else {
                            await Keywords.SetValue(locator.lastName, LastName);
                            await Keywords.SetValue(locator.emailId, invalidEmail);
                            await Keywords.click(locator.nextButton, "Next Button")
                            await Keywords.verifyElementDisplayed2(EmailIDErrorText, "EmailIDErrorText");
                        }
                    } else if (errorText === PhoneNumberErrorText) {
                        await Keywords.SetValue(locator.emailId, mail);
                        if (role === 'Student') {
                            if ((invalidPhoneNumber.trim()).toLowerCase() == "empty") {
                                await Keywords.SetValue(locator.emailId, mail);
                                await Keywords.SetValue(locator.phoneNumber, "");
                            } else {
                                await Keywords.SetValue(locator.emailId, mail);
                                await Keywords.SetValue(locator.phoneNumber, invalidPhoneNumber);
                            }
                        } else {
                            if ((invalidPhoneNumber).toLowerCase() == "empty") {
                                await Keywords.SetValue(locator.phoneNumber, "");
                                await Keywords.click(locator.nextButton, "Next Button")
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, "PhoneNumberErrorText");
                            } else {
                                await Keywords.SetValue(locator.phoneNumber, invalidPhoneNumber);
                                await Keywords.click(locator.nextButton, "Next Button")
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, "PhoneNumberErrorText");
                            }
                        }
                    } else if (errorText === PasswordHint) {
                        await Keywords.SetValue(locator.phoneNumber, phoneNumber);
                        if (invalidPassword.toLowerCase() === 'empty') {
                            await Keywords.SetValue(locator.passwordField, "");
                            await Keywords.verifyElementDisplayed2(PasswordHint, PasswordHint);
                        } else {
                            await Keywords.SetValue(locator.passwordField, invalidPassword);
                            await Keywords.verifyElementDisplayed2(PasswordHint, PasswordHint);
                        }
                        await Keywords.SetValue(locator.passwordField, password);
                    } else if (errorText === RepeatPasswordErrorText) {
                        if (invalidRepeatPassword.toLowerCase() === 'empty') {
                            await Keywords.SetValue(locator.repeatPassword, "");
                            await Keywords.verifyElementDisplayed2(RepeatPasswordErrorText, "RepeatPasswordErrorText");
                        } else {
                            await Keywords.SetValue(locator.repeatPassword, invalidRepeatPassword);
                            await Keywords.verifyElementDisplayed2(RepeatPasswordErrorText, "RepeatPasswordErrorText");
                        }
                        await Keywords.SetValue(locator.repeatPassword, password);
                    }
                }
                if (!await locator.nextButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                await Keywords.click(locator.nextButton, "Next Button");
                await Keywords.verifyElementIsEnabled(locator.signUpButton, "Signup button")
                if (role === "Employee") {
                    if (employerName.trim() === 'Empty') {
                        await Keywords.SetValue(locator.employerName, "");
                        await Keywords.SetValue(locator.dob, dob);
                        await Keywords.verifyElementIsEnabled(locator.signUpButton, "Signup button")
                        await Keywords.click(locator.signUpButton, "Signup button");
                        await Keywords.verifyElementDisplayed(locator.errorText(employerErrorText.trim()), employerErrorText.trim());
                    }
                    await Keywords.SetValue(locator.employerName, validEmployerName);
                }
                const errorTexts2 = [dobErrorText, referralErrorText];
                for (const errorText of errorTexts2) {
                    if (errorText === dobErrorText) {
                        let dobErrortext = dobErrorText.split(',');
                        if (invalidDOBbelow18 === 'Empty') {
                            await Keywords.SetValue(locator.dob, "");
                            await Keywords.click(locator.signUpButton, "Signup button");
                            await Keywords.verifyElementDisplayed(locator.errorText(dobErrortext[0].trim()), dobErrortext[0].trim());
                        } else {
                            await Keywords.SetValue(locator.dob, invalidDOBbelow18);
                            await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                            if (role === 'Employee') {
                                await Keywords.verifyText(locator.yearsOldText, "content-desc", dobErrortext[1].trim(), dobErrortext[1].trim());
                            } else {
                                await Keywords.verifyText(locator.yearsOldText1, "content-desc", studentDobErrorText.trim(), studentDobErrorText.trim());
                            }
                            await Keywords.click(locator.okButton, "Ok Button");
                        }
                        if (invalidDOB === 'Empty') {
                            await Keywords.SetValue(locator.dob, "");
                            await Keywords.click(locator.signUpButton, "Signup button");
                            await Keywords.verifyElementDisplayed(locator.errorText(dobErrortext[0].trim()), dobErrortext[0].trim());
                        } else {
                            await Keywords.SetValue(locator.dob, invalidDOB);
                            await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                            await Keywords.verifyText(locator.pleaseEnterValidDateText, "content-desc", dobErrortext[2].trim(), dobErrortext[2].trim());
                            await Keywords.click(locator.okButton, "Ok Button");
                        }
                        await Keywords.SetValue(locator.dob, dob);
                    } else {
                        await Keywords.verifyElementIsEnabled(locator.signUpButton, "Signup button")
                        await Keywords.click(locator.signUpButton, "Signup button");
                        await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                        await Keywords.verifyText(locator.referralErrorText, "content-desc", referralErrorText, referralErrorText);
                        await Keywords.click(locator.okButton, "Ok Button");
                    }
                }
                await Keywords.verifyText(locator.referralDropdownText, "content-desc", referralDropdownText, "Referral dropdown")
                await Keywords.click(locator.referral, "Referral dropdown");
                await Keywords.click(locator.referrals(referral), referral);
                if (role === "Employee") {
                    await Keywords.SetValue(locator.relationToEmployee, relation);
                }
                if (!await locator.signUpButton.isDisplayed()) {
                    await browser.hideKeyboard();
                }
                await Keywords.verifyElementIsEnabled(locator.signUpButton, "Signup button")
                await Keywords.click(locator.signUpButton, "Signup button");
                if (role === 'Student') {
                    await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                    await Keywords.click(locator.nextButton, "Next Button")
                    const errorTexts = [studentIDErrorText, courseEnrolledErrorText]
                    for (const errorText of errorTexts) {
                        await Keywords.verifyElementDisplayed(locator.errorText(errorText.trim()), errorText.trim());
                    }
                    await Keywords.waitForDisplay(locator.studentInformationScreen, 90000, "Student Information Screen")
                    await Keywords.isDisplayed(locator.athabascaUniversity, "Athabasca University");
                    await Keywords.SetValue(locator.studentId, studentId)
                    await Keywords.SetValue(locator.courseEnrolled, courseEnrolled);
                    if (!await locator.nextButton.isDisplayed()) {
                        await browser.hideKeyboard();
                    }
                    await Keywords.verifyElementIsEnabled(locator.nextButton, "Next button")
                    await Keywords.click(locator.nextButton, "Next Button")
                }
                await Keywords.waitForDisplay(locator.verifyYourAccount, timeout, "Verify your account");
                if (role === 'Student') {
                    await Keywords.verifyElementNotDisplayed(locator.getByText, "Get By Text card")
                } else {
                    await Keywords.verifyElementDisplayed(locator.getMail, "Get by email card");
                    await Keywords.verifyElementDisplayed(locator.getByText, "Get By Text card")
                }
                await Keywords.verifyElementDisplayed(locator.verifyButton, "Verify button");
                await Keywords.click(locator.getMail, "Get by email card");
                await Keywords.verifyElementIsEnabled(locator.verifyButton, "Verify button");
                await Keywords.click(locator.verifyButton, "Verify Button");
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), invalidOTP[i]);
                    if (i !== 5) {
                        await Keywords.verifyText(locator.pinMustBe6DigitText, "content-desc", pinMustBe6DigitText, pinMustBe6DigitText)
                    }
                    if (i == 5) {
                        await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                        let text = invalidOTPError.split(';');
                        await Keywords.verifyText(locator.invalidVerificationCode, "content-desc", text[0].trim(), text[0].trim())
                        await Keywords.click(locator.okButton, "Ok Button");
                        await Keywords.verifyText(locator.enterValidCodeText, "content-desc", text[1].trim(), text[1].trim())
                        await Keywords.SetValue(locator.otpPage(i), '');
                    }
                }
                const otp = await Keywords.getOTPFromMailinator(mail);
                expect(otp).to.not.equal("");
                await driver.switchContext('NATIVE_APP');
                await Keywords.waitForDisplay(locator.otpPage(0), timeout, "OTP input");
                for (let i = 0; i < 6; i++) {
                    await Keywords.SetValue(locator.otpPage(i), otp[i]);
                }
                await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
                if (role.toLowerCase() === "student") {
                    let text = programNotToDisplay.split(',');
                    for (const program of text) {
                        await Keywords.verifyElementNotDisplayed(locator.program(program), program);
                    }
                    await Keywords.verifyElementIsEnabled(locator.mentalHealthCard, "Mental Health card");
                    await Keywords.click(locator.mentalHealthCard, "Mental Health card")
                } else {
                    let text = programToDisplay.split(',');
                    for (const program of text) {
                        await Keywords.verifyElementDisplayed(locator.program(program), program);
                    }
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
                await saveTestDataToJson(role, FirstName, LastName, mail, program)
            } catch (err) {
                throw new Error(err);
            }
        })
    }
});
