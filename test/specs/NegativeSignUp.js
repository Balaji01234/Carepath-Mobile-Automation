import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, readTestcase, writeExcelData, saveTestDataToJson, readData, readData1, generateRandomNumber, dataSets, writeExcelData1 } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';

describe('Carepath Automation', async () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    let iterationValue = dataSets(iterations)
    let testName = '';

    beforeEach(async function () {
        try {
            testName = this.currentTest.title;
            console.log(`Starting test: ${testName}`);
        } catch (error) {
            console.error(`Error in beforeEach for test ${this.currentTest.title}:`, error.message);
        }
    });
 for (let i = 0; i < iterationValue.length; i++) {
        it(`TC-003-Sign Up - Negative Iteration${iterationValue[i]}`, async () => {
            try {
                 const role = await readData1("Signup-Positive", "TC_01", "Role", `Testdata${iterationValue[i]}`);
                 allureReporter.addDescription(`New User Sign Up for: "${role} role" `)
                 console.log(`Role: ${role}`)
                 const employeeText = await readData1("Signup-Positive", "TC_01", "EmployeeText", `Testdata${iterationValue[i]}`);
                 const studentText = await readData1("Signup-Positive", "TC_01", "StudentText", `Testdata${iterationValue[i]}`);
                 const FirstName = `Prabha${getRandomString()}`
                 await writeExcelData1("Signup-Negative", "TC_02", `Writedata${iterationValue[i]}`, "Firstname", FirstName);
                 const LastName = (`Automation${getRandomString()}`).toLowerCase();
                 await writeExcelData1("Signup-Negative", "TC_02", `Writedata${iterationValue[i]}`, "Lastname", LastName);
                 const mail = `prabha${getRandomString() + generateRandomNumber()}@mailinator.com`;
                 await writeExcelData1("Signup-Negative", "TC_02", `Writedata${iterationValue[i]}`, "Email", mail);
                const phoneNumber = await readData1("Signup-Positive", "TC_01", "Phone number", `Testdata${iterationValue[i]}`);
                const password = await readData1("Signup-Positive", "TC_01", "Password", `Testdata${iterationValue[i]}`);
                const employerName = await readData1("Signup-Positive", "TC_01", "Employer name", `Testdata${iterationValue[i]}`);
                const referral = await readData1("Signup-Positive", "TC_01", "Referrals", `Testdata${iterationValue[i]}`);
                const dob = await readData1("Signup-Positive", "TC_01", "DOB", `Testdata${iterationValue[i]}`);
                const relation = await readData1("Signup-Positive", "TC_01", "Relation", `Testdata${iterationValue[i]}`);
                const referralDropdownText = await readData1("Signup-Positive", "TC_01", "ReferralText", `Testdata${iterationValue[i]}`);
                const dobText = await readData1("Signup-Positive", "TC_01", "dobText", `Testdata${iterationValue[i]}`);
                const studentId = await readData1("Signup-Positive", "TC_01", "StudentId", `Testdata${iterationValue[i]}`);
                const courseEnrolled = await readData1("Signup-Positive", "TC_01", "CourseEnrolled", `Testdata${iterationValue[i]}`);
                const program = await readData1("Signup-Positive", "TC_01", "Program", `Testdata${iterationValue[i]}`);
                const FirstNameErrorText = await readData1("Signup-Negative", "TC_02", "FirstNameErrorText", `Testdata${iterationValue[i]}`);
                const LastNameErrorText = await readData1("Signup-Negative", "TC_02", "LastNameErrorText", `Testdata${iterationValue[i]}`);
                const EmailIDErrorText = await readData1("Signup-Negative", "TC_02", "EmailIDErrorText", `Testdata${iterationValue[i]}`);
                const PhoneNumberErrorText = await readData1("Signup-Negative", "TC_02", "PhoneNumberErrorText", `Testdata${iterationValue[i]}`);
                const PasswordErrorText = await readData1("Signup-Negative", "TC_02", "PasswordErrorText", `Testdata${iterationValue[i]}`);
                const RepeatPasswordErrorText = await readData1("Signup-Negative", "TC_02", "RepeatPasswordErrorText", `Testdata${iterationValue[i]}`);
                const PasswordHint = await readData1("Signup-Negative", "TC_02", "PasswordHint", `Testdata${iterationValue[i]}`);
                const invalidFirstName = await readData1("Signup-Negative", "TC_02", "Firstname", `Testdata${iterationValue[i]}`);
                const invalidLastName = await readData1("Signup-Negative", "TC_02", "Lastname", `Testdata${iterationValue[i]}`);
                const invalidPhoneNumber = await readData1("Signup-Negative", "TC_02", "InvalidPhoneNumber", `Testdata${iterationValue[i]}`);
                const invalidPassword = await readData1("Signup-Negative", "TC_02", "InvalidPassword", `Testdata${iterationValue[i]}`);
                const invalidRepeatPassword = await readData1("Signup-Negative", "TC_02", "InvalidRepeatPassword", `Testdata${iterationValue[i]}`);
                const invalidEmail = await readData1("Signup-Negative", "TC_02", "Email", `Testdata${iterationValue[i]}`);
                const employerErrorText = await readData1("Signup-Negative", "TC_02", "EmployerNameErrorText", `Testdata${iterationValue[i]}`);
                const dobErrorText = await readData1("Signup-Negative", "TC_02", "DOBErrorText", `Testdata${iterationValue[i]}`);
                const studentDobErrorText = await readData1("Signup-Negative", "TC_02", "StudentDOBErrorText", `Testdata${iterationValue[i]}`);
                const referralErrorText = await readData1("Signup-Negative", "TC_02", "RefferalErrorText", `Testdata${iterationValue[i]}`);
                const invalidDOBbelow18 = await readData1("Signup-Negative", "TC_02", "InvalidDOBbelow18", `Testdata${iterationValue[i]}`);
                const invalidDOB = await readData1("Signup-Negative", "TC_02", "InvalidDOB", `Testdata${iterationValue[i]}`);
                const invalidOTP = await readData1("Signup-Negative", "TC_02", "InvalidOTP", `Testdata${iterationValue[i]}`);
                const invalidOTPError = await readData1("Signup-Negative", "TC_02", "InvalidOTPError", `Testdata${iterationValue[i]}`);
                const pinMustBe6DigitText = await readData1("Signup-Negative", "TC_02", "PinMustBe6DigitText", `Testdata${iterationValue[i]}`);
                const programNotToDisplay = await readData1("Signup-Negative", "TC_02", "ProgramNotToDisplay", `Testdata${iterationValue[i]}`);
                const programToDisplay = await readData1("Signup-Negative", "TC_02", "ProgramToDisplay", `Testdata${iterationValue[i]}`);
                const studentIDErrorText = await readData1("Signup-Negative", "TC_02", "StudentIDErrorText", `Testdata${iterationValue[i]}`);
                const courseEnrolledErrorText = await readData1("Signup-Negative", "TC_02", "CourseEnrolledErrorText", `Testdata${iterationValue[i]}`);
                const phoneNumberErrorStudent = await readData1("Signup-Negative", "TC_02", "PhoneNumberErrorStudent", `Testdata${iterationValue[i]}`);
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
                    let text = errorText.split(',');
                    if (errorText === FirstNameErrorText) {
                        console.log("invalidFirstName:"+invalidFirstName);
                        if((invalidFirstName.trim()).toLowerCase() == "empty"){
                            await Keywords.SetValue(locator.firstName, "     ");
                            await Keywords.click(locator.nextButton, "Next Button")  
                            await Keywords.verifyElementDisplayed2(FirstNameErrorText, FirstNameErrorText);
                        }else{
                            await Keywords.SetValue(locator.firstName, invalidFirstName);
                            await Keywords.click(locator.nextButton, "Next Button");
                            await Keywords.verifyElementDisplayed2(FirstNameErrorText, FirstNameErrorText);
                        }
                        
                    } else if (errorText === LastNameErrorText) {

                        if((invalidLastName.trim()).toLowerCase() == "empty"){
                            await Keywords.SetValue(locator.lastName, "     ");
                            await Keywords.click(locator.nextButton, "Next Button")  
                            await Keywords.verifyElementDisplayed2(LastNameErrorText,LastNameErrorText);
                        }else{
                            await Keywords.SetValue(locator.lastName, invalidLastName);
                            await Keywords.click(locator.nextButton, "Next Button");
                            await Keywords.verifyElementDisplayed2(LastNameErrorText,LastNameErrorText);
                        }

                    } else if (errorText === EmailIDErrorText) {

                        if((invalidEmail.trim()).toLowerCase() == "empty"){
                            await Keywords.SetValue(locator.emailId, "     ");
                            await Keywords.click(locator.nextButton, "Next Button")  
                            await Keywords.verifyElementDisplayed2(EmailIDErrorText, EmailIDErrorText);
                        }else{
                            await Keywords.SetValue(locator.emailId, invalidEmail);
                            await Keywords.click(locator.nextButton, "Next Button")
                            await Keywords.verifyElementDisplayed2(EmailIDErrorText, EmailIDErrorText);
                        }

                        
                    } else if (errorText === PhoneNumberErrorText) {
                        if (role === 'Student') {
                            
                            if((invalidPhoneNumber.trim()).toLowerCase() == "empty"){
                                await Keywords.SetValue(locator.phoneNumber, "     ");
                                
                                await Keywords.click(locator.nextButton, "Next Button")  
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, PhoneNumberErrorText);
                            }else{
                                await Keywords.SetValue(locator.phoneNumber, invalidPhoneNumber);
                                
                                await Keywords.click(locator.nextButton, "Next Button")
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, PhoneNumberErrorText);
                            }

                        } else {

                            if((invalidPhoneNumber).toLowerCase() == "empty"){
                                await Keywords.SetValue(locator.phoneNumber, "     ");
                                await Keywords.click(locator.nextButton, "Next Button")  
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, PhoneNumberErrorText);
                            }else{

                                await Keywords.SetValue(locator.phoneNumber, invalidPhoneNumber);
                                await Keywords.click(locator.nextButton, "Next Button")
                                await Keywords.verifyElementDisplayed2(PhoneNumberErrorText, PhoneNumberErrorText);
                            }
                        }

                    } else if (errorText === PasswordHint) {
                        await Keywords.SetValue(locator.passwordField, invalidPassword);
                        let text = errorText.split(',');
                        for (const passwordHint of text) {
                            await Keywords.verifyElementDisplayed2(PasswordHint,PasswordHint);
                        }
                    } else if (errorText === RepeatPasswordErrorText) {
                        let text = errorText.split(',');
                        await Keywords.SetValue(locator.repeatPassword, invalidRepeatPassword);
                        await Keywords.verifyElementDisplayed2(RepeatPasswordErrorText,RepeatPasswordErrorText);
                    }
                }
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
                await Keywords.click(locator.nextButton, "Next Button");
                await Keywords.verifyElementIsEnabled(locator.signUpButton, "Signup button")
                await Keywords.click(locator.signUpButton, "Signup button");
                if (role === "Employee") {
                    await Keywords.verifyElementDisplayed(locator.errorText(employerErrorText.trim()), employerErrorText.trim());
                }
                let dobErrortext = dobErrorText.split(',');
                await Keywords.verifyElementDisplayed(locator.errorText(dobErrortext[0].trim()), dobErrortext[0].trim());
                if (role === "Employee") {
                    await Keywords.SetValue(locator.employerName, employerName);
                }
                const errorTexts2 = [dobErrorText, referralErrorText];
                for (const errorText of errorTexts2) {
                    if (errorText === dobErrorText) {
                        let dobErrortext = dobErrorText.split(',');
                        await Keywords.SetValue(locator.dob, invalidDOBbelow18);
                        await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                        if (role === 'Employee') {
                            await Keywords.verifyText(locator.yearsOldText, "content-desc", dobErrortext[1].trim(), dobErrortext[1].trim());
                        } else {
                            await Keywords.verifyText(locator.yearsOldText1, "content-desc", studentDobErrorText.trim(), studentDobErrorText.trim());
                        }
                        await Keywords.click(locator.okButton, "Ok Button");
                        await Keywords.SetValue(locator.dob, invalidDOB);
                        await Keywords.waitForDisplay(locator.errorPopup, 60000, "Error Popup")
                        await Keywords.verifyText(locator.pleaseEnterValidDateText, "content-desc", dobErrortext[2].trim(), dobErrortext[2].trim());
                        await Keywords.click(locator.okButton, "Ok Button");
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
                                await Keywords.click(locator.referrals(referral), "referral");
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
                                await Keywords.verifyElementIsDisabled(locator.verifyButton, "Verify button");
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
