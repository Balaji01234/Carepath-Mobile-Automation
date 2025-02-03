export class onboardLocators {

    get mentalHealthText() {
        return $('android=new UiSelector().resourceId("mental_health_text")')
    }

    get pickADifferentProgram() {
        return $('android=new UiSelector().resourceId("pick_a_different_program_text")')
    }

    get continueButton() {
        return $('android=new UiSelector().resourceId("continue_text")')
    }

    get welcomeTextOnboarding() {
        return $('android=new UiSelector().resourceId("welcome_to_carepath_onboarding_text")')
    }

    get openChecklist() {
        return $('android=new UiSelector().resourceId("open_check_list_text")')
    }

    get checkListsText() {
        return $('checklist_text')
    }

    get mentalHealthProgramApproveText() {
        return $('android=new UiSelector().resourceId("your request to access the  mental health  program is approved._text")')
    }

    get startOnboarding() {
        return $('android=new UiSelector().resourceId("start_onboarding_button")')
    }

    get contactInformation() {
        return $('~contact_information_text')
    }

    get requiredInformation() {
        return $('android=new UiSelector().resourceId("required_information_text")')
    }

    get checkListScreen() {
        return $$('//android.widget.ScrollView//android.view.View')
    }

    get startOnboardingButton() {
        return $('~start_onboarding_button')
    }

    get contactInformation() {
        return $('~Contact Information')
    }

    get homeNumberText() {
        return $('android=new UiSelector().resourceId("home_phone_number_text")')
    }

    get homePhoneNumber() {
        return $('//android.widget.EditText[@resource-id="home_number_textfield"]')
    }

    get cellNumberText() {
        return $('android=new UiSelector().resourceId("cell_phone_number_text")')
    }

    get cellNumber() {
        return $('//android.widget.EditText[@resource-id="cell_number_textfield"]')
    }

    get nextButtonText() {
        return $('android=new UiSelector().resourceId("next_text")')
    }

    get nextButton() {
        return $('~next_button')
    }

    completeStatus(value) {
        return $(`~${value}% Complete`)
    }

    get emergencyContactScreen() {
        return $('~Emergency Contact')
    }

    get firstNameText() {
        return $('//android.view.View[@content-desc="First Name"]')
    }

    get lastNameText() {
        return $('//android.view.View[@content-desc="Last Name"]')
    }

    get relationText() {
        return $('//android.view.View[@content-desc="Relation"]')
    }

    get cellPhoneText() {
        return $('//android.view.View[@content-desc="Cell Phone"]')
    }

    get firstName() {
        return $('//android.widget.EditText[@resource-id="first_name_textfield"]')
    }

    get lastName() {
        return $('//android.widget.EditText[@resource-id="last_name_textfield"]')
    }

    get relation() {
        return $('//android.widget.EditText[@resource-id="relation_textfield"]')
    }

    get relationCellPhone() {
        return $('//android.widget.EditText[@resource-id="cell_number_textfield"]')
    }

    get addressInformationScreen() {
        return $('//android.view.View[@content-desc="Address Information"]')
    }

    get addressField() {
        return $('//android.widget.EditText[@resource-id="address_textfield"]')
    }

    get unitField() {
        return $('//android.widget.EditText[@resource-id="unit_textfield"]')
    }

    get cityField() {
        return $('//android.widget.EditText[@resource-id="city_textfield"]')
    }

    get provinceDropdown() {
        return $('//android.widget.ImageView[@resource-id="province_textfield"]')
    }

    get postalCode() {
        return $('//android.widget.EditText[@resource-id="postal_code_textfield"]')
    }

    backgroundText(text) {
        return $(`android=new UiSelector().resourceId("${text}_text")`)
    }

    accessibilityLocator(id) {
        return $(`~${id}`)
    }

    get healthCardInformationScreen() {
        return $('~Health Card Information')
    }

    get healthCardNumberField() {
        return $('//android.widget.EditText[@resource-id="health_card_textfield"]')
    }

    get dobInHealthCard() {
        return $('//android.view.View[@resource-id="dob_textfield"]')
    }

    get employmentInformationScreen() {
        return $('~Employment Information')
    }

    get workStatusDropdown() {
        return $('~work_status_textfield')
    }

    get fullTime() {
        return $('~employment_status_action_fulltime')
    }

    get termsAndConditionsScreen() {
        return $('~CAREPATH APP - TERMS OF USE')
    }

    get acceptTermsAndConditions() {
        return $('android=new UiSelector().resourceId("i_read_and_accept_terms_text")')
    }

    get provideMyConsent() {
        return $('android=new UiSelector().resourceId("i_provided_my_consent_text")')
    }

    get consentFormPopup() {
        return $('~Consent form')
    }

    get textInConsentFormPopup() {
        return $('android=new UiSelector().resourceId("consent_form_attention_subtitle_text")')
    }

    get continueBtn() {
        return $('android=new UiSelector().resourceId("continue_text")')
    }

    get adobeAcknowledgeMessage() {
        return $('//android.widget.TextView[@text="By clicking continue, I acknowledge that I have read and agree to the Adobe "]')
    }

    get continueBtnInAdobe() {
        return $('android=new UiSelector().text("Continue")')
    }

    get adobeSign() {
        return $('android=new UiSelector().text("Adobe Acrobat Sign").instance(1)')
    }

    get startButton() {
        return $('android=new UiSelector().text("Start").instance(1)')
    }

    get nameFieldInAdobe() {
        return $('android=new UiSelector().resourceId("full_name-0")')
    }

    get mentalHealthTextInAdobe() {
        return $('//android.widget.TextView[@resource-id="ADBE_Obj_4"]')
    }

    nextArrowButton(value) {
        return $(`(//android.widget.TextView[contains(@text,"required fields remaining")]//..//android.view.View//android.widget.TextView)[2]`)
    }

    get initialHere() {
        return $('//android.view.View[@text="Initial here"]')
    }

    get typeInInitialBox() {
        return $('//android.widget.TextView[@text="Type"]')
    }

    get drawInInitialBox() {
        return $('//android.widget.TextView[@text="Draw"]')
    }

    get enterInitials() {
        return $('//android.widget.EditText')
    }

    get closeButtonInInitials() {
        return $('//android.widget.Button[@text="Close"]')
    }

    get applyButtonInInitials() {
        return $('//android.widget.Button[@text="Apply"]')
    }

    get typeYourInitials() {
        return $('//android.widget.EditText')
    }

    remainingFields(value) {
        return $(`//android.widget.TextView[@text="${value} required fields remaining"]`)
    }

    get understandText() {
        return $('//android.widget.TextView[@text=" provides a Mental Health Program that provides counselling and psychotherapy for a wide range of mental health concerns."]')
    }

    get privacyNote() {
        return $('//android.widget.TextView[@text="Privacy Notice"]')
    }

    get backButton() {
        return $('~BACK')
    }

    get clientName() {
        return $('//android.widget.EditText[@resource-id="N-0"]')
    }

    get emailAddress() {
        return $('//android.widget.EditText[@resource-id="Em-0"]')
    }

    get signHere() {
        return $('//android.view.View[@text="Sign here"]')
    }

    get reviewAgreementText() {
        return $('//android.widget.TextView[@text="Review what the signed copy of the agreement will look like before submitting."]')
    }

    get reviewAgreementButton() {
        return $('//android.widget.Button[@text="Review agreement"]')
    }

    get requiredFieldsCompletedText() {
        return $('//android.widget.TextView[@text="Required fields completed"]')
    }

    get finishButton() {
        return $('//android.widget.Button[@text="Double tap to activate finish"]')
    }

    get tapToSign() {
        return $('//android.widget.Button[@text="Tap to sign"]')
    }

    get requiredFieldCompleted() {
        return $('(//android.widget.TextView[@text="Required fields completed"])[1]')
    }

    get continueNextStepButton() {
        return $('android=new UiSelector().resourceId("continue_to_next_step_text")')
    }

    get assessmentOverview() {
        return $('//android.view.View[@content-desc="Assessment overview"]')
    }

    get startAssessmentButton() {
        return $('~start_assessment_button')
    }

    get assessmentOverviewText() {
        return $('android=new UiSelector().resourceId("assessment_overview_subtitle_text")')
    }

    get startAssessmentButtonText() {
        return $('android=new UiSelector().resourceId("start_assessment_text")')
    }

    get phq9() {
        return $('~PHQ9')
    }

    questionNumber(number) {
        return $(`~${number}/10 `)
    }

    questionNumber1(number) {
        return $(`~${number}/8 `)
    }

    get phq1() {
        return $(`~phq9-1_title\nLittle interest or pleasure doing things`)
    }

    get phq2() {
        return $(`~phq9-2_title\nFeeling down, depressed, or hopeless`)
    }

    get phq3() {
        return $(`~phq9-3_title\nTrouble falling asleep, staying asleep, or sleeping too much`)
    }

    get phq4() {
        return $(`~phq9-4_title\nFeeling tired or having little energy`)
    }

    get phq5() {
        return $(`~phq9-5_title\nPoor appetite or overeating`)
    }

    get phq6() {
        return $(`~phq9-6_title\nFeeling bad about yourself – or that you’re a failure or have let yourself or your family down`)
    }

    get phq7() {
        return $(`~phq9-7_title\nTrouble concentrating on things, such as reading the newspaper or watching television`)
    }

    get phq8() {
        return $(`~phq9-8_title\nMoving or speaking so slowly that other people could have noticed. Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual`)
    }

    get phq9() {
        return $(`~phq9-9_title\nThoughts that you would be better off dead or of hurting yourself in some way`)
    }

    get phq10() {
        return $(`~phq9-10_title\nIf you checked off any problems, how difficult have those problems made it for you to do your work, take care of things at home, or get along with other people?`)
    }


    get severalDays() {
        return $('~Several Days')
    }

    get somewhatDifficult() {
        return $(`~Somewhat Difficult`)
    }

    get savePHQ9Button() {
        return $('~save_button_phq9')
    }

    get overLastWeekBotherText() {
        return $('android=new UiSelector().resourceId("over_last_week_bothered_problem_text")')
    }

    getPhqLocator(questionNumber) {
        const propertyName = `phq${questionNumber}`;
        if (this[propertyName]) {
            return this[propertyName]; // Return the getter dynamically
        } else {
            throw new Error(`Locator for question ${questionNumber} not found.`);
        }
    }

    get GADScreen() {
        return $('android=new UiSelector().resourceId("general_anxiety_disorder_text")')
    }

    get gad1() {
        return $(`~gad7-1_title\nFeeling nervous, anxious, or on edge`)
    }
    get gad2() {
        return $(`~gad7-2_title\nNot being able to stop or control worrying`)
    }
    get gad3() {
        return $(`~gad7-3_title\nWorrying too much about different things`)
    }
    get gad4() {
        return $(`~gad7-4_title\nTrouble Relaxing`)
    }
    get gad5() {
        return $(`~gad7-5_title\nBeing so restless that it is hard to sit still`)
    }
    get gad6() {
        return $(`~gad7-6_title\nBecoming easily annoyed or irritable`)
    }
    get gad7() {
        return $(`~gad7-7_title\nFeeling afraid, as something awful might happen`)
    }
    get gad8() {
        return $(`~gad7-8_title\nIf you checked any problems, how difficult have they made it for you to do your work, take care of things at home, or get along with other people?`)
    }

    getGADLocator(questionNumber) {
        const propertyName = `gad${questionNumber}`;
        if (this[propertyName]) {
            return this[propertyName]; // Return the getter dynamically
        } else {
            throw new Error(`Locator for question ${questionNumber} not found.`);
        }
    }

    get saveGeneralAnxietyDisorder7Button() {
        return $('~save_button_gad7')
    }

    get saveGeneralAnxietyDisorder7ButtonText() {
        return $('android=new UiSelector().resourceId("save gad-7_text")')
    }

    get reviewScreen() {
        return $('~Review')
    }

    get nextArrow() {
        return $('//android.view.View[@content-desc="GAD-7"]/../android.widget.Button[2]')
    }

    get preferredTimeForClinic() {
        return $('android=new UiSelector().resourceId("please_identify_preferred_time_text")')
    }

    get preferredTimeDropdown() {
        return $('~preferred_time_textfield')
    }

    get selectTime() {
        return $('~Morning (8am - 12pm)')
    }

    get saveButton() {
        return $('~save_button')
    }

    get thankYouText() {
        return $('android=new UiSelector().resourceId("thank_you_text")')
    }

    get thankYouMessage() {
        return $('android=new UiSelector().resourceId("thank_you_subtitle_text")')
    }

    get continueButtonInThankYouScreen() {
        return $("~CONTINUE")
    }

    get welcomeCarepath() {
        return $('~Welcome to Carepath!')
    }

    get submitPHQButton() {
        return $('~save_or_submit_button')
    }

    get submitPHQButtonText() {
        return $('android=new UiSelector().resourceId("submit phq-9_text")')
    }

    get GAD7Review() {
        return $('~General Anxiety Disorder Scale (GAD7)')
    }

    get submitGAD7Button() {
        return $('~save_or_submit_button')
    }

    get submitGAD7ButtonText() {
        return $('android=new UiSelector().resourceId("submit gad-7_text")')
    }

    get goToProgramSelection() {
        return $('~GO TO PROGRAM SELECTION')
    }

    get completeYourProfilePopup() {
        return $('~Complete Your Profile')
    }

    get completeLaterButton(){
        return $('~profile_incomplete_button2')
    }

    get mentalHealthProgramScreen(){
        return $('~MENTAL HEALTH PROGRAM')
    }

    get hamburgerMenu(){
        return $('~hamburger_action')
    }

    get logOut(){
        return $('~Log Out')
    }

    get skipAndGoHomeButton(){
        return $('android=new UiSelector().resourceId("skip_and_go_home_text")')
    }
}