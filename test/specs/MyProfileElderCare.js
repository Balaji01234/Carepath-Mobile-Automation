
import { locators } from '../page/locators.js';
import { onboardLocators } from '../page/onboard.locators.js'
import { lessonsLocators } from '../page/lessons.locators.js'
import { keywords } from '../page/keywords.js';
import { getRandomString, writeExcelData, readData, generateRandomNumber, dataSets } from '../../utils/common.js';
import allureReporter from '@wdio/allure-reporter'
import { expect } from 'chai';
import {MentalHealthReAssessment} from '../page/MentalHealthReassLocator.js';
import {MyProfileLocators} from '../page/MyProfileLocator.js';

describe('Carepath Automation', () => {

    const locator = new locators();
    const onboardLocator = new onboardLocators();
    const lessonLocator = new lessonsLocators();
    const Keywords = new keywords(locator);
    const MentalHealthReAss = new MentalHealthReAssessment();
    const myprofile = new MyProfileLocators();

    const timeout = process.env.DISPLAY_TIMEOUT
    const iterations = process.env.ITERATIONS
    console.log("iterations: " + iterations)
    const iterationValue = dataSets(iterations);
    console.log("iterationValue" + iterationValue)

    it('Elder Care My Profile', async () => {
        try{
        allureReporter.addDescription(`Mental health Reassessment !!! `);      
        await driver.implicitWait(18000);

        const userName = await readData("MyProfile", "Field", "Email", `Testdata${1}`);
        const password = await readData("MyProfile", "Field", "Password", `Testdata${1}`);
        const Firstname = await readData("MyProfile", "Field", "Firstname", `Testdata${1}`);
        const Lastname = await readData("MyProfile", "Field", "Lastname", `Testdata${1}`);
        const EmergencyCont = await readData("MyProfile", "Field", "Emergency ", `Testdata${1}`);
        const Emergencylastname = await readData("MyProfile", "Field", "Emergency last name", `Testdata${1}`);
        const EmergencyMom = await readData("MyProfile", "Field", "Mom", `Testdata${1}`);
        const address = await readData("MyProfile", "Field", "Address", `Testdata${1}`);
        const unit = await readData("MyProfile", "Field", "Unitoption", `Testdata${1}`);
        const city = await readData("MyProfile", "Field", "city", `Testdata${1}`);
        const number =  await readData("MyProfile", "Field", "Number", `Testdata${1}`);
        const cellnumber =  await readData("MyProfile", "Field", "Cell Number", `Testdata${1}`);
        const CirecleFirstName =  await readData("MyProfile", "Field", "Circle of Care first name", `Testdata${1}`);
        const CireclelastName =  await readData("MyProfile", "Field", "Circle of Care last name", `Testdata${1}`);
        const CirecleMobile=  await readData("MyProfile", "Field", "Circle of Care Mobile", `Testdata${1}`);
        const CirecleFax=  await readData("MyProfile", "Field", "Circle of Care fax Number", `Testdata${1}`);


        await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
        await Keywords.click(locator.startNow, "Start Now Button");
        await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
        console.log({ userName, password })
     
        await Keywords.SetValue(locator.userName, userName);
        await Keywords.SetValue(locator.password, password);
        const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
        expect(loginBtnEnable).to.be.true;
        await Keywords.click(locator.loginButton, "Login Button")
         
        await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
        await Keywords.click(locator.allowButton, "Allow button");
        await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
        await Keywords.click(locator.allowNotificationButton, "Allow notification button");
        await Keywords.AllureInfo("LogIn Screen Completed!!!");
        console.log('Login process completed successfully.');
        if (await lessonLocator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
            await Keywords.verifyElementDisplayed(MentalHealthReAss.eldercare, "Elder care Screen");
            await Keywords.click(MentalHealthReAss.eldercare, "Eldercare Button")
        }
        await Keywords.verifyElementIsEnabled(lessonLocator.continuebutton, "Continue Button");
        await Keywords.click(lessonLocator.continuebutton, "Continue Button")
        await browser.pause(7000);

        await Keywords.waitForDisplay(myprofile.hamburger, 40000, "hamburger");
        await Keywords.click(myprofile.hamburger, "Humburger Button");
        await Keywords.verifyElementDisplayed(myprofile.hamburgerpage, "Side Menu Screen");
        await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
        await Keywords.click(myprofile.myprofile, "My profile Button");
        await Keywords.verifyText(myprofile.myprofilePage, "content-desc", "My Profile", "My Profile");
        await Keywords.click(myprofile.edit, "Edit Button");
        await Keywords.SetValue(myprofile.firstnameinput, Firstname);
        await Keywords.SetValue(myprofile.lastanameinput, Lastname);
        await Keywords.click(myprofile.customer, "New customer Button");
        await Keywords.verifyElementIsEnabled(myprofile.confirmUserName, "CONFIRM USERNAME Button");
        await Keywords.click(myprofile.confirmUserName, "CONFIRM USERNAME Button");
        await Keywords.scrollToElement("accessibility id","DELETE ACCOUNT");
        await Keywords.click(myprofile.contactPage, "Contact Information");
        await Keywords.SetValue(myprofile.contactPage,number);
        await Keywords.SetValue(myprofile.cellnumber,cellnumber);
        await Keywords.verifyElementIsEnabled(myprofile.changePassword, "CHANGE PASSWORD");
        await Keywords.click(myprofile.changePassword, "CHANGE PASSWORD");
        await Keywords.click(myprofile.myprofileback, "myprofile back");
        await Keywords.scrollToElement("accessibility id","DELETE ACCOUNT");
        await Keywords.SetValue(myprofile.Emergency,EmergencyCont);
        await Keywords.SetValue(myprofile.Emergencylastname,Emergencylastname);
        await Keywords.SetValue(myprofile.Emergencymom,EmergencyMom);
        await browser.pause(1000);
        await Keywords.scrollToElement("accessibility id","Address Information"); 
        // await Keywords.scrollToElement("accessibility id","Personal Information"); 
        await Keywords.SetValue(myprofile.addressval,address);
        await Keywords.SetValue(myprofile.unit,unit);
        await Keywords.SetValue(myprofile.city,city);
        await Keywords.scrollToElement("accessibility id","Care Providers");
        await Keywords.verifyElementDisplayed(myprofile.CircleofCare, "Circle of Care"); 
        await Keywords.click(myprofile.CircleofCare, "Circle of Care");
        await Keywords.click(myprofile.addnew, " Add New Button");
        await Keywords.verifyElementDisplayed(myprofile.circlrofcare, "Circle of CareButton");
        await Keywords.click(myprofile.SpecialistCareProvider, "Specialist Care Provider");
        await Keywords.click(myprofile.addnewOpt, "Add new");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.verifyElementDisplayed(myprofile.primary, "Primary Care Provider");
        await Keywords.click(myprofile.primaryOption, "Primary Care Provider");
        await Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.primaryAdd, "Primary Care Provider");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.click(myprofile.no, "No Button"); 
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.otherCare, "other Care");
        await Keywords.click(myprofile.othercareadd, "other Care add");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
       // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
       await Keywords.click(myprofile.no, "No Button");
       await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
       await Keywords.click(myprofile.no, "save Button");
       await Keywords.verifyElementIsEnabled(myprofile.savebut, "Submit button");
       await Keywords.click(myprofile.savebut, "Submit button");
      // await Keywords.click(myprofile.saveChanges, "save changes");
      await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
    }
    catch(err){
       
        throw new Error(err);
    }

});

it('Mental Health My Profile', async () => {
    try{
    allureReporter.addDescription(`Mental health Reassessment !!! `);      
    await driver.implicitWait(18000);

    const userName = await readData("MyProfile", "Field", "Mental Health Email", `Testdata${1}`);
    const password = await readData("MyProfile", "Field", "Password", `Testdata${1}`);
    const contactInformationMentalHealth = await readData("MyProfile", "Field", "Mental Health con", `Testdata${1}`);
    const EmergencyCont = await readData("MyProfile", "Field", "Emergency ", `Testdata${1}`);
    const Emergencylastname = await readData("MyProfile", "Field", "Emergency last name", `Testdata${1}`);
    const EmergencyMom = await readData("MyProfile", "Field", "Mom", `Testdata${1}`);
    const address = await readData("MyProfile", "Field", "Address", `Testdata${1}`);
    const unit = await readData("MyProfile", "Field", "Unitoption", `Testdata${1}`);
    const city = await readData("MyProfile", "Field", "city", `Testdata${1}`);



    await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
    await Keywords.click(locator.startNow, "Start Now Button");
    await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
    console.log({ userName, password })
 
    await Keywords.SetValue(locator.userName, userName);
    await Keywords.SetValue(locator.password, password);
    const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
    expect(loginBtnEnable).to.be.true;
    await Keywords.click(locator.loginButton, "Login Button")
     
    await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
    await Keywords.click(locator.allowButton, "Allow button");
    await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
    await Keywords.click(locator.allowNotificationButton, "Allow notification button");
    await Keywords.AllureInfo("LogIn Screen Completed!!!");
    console.log('Login process completed successfully.');
    if (await lessonLocator.welcometocarepath.isDisplayed({ timeout: 20000 })) {
        await Keywords.click(lessonLocator.mentalhealth, "Mental health");
    }

    await Keywords.verifyElementIsEnabled(lessonLocator.continuebutton, "Continue Button");
    await Keywords.click(lessonLocator.continuebutton, "Continue Button")
    await browser.pause(7000);
    if (await lessonLocator.goalCheck.isDisplayed({ timeout: 45000 })) {
        await Keywords.click(lessonLocator.remindMeLater, "Remind me later")
    }
    await browser.pause(9000);
    await Keywords.waitForDisplay(myprofile.hamburger, 4000, "hamburger");
    await Keywords.click(myprofile.hamburger, "Humburger Button");
    await Keywords.verifyElementDisplayed(myprofile.hamburgerpage, "Side Menu Screen");
    await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
    await Keywords.click(myprofile.myprofile, "My profile Button");
    await Keywords.verifyText(myprofile.myprofilePage, "content-desc", "My Profile", "My Profile");
    await Keywords.click(myprofile.edit, "Edit Button");
    await Keywords.verifyElementDisplayed(myprofile.contactInformation, "Contact Information");
    await Keywords.SetValue(myprofile.contactInformationinput,contactInformationMentalHealth);
    await Keywords.verifyElementIsEnabled(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.myprofileback, "myprofile back");

    await Keywords.scrollToElement("accessibility id","DELETE ACCOUNT");
    await browser.pause(9000);
    await Keywords.SetValue(myprofile.Emergency,EmergencyCont);
    await Keywords.SetValue(myprofile.Emergencylastname,Emergencylastname);
    await Keywords.scrollToElement("accessibility id","Address Information");
    await Keywords.click(myprofile.country, "country");
    await Keywords.verifyElementDisplayed(myprofile.countrypage, "Country page");
    await Keywords.click(myprofile.canada, "canada");
    await browser.pause(1000);
    await Keywords.scrollToElement("accessibility id","Address Information");
    await Keywords.SetValue(myprofile.addressval,address);
    await Keywords.SetValue(myprofile.unit,unit);
    await Keywords.SetValue(myprofile.city,city);
    await Keywords.scrollToElement("accessibility id","SAVE ALL CHANGES");
    await Keywords.verifyElementDisplayed(myprofile.CircleofCare, "Circle of Care");
    // await Keywords.click(myprofile.saveChanges, "save changes");
  
        await Keywords.click(myprofile.CircleofCare, "Circle of Care");
        await Keywords.click(myprofile.addnew, " Add New Button");
        await Keywords.verifyElementDisplayed(myprofile.circlrofcare, "Circle of CareButton");
        await Keywords.click(myprofile.SpecialistCareProvider, "Specialist Care Provider");
        await Keywords.click(myprofile.addnewOpt, "Add new");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.verifyElementDisplayed(myprofile.primary, "Primary Care Provider");
        await Keywords.click(myprofile.primaryOption, "Primary Care Provider");
        await Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.primaryAdd, "Primary Care Provider");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.click(myprofile.no, "No Button");
        Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.otherCare, "other Care");
        await Keywords.click(myprofile.othercareadd, "other Care add");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
       // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
       await Keywords.click(myprofile.no, "No Button");
       await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
       await Keywords.click(myprofile.no, "save Button");
       await Keywords.verifyElementIsEnabled(myprofile.savebut, "Submit button");
       await Keywords.click(myprofile.savebut, "Submit button");
      // await Keywords.click(myprofile.saveChanges, "save changes");
      await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");





}
catch(err){
   
    throw new Error(err);
}

});

it('Chronic My Profile', async () => {
    try{
    allureReporter.addDescription(`Mental health Reassessment !!! `);      
    await driver.implicitWait(18000);

    const userName = await readData("MyProfile", "Field", "Chronic Email", `Testdata${1}`);
    const password = await readData("MyProfile", "Field", "Password", `Testdata${1}`);
    const number =  await readData("MyProfile", "Field", "Number", `Testdata${1}`);
    const EmergencyCont = await readData("MyProfile", "Field", "Emergency ", `Testdata${1}`);
    const Emergencylastname = await readData("MyProfile", "Field", "Emergency last name", `Testdata${1}`);
    const EmergencyMom = await readData("MyProfile", "Field", "Mom", `Testdata${1}`);
    const address = await readData("MyProfile", "Field", "Address", `Testdata${1}`);
    const unit = await readData("MyProfile", "Field", "Unitoption", `Testdata${1}`);
    const city = await readData("MyProfile", "Field", "city", `Testdata${1}`);
    const cellnumber =  await readData("MyProfile", "Field", "Cell Number", `Testdata${1}`);


    await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
    await Keywords.click(locator.startNow, "Start Now Button");
    await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
    console.log({ userName, password })
 
    await Keywords.SetValue(locator.userName, userName);
    await Keywords.SetValue(locator.password, password);
    const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
    expect(loginBtnEnable).to.be.true;
    await Keywords.click(locator.loginButton, "Login Button")
     
    await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
    await Keywords.click(locator.allowButton, "Allow button");
    await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
    await Keywords.click(locator.allowNotificationButton, "Allow notification button");
    await Keywords.AllureInfo("LogIn Screen Completed!!!");
    console.log('Login process completed successfully.');
    await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
    await Keywords.verifyElementDisplayed(onboardLocator.ChronicDi, "Chronic card")
    await Keywords.click(onboardLocator.ChronicDi, "chronic Health card");
    await driver.implicitWait(15000);
    await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
    await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
    await Keywords.click(onboardLocator.continueButton, "Continue Button");
    await driver.implicitWait(1500);
    await browser.pause(9000);
    await Keywords.waitForDisplay(myprofile.hamburger, 4000, "hamburger");
    await Keywords.click(myprofile.hamburger, "Humburger Button");
    await Keywords.verifyElementDisplayed(myprofile.hamburgerpage, "Side Menu Screen");
    await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
    await Keywords.click(myprofile.myprofile, "My profile Button");
    await Keywords.verifyText(myprofile.myprofilePage, "content-desc", "My Profile", "My Profile");
    await Keywords.click(myprofile.edit, "Edit Button");
    await Keywords.click(myprofile.contactPage, "Contact Information");
    await Keywords.SetValue(myprofile.contactPage,number);
    await Keywords.SetValue(myprofile.cellnumber,cellnumber);
    await Keywords.verifyElementIsEnabled(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.myprofileback, "myprofile back");
    await Keywords.scrollToElement("accessibility id","DELETE ACCOUNT");
    // await Keywords.SetValue(myprofile.Emergency,EmergencyCont);
    // await Keywords.SetValue(myprofile.Emergencylastname,Emergencylastname);
    // await Keywords.SetValue(myprofile.Emergencymom,EmergencyMom);
    await browser.pause(1000);
    await Keywords.scrollToElement("accessibility id","Address Information");
    await browser.pause(1000);
    await Keywords.scrollToElement("accessibility id","SAVE ALL CHANGES");
    await Keywords.verifyElementDisplayed(myprofile.CircleofCare, "Circle of Care");
    // await Keywords.click(myprofile.saveChanges, "save changes");

        await Keywords.click(myprofile.CircleofCare, "Circle of Care");
        await Keywords.click(myprofile.addnew, " Add New Button");
        await Keywords.verifyElementDisplayed(myprofile.circlrofcare, "Circle of CareButton");
        await Keywords.click(myprofile.SpecialistCareProvider, "Specialist Care Provider");
        await Keywords.click(myprofile.addnewOpt, "Add new");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.verifyElementDisplayed(myprofile.primary, "Primary Care Provider");
        await Keywords.click(myprofile.primaryOption, "Primary Care Provider");
        await Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.primaryAdd, "Primary Care Provider");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.click(myprofile.no, "No Button");
      Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.otherCare, "other Care");
        await Keywords.click(myprofile.othercareadd, "other Care add");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
       // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
       await Keywords.click(myprofile.no, "No Button");
       await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
       await Keywords.click(myprofile.no, "save Button");
       await Keywords.verifyElementIsEnabled(myprofile.savebut, "Submit button");
       await Keywords.click(myprofile.savebut, "Submit button");
      // await Keywords.click(myprofile.saveChanges, "save changes");
      await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");


}
catch(err){
   
    throw new Error(err);
}

});

it('Cancer My Profile', async () => {
    try{
    allureReporter.addDescription(`Mental health Reassessment !!! `);      
    await driver.implicitWait(18000);

    const userName = await readData("MyProfile", "Field", "Chronic Email", `Testdata${1}`);
    const password = await readData("MyProfile", "Field", "Password", `Testdata${1}`);
    const number =  await readData("MyProfile", "Field", "Number", `Testdata${1}`);
    const EmergencyCont = await readData("MyProfile", "Field", "Emergency ", `Testdata${1}`);
    const Emergencylastname = await readData("MyProfile", "Field", "Emergency last name", `Testdata${1}`);
    const EmergencyMom = await readData("MyProfile", "Field", "Mom", `Testdata${1}`);
    const address = await readData("MyProfile", "Field", "Address", `Testdata${1}`);
    const unit = await readData("MyProfile", "Field", "Unitoption", `Testdata${1}`);
    const city = await readData("MyProfile", "Field", "city", `Testdata${1}`);
    const cellnumber =  await readData("MyProfile", "Field", "Cell Number", `Testdata${1}`);

    await Keywords.verifyElementIsEnabled(locator.startNow, "Start Now Button")
    await Keywords.click(locator.startNow, "Start Now Button");
    await Keywords.verifyElementDisplayed(locator.loginScreen, "Login Screen");
    console.log({ userName, password })
 
    await Keywords.SetValue(locator.userName, userName);
    await Keywords.SetValue(locator.password, password);
    const loginBtnEnable = await Keywords.isEnabled(locator.loginButton, "Login button")
    expect(loginBtnEnable).to.be.true;
    await Keywords.click(locator.loginButton, "Login Button")
     
    await Keywords.waitForDisplay(locator.allowButton, 40000, "Get notified dialog box")
    await Keywords.click(locator.allowButton, "Allow button");
    await Keywords.waitForDisplay(locator.allowNotificationButton, 40000, "Allow notification")
    await Keywords.click(locator.allowNotificationButton, "Allow notification button");
    await Keywords.AllureInfo("LogIn Screen Completed!!!");
    console.log('Login process completed successfully.');
    await Keywords.waitForDisplay(locator.homePage, 45000, "Home Page")
    await Keywords.verifyElementDisplayed(locator.cancer, "Cancer card")
    await Keywords.click(locator.cancer, "Cancer Health card")
    await Keywords.verifyElementDisplayed(onboardLocator.pickADifferentProgram, "Pick a different program button");
    await Keywords.verifyElementIsEnabled(onboardLocator.continueButton, "Continue Button");
    await Keywords.click(onboardLocator.continueButton, "Continue Button");
    await Keywords.waitForDisplay(myprofile.hamburger, 4000, "hamburger");
    await Keywords.click(myprofile.hamburger, "Humburger Button");
    await Keywords.verifyElementDisplayed(myprofile.hamburgerpage, "Side Menu Screen");
    await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
    await Keywords.click(myprofile.myprofile, "My profile Button");
    await Keywords.verifyText(myprofile.myprofilePage, "content-desc", "My Profile", "My Profile");
    await Keywords.click(myprofile.edit, "Edit Button");
    await Keywords.click(myprofile.contactPage, "Contact Information");
    await Keywords.SetValue(myprofile.contactPage,number);
    await Keywords.SetValue(myprofile.cellnumber,cellnumber);
    await Keywords.verifyElementIsEnabled(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.changePassword, "CHANGE PASSWORD");
    await Keywords.click(myprofile.myprofileback, "myprofile back");
    await Keywords.scrollToElement("accessibility id","DELETE ACCOUNT");
    // await Keywords.SetValue(myprofile.Emergency,EmergencyCont);
    // await Keywords.SetValue(myprofile.Emergencylastname,Emergencylastname);
    // await Keywords.SetValue(myprofile.Emergencymom,EmergencyMom);
    await browser.pause(1000);
    await Keywords.SetValue(myprofile.addressval,address);
    await Keywords.SetValue(myprofile.unit,unit);
    await Keywords.SetValue(myprofile.city,city);
    await Keywords.scrollToElement("accessibility id","SAVE ALL CHANGES");
    await Keywords.verifyElementDisplayed(myprofile.CircleofCare, "Circle of Care");
    // await Keywords.click(myprofile.saveChanges, "save changes");

        await Keywords.click(myprofile.CircleofCare, "Circle of Care");
        await Keywords.click(myprofile.addnew, " Add New Button");
        await Keywords.verifyElementDisplayed(myprofile.circlrofcare, "Circle of CareButton");
        await Keywords.click(myprofile.SpecialistCareProvider, "Specialist Care Provider");
        await Keywords.click(myprofile.addnewOpt, "Add new");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.verifyElementDisplayed(myprofile.primary, "Primary Care Provider");
        await Keywords.click(myprofile.primaryOption, "Primary Care Provider");
        await Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.primaryAdd, "Primary Care Provider");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
        // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
        await Keywords.click(myprofile.no, "No Button");
        await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
        await Keywords.click(myprofile.no, "save Button");
        await Keywords.click(myprofile.no, "No Button");
        Keywords.scrollToElement("accessibility id","Other Care Provider");
        await Keywords.click(myprofile.otherCare, "other Care");
        await Keywords.click(myprofile.othercareadd, "other Care add");
        await Keywords.SetValue(myprofile.FirstName, CirecleFirstName);
        await Keywords.SetValue(myprofile.circlelast, CireclelastName);
       // await Keywords.SetValue(myprofile.circleNumber, CirecleMobile);
        await Keywords.SetValue(myprofile.circleTax, CirecleFax);
       await Keywords.click(myprofile.no, "No Button");
       await Keywords.verifyElementIsEnabled(myprofile.no, "Save button");
       await Keywords.click(myprofile.no, "save Button");
       await Keywords.verifyElementIsEnabled(myprofile.savebut, "Submit button");
       await Keywords.click(myprofile.savebut, "Submit button");
      // await Keywords.click(myprofile.saveChanges, "save changes");
      await Keywords.verifyElementDisplayed(myprofile.myprofile, "My profile Screen");
}
catch(err){
   
    throw new Error(err);
}

});


});