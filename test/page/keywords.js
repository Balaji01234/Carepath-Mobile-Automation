import allureReporter from '@wdio/allure-reporter'
import { locators } from './locators.js';

export class keywords {

    constructor() {
        this.locator = new locators(this.locator);
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

    async SetValue(locator, text) {
        allureReporter.startStep(`SetValue to the element: ${text}`)
        try {
            await locator.waitForDisplayed({ timeout: 10000 });
            await locator.click();
            await browser.pause(3000);
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

    async isDisplayed(locator, text) {
        allureReporter.startStep("Checking for element is displayed: " + text)
        let display = false;
        try {
            display = await locator.isDisplayed({timeout:45000});
            if (display) {
                console.log(`${text} is displayed!!!`)
                await this.AllurePass(`${text} is displayed!!!`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} is not displayed!!!`)
            }
        } catch (err) {
            await this.AllureFail(`${text} is not displayed!!!`,err)
            allureReporter.endStep('failed');
            console.log(`${text} is not displayed!!!`)
        } finally {
            return display;
        }
    }

    async isEnabled(locator, text) {
        allureReporter.startStep("Checking for element is enabled: " + text)
        let enable = false;
        try {
            enable = await locator.isEnabled({timeout :20000});
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

    async getOTPFromMailinator(mail) {
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
        await driver.pause(2000)
        await $('//android.widget.TextView[@text="DoNot-Reply"]').click()
        await this.locator.verifyAccount.waitForDisplayed({ timeout: 30000 })
        const otp = await $('(//android.view.View[@text="Verify icon Verify your account Here is your verification code for Carepath Digital Health "]//..//..//android.view.View)[3]//android.view.View').getText();
        console.log('Extracted OTP:', otp);
        await driver.terminateApp('com.android.chrome');
        return otp;
    }

    async getattribute(locator,attributeName, text) {
         // Default attribute name
        allureReporter.startStep("Fetching attribute '" + attributeName + "' for: " + text);
        let value = null;
        try {
            // Get the attribute value from the element
            value = await locator.getAttribute(attributeName);
            console.log(`${text} - ${attributeName}: ${value}`);
            
            // Reporting success with Allure
            await this.AllurePass(`${text} - ${attributeName}: ${value}`);
            allureReporter.endStep('passed');
        } catch (err) {
            // Reporting failure with Allure
            console.log(`${text} - Failed to fetch ${attributeName} value!`);
            allureReporter.endStep('failed');
        } finally {
            return value;
        }
    }

    async verifyText(locator, attributeName, expectedText, logText) {
        allureReporter.startStep("Verify Text for: " + logText)
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
                await assert.fail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            }
        } catch (error) {
            await this.AllureFail(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`, error);
            allureReporter.endStep('failed');
            console.log(`Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
            await assert.fail(error.message || `Not Matched -> Expected text: ${expectedText} || Actual text: ${actualText}`);
   
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
    

    async verifyBackgroundColor(locator, expectedColor, text) {
        allureReporter.startStep(`🔍 **VERIFY**: "${text}" background color matches expected color`);
    
        try {
            // Get the background color of the element
            const bgColor = await locator.getCssProperty('background-color');
            
            // Check if the background color matches the expected color
            if (bgColor.value === expectedColor) {
                console.log(`${text} has the correct background color: ${expectedColor}`);
                await this.AllurePass(`${text} background color matches ${expectedColor}`);
                allureReporter.endStep('passed');
            } else {
                console.log(`${text} has an incorrect background color. Expected: ${expectedColor}, but got: ${bgColor.value}`);
                await this.AllureFail(`${text} background color does not match. Expected: ${expectedColor}, but got: ${bgColor.value}`);
                allureReporter.endStep('failed');
            }
        } catch (err) {
            console.log(`Failed to verify the background color of ${text}`);
            await this.AllureFail(`Failed to verify ${text} background color`);
            allureReporter.endStep('failed');
        }
    }
    async scrollToElement(Attribute,Value){
        allureReporter.startStep(`scrollToElement`)
        await driver.execute('mobile: scroll', {
            strategy: Attribute,
            selector: Value,
        });
        allureReporter.endStep('failed');  
    }
    

}