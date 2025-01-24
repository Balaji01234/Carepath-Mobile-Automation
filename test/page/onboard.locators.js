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
        return $('//android.widget.EditText[@resource-id="last_name_textfield"]')
    }

    get relationCellPhone() {
        return $('//android.widget.EditText[@resource-id="last_name_textfield"]')
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

    get provinceDropdown(){
        return $('//android.widget.ImageView[@resource-id="province_textfield"]')
    }

    backgroundText(text){
        return $(`android=new UiSelector().resourceId("${text}_text")`)
    }
}