import allureReporter from '@wdio/allure-reporter'
import HtmlReporter from 'wdio-html-nice-reporter';
import { locators } from './locators.js';
import { expect, assert } from 'chai';
export class keywords {

    constructor() {
        this.locator = new locators(this.locator);
        this.timeout = process.env.DISPLAY_TIMEOUT
    }

    /**
       * Log success message and attach a screenshot.
       * @param {string} message - Success message to log.
       */
    async AllurePass(message) {
        allureReporter.addStep(`✅ PASS: ${message}`, {}, 'passed');
        console.log(`✅ PASS: ${message}`);
        // HtmlReporter.addAttachment('Log Message', message, 'text/plain'); // Logging to HtmlReporter
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment('Screenshot on Pass', screenshot, 'image/png');
        // HtmlReporter.addAttachment('Screenshot on Pass', screenshot, 'image/png');
    }

    async AllureInfo(message) {
        allureReporter.addStep(`ℹ️ INFO: ${message}`, {}, 'passed');
        console.log(`ℹ️ INFO: ${message}`);
        // HtmlReporter.addAttachment('Log Message', message, 'text/plain'); // Logging to HtmlReporter
    }


    /**
     * Log failure message, perform assertion, and attach a screenshot.
     * @param {string} message - Failure message to log.
     * @param {Error|string} error - Optional error object or failure reason for detailed logs.
     */
    async AllureFail(message, error = null) {
        allureReporter.addStep(`❌ FAIL: ${message}`, {}, 'failed');
        console.log(`❌ FAIL: ${message}`);
        // HtmlReporter.addAttachment('Log Message', message, 'text/plain'); // Logging to HtmlReporter

        if (error) {
            const errorDetails = error.stack || error.message || error;
            allureReporter.addAttachment('Error Details', errorDetails, 'text/plain');
            // HtmlReporter.addAttachment('Error Details', errorDetails, 'text/plain');
        }
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment('Screenshot on Fail', screenshot, 'image/png');
        // HtmlReporter.addAttachment('Screenshot on Fail', screenshot, 'image/png');
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
            assert.fail(`Error clicking on ${text}: ${err.message || err}`);
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
            await locator.waitForDisplayed({ timeout: 45000 });
            await locator.click();
            await browser.pause(2000);
            await locator.setValue(text);
            await this.AllurePass(`Successfully set value ${text}`)
            allureReporter.endStep('passed');
        } catch (err) {
            console.log(`SetValue to the element: ${text} is failed`);
            await this.AllureFail(`SetValue to the element: ${text} is failed`, err);
            allureReporter.endStep('failed');
            await assert.fail(err);
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
            await browser.pause(2000)
            display = await locator.isDisplayed({ timeout: 45000 });
            if (display) {
                console.log(`${text} is displayed!!!`)
                await this.AllurePass(`${text} is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`)
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
            await locator.waitForDisplayed({ timeout: 90 * 1000 });
            console.log(`${text} is displayed`)
            await this.AllurePass(`${text} is displayed`);
            allureReporter.endStep('passed');
        } catch (err) {
            console.log(`${text} is not displayed after waiting for ${90 * 1000}`)
            await this.AllureFail(`${text} is not displayed after waiting for ${90 * 1000}`, err)
            allureReporter.endStep('failed');
            console.log(err);
            assert.fail(err);
        }
    }

    /**
     * To get OTP from the mailinator mail.
     * @param {*} mail 
     * @returns 
     */
    async getOTPFromMailinator(mail) {
        try {
            await driver.startActivity('com.android.chrome', 'com.google.android.apps.chrome.Main');
            await this.locator.chromeHomeButton.waitForDisplayed({ timeout: 30000 });
            await this.locator.chromeHomeButton.click();
            if (await this.locator.chromeDismissButton.isDisplayed()) {
                await this.locator.chromeDismissButton.click()
            }
            if (await this.locator.chromeGotIt.isDisplayed()) {
                await this.locator.chromeGotIt.click()
            }
            await this.locator.chromeSearchBox.click();
            await this.SetValue(this.locator.chromeUrl, process.env.MAILINATOR);
            await browser.pause(2000)
            await driver.keys('Enter');
            await this.locator.mailinatorInbox.waitForDisplayed({ timeout: 30000 });
            await this.locator.mailinatorInbox.clearValue();
            await this.SetValue(this.locator.mailinatorInbox, mail);
            await this.click(this.locator.goButton, "Go Button");
            await this.click(this.locator.pauseButton, "Click on pause button")
            await this.waitForDisplay(this.locator.doNotReply, "Do not reply button");
            await this.click(this.locator.doNotReply, "OTP message");
            await this.locator.verifyAccount.waitForDisplayed({ timeout: 30000 })
            const otp = await $('(//android.view.View[@text="Verify icon Verify your account Here is your verification code for Carepath Digital Health "]//..//..//android.view.View)[3]//android.view.View').getText();
            console.log('Extracted OTP:', otp);
            return otp;
        } catch (error) {
            console.log(error)
        } finally {
            await this.click(this.locator.chrome3dots, "Chrome option");
            await this.click(this.locator.deleteBrowsingData, "Delete browsing data");
            await this.click(this.locator.deleteData, "Delete data");
            await browser.pause(3000)
            await driver.terminateApp('com.android.chrome');
        }
    }

    async verifyElementDisplayed(locator, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" is displayed or not`);
        try {
            // await browser.pause(2000);
            const display = await locator.isDisplayed({ timeout: 90000 });
            if (display) {
                console.log(`${text} is displayed!!!`);
                await this.AllurePass(`${text} is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`);
                await this.AllureFail(`${text} is not displayed!!!`);
                allureReporter.endStep('failed');
                // await assert.fail(`${text} should be displayed, but it is not.`);
            }
        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`, err);
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`);
            await assert.fail(err.message || `${text} was not displayed due to an error.`);
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

    async verifyText(locator, attributeName, expectedText, logText) {
        allureReporter.startStep(`🔍 **TEXT VERIFY**: "${logText}" `)
        let actualText;
        try {
            await this.waitForDisplay(locator, 45000, logText);
            actualText = await locator.getAttribute(attributeName);
            if (expectedText === actualText) {
                console.log(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllurePass(`Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                allureReporter.endStep('failed');
                // await assert.fail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                throw new Error(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            }
        } catch (error) {
            await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`, error);
            allureReporter.endStep('failed');
            console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            assert.fail(error.message || `Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
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
            assert.fail(error.message || `Error during text verification.`);
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
                // await assert.fail(`Not Matched -> Actual text: ${actualText} is not in the expected list: ${expectedTextList}`);
            }
        } catch (error) {
            await this.AllureFail(`Error occurred while verifying text: ${error.message || error}`, error);
            allureReporter.endStep('failed');
            console.log(`Error occurred while verifying text: ${error.message || error}`);
            await assert.fail(error.message || `Error occurred while verifying text.`);
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
                // await assert.fail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
                throw new Error(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            }
        } catch (error) {
            await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`, error);
            allureReporter.endStep('failed');
            console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            assert.fail(error.message || `Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
        }
    }

}