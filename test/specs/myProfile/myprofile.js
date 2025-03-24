import { locators } from '../../page/locators.js';
import { keywords } from '../../page/keywords.js';
import { readData1, getFilteredTests, generateRandomNumber } from '../../../utils/common.js';
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
                let userNameInput = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Username", `${testCases[i].testId}`);
                const gender = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Gender", `${testCases[i].testId}`);
                const preferredLanguage = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Preferred Language", `${testCases[i].testId}`);
                const maritalStatus = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Marital Status", `${testCases[i].testId}`);
                const children = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Children", `${testCases[i].testId}`);
                const reasonForCare = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Reason for care", `${testCases[i].testId}`);
                const upcomingTreatment = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Upcoming Treatment", `${testCases[i].testId}`);
                const treatmentDate = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Treatment Date", `${testCases[i].testId}`);
                const homePhone = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Home Phone number", `${testCases[i].testId}`);
                const cellPhone = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Cell Number", `${testCases[i].testId}`);
                const emergencyContactFirstName = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "EmergencyFirstName", `${testCases[i].testId}`);
                const emergencyContactLastName = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "EmergencyLastName", `${testCases[i].testId}`);
                const relation = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Relation", `${testCases[i].testId}`);
                const emergencyContactPhone = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "EmergencyCellNumber", `${testCases[i].testId}`);
                const address = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Address", `${testCases[i].testId}`);
                const unit = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Unit", `${testCases[i].testId}`);
                const city = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "City", `${testCases[i].testId}`);
                const province = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Province", `${testCases[i].testId}`);
                const postalCode = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Postal code", `${testCases[i].testId}`);
                const saveChangesText = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Save changes text", `${testCases[i].testId}`);
                const profileUpdatedText = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Profile updated text", `${testCases[i].testId}`);
                const editGender = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Gender", `${testCases[i].testId}`);
                const editPreferredLanguage = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Preferred Language", `${testCases[i].testId}`);
                const editMaritalStatus = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Marital Status", `${testCases[i].testId}`);
                const editChildren = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Children", `${testCases[i].testId}`);
                const editReasonForCare = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Reason for care", `${testCases[i].testId}`);
                const editUpcomingTreatment = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Upcoming Treatment", `${testCases[i].testId}`);
                const editTreatmentDate = await readData1("myProfile", "myProfile-Positive", "myProfile-positive", "Edit Treatment Date", `${testCases[i].testId}`);

                const completeYourProfile = {
                    program: program,
                    gender: gender,
                    preferredLanguage: preferredLanguage,
                    maritalStatus: maritalStatus,
                    children: children,
                    reasonForCare: reasonForCare,
                    upcomingTreatment: upcomingTreatment,
                    treatmentDate: treatmentDate
                }

                const editPersonalInformation = {
                    program: program,
                    gender: editGender,
                    preferredLanguage: editPreferredLanguage,
                    maritalStatus: editMaritalStatus,
                    children: editChildren,
                    reasonForCare: editReasonForCare,
                    upcomingTreatment: editUpcomingTreatment,
                    treatmentDate: editTreatmentDate
                }
                console.log({ email, password, program });
                await Keywords.login(email, password, program);
                await Keywords.waitForDisplay(locator.continueButton, 60000, "Continue Button");
                await Keywords.click(locator.continueButton, "Continue Button");
                await browser.pause(5000);
                if (await locator.completeYourProfilePopup.isDisplayed({ timeout: 90000 })) {
                    await Keywords.completeYourProfile(completeYourProfile);
                }
                await Keywords.verifyElementDisplayed(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.click(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.verifyElementDisplayed(locator.myProfile, "My Profile");
                await Keywords.click(locator.myProfile, "My Profile");
                await Keywords.verifyElementDisplayed(locator.editInformationIcon("My Profile"), "Edit Information Icon");
                await Keywords.click(locator.editInformationIcon("My Profile"), "Edit Information Icon");
                await Keywords.SetValue(locator.editFirstName, firstName);
                await Keywords.SetValue(locator.editLastName, lastName);
                if (program.toLowerCase() == "elder care") {
                    userNameInput = userNameInput + generateRandomNumber();
                    await Keywords.verifyElementDisplayed(locator.userNameField, "User Name Field");
                    await Keywords.verifyElementDisplayed(locator.userNameHintText, "User Name Hint Text");
                    await Keywords.SetValue(locator.userNameInput, userNameInput);
                    await Keywords.verifyElementDisplayed(locator.confirmNewUserText, "Confirm New User Text");
                    await Keywords.verifyElementIsEnabled(locator.confirmButton, "Confirm Button");
                    await Keywords.click(locator.confirmButton, "Confirm Button");
                    await Keywords.verifyElementDisplayed(locator.successMsgOnSettingUserName, "Success Message On Setting User Name");
                }
                //Contact Information
                await Keywords.verifyElementDisplayed(locator.contactInformation, "Contact Information");
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.homePhoneNumberField.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.SetValue(locator.homePhoneNumberField, homePhone);
                await Keywords.SetValue(locator.cellPhoneNumberField, cellPhone);
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.address.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.verifyElementDisplayed(locator.emergencyContactAndInformation, "Emergency Contact And Information");
                await Keywords.SetValue(locator.firstNameInEmergencyContact, emergencyContactFirstName);
                await Keywords.SetValue(locator.lastNameInEmergencyContact, emergencyContactLastName);
                await Keywords.SetValue(locator.relationInEmergencyContact, relation);
                await Keywords.SetValue(locator.relationCellNumber, emergencyContactPhone);
                //Address Information
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.province.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.SetValue(locator.address, address);
                await Keywords.SetValue(locator.unit, unit);
                await Keywords.SetValue(locator.city, city);
                await Keywords.click(locator.province, "Province");
                await Keywords.click(locator.selectProvince(province), province);
                await Keywords.SetValue(locator.postalCodeInput, postalCode);
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.saveAllChangesButton.isDisplayed()) {
                        break;
                    }
                }
                await Keywords.verifyElementIsEnabled(locator.saveAllChangesButton, "Save All Changes Button");
                await Keywords.click(locator.saveAllChangesButton, "Save All Changes Button");
                await Keywords.verifyElementDisplayed(locator.profileUpdatePopup, "Profile Update Popup");
                await Keywords.verifyText(locator.profileUpdatePopupText, 'content-desc', saveChangesText, "Save Changes");
                await Keywords.verifyElementIsEnabled(locator.saveAndGoButton, "Save And Go Button");
                await Keywords.click(locator.saveAndGoButton, "Save And Go Button");
                await Keywords.verifyElementDisplayed(locator.profileUpdatedPopup2, "Profile UpdateD!");
                await Keywords.verifyText(locator.profileUpdatedPopupText2, 'content-desc', profileUpdatedText, "Profile Updated");
                await Keywords.verifyElementDisplayed(locator.gotToHomePageButton, "Go To Home Page Button");
                await Keywords.click(locator.gotToHomePageButton, "Go To Home Page Button");
                //Edit Personal Information
                await Keywords.editPersonalInformation(editPersonalInformation);
                //Verification
                await Keywords.verifyElementDisplayed(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.click(locator.hamburgerMenu, "Hamburger Menu");
                await Keywords.verifyElementDisplayed(locator.myProfile, "My Profile");
                await Keywords.click(locator.myProfile, "My Profile");
                const myProfile = [firstName, lastName]
                for (let data of myProfile) {
                    await Keywords.verifyElementDisplayed(locator.accessibilityLocator(data), data);
                }
                if (program.toLowerCase() == "elder care") {
                    await Keywords.verifyElementDisplayed(locator.accessibilityLocator(userNameInput), userNameInput);
                }
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.changePassword.isDisplayed()) {
                        break;
                    }
                }
                const contactInfo = [homePhone, cellPhone]
                for (let data of contactInfo) {
                    await Keywords.verifyElementDisplayed(locator.accessibilityLocator(`+1${data}`), data);
                }
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.accessibilityLocator('Address').isDisplayed()) {
                        break;
                    }
                }
                const emergencyContactInfo = [emergencyContactFirstName, emergencyContactLastName, relation, emergencyContactPhone]
                for (let data of emergencyContactInfo) {
                    if (data === emergencyContactPhone) {
                        await Keywords.verifyElementDisplayed(locator.accessibilityLocator(`+1${data}`), data);
                    } else {
                        await Keywords.verifyElementDisplayed(locator.accessibilityLocator(data), data);
                    }
                }
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (await locator.personalInformationPage.isDisplayed()) {
                        break;
                    }
                }

                const addressInformation = [address, unit, city, province, postalCode]
                for (let data of addressInformation) {
                    await Keywords.verifyElementDisplayed(locator.accessibilityLocator(data), data);
                }
                while (true) {
                    await Keywords.scrollToEnd(2);
                    if (program !== 'Mental Health') {
                        if (await locator.accessibilityLocator('Date').isDisplayed()) {
                            break;
                        }
                    } else {
                        if (await locator.circleOfCare.isDisplayed()) {
                            break;
                        }
                    }

                }
                const personalInformation = [editGender, editPreferredLanguage, editMaritalStatus, editChildren, editReasonForCare, editUpcomingTreatment]
                for (let data of personalInformation) {
                    if (program == 'Mental Health') {
                        if (data !== editReasonForCare && data !== editUpcomingTreatment) {
                            await Keywords.verifyElementDisplayed(locator.accessibilityLocator(data), data);
                        }
                    } else {
                        await Keywords.verifyElementDisplayed(locator.accessibilityLocator(data), data);
                    }
                }
            } catch (err) {
                throw new Error(err);
            }
        });
    }
    it.skip("admin", async () => {
        await Keywords.eventCreationInAdminPortal("test","test","AM")
    })
});
