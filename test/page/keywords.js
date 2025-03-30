import allureReporter from '@wdio/allure-reporter'
import { locators } from './locators.js';
import { onboardLocators } from './onboard.locators.js';
import { ForgotPasswordLocators } from './ForgotLocator.js';
import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
const screenshotDir = './screenshots';
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);
export class keywords {


    constructor() {
        this.locator = new locators();
        this.onboardLocator = new onboardLocators();
        this.forgotLocator = new ForgotPasswordLocators();
        this.timeout = process.env.DISPLAY_TIMEOUT
        this.mailinator = process.env.MAILINATOR
    }
    /**
       * Log success message and attach a screenshot.
       * @param {string} message - Success message to log.
       */
    async AllurePass(message) {
        console.log(`✅ PASS: ${message}`);
        process.emit('test:log', `✅ PASS: ${message}`);
        allureReporter.addStep(`✅ PASS: ${message}`, {}, 'passed');
        const screenshot = await browser.takeScreenshot();
        // allureReporter.addAttachment('Screenshot on Pass', screenshot, 'image/png');
    }

    async AllurePass1(message) {
        allureReporter.addStep(`✅ PASS: ${message}`, {}, 'passed');
    }


    async AllureInfo(message) {
        allureReporter.addStep(`ℹ️ INFO: ${message}`, {}, 'passed');
    }


    /**
     * Log failure message, perform throw new Errorion, and attach a screenshot.
     * @param {string} message - Failure message to log.
     * @param {Error|string} error - Optional error object or failure reason for detailed logs.
     */
    async AllureFail(message, error = null) {
        console.error(`❌ FAIL: ${message}`);
        process.emit('test:log', `❌ FAIL: ${message}`);
        allureReporter.addStep(`❌ FAIL: ${message}`, {}, 'failed');

        if (error) {
            const errorDetails = error.stack || error.message || error;
            allureReporter.addAttachment('Error Details', errorDetails, 'text/plain');
        }
        const screenshot = await browser.takeScreenshot();
        // allureReporter.addAttachment('Screenshot on Fail', screenshot, 'image/png');
    }


    async click(locator, text) {
        allureReporter.startStep("Click on the element: " + text)
        try {
            await locator.waitForDisplayed({ timeout: this.timeout })
            await locator.click();
            await this.AllurePass("Successfully Clicked on: " + text);
            allureReporter.endStep('passed');
        } catch (err) {
            console.log("Click action failed for: " + text);
            await this.AllureFail("Click action failed for: " + text, err);
            allureReporter.endStep('failed');
            throw new Error(err);
        }
    }

    /**
     * SetValue method will send the text to the input fields
     * @param {*} locator 
     * @param {*} text 
     */
    async SetValue(locator, text) {
        allureReporter.startStep(`SetValue: ${text}`)
        try {
            await locator.waitForDisplayed({ timeout: 60000 });
            await locator.click();
            await browser.pause(2000);
            await locator.clearValue();
            text = text?.toString().trim();
            await locator.setValue(text);
            await this.AllurePass(`Successfully set value ${text}`)
            allureReporter.endStep('passed');
        } catch (err) {
            console.log(`SetValue to the element: ${text} is failed`);
            await this.AllureFail(`SetValue to the element: ${text} is failed`, err);
            allureReporter.endStep('failed');
            throw new Error(err);
        }
    }

    /**
     * isDisplayed method will check presence of element in the screen
     * @param {*} locator 
     * @param {*} text 
     * @returns 
     */
    async isDisplayed(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is displayed or not`)
        let display = false;
        try {
            await browser.pause(5000)
            display = await locator.isDisplayed({ timeout: 90000 });
            if (display) {
                console.log(`${text} is displayed!!!`)
                await this.AllurePass(`${text} is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`)
                allureReporter.endStep('failed');
            }
        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`, err)
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`)
        } finally {
            return display;
        }
    }

    /**
     * To check the element is enabled 
     * @param {*} locator 
     * @param {*} text 
     * @returns 
     */
    async isEnabled(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is enabled or not`)
        let enable = false;
        try {
            enable = await locator.isEnabled();
            console.log(`${text} is Enabled!!!`)
            await this.AllurePass(`${text} is Enabled!!!`);
            allureReporter.endStep('passed');
        } catch (err) {
            allureReporter.endStep('failed');
            console.log(`${text} is not Enabled!!!`)
        } finally {
            return enable;
        }
    }

    /**
     * To wait for a element to display
     * @param {*} locator 
     * @param {*} timeout 
     * @param {*} text 
     */
    async waitForDisplay(locator, timeout, text) {
        allureReporter.startStep("Waiting for element to display: " + text)
        try {
            await locator.waitForDisplayed({ timeout: timeout });
            console.log(`${text} is displayed`)
            await this.AllurePass(`${text} is displayed`);
            allureReporter.endStep('passed');
        } catch (err) {
            console.log(`${text} is not displayed after waiting for ${timeout}`)
            await this.AllureFail(`${text} is not displayed after waiting for ${timeout}`, err)
            allureReporter.endStep('failed');
            console.log(err);
            throw new Error(err);
        }
    }

    /**
     * To get OTP from the mailinator mail.
     * @param {*} mail 
     * @returns 
     */
    async getOTPFromMailinator(mail) {
        try {
            await driver.execute('mobile: shell', {
                command: `am start -a android.intent.action.VIEW -d "${this.mailinator}" com.android.chrome`
            });
            if (await this.locator.chromeDismissButton.isDisplayed()) {
                await this.locator.chromeDismissButton.click()
            }
            if (await this.locator.chromeGotIt.isDisplayed()) {
                await this.locator.chromeGotIt.click()
            }
            if (await this.locator.chromeEasierPopup.isDisplayed()) {
                await this.click(this.locator.noThanks, 'No Thanks')
            }
            if (await this.locator.mailinatorInbox.isDisplayed({ timeout: 80000 })) {
                await this.locator.mailinatorInbox.clearValue();
                await this.SetValue(this.locator.mailinatorInbox, mail);
            } else {
                await this.locator.mailinatorInbox1.clearValue();
                await this.SetValue(this.locator.mailinatorInbox1, mail);
            }
            await this.click(this.locator.goButton, "Go Button");
            if (await this.locator.pauseButton.isDisplayed({ timeout: 60000 })) {
                await this.click(this.locator.pauseButton, "Click on pause button")
            } else {
                await this.click(this.locator.pauseButton1, "Click on pause button")
            }
            if (await this.locator.doNotReply.isDisplayed({ timeout: 60000 })) {
                await this.click(this.locator.doNotReply, "OTP message");
            } else {
                await this.click(this.locator.verificationCodeText, "OTP message");
            }

            let otp = await this.locator.retrieveOTP.getText();
            console.log('Extracted OTP:', otp);
            return otp;
        } catch (error) {
            console.log(error)
        } finally {
            await this.chromeCleanup();
            await driver.terminateApp('com.android.chrome')
        }
    }

    async getForForgotOTPFromMailinator(mail) {
        try {
            await driver.execute('mobile: shell', {
                command: `am start -a android.intent.action.VIEW -d "${this.mailinator}" com.android.chrome`
            });
            if (await this.locator.chromeDismissButton.isDisplayed()) {
                await this.locator.chromeDismissButton.click()
            }
            if (await this.locator.chromeGotIt.isDisplayed()) {
                await this.locator.chromeGotIt.click()
            }
            if (await this.locator.chromeEasierPopup.isDisplayed()) {
                await this.click(this.locator.noThanks, 'No Thanks')
            }
            if (await this.locator.mailinatorInbox.isDisplayed({ timeout: 80000 })) {
                await this.locator.mailinatorInbox.clearValue();
                await this.SetValue(this.locator.mailinatorInbox, mail);
            } else {
                await this.locator.mailinatorInbox1.clearValue();
                await this.SetValue(this.locator.mailinatorInbox1, mail);
            }
            await this.click(this.locator.goButton, "Go Button");
            if (await this.locator.pauseButton.isDisplayed({ timeout: 60000 })) {
                await this.click(this.locator.pauseButton, "Click on pause button")
            } else {
                await this.click(this.locator.pauseButton1, "Click on pause button")
            }
            if (await this.locator.doNotReply.isDisplayed({ timeout: 60000 })) {
                await this.click(this.locator.doNotReply, "OTP message");
            } else {
                await this.click(this.locator.verificationCodeText, "OTP message");
            }
            let otp = await this.locator.forgotPasswordOtp.getText();
            console.log('Extracted OTP:', otp);
            return otp;
        } catch (error) {
            console.log(error)
        } finally {
            await this.chromeCleanup();
            await driver.terminateApp('com.android.chrome')
        }
    }

    async verifyElementDisplayed(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is displayed or not`);
        try {
            await browser.pause(2000);
            await locator.waitForExist({ timeout: 90000 })
            const display = await locator.isDisplayed({ timeout: 90000 });
            if (await display) {
                console.log(`${text} is displayed!!!`);
                await this.AllurePass(`"${text}" is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`);
                await this.AllureFail(`"${text}" is not displayed!!!`);
                allureReporter.endStep('failed');
                throw new Error(`${text} should be displayed, but it is not.`);
            }
        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`, err);
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`);
            throw new Error(err.message || `${text} was not displayed due to an error.`);
        }
    }

    async verifyElementDisplayed2(locators, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is displayed or not`);
        let value = false;
        let locator = [locators];
        try {
            if (locators.includes(';')) {
                locator = locators.split(';');
            }
            const locatorCount = locator.length;
            console.log("locator count: " + locatorCount);
            await browser.pause(2000);
            for (let i = 0; i < locatorCount; i++) {
                const display = this.locator.errorText(locator[i]).isDisplayed({ timeout: 120000 });
                if (await display) {
                    value = true;
                    console.log(`${locator[i]} is displayed!!!`);
                    await this.AllurePass(`"${locator[i]}" is displayed!!!`);
                    allureReporter.endStep('passed');
                    break;
                }
            }
            if (value === false) {
                console.log(`${text} is not displayed!!!`);
                await this.AllureFail(`"${text}" is not displayed!!!`);
                allureReporter.endStep('failed');
                throw new Error(`${text} should be displayed, but it is not.`);
            }

        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`, err);
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`);
            throw new Error(err.message || `${text} was not displayed due to an error.`);
        }
    }

    async verifyElementNotDisplayed(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is not to be displayed`);
        try {
            // await browser.pause(2000);
            const display = await locator.isDisplayed({ timeout: 90000 });
            if (!display) {
                console.log(`${text} is not displayed!!!`);
                await this.AllurePass(`${text} is not displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is displayed!!!`);
                await this.AllureFail(`${text} is displayed!!!`);
                allureReporter.endStep('failed');
                // throw new Error(`${text} should be displayed, but it is not.`);
            }
        } catch (err) {
            await this.AllureFail(`${text} is displayed!!!`, err);
            allureReporter.endStep('failed');
            console.log(`${text} is displayed!!!`);
            throw new Error(err.message || `${text} was displayed due to an error.`);
        }
    }

    async verifyElementDisplayed1(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is displayed or not`);
        try {
            // await browser.pause(2000);
            const display = await locator.isDisplayed({ timeout: 90000 });
            if (display) {
                console.log(`${text} is displayed!!!`);
                await this.AllurePass1(`${text} is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`);
                await this.AllureFail(`${text} is not displayed!!!`);
                allureReporter.endStep('failed');
                // throw new Error(`${text} should be displayed, but it is not.`);
            }
        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`, err);
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`);
            throw new Error(err.message || `${text} was not displayed due to an error.`);
        }
    }

    async verifyElementIsClickable(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is clickable or not`)
        let enable = false;
        try {
            enable = await locator.isClickable();
            if (enable == false) {
                console.log(`${text} is clickable!!!`)
                await this.AllurePass(`${text} is clickable!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not clickable!!!`)
                await this.AllureFail(`${text} is not clickable!!!`);
                allureReporter.endStep('failed');
                throw new Error(err);
            }
        } catch (err) {
            allureReporter.endStep('failed');
            console.log(`${text} is not clickable!!!`)
            throw new Error(err);
        }
    }

    async verifyElementIsEnabled(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is enabled or not`)
        let enable = false;
        try {
            enable = await locator.isEnabled();
            console.log(`${text} is Enabled!!!`)
            await this.AllurePass(`${text} is Enabled!!!`);
            allureReporter.endStep('passed');
        } catch (err) {
            allureReporter.endStep('failed');
            console.log(`${text} is not Enabled!!!`)
        }
    }

    async verifyElementIsClickable(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is clickable or not`)
        let enable = false;
        try {
            enable = await locator.isClickable();
            if (enable == false) {
                console.log(`${text} is clickable!!!`)
                await this.AllurePass(`${text} is clickable!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not clickable!!!`)
                await this.AllureFail(`${text} is not clickable!!!`);
                allureReporter.endStep('failed');
                throw new Error(err);
            }
        } catch (err) {
            allureReporter.endStep('failed');
            console.log(`${text} is not clickable!!!`)
            throw new Error(err);
        }
    }

    async verifyElementIsDisabled(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is disabled or not`)
        let enable = false;
        try {
            if (!await locator.isEnabled()) {
                enable = true;
                console.log(`${text} is disabled!!!`)
                await this.AllurePass(`${text} is disabled!!!`);
                allureReporter.endStep('passed');
            };
        } catch (err) {
            await this.AllureFail(`${text} is enabled!!!`);
            allureReporter.endStep('failed');
            console.log(`${text} is Enabled!!!`)
            throw new Error(`${text} is Enabled!!!`);
        }
    }

    async verifyText(locator, attributeName, expectedText, logText) {
        allureReporter.startStep(`🔍 **TEXT VERIFY**: "${logText}" `)
        let actualText;
        try {
            await this.waitForDisplay(locator, 60000, logText);
            actualText = await locator.getAttribute(attributeName);
            if (expectedText.trim() === actualText.trim()) {
                console.log(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllurePass(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('failed');
                throw new Error(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            }
        } catch (error) {
            await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`, error);
            allureReporter.endStep('failed');
            console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            throw new Error(error.message || `Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
        }
    }

    async verifyText1(locator, attributeName, expectedText, logText) {
        allureReporter.startStep(`🔍 **TEXT VERIFY**: "${logText}"`);
        let actualText;
        try {
            await this.waitForDisplay(locator, 45000, logText);
            actualText = await locator.getAttribute(attributeName);

            // Normalize both texts by removing extra spaces, newlines, and trimming
            const normalizeText = (text) => text.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();
            const normalizedExpected = normalizeText(expectedText);
            const normalizedActual = normalizeText(actualText);

            if (normalizedExpected === normalizedActual) {
                console.log(`Matched -> Expected text: ${normalizedExpected} || Actual text: ${normalizedActual}`);
                await this.AllurePass(`Matched -> Expected text: ${normalizedExpected} || Actual text: ${normalizedActual}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`Not Matched -> Expected text: ${normalizedExpected} || Actual text: ${normalizedActual}`);
                await this.AllureFail(`Not Matched -> Expected text: ${normalizedExpected} || Actual text: ${normalizedActual}`);
                allureReporter.endStep('failed');
            }
        } catch (error) {
            await this.AllureFail(`Error during text verification: ${error.message}`, error);
            allureReporter.endStep('failed');
            console.log(`Error: ${error.message}`);
            throw new Error(error.message || `Error during text verification.`);
        }
    }

    async verifyListOfText(locator, attributeName, expectedTextList, logText) {
        allureReporter.startStep("Verify Text for: " + logText);
        let actualText = [];
        let expectedTexts = [];
        try {
            console.log(await locator.length);
            const size = await locator.length;
            for (let i = 0; i < size; i++) {
                actualText.push(await locator[i].getAttribute(attributeName));
            }

            expectedTexts = expectedTextList.split(',');

            let isMatched = false;
            for (const expectedText of expectedTexts) {
                if (actualText !== ".") {
                    if (actualText.includes(expectedText)) {
                        isMatched = true;
                        break;
                    }
                }
            }
            if (isMatched) {
                console.log(`Matched -> Actual text: ${actualText} is in the expected list: ${expectedTextList}`);
                await this.AllurePass(`Matched -> Actual text: ${actualText} is in the expected list: ${expectedTextList}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`Not Matched -> Actual text: ${actualText} is not in the expected list: ${expectedTextList}`);
                await this.AllureFail(`Not Matched -> Actual text: ${actualText} is not in the expected list: ${expectedTextList}`);
                allureReporter.endStep('failed');
                throw new Error(`Not Matched -> Actual text: ${actualText} is not in the expected list: ${expectedTextList}`);
            }
        } catch (error) {
            await this.AllureFail(`Error occurred while verifying text: ${error.message || error}`, error);
            allureReporter.endStep('failed');
            console.log(`Error occurred while verifying text: ${error.message || error}`);
            throw new Error(error.message || `Error occurred while verifying text.`);
        }
    }

    async verifyGetText(locator, expectedText, logText) {
        allureReporter.startStep(`🔍 **TEXT VERIFY**: "${logText}" `)
        let actualText;
        try {
            await this.waitForDisplay(locator, 45000, logText);
            actualText = await locator.getText();
            if (expectedText === actualText) {
                console.log(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllurePass(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('failed');
                // throw new Error(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                throw new Error(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            }
        } catch (error) {
            await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`, error);
            allureReporter.endStep('failed');
            console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            throw new Error(error.message || `Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
        }
    }

    async logOut() {
        if (await this.locator.moreOptions.isDisplayed({ timeout: 90000 })) {
            await this.click(this.locator.moreOptions, "More Options");
            await this.waitForDisplay(this.locator.logout, 30000, "Logout option");
            await this.click(this.locator.logout, "Logout option");
            await this.waitForDisplay(this.locator.startNow, 30000, "Start now button");
            await this.click(this.locator.startNow, "Start now button");
        } else if (await this.onboardLocator.hamburgerMenu.isDisplayed({ timeout: 90000 })) {
            await this.click(this.onboardLocator.hamburgerMenu, "Hamburger menu");
            await this.click(this.onboardLocator.logOut, "Logout option");
            await this.verifyElementDisplayed(this.locator.startNow, "Start now button");
        }
    }

    async resetPassword(program, oldPassword, newPassword) {
        await this.click(this.locator.program(program), program);
        await this.verifyElementIsEnabled(this.onboardLocator.continueButton, "Continue Button");
        await this.click(this.onboardLocator.continueButton, "Continue Button");
        await browser.pause(8000);
        if (await this.locator.dailyGoalCheck.isDisplayed({ timeout: 90000 })) {
            await this.click(this.locator.remindLater, "Remind Later")
        }
        await this.verifyElementDisplayed(this.forgotLocator.Hambugar, "Hamburger menu");
        await this.click(this.forgotLocator.Hambugar, "Hamburger menu");
        await this.verifyElementDisplayed(this.forgotLocator.myprofile, "My Profile");
        await this.click(this.forgotLocator.myprofile, "My Profile");
        await this.click(this.locator.editInformationIcon("My Profile"), "Edit Information Icon");
        await this.click(this.forgotLocator.changePassword, "Change Password Button");
        await this.verifyElementDisplayed(this.forgotLocator.changepasswordScreen, "Change Password Screen");
        await this.SetValue(this.forgotLocator.changepasswordpage, newPassword);
        await this.SetValue(this.forgotLocator.newpass, oldPassword);
        await this.SetValue(this.forgotLocator.repeatpass, oldPassword);
        await this.verifyElementIsEnabled(this.forgotLocator.savebutton, "Save Button");
        await this.click(this.forgotLocator.savebutton, "Save Button");
        await browser.pause(8000);
        if (await this.locator.dailyGoalCheck.isDisplayed({ timeout: 90000 })) {
            await this.click(this.locator.remindLater, "Remind Later")
        }
    }

    async uploadFile(file) {
        try {
            const filePath = file;
            const fileContent = fs.readFileSync(filePath, { encoding: 'base64' });

            const isEmulator = driver.capabilities.deviceName.includes('emulator');

            const deviceFilePath = isEmulator
                ? '/sdcard/Download/Image.png'
                : '/storage/emulated/0/Pictures/Image.png';

            await driver.pushFile(deviceFilePath, fileContent);

            await this.click(this.locator.uploadButton, "Upload Button");
            await browser.pause(2500);
            await this.click(this.locator.selectFile, "Select File");
            this.AllurePass("File Uploaded Successfully")
        } catch (err) {
            this.AllureFail("File Upload Un-successful")
        }
    }

    /**
 * Captures a screenshot and saves it with the given name.
 * @param {import('webdriverio').Browser} driver - The WebdriverIO driver instance.
 * @param {string} name - The screenshot filename (without extension).
 */
    async captureScreenshot(name, folderPath) {
        const dirPath = path.join(screenshotDir, folderPath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        const filePath = path.join(dirPath, `${name}.png`);
        await driver.saveScreenshot(filePath);
        console.log(`✅ Screenshot saved: ${filePath}`);
    }

    /**
 * Compares a saved screenshot with a baseline image.
 * @param {string} baselineName - Baseline screenshot filename (without extension).
 * @param {string} actualName - New screenshot filename (without extension).
 * @returns {Promise<{match: boolean, message: string}>}
 */
    async compareScreenshots(baselineName, actualName) {
        const baselinePath = `${screenshotDir}/baseline/${baselineName}.png`;
        const actualPath = `${screenshotDir}/actual/${actualName}.png`;
        const diffDir = path.join(screenshotDir, 'diff');
        if (!fs.existsSync(diffDir)) {
            fs.mkdirSync(diffDir, { recursive: true });
        }

        const diffPath = path.join(diffDir, `${actualName}_diff.png`);

        if (!fs.existsSync(baselinePath)) {
            console.log(`⚠️ Baseline not found! Saving ${actualName} as new baseline.`);
            fs.copyFileSync(actualPath, baselinePath);
            return { match: true, message: `Baseline created for ${actualName}.` };
        }

        const baselineImg = PNG.sync.read(fs.readFileSync(baselinePath));
        const actualImg = PNG.sync.read(fs.readFileSync(actualPath));

        const { width, height } = baselineImg;
        const diff = new PNG({ width, height });

        const numDiffPixels = pixelmatch(
            baselineImg.data, actualImg.data, diff.data,
            width, height,
            { threshold: 0.1 }
        );
        console.log("numDiffPixels : " + numDiffPixels)
        const totalPixels = width * height;
        const diffRatio = (numDiffPixels / totalPixels) * 100;
        console.log("diffRatio : " + diffRatio)
        if (diffRatio > 0.1) {
            fs.writeFileSync(diffPath, PNG.sync.write(diff));
            this.AllureFail(`❌ Images differ! Check ${diffPath}`);
            return { match: false, message: `❌ Images differ! Check ${diffPath}` };
        }
        this.AllurePass(`✅ Images match!`);
        return { match: true, message: '✅ Images match!' };
    }

    async scrollToElement(Attribute, Value) {

        await driver.execute('mobile: scroll', {
            strategy: Attribute,
            selector: Value,
            direction: 'down'
        });
    }

    async scrollWithUiScroll(Attribute, Value) {
        try {
            const element = await $(`android=new UiScrollable(new UiSelector().scrollable(true))` +
                `.scrollIntoView(new UiSelector().${Attribute}("${Value}"))`);
            await element.waitForDisplayed({ timeout: 30000 });
            this.AllurePass("Successfully scroll to the element: " + Value);
        } catch (err) {
            this.AllureFail("Scroll to the element: " + Value + " is unsuccessful: " + err);
            throw new Error(err);
        }
    }

    async scrollToElement1(element) {
        try {
            await driver.execute((el) => el.scrollIntoView({ behavior: "smooth", block: "center" }), element);
            this.AllurePass("Successfully scrolled to element: " + await element.getText());
        } catch (err) {
            this.AllureFail("Scroll to element failed: " + err.message);
            throw new Error(err);
        }
    }


    /**
     * 1 → Scrolls in the downward direction (down).,
     * value → Maximum 3 swipes before stopping.
     * @param {*} value 
     */
    async scrollToEnd(value) {
        allureReporter.startStep("Scroll to the end");
        try {
            $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,${value})`)
            this.AllurePass1("Successfully scroll to the end");
            allureReporter.endStep('passed');
        } catch (err) {
            this.AllureFail("Scroll to the end is unsuccessful: " + err);
            allureReporter.endStep('failed');
            throw new Error(err);
        }
    }

    /**
     * 1 → Scrolls in the backward direction (up).
     * value → Maximum 3 swipes before stopping.
     * @param {*} value 
     */
    async scrollToTop(value) {
        try {
            $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,${value})`)
            this.AllurePass("Successfully scroll to the top");
        } catch (err) {
            this.AllureFail("Scroll to the top  is unsuccessful");
            throw new Error(err);
        }
    }

    /**
     * Login to the Carepath application
     * @param {*} username 
     * @param {*} password 
     * @param {*} program 
     */
    async login(username, password, program) {
        allureReporter.startStep(`🔍 ****Log In****" `);
        try {
            await this.waitForDisplay(this.locator.startNow, 60000, "Start Now Button")
            await this.click(this.locator.startNow, "Start Now Button")
            await this.SetValue(this.locator.userName, username);
            await this.SetValue(this.locator.password, password);
            await this.click(this.locator.loginButton, "Login Button");
            try {
                const isDisplayed = await this.locator.allowButton.waitForDisplayed();
                if (isDisplayed) {
                    await this.click(this.locator.allowButton, "Allow button");
                }
            } catch (error) {
                // console.warn("Allow button did not appear within 90 seconds.");
            }
            try {
                const isDisplayed = await this.locator.allowNotificationButton.waitForDisplayed();
                if (isDisplayed) {
                    await this.click(this.locator.allowNotificationButton, "Allow notification button");
                }
            } catch (error) {
                // console.warn("Allow button did not appear within 90 seconds.");
            }
            if (await this.locator.allowButton.isDisplayed({ timeout: 25000 })) {
                await this.click(this.locator.allowButton, "allow button");
                if (await this.locator.backDefaultNotification.isDisplayed({ timeout: 30000 })) {
                    await this.click(this.locator.backDefaultNotification, "Back arrow for Default notification button");
                }
            }
            await this.waitForDisplay(this.locator.program(program), 60000, program);
            await this.click(this.locator.program(program), program);
            await this.AllurePass("Successfully Logged in");
            allureReporter.endStep('passed');
        } catch (err) {
            await this.AllureFail("Login failed", err);
            allureReporter.endStep('failed');
            throw new Error(`error in login: ${err}`);
        }
    }

    async getFormattedDate(inputDate) {
        let day, month, year;

        // Normalize the date format by replacing '/' or '-' with '-'
        const formattedDate = inputDate.replace(/[-\/]/g, '-');

        // Detect if format is DD-MM-YYYY or YYYY-MM-DD
        const parts = formattedDate.split('-');

        if (parts[0].length === 4) {
            // Format: YYYY-MM-DD (e.g., 2025-03-17)
            [year, month, day] = parts;
        } else {
            // Format: DD-MM-YYYY (e.g., 17-03-2025)
            [day, month, year] = parts;
        }

        // Convert numeric month to full month name
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthIndex = parseInt(month, 10) - 1;
        const monthName = monthNames[monthIndex];

        // Get the day of the week
        const dateObj = new Date(`${year}-${month}-${day}`);
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = dayNames[dateObj.getDay()];

        return `${day}, ${dayName}, ${monthName} ${day}, ${year}`;
    }

    async getFormattedDate1(inputDate) {
        let day, month, year;

        // Normalize the date format by replacing '/' or '-' with '-'
        const formattedDate = inputDate.replace(/[-\/]/g, '-');

        // Detect if format is DD-MM-YYYY or YYYY-MM-DD
        const parts = formattedDate.split('-');

        if (parts[0].length === 4) {
            // Format: YYYY-MM-DD (e.g., 2025-03-17)
            [year, month, day] = parts;
        } else {
            // Format: DD-MM-YYYY (e.g., 17-03-2025)
            [day, month, year] = parts;
        }

        // Convert numeric month to full month name
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthIndex = parseInt(month, 10) - 1;
        const monthName = monthNames[monthIndex];

        // Get the day of the week
        const dateObj = new Date(`${year}-${month}-${day}`);
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = dayNames[dateObj.getDay()];

        return `${day}, ${dayName}, ${monthName} ${day}, ${year}, Today`;
    }

    async completeYourProfile(option) {
        try {
            allureReporter.startStep("Complete your profile");
            await this.verifyElementDisplayed(this.locator.completeYourProfilePopup, "Complete your profile");
            // await this.verifyElementDisplayed(this.locator.completeYourProfileText, "Complete your profile text");
            await this.verifyElementIsEnabled(this.locator.completeNowButton, "Complete now Button");
            await this.click(this.locator.completeNowButton, "Complete now Button");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.howDoYouIdentify, "How do you identify yourself?");
            await this.click(this.locator.selectOptionInPersonalInformation(option.gender), "Select Gender");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.preferredLanguage, "Preferred Language");
            await this.click(this.locator.selectOptionInPersonalInformation(option.preferredLanguage), "Select Preferred Language");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.maritalStatus, "Marital Status");
            await this.click(this.locator.selectOptionInPersonalInformation(option.maritalStatus), "Select Marital Status");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.doYouHaveChildren, "Do you have children?");
            await this.click(this.locator.selectOptionInPersonalInformation(option.children), "Select Do you have children?");
            if (option.program !== 'Mental Health') {
                await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
                await this.verifyElementDisplayed(this.locator.primaryReasonText, "Primary reason for seeking care");
                await this.verifyElementDisplayed(this.locator.reasonForSeekingText, "Reason for seeking care");
                await this.SetValue(this.locator.reasonForSeekingCare, option.reasonForCare);
                if (await this.locator.nextButton) {
                    await this.click(this.locator.nextButton, "Next Button");
                }
                await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
                await this.verifyElementDisplayed(this.locator.upcomingTreatments, "Upcoming treatments");
                await this.click(this.locator.selectOptionInPersonalInformation(option.upcomingTreatment), "Select Upcoming treatments");
                await this.click(this.locator.datePicker, "Date Picker");
                if ((option.upcomingTreatment.toLowerCase()).trim() === 'yes') {
                    const date = await this.getFormattedDate1(option.treatmentDate);
                    await this.click(this.locator.accessibilityLocator(date), "Select Date");
                    await this.click(this.locator.OKButton, "OK Button");
                    await this.click(this.locator.nextButton, "Next Button");
                }
            }
            if (option.program === "Cancer" || option.program === "Chronic Disease") {
                await this.verifyElementDisplayed(this.locator.submitButtonInProfile, "Submit Button")
                await this.click(this.locator.submitButtonInProfile, "Submit Button");
            }
            await this.verifyElementDisplayed(this.locator.profileComplete, "Profile Complete");
            await this.click(this.locator.close, "Close Button");
            await this.AllurePass("Profile Completed Successfully");
            allureReporter.endStep('passed');
        } catch (err) {
            allureReporter.endStep('failed');
            await this.AllureFail("Profile Completion Failed", err);
            throw new Error(err);
        }
    }

    async editPersonalInformation(option) {
        try {
            allureReporter.startStep("Edit Profile Information");
            await this.verifyElementDisplayed(this.locator.hamburgerMenu, "Hamburger Menu");
            await this.click(this.locator.hamburgerMenu, "Hamburger Menu");
            await this.verifyElementDisplayed(this.locator.myProfile, "My Profile");
            await this.click(this.locator.myProfile, "My Profile");
            await this.verifyElementDisplayed(this.locator.editInformationIcon("My Profile"), "Edit Information Icon");
            await this.click(this.locator.editInformationIcon("My Profile"), "Edit Information Icon");
            while (true) {
                await this.scrollToEnd(2);
                if (await this.locator.editInformationIcon("Personal Information").isDisplayed()) {
                    break;
                }
            }
            await this.verifyElementDisplayed(this.locator.editInformationIcon("Personal Information"), "Edit Information Icon");
            await this.click(this.locator.editInformationIcon("Personal Information"), "Edit Information Icon");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.howDoYouIdentify, "How do you identify yourself?");
            await this.click(this.locator.selectOptionInPersonalInformation(option.gender), "Select Gender");
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            if (await this.locator.nextButton) {
                await this.click(this.locator.nextButton, "Next Button");
            }
            await this.verifyElementDisplayed(this.locator.preferredLanguage, "Preferred Language");
            await this.click(this.locator.selectOptionInPersonalInformation(option.preferredLanguage), "Select Preferred Language");
            if (await this.locator.nextButton) {
                await this.click(this.locator.nextButton, "Next Button");
            }
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.maritalStatus, "Marital Status");
            await this.click(this.locator.selectOptionInPersonalInformation(option.maritalStatus), "Select Marital Status");
            if (await this.locator.nextButton) {
                await this.click(this.locator.nextButton, "Next Button");
            }
            await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
            await this.verifyElementDisplayed(this.locator.doYouHaveChildren, "Do you have children?");
            await this.click(this.locator.selectOptionInPersonalInformation(option.children), "Select Do you have children?");
            if (await this.locator.nextButton) {
                await this.click(this.locator.nextButton, "Next Button");
            }
            if (option.program !== 'Mental Health') {
                await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
                await this.verifyElementDisplayed(this.locator.primaryReasonText, "Primary reason for seeking care");
                await this.verifyElementDisplayed(this.locator.reasonForSeekingText, "Reason for seeking care");
                await this.SetValue(this.locator.reasonForSeekingCare, option.reasonForCare.trim());
                if (await this.locator.nextButton) {
                    await this.click(this.locator.nextButton, "Next Button");
                }
                await this.verifyElementDisplayed(this.locator.personalInformationPage, "Personal Information Page");
                await this.verifyElementDisplayed(this.locator.upcomingTreatments, "Upcoming treatments");
                await this.click(this.locator.selectOptionInPersonalInformation(option.upcomingTreatment), "Select Upcoming treatments");
                if ((option.upcomingTreatment.toLowerCase()).trim() === 'yes') {
                    await this.click(this.locator.datePicker, "Date Picker");
                    const date = await this.getFormattedDate1(option.treatmentDate);
                    await this.click(this.locator.accessibilityLocator(date), "Select Date");
                    await this.click(this.locator.OKButton, "OK Button");
                    await this.click(this.locator.nextButton, "Next Button");
                }
                if (await this.locator.nextButton) {
                    await this.click(this.locator.nextButton, "Next Button");
                }
            }
            if (option.program === "Cancer" || option.program === "Chronic Disease") {
                await this.verifyElementDisplayed(this.locator.submitButtonInProfile, "Submit Button")
                await this.click(this.locator.submitButtonInProfile, "Submit Button");
            }
            await this.verifyElementDisplayed(this.locator.profileComplete, "Profile Complete");
            await this.click(this.locator.close, "Close Button");
            await this.AllurePass("Profile Completed Successfully");
            allureReporter.endStep('passed');
        } catch (err) {
            allureReporter.endStep('failed');
            await this.AllureFail("Profile Completion Failed", err);
            throw new Error(err);
        }
    }

    async programApprove(mail, permission) {
        allureReporter.startStep("Approve the program from mail");
        try {
            await driver.execute('mobile: shell', {
                command: `am start -a android.intent.action.VIEW -d "${process.env.GMAIL_URL}" com.android.chrome`
            });
            if (await this.locator.chromeDismissButton.isDisplayed()) {
                await this.locator.chromeDismissButton.click()
            }
            if (await this.locator.chromeGotIt.isDisplayed()) {
                await this.locator.chromeGotIt.click()
            }
            if (await this.locator.chromeEasierPopup.isDisplayed()) {
                await this.click(this.locator.noThanks, 'No Thanks')
            }
            await this.SetValue(this.locator.googleMail, process.env.GMAIL_ID)
            await this.click(this.locator.googleNextButton, "Next Button");
            await this.SetValue(this.locator.googlePasswordInput, process.env.PASSWORD)
            await this.click(this.locator.googleNextButton, "Next Button");
            try {
                const isDisplayed = await this.locator.useWebVersion.waitForDisplayed();
                if (isDisplayed) {
                    console.log("Chrome --> Use web version is displayed")
                    await this.click(this.locator.useWebVersion, "Use web version");
                }
            } catch (err) {
                console.log("Chrome --> Use web version is not displayed")
            }
            await this.waitForDisplay(this.locator.searchMail, 90000, "Search Mail");
            await this.SetValue(this.locator.searchMail, mail);
            await browser.pause(2000)
            await driver.keys('Enter');
            await browser.pause(2000)
            await this.click(this.locator.approveMsg, "Approve Message");
            while (true) {
                await this.scrollToEnd(2);
                if (await this.locator.linkForApproval.isDisplayed()) {
                    break;
                }
            }
            await this.click(this.locator.linkForApproval, "link for approval");
            await this.waitForDisplay(this.locator.onboardingToTheAppText, 60000, "Onboarding to the app text");
            while (true) {
                await this.scrollToEnd(2);
                if (await this.locator.approveButton.isDisplayed()) {
                    break;
                }
            }
            if (permission.toLowerCase() === "approve") {
                await this.click(this.locator.approveButton, "Approve Button");
            } else {
                await this.click(this.locator.rejectButton, "Reject Button");
            }
            await this.verifyElementDisplayed(this.locator.okResponse, "Ok Response");
            allureReporter.endStep('passed');
        } catch (err) {
            allureReporter.endStep('failed');
            throw new Error(err);
        } finally {
            await this.chromeCleanup();
            await driver.terminateApp('com.android.chrome')
        }
    }

    async chromeCleanup() {
        await this.waitForDisplay(this.locator.chrome3dots, 90000, "Chrome options");
        await this.click(this.locator.chrome3dots, "Chrome options")
        await this.verifyElementDisplayed(this.locator.deleteBrowsingData, "Delete browsing data");
        await this.click(this.locator.deleteBrowsingData, "Delete browsing data");
        await this.click(this.locator.deleteDataDropdown, "Delete data dropdown");
        await this.click(this.locator.allTimeOption, "All time option");
        await this.verifyElementDisplayed(this.locator.deleteData, "Delete data button");
        await this.click(this.locator.deleteData, "Delete data button");
        await this.verifyElementDisplayed(this.locator.newTab, "New Tab icon");
        await this.click(this.locator.newTab, "New Tab icon");
        await this.waitForDisplay(this.locator.chrome3dots, 90000, "Chrome options");
        await this.click(this.locator.chrome3dots, "Chrome options");
        await this.click(this.locator.historyOption, "History Option");
        if (await this.locator.emptyStateIcon.isDisplayed({ timeout: 90000 })) {
            await this.click(this.locator.closeIconInChrome, "Close icon in chrome");
            await this.verifyElementDisplayed(this.locator.chromeSearchBox, "Chrome search box");
        } else {
            while (true) {
                if (await this.locator.emptyStateIcon.isDisplayed()) {
                    await this.click(this.locator.closeIconInChrome, "Close icon in chrome");
                    await this.verifyElementDisplayed(this.locator.chromeSearchBox, "Chrome search box");
                    break;
                }
                await this.click(this.locator.removeHistory, "Remove History");

            }
        }
    }
}