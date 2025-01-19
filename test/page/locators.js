export class locators {

    get startNow() {
        return $('~start_now_button');
    }

    get languageDropdown() {
        return $('~Language_dropdown');
    }

    get englishLanguage() {
        return $('~dropdown_itemEN');
    }

    get frenchLanguage() {
        return $('~dropdown_itemFR');
    }

    get discoverButton(){
        return $('~discover_button')
    }

    get loginScreen() {
        return $('~login_or_signin_text');
    }

    get userName() {
        return $('android=new UiSelector().resourceId("login_email_textfield")');
    }

    get password() {
        return $('android=new UiSelector().resourceId("login_password_textfield")')
    }

    get loginButton() {
        return $('~login_button')
    }

    get forgotPassword(){
        return $('~forgot_password_button')
    }

    get getNotifiedDialogBox() {
        return $('~get_notified_text')
    }

    get allowButton() {
        return $('~ok_button')
    }

    get denyButton() {
        return $('~secondary_button')
    }

    get allowNotification() {
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_message")"]')
    }

    get allowNotificationButton() {
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")')
    }

    get createAccountButton() {
        return $('~create_account_action')
    }

    get createRequestButton() {
        return $('~create_request_button')
    }

    get createRequestButtonText() {
        return $('//android.view.View[@resource-id="create_request_button"]//android.widget.Button//android.view.View')
    }

    get signUpPage() {
        return $('~sign_up_text')
    }

    get employeeButton() {
        return $('~iam_employee_button')
    }

    get studentButton() {
        return $('~iam_student_button')
    }

    get nextButton() {
        return $('~next_button')
    }

    get firstName() {
        return $('android=new UiSelector().resourceId("first_name_textfield")')
    }

    get lastName() {
        return $('android=new UiSelector().resourceId("last_name_textfield")')
    }

    get emailId() {
        return $('android=new UiSelector().resourceId("email_textfield")')
    }

    get phoneNumber() {
        return $('android=new UiSelector().resourceId("cell_phone_textfield")')
    }

    get passwordField() {
        return $('android=new UiSelector().resourceId("password_textfield")')
    }

    get repeatPassword() {
        return $('android=new UiSelector().resourceId("repeat_password_textfield")')
    }

    get alreadyHaveAccount() {
        return $('android=new UiSelector().resourceId("already_have_account_action")')
    }

    get employerName() {
        return $('android=new UiSelector().resourceId("employer_textfield")')
    }

    get referral() {
        return $('android=new UiSelector().description("referral_source_text")')
    }

    referrals(referral) {
        return $(`android=new UiSelector().description("${referral}")`);
    }

    get dob() {
        return $('android=new UiSelector().resourceId("dob_textfield")')
    }

    get relationToEmployee() {
        return $('android=new UiSelector().resourceId("relation_textfield")')
    }

    get signUpButton() {
        return $('~signup_button')
    }

    get verifyYourAccount(){
        return $('~verify_your_account_text')
    }

    get getMail(){
        return $('~by_email_card')
    }

    get verifyButton(){
        return $('~verify_button')
    }

    get chromeDismissButton(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/signin_fre_dismiss_button")')
    }

    get chromeGotIt(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/ack_button")')
    }

    get chromeSearchBox(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/search_box_text")')
    }

    get chromeHomeButton(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/home_button")')
    }

    get chromeUrl(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/url_bar")')
    }

    get mailinatorInbox(){
        return $('android=new UiSelector().resourceId("inbox_field")')
    }

    get justNow(){
        return $('//android.widget.TextView[@text="just now"]')
    }

    get goButton(){
        return $('//android.widget.Button[@text="GO"]')
    }

    get verificationCodeText(){
        return $('//android.widget.TextView[@text="DoNot-Reply"]')
    }

    get verifyAccount(){
        return $('android=new UiSelector().text("Verify your account")')
    }

    otpPage(index){
        return $(`~pinDigit${index}`)
    }

    get homePage(){
        return $('android=new UiSelector().description("Welcome to Carepath Digital Health")')
    }

}