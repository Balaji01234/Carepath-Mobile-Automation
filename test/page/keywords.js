import allureReporter from '@wdio/allure-reporter'
import { locators } from './locators.js';

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
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment('Screenshot on Pass', screenshot, 'image/png');
    }

    /**
     * Log failure message, perform assertion, and attach a screenshot.
     * @param {string} message - Failure message to log.
     * @param {Error|string} error - Optional error object or failure reason for detailed logs.
     */
    async AllureFail(message, error = null) {
        allureReporter.addStep(`❌ FAIL: ${message}`, {}, 'failed');

        if (error) {
            const errorDetails = error.stack || error.message || error;
            allureReporter.addAttachment('Error Details', errorDetails, 'text/plain');
        }
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment('Screenshot on Fail', screenshot, 'image/png');
    }


    async click(locator, text) {
        allureReporter.startStep("Click on the element: " + text)
        try {
            await locator.waitForDisplayed({ timeout: this.timeout })
            await locator.isEnabled({ timeout: this.timeout });
            await locator.click();
            await this.AllurePass("Successfully Clicked on: " + text);
            allureReporter.endStep('passed');
        } catch (err) {
            console.log("Click action failed for: " + text);
            await this.AllureFail("Click action failed for: " + text, err);
            allureReporter.endStep('failed');
            throw err;
        }
    }

    /**
     * SetValue method will send the text to the input fields
     * @param {*} locator 
     * @param {*} text 
     */
    async SetValue(locator, text) {
        allureReporter.startStep(`SetValue to the element: ${text}`)
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
            throw err;
        }
    }

    /**
     * isDisplayed method will check presence of element in the screen
     * @param {*} locator 
     * @param {*} text 
     * @returns 
     */
    async isDisplayed(locator, text) {
        allureReporter.startStep("Checking for element is displayed: " + text)
        let display = false;
        try {
            await browser.pause(2000)
            display = await locator.isDisplayed({ timeout: 30000 });
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
        allureReporter.startStep("Checking for element is enabled: " + text)
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
            throw err;
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
            await browser.pause(2000)
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
            await this.locator.goButton.click();
            try {
                await browser.pause(1000)
                const element = await $('~DoNot-Reply');
                await browser.execute((el) => {
                    el.click();
                }, element);
            } catch (err) {
                await this.click(this.locator.doNotReply, "OTP message");
            }
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
}