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

    get discoverButton() {
        return $('~discover_button')
    }

    get loginScreen() {
        return $('~Log in or Sign In');
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

    get forgotPassword() {
        return $('~forgot_password_?_text')
    }

    get getNotifiedDialogBox() {
        return $('~get_notified_text')
    }

    get allowButton() {
        return $('android=new UiSelector().resourceId("allow_text")')
    }

    get denyButton() {
        return $('~secondary_button')
    }

    get allowNotification() {
        return $('//android.widget.TextView[@text="Allow Dev-Carepath Digital Health to send you notifications?"]')
    }

    get allowNotificationButton() {
        return $('//android.widget.Button[@text="Allow"]')
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
        return $('android=new UiSelector().resourceId("sign_up_text")')
    }

    get employeeButton() {
        return $('~iam_employee_button')
    }

    get employeeText() {
        return $('android=new UiSelector().resourceId("iam_employee_text")')
    }

    get studentButton() {
        return $('~iam_student_button')
    }

    get studentText() {
        return $('android=new UiSelector().resourceId("iam_student_text")')
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
        return $('~Referral Source')
    }

    referrals(referral) {
        return $(`android=new UiSelector().description("${referral}")`);
    }

    get referralDropdownText() {
        return $('android=new UiSelector().resourceId("referral_source_text")')
    }

    get dob() {
        return $('android=new UiSelector().resourceId("dob_textfield")')
    }

    get dobText() {
        return $('android=new UiSelector().resourceId("date of birth (dd-mm-yyyy) _text")')
    }

    get relationToEmployee() {
        return $('android=new UiSelector().resourceId("relation_textfield")')
    }

    get signUpButton() {
        return $('~SIGN UP')
    }

    get verifyYourAccount() {
        return $('android=new UiSelector().resourceId("verify_your_account_text")')
    }

    get getMail() {
        return $('~by_email_card')
    }

    get getByText() {
        return $('~by_text_card')
    }

    get verifyButton() {
        return $('android=new UiSelector().resourceId("verify_text")')
    }

    get chromeDismissButton() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/signin_fre_dismiss_button")')
    }

    get chromeGotIt() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/ack_button")')
    }

    get chromeEasierPopup() {
        return $('//android.widget.TextView[@text="Chrome notifications make things easier"]')
    }

    get noThanks() {
        return $('//android.widget.Button[@resource-id="com.android.chrome:id/negative_button"]')
    }

    get chromeSearchBox() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/search_box_text")')
    }

    get chromeHomeButton() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/home_button")')
    }

    get clearChromeData() {
        return $('android=new UiSelector().text("Clear browsing data")')
    }

    get chromeUrl() {
        return $('android=new UiSelector().resourceId("com.android.chrome:id/url_bar")')
    }

    get mailinatorInbox() {
        return $('android=new UiSelector().resourceId("inbox_field")')
    }

    get mailinatorInbox1() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)')
    }

    get justNow() {
        return $('//android.widget.TextView[@text="just now"]')
    }

    get goButton() {
        return $('//android.widget.Button[@text="GO"]')
    }

    get pauseButton() {
        return $('//android.view.View[@resource-id="pause_button"]')
    }

    get pauseButton1() {
        return $('android=new UiSelector().text("Pause Button")')
    }

    get verificationCodeText() {
        return $('android=new UiSelector().text("DoNot-Reply")')
    }


    get verifyAccount() {
        return $('android=new UiSelector().text("Verify your account")')
    }

    get otpInput() {
        return $$('//android.widget.EditText')
    }

    otpPage(index) {
        return $(`//android.view.View[@content-desc="pinDigit${index}"]/android.widget.EditText`)
    }

    get homePage() {
        return $('android=new UiSelector().resourceId("welcome_to_carepath_digital_health_text")')
    }

    get doNotReply() {
        return $('~DoNot-Reply')
    }

    get otpText() {
        return $('(//android.view.View[@text="Verify icon Verify your account Here is your verification code for Carepath Digital Health "]//..//..//android.view.View)[3]//android.view.View')
    }

    get moreOptions() {
        return $('~appbar_more_options_menu')
    }

    get logout() {
        return $('~more_options_menu_item_logout')
    }

    get chrome3dots() {
        return $('~Customize and control Google Chrome')
    }

    get deleteBrowsingData() {
        return $('android=new UiSelector().text("Delete browsing data")')
    }

    get deleteData() {
        return $('//android.widget.Button[@resource-id="com.android.chrome:id/positive_button"]')
    }

    get mentalHealthCard() {
        return $(`~Mental\nHealth`)
    }

    get sendRequestButton() {
        return $('android=new UiSelector().resourceId("send_request_text")')
    }

    get success() {
        return $('android=new UiSelector().resourceId("success_text")')
    }

    get closeButton() {
        return $('android=new UiSelector().resourceId("close_text")')
    }

    get backArrow() {
        return $('~back_action')
    }

    get studentInformationScreen() {
        return $('~Student Information')
    }

    get athabascaUniversity() {
        return $('~Athabasca University')
    }

    get studentId() {
        return $('//android.widget.EditText[@resource-id="student_id_textfield"]')
    }

    get courseEnrolled() {
        return $('//android.widget.EditText[@resource-id="enrolled_course_textfield"]')
    }

    program(programName) {
        const formattedProgramName = programName.includes(" ") ? programName.replace(/ /g, "\n") : programName;
        return $(`//android.view.View[@content-desc="${formattedProgramName}"]`);
    }
    get mailForgot() {
        return $(`//android.widget.TextView[@text="FORGOT PASSWORD"]`)
    }

    errorText(accessibilityId) {
        return $(`~${accessibilityId}`)
    }

    get yearsOldText() {
        return $('android=new UiSelector().resourceId("should_be_18_years_old_to_register_text")')

    }

    get yearsOldText1() {
        return $('android=new UiSelector().resourceId("should_be_14_years_old_to_register_text")')

    }

    get pleaseEnterValidDateText() {
        return $('android=new UiSelector().resourceId("please_enter_valid_date_text")')
    }

    get referralErrorText() {
        return $('android=new UiSelector().resourceId("please_choose_referral_source_text")')
    }

    get errorPopup() {
        return $('~Error!')
    }

    get okButton() {
        return $('~ok_button')
    }

    get invalidVerificationCode() {
        return $('android=new UiSelector().resourceId("invalid_verification_code_text")')
    }

    get enterValidCodeText() {
        return $('android=new UiSelector().resourceId("please_enter_valid_code_text")')
    }

    get resendCode() {
        return $('~resend_code_button')
    }

    get pinMustBe6DigitText() {
        return $('android=new UiSelector().resourceId("pin_must_be_6_digit_long_text")')
    }

    get cancelButton() {
        return $('~more_options_menu_item_cancel')
    }

    get dailyGoalCheck() {
        return $('~Daily Goal Check-In')
    }

    get remindLater() {
        return $('~Remind me later')
    }

    get forgotPasswordOtp() {
        return $(`(//android.widget.TextView[@text="FORGOT PASSWORD"]//..//..//..//android.widget.TextView)[3]`);
    }

    get retrieveOTP() {
        return $(`(//android.view.View[@text="Verify icon Verify your account Here is your verification code for Carepath Digital Health "]//..//..//android.view.View)[3]//android.view.View`);
    }


}