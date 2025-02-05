import { locators } from '../page/locators.js';
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import { Cancerlocators } from '../page/cancerLocator.js';
import { Elderlocators } from '../page/ElderCareLocator.js';
import {ReAssessmentlocators} from '../page/ReAssessmentLocators.js';


describe('Carepath Automation Mind Zone', () => {

    const locator = new locators();
    const Keywords = new keywords(locator);
    const locator_cancer = new Cancerlocators();
 


    const timestamp = new Date();
    const shortDate = `${timestamp.getFullYear()}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')}`;
    const shortTime = `${timestamp.getHours().toString().padStart(2, '0')}-${timestamp.getMinutes().toString().padStart(2, '0')}`;
    const formattedTimestamp = `${shortDate}_${shortTime}`;

    it('Cancer Onboard', async () => {
        allureReporter.addDescription(`
                1. Click on the "Start Now" button.
                2. Check if the login screen is displayed.
                3. Enter the username and password.
                4. Check if the login button is enabled.
                5. Handle any dialog boxes related to notifications.
                6. Log in successfully if all steps are completed.
                7. Cancer onboard 
             
            `);





        });


        afterEach(async () => {

            // const appPackage = 'com.carepath.app.dev';
            // const appActivity = 'com.carepath.MainActivity';
            // await browser.terminateApp(appPackage);
            // console.log('App terminated successfully.');
            // await browser.startActivity(appPackage, appActivity);
            // console.log('App relaunched successfully.');
        });

    });