export class locators {

    get startNow() {
        return $('~start_now_button');
    }

    get languageDropdown() {
        return $('~Language_dropdown');
    }

    get lessonContinueBtn() {
        return $('~CONTINUE')
    }

    get lessonStartBtn() {
        return $('~START')
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

    get uploadButton() {
        return $('~upload_button')
    }

    get selectFile() {
        return $('(//android.widget.ImageView[@resource-id="com.google.android.providers.media.module:id/icon_thumbnail"])[1]')
    }
    errorText(value) {
        return $(`~${value}`)
    }

    get backDefaultNotification() {
        return $('android=new UiSelector().description("Navigate up")')
    }

    get hamburgerMenu() {
        return $('~hamburger_action')
    }

    get myProfile() {
        return $('~My Profile')
    }

    editInformationIcon(value) {
        return $(`//android.view.View[@content-desc="${value}"]//..//android.widget.Button[@content-desc="edit_button"]`)
    }

    get editFirstName() {
        return $('//android.widget.EditText[@resource-id="first_name_textfield"]');
    }

    get editLastName() {
        return $('//android.widget.EditText[@resource-id="last_name_textfield"]');
    }

    get userNameField() {
        return $('~Username')
    }

    get userNameHintText() {
        return $('~You can use letters, numbers or symbols')
    }

    get userNameInput() {
        return $('//android.widget.EditText[@resource-id="user_name_textfield"]')
    }

    get continueButton() {
        return $('android=new UiSelector().resourceId("continue_text")')
    }

    get completeYourProfilePopup() {
        return $('~Complete Your Profile')
    }

    get completeYourProfileText() {
        return $('~Please take some time to complete your profile by adding Personal information.\n\nWe collect information for the medical purposes. Based on that, our clinicians can provide you with faster and better support.')
    }

    get completeNowButton() {
        return $('~COMPLETE NOW')
    }

    get personalInformationPage() {
        return $('~Personal Information')
    }

    get howDoYouIdentify() {
        return $('~How do you identify?')
    }

    selectOptionInPersonalInformation(value) {
        return $(`~${value}`)
    }

    get preferredLanguage() {
        return $('~What is your preferred language?')
    }

    get maritalStatus() {
        return $('~What is your marital status?')
    }

    get doYouHaveChildren() {
        return $('~Do you have any children?')
    }

    get primaryReasonText() {
        return $('~Primary reason for accessing our services:')
    }

    get reasonForSeekingText() {
        return $('~Reason for seeking care (include signs and symptoms)')
    }

    get reasonForSeekingCare() {
        return $('//android.widget.EditText[@resource-id="primary_reason_textfield"]')
    }

    get upcomingTreatments() {
        return $('~Do you have any upcoming medical appointments/treatments?')
    }

    get OKButton() {
        return $('~OK')
    }

    get datePicker() {
        return $('~date_picker_action')
    }


    accessibilityLocator(id) {
        return $(`~${id}`)
    }

    get profileComplete() {
        return $('~Profile Complete!')
    }

    get close() {
        return $('~CLOSE')
    }

    get googleSignIn() {
        return $('//android.widget.TextView[@text="Sign in"]')
    }

    get googleMail() {
        return $('//android.widget.EditText[@resource-id="identifierId"]')
    }

    get googleSavePasswordPopup() {
        return $('//android.widget.TextView[@text="Use saved password?"]')
    }

    get googleNextButton() {
        return $('//android.widget.Button[@text="Next"]')
    }

    get googleWelcomeScreen() {
        return $('//android.widget.TextView[@text="Welcome"]')
    }

    get googlePasswordInput() {
        return $('//*[@hint="Enter your password"]')
    }

    get googleApps() {
        return $('//android.widget.Button[@text="Google apps"]')
    }

    get gmailOption() {
        return $('~Gmail, row 3 of 6 and column 1 of 3 in the first section (opens a new tab)')
    }

    get useWebVersion() {
        return $('//android.widget.TextView[@text="Use the web version"]')
    }

    get searchMail() {
        return $('//android.widget.EditText[@hint="Search"]')
    }

    get approveMsg() {
        return $('//android.widget.Button[contains(@text,"Carepath - New patient onboarding request")]')
    }

    mailId(mail) {
        return $(`//android.widget.TextView[@text="${mail}."]`)
    }

    get approveButton() {
        return $('//android.widget.TextView[@text="APPROVE"]')
    }

    get rejectButton() {
        return $('~REJECT')
    }

    get okResponse() {
        return $('//android.widget.TextView[@text="OK"]')
    }

    get linkForApproval() {
        return $('//android.widget.TextView[@text="Link"]')
    }

    get onboardingToTheAppText() {
        return $('//android.widget.TextView[@text="A new patient request for onboarding to the Carepath app. Please find the information below:"]')
    }

    get sigInWithId() {
        return $('//android.widget.Button[@resource-id="com.android.chrome:id/touch_to_fill_button_title"]')
    }

    get confirmButton() {
        return $('~CONFIRM USERNAME')
    }

    get confirmNewUserText() {
        return $('//android.view.View[@resource-id="please_confirm_new_username_text"]')
    }

    get successMsgOnSettingUserName() {
        return $('//android.view.View[@resource-id="you_have_successfully_updated_username_text"]')
    }

    get contactInformation() {
        return $('~Contact Information')
    }

    get adminUserName() {
        return $('//android.widget.EditText[@resource-id="username"]')
    }

    get adminPassword() {
        return $('//android.widget.EditText[@resource-id="password"]')
    }

    get submitButton() {
        return $('//android.widget.Button[@resource-id="submit"]')
    }

    programInAdmin(programName) {
        return $(`//android.widget.TextView[@text="${programName}"]`)
    }

    get addNewButton() {
        return $('//android.widget.Button[@text="ADD NEW"]')
    }

    get createPopup() {
        return $('//android.widget.TextView[@text="What would you like to create?"]')
    }

    get createGroupButton() {
        return $('//android.widget.TextView[@text="Create a new Group"]')
    }

    get createEventButton() {
        return $('//android.widget.TextView[@text="Create a new Event"]')
    }

    get communityEventPage() {
        return $('//android.widget.TextView[@text="New Community Event"]')
    }

    get eventName() {
        return $('//android.widget.EditText[@resource-id="name"]')
    }

    get eventDescription() {
        return $('//android.view.View[@text="Description:"]')
    }

    selectDateForEvent(date, index) {
        return $(`(//android.widget.TextView[@text="${date}"])[${index}]`)
    }

    get nextMonth() {
        return $('android=new UiSelector().className("android.widget.Button").instance(3)')
    }

    get eventTime() {
        return $('(//android.view.View//android.widget.Button[@resource-id="dropdown-btn"])[1]')
    }

    get accountDropdown() {
        return $('//android.widget.Image[@text="down-arrow-icon"]')
    }

    get adminLogout() {
        return $('//android.widget.Button[@text="Log Out"]')
    }

    get autoFill() {
        return $('//android.widget.TextView[@resource-id="com.android.chrome:id/touch_to_fill_sheet_title"]')
    }

    get signInButtonInAutofill() {
        return $('//*[@text="Sign in"]')
    }

    get homePhoneNumberField() {
        return $('//android.widget.EditText[@resource-id="home_number_textfield"]')
    }

    get cellPhoneNumberField() {
        return $('//android.widget.EditText[@resource-id="cell_number_textfield"]')
    }

    get emergencyContactAndInformation() {
        return $('~Emergency contact and information')
    }

    get firstNameInEmergencyContact() {
        return $('//android.widget.EditText[@resource-id="first_name_textfield"]')
    }

    get lastNameInEmergencyContact() {
        return $('//android.widget.EditText[@resource-id="last_name_textfield"]')
    }

    get relationInEmergencyContact() {
        return $('//android.widget.EditText[@resource-id="relation_textfield"]')
    }

    get relationCellNumber() {
        return $('//android.widget.EditText[@resource-id="cell_number_textfield"]')
    }

    get address() {
        return $('//android.widget.EditText[@resource-id="address_password_textfield"]')
    }

    get unit() {
        return $('//android.widget.EditText[@resource-id="unit_textfield"]')
    }

    get city() {
        return $('//android.widget.EditText[@resource-id="city_textfield"]')
    }

    get province() {
        return $('//android.widget.ImageView[@resource-id="province_textfield"]')
    }

    selectProvince(province) {
        return $(`~${province}`)
    }

    get postalCodeInput() {
        return $('//android.widget.EditText[@resource-id="postal_code_textfield"]')
    }

    get saveAllChangesButton() {
        return $('~save_all_changes_button')
    }

    get profileUpdatePopup() {
        return $('~Profile update!')
    }

    get profileUpdatePopupText() {
        return $('//android.view.View[@resource-id="would_you_like_to_save_information_and_leave_text"]')
    }

    get saveAndGoButton() {
        return $('~SAVE AND GO HOME')
    }

    get profileUpdatedPopup2() {
        return $('~Profile updated!')
    }

    get profileUpdatedPopupText2() {
        return $('//android.view.View[@resource-id="you_have_successfully_updated_information_text"]')
    }

    get closeIcon() {
        return $('~dialog_close_action')
    }

    get circleOfCare() {
        return $('~Circle of Care')
    }

    get addNewIcon() {
        return $('~ADD NEW')
    }

    get gotToHomePageButton() {
        return $('~GO TO HOMEPAGE')
    }

    get changePassword() {
        return $('~CHANGE PASSWORD')
    }

    setEventTime(time) {
        return $(`(//android.view.View[@text="Event Time:"]//..//android.view.View[@content-desc="${time}"])[1]`)
    }

    timeFormat(format) {
        return $(`//android.widget.TextView[@text="${format}"]`)
    }

    get confirmEventTime() {
        return $('//android.widget.Button[@text="OK"]')
    }

    get submitButtonInProfile() {
        return $('~submit_button')
    }

    get rejectMessageForMH() {
        return $(`~We are sorry to inform you we won't be able to enroll you in mental health program. Your employment is not eligible for Carepath Digital Health program.\n\nIf you have any question, please call at\n1-866-883-5956. https://carepath.ca`)
    }

    get rejectMessageForCancer() {
        return $(`~We are sorry to inform you we won't be able to enroll you in cancer program. Your employment is not eligible for Carepath Digital Health program.\n\nIf you have any question, please call at\n1-866-883-5956. https://carepath.ca`)
    }

    get rejectMessageForChronic() {
        return $(`~We are sorry to inform you we won't be able to enroll you in chronic disease program. Your employment is not eligible for Carepath Digital Health program.\n\nIf you have any question, please call at\n1-866-883-5956. https://carepath.ca`)
    }

    get rejectMessageForElderCare() {
        return $(`~We are sorry to inform you we won't be able to enroll you in elder care program. Your employment is not eligible for Carepath Digital Health program.\n\nIf you have any question, please call at\n1-866-883-5956. https://carepath.ca`)
    }

    get closeAndDeleteButton() {
        return $(`~CLOSE AND DELETE`)
    }

    get welcomeToOnboarding() {
        return $('~Welcome to Carepath Onboarding!')
    }
    get communityGroup() {
        return $('~Community Groups')
    }

    get testGroup() {
        return $('~Automation test group')
    }

    get automationTestPost() {
        return $('~post_card_action_67d3f748c9f301242d4d8608')
    }

    get automationTestPostName() {
        return $('(//android.view.View[@content-desc="Automation test post"])[1]')
    }

    get carePathAdmin() {
        return $('~Carepath Admin')
    }

    get testGroupName() {
        return $('~test')
    }

    get gotItButton() {
        return $('//android.widget.Button[@resource-id="android:id/ok"]')
    }

    get groupTitleImage() {
        return $('~image_view_action')
    }

    get groupTitleCloseWidgetButton() {
        return $('//android.widget.Button')
    }

    get likesClick() {
        return $('~Likes')
    }

    get clickSaveButton() {
        return $('~Save')
    }

    get saveToFavorites() {
        return $('~SAVE')
    }

    get clickCloseButton() {
        return $('~CLOSE')
    }

    get newPostButton() {
        return $('~New Post')
    }

    get postyourComment() {
        return $('//android.widget.EditText[@resource-id="comment_textfield"]')
    }

    get sendRequest() {
        return $('~SEND REQUEST')
    }

    get cancelButtonRequest() {
        return $('~cancel_button')
    }

    get dialogCloseAction() {
        return $('~dialog_close_action')
    }

    get requestCloseButton() {
        return $('//android.view.View[@content-desc="CLOSE"]')
    }

    get newRequestCancelButton() {
        return $('~cancel_button')
    }

    get addComment() {
        return $('~Add Comment')
    }

    get createCommandRequest() {
        return $('//android.widget.EditText[@resource-id="comment_textfield"]')
    }

    get publishComment() {
        return $('~PUBLISH COMMENT')
    }

    get elderCareEnabled() {
        return $('~button_Program.elderCare')
    }

    get elderCareContinue() {
        return $('~CONTINUE')
    }

    get closeCompleteProfileButton() {
        return $('~dialog_close_action')
    }

    get backAction() {
        return $('~back_action')
    }

    get healthassessmentbutton() {
        return $('~HEALTH ASSESSMENT')
    }

    get requestedHealthAssessment() {
        return $('~Requested Health Assessment')
    }

    get healthHistory() {
        return $('~assessment_action_Health History')
    }

    get physicalAssessmentMobility() {
        return $('~assessment_action_Physical assessment and Mobility')
    }

    get sleepRest() {
        return $('~assessment_action_Sleep and rest')
    }

    get NutritionDietary() {
        return $('~assessment_action_Nutrition and Dietary Needs')
    }

    get toileting() {
        return $('~assessment_action_Toileting')
    }

    get groomingHygiene() {
        return $('~assessment_action_Grooming-Hygiene')
    }

    get homeCare() {
        return $('~assessment_action_Home Care')
    }

    get canadianProblem() {
        return $('~assessment_action_Canadian Problem Category')
    }

    get yesCancelAssessment() {
        return $('~YES, CANCEL ASSESSMENT')
    }

    get continueButton() {
        return $('~continue_button')
    }

    get healthPleaseSpecify() {
        return $('//android.widget.EditText[@resource-id="text_type_primary_diagnosis_textfield"]')
    }

    get nextButton1() {
        return $('~NEXT')
    }

    get healthPleaseSpecify2() {
        return $('//android.widget.EditText[@resource-id="text_type_past_health_history_textfield"]')
    }

    get yesButton() {
        return $('~Yes')
    }

    get submitButton() {
        return $('~SUBMIT')
    }

    get backToAssessments() {
        return $('~BACK TO ASSESSMENTS')
    }

    get independentPhysicalMobility() {
        return $('~Independent')
    }

    get scooterMobilityDevices() {
        return $('~Scooter')
    }

    get riskOfFalls() {
        return $('~Risk of Falls')
    }

    get physicalMobilitySpecify() {
        return $('//android.widget.EditText[@resource-id="text_type_ambulation_container.falls_management_plan_textfield"]')
    }

    get showDialogAction() {
        return $('~show_dialog_action')
    }

    get dropdownIndependent() {
        return $('~Independent')
    }

    get describePleaseSpecify() {
        return $('//android.widget.EditText[@resource-id="text_type_ambulation_container.transfer_specify_textfield"]')
    }

    get weightBearingStatus() {
        return $('~show_dialog_action')
    }

    get ltSide() {
        return $('~Lt. Side')
    }

    get weightBearingPleaseSpecify() {
        return $('//android.widget.EditText[@resource-id="text_type_ambulation_container.weight_bearing_specify_textfield"]')
    }

    get sleepPatterns() {
        return $('//android.widget.EditText[@resource-id="text_type_describe_sleep_patterns_textfield"]')
    }

    get hoursOfSleeping() {
        return $('//android.widget.EditText[@resource-id="text_type_hours_sleep_textfield"]')
    }

    get sleepBehaviour() {
        return $('//android.widget.EditText[@resource-id="text_type_sleep_comments_textfield"]')
    }

    get submitSleepRest() {
        return $('~SUBMIT')
    }

    get nutritionIndependent() {
        return $('~Independently')
    }

    get toiletingIndependent() {
        return $('~Independent')
    }

    get groomingIndependent() {
        return $('~Independent')
    }

    get groomingOwn() {
        return $('~Own')
    }

    get good() {
        return $('~Good')
    }

    get fearWorries() {
        return $('~Fear/Worries')
    }

    get emotionalComment() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_emotional_comments_textfield"]')
    }

    get concentrationMemory() {
        return $('~Concentration/Memory')
    }

    get physicalComments() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_physical_comments_textfield"]')
    }

    get meaningPurpose() {
        return $('~Meaning/Purpose')
    }

    get spiritualComments() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_spiritual_comments_textfield"]')
    }

    get makingTreatment() {
        return $('~Making treatment decisions')
    }

    get informationalComments() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_informational_comments_textfield"]')
    }

    get workSchool() {
        return $('~Work/School')
    }

    get practicalComments() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_practical_comments_textfield"]')
    }

    get worryFamilies() {
        return $('~Worry about family/friends')
    }

    get socialFinance() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem_category_social_financial_comments_textfield"]')
    }

    get communityEvents() {
        return $('~Community Events')
    }

    get clickRegister() {
        return $('~REGISTER')
    }

    get dateRegister() {
        return $('~Jan 18, 2026')
    }

    get timeRegister() {
        return $('~3:35 pm')
    }

    testName(value) {
        return $(`~${value}`)
    }

    get eventText() {
        return $('~test')
    }

    get eventTitleText() {
        return $('~Automation test')
    }

    get registerForEvent() {
        return $('~REGISTER FOR EVENT')
    }

    get ButtonClick() {
        return $('~event_view_info_action')
    }

    get continueRegister() {
        return $('~CONTINUE')
    }

    get eventName() {
        return $('~EVENT')
    }

    get pleaseRegister() {
        return $('~Please register to attend this event. Cant wait to see you there!')
    }

    get eventRegisteration() {
        return $('~EVENT REGISTRATION')
    }

    get eventEmail() {
        return $('~prabhaAutosfMG6935@mailinator.com')
    }

    get confirmRegistration() {
        return $('~CONFIRM REGISTRATION')
    }

    get cancelButtonRegistration() {
        return $('~cancel_button')
    }

    get registrationSuccessfull() {
        return $('~Registration successful!')
    }

    get addCalender() {
        return $('~ADD TO CALENDAR')
    }

    get closeCalender() {
        return $('~close_button')
    }

    get registered() {
        return $('~Registered')
    }

    get cancelRegistrationTab() {
        return $('~cancel_registration_button')
    }

    get nurseRecommendation() {
        return $('~Nurse Recommendations')
    }

    get titleNurseRecommentation() {
        return $('~Nurse Recommendations')
    }

    get nameNurseRecommendtation() {
        return $('~Automation test carepath')
    }

    get automationTextSentence() {
        return $('//android.view.View[@content-desc="Automation test carepath application I have had the privilege of supervising Joshua at [facility name], where we work as clinical nurses in the cardiac intensive care unit. Joshuah as demonstrated a passion for patient care, and his incredible work ethic makes him an ideal employee for any organization."]')
    }

    get nurseBackButton() {
        return $('~back_button')
    }

    get closeButtonNurse() {
        return $('~hamburger_action')
    }

    get myProgram() {
        return $('~my_programs_button')
    }

    get completeLater() {
        return $('~profile_incomplete_button2')
    }

    get welcomeBackScreen() {
        return $('//android.widget.TextView[@text="Welcome Back"]')
    }

    get adminUserName() {
        return $('//android.widget.EditText[@resource-id="username"]')
    }

    get adminPassword() {
        return $('//android.widget.EditText[@resource-id="password"]')
    }

    get submitButton() {
        return $('//android.widget.Button[@resource-id="submit"]')
    }

    programInAdmin(programName) {
        return $(`//android.widget.TextView[@text="${programName}"]`)
    }

    get addNewButton() {
        return $('//android.widget.Button[@text="ADD NEW"]')
    }

    get createPopup() {
        return $('//android.widget.TextView[@text="What would you like to create?"]')
    }

    get createGroupButton() {
        return $('//android.widget.TextView[@text="Create a new Group"]')
    }

    get createEventButton() {
        return $('//android.widget.TextView[@text="Create a new Event"]')
    }

    get communityEventPage() {
        return $('//android.widget.TextView[@text="New Community Event"]')
    }

    get eventName() {
        return $('//android.widget.EditText[@resource-id="name"]')
    }

    get eventDescription() {
        return $('//android.view.View[@text="Description:"]')
    }

    get descriptionInput() {
        return $('//android.widget.EditText[@resource-id="description"]')
    }

    get nextMonth() {
        return $('android=new UiSelector().className("android.widget.Button").instance(3)')
    }

    get publishEvent() {
        return $('//android.widget.Button[@text="PUBLISH EVENT"]')
    }

    createdEventName(eventName) {
        return $(`//android.widget.TextView[@text="${eventName}"]`)
    }

    get autoFill() {
        return $('//android.widget.TextView[@resource-id="com.android.chrome:id/touch_to_fill_sheet_title"]')
    }

    get signInButtonInAutofill() {
        return $('//*[@text="Sign in"]')
    }

    setEventTime(time) {
        return $(`(//android.view.View[@text="Event Time:"]//..//android.view.View[@content-desc="${time}"])[1]`)
    }

    timeFormat(format) {
        return $(`//android.widget.TextView[@text="${format}"]`)
    }

    get confirmEventTime() {
        return $('//android.widget.Button[@text="OK"]')
    }

    get timeTravel() {
        return $(`(//android.view.View[@text="Event Time:"]//..//*[@resource-id='dropdown-btn'])[1]`)
    }

    get logoutButton() {
        return $(`//android.widget.TextView[@text="LOG OUT"]`)
    }

    get titleText() {
        return $('~test')
    }

    get timeVerify() {
        return $('~4:15 PM')
    }

    get dateVerify() {
        return $('~Mar 22, 2025')
    }

    get time1Verify() {
        return $('~4:15 pm')
    }

    get eventDescription2() {
        return $('~Events are created')
    }

    get eventTitle() {
        return $('~test')
    }

    get eventTopic() {
        return $('~EVENT')
    }

    verifyDate(value) {
        return $(`~${value}`)
    }

    verifyTime(value) {
        return $(`~${value}`)
    }

    get eventsTab() {
        return $('~Events')
    }

    get testEvent() {
        return $('//android.view.View[@text="testEvent indication-icon"]')
    }

    get editImageButton() {
        return $('//android.widget.Image[@text="edit icon"]')
    }

    get cancelEvent() {
        return $('//android.widget.Button[@text="CANCEL EVENT"]')
    }

    get testEventText() {
        return $('//android.view.View[@text="testEvent"]')
    }

    get deleteButton() {
        return $('(//android.view.View[@text="edit remove"])[1]/android.view.View/android.view.View[2]')
    }

    get createNewGroup() {
        return $('//android.widget.TextView[@text="Create a new Group"]')
    }

    get groupHeadlineTextField() {
        return $('//android.widget.EditText[@resource-id="name"]')
    }

    get addContent() {
        return $('//android.widget.EditText[@resource-id="description"]')
    }

    get imageClick() {
        return $('//android.widget.Image[@text="cover-photo-0"]')
    }

    get saveAsDraft() {
        return $('//android.widget.Button[@text="SAVE AS DRAFT"]')
    }

    get publishGroup() {
        return $('//android.widget.Button[@text="PUBLISH GROUP"]')
    }

    get deleteEventGroup() {
        return $('(//android.widget.Image[@text="remove"])[1]')
    }

    get yesDelete() {
        return $('//android.widget.Button[@text="YES, DELETE"]')
    }

    get webKitGroupButton() {
        return $('//android.widget.Image[@text="edit icon"]')
    }

    get unPublishGroup() {
        return $('//android.widget.Button[@text="UNPUBLISH GROUP"]')
    }

    get yesUnPublishButton() {
        return $('//android.widget.Button[@text="YES, UNPUBLISH GROUP"]')
    }

    get createGroupTab() {
        return $('~Groups')
    }

    get deleteGroupRemove() {
        return $('//android.widget.Image[@text="remove"]')
    }

    get yesdeleteGroup() {
        return $('//android.widget.Button[@text="YES, DELETE"]')
    }

    get clickGroupName() {
        return $('(//android.view.View[@text="groupHeadlineTextField"])[1]')
    }

    get newGroupTab() {
        return $('~New Group')
    }

    get commentNewGroupRequest() {
        return $('~comment_textfield')
    }

    get sendRequestNewGroup() {
        return $('~SEND REQUEST')
    }

    get closePopupGroup() {
        return $('~CLOSE')
    }

    get requests() {
        return $('~Requests')
    }

    get groupNameClick() {
        return $('(//android.view.View[@text="Group"])[1]')
    }

    get createnewNameGroup() {
        return $('//android.widget.Button[@text="CREATE NEW"]')
    }

    userNameGroup(value) {
        return $('(//android.widget.TextView[@text="${value}"])[1]')
    }

    userEmailGroup(value) {
        return $('//android.widget.TextView[@text="${value}"]')
    }

    description(value) {
        return $('//android.widget.TextView[@text="${value}"]')
    }

    get groupHeadline() {
        return $('//android.widget.EditText[@resource-id="name"]')
    }

    get addContentGroup() {
        return $('//android.widget.EditText[@resource-id="description"]')
    }

    get imageSelectedGroup() {
        return $('//android.widget.TextView[@text="SELECTED"]')
    }

    get publishGroupTab() {
        return $('//android.widget.Button[@text="PUBLISH GROUP"]')
    }

    nameGroup(value) {
        return $('//android.view.View[@text="${value}"]')
    }

    get editGroupButton() {
        return $('//android.widget.Image[@text="edit icon"]')
    }

    get unpublish() {
        return $('//android.widget.Button[@text="UNPUBLISH GROUP"]')
    }

    get yesUnpublish() {
        return $('//android.widget.Button[@text="YES, UNPUBLISH GROUP"]')
    }

    get deleteDataDropdown() {
        return $('//android.widget.Spinner[@resource-id="com.android.chrome:id/quick_delete_spinner"]')
    }

    get allTimeOption() {
        return $(`//*[@text='All time']`)
    }

    get historyOption() {
        return $(`//*[@text='History']`)
    }

    get emptyStateIcon() {
        return $(`//android.widget.ImageView[@resource-id="com.android.chrome:id/empty_state_icon"]`)
    }

    get removeHistory() {
        return $(`//android.widget.ImageButton[contains(@content-desc,"Remove")]`)
    }

    get closeIconInChrome() {
        return $('~Close')
    }

    get newTab() {
        return $('~New tab')
    }

    get phq9Assessment() {
        return $('~Your clinician has requested a PHQ-9 assessment')
    }

    get gad7Assessment() {
        return $('~Your clinician has requested a GAD-7 assessment')
    }

    get thankYouText() {
        return $('~Thank you!')
    }

    get thankYouForCompleting() {
        return $("//*[@resource-id='thank you for completing the assessment! you can now proceed with mental health program._text']")
    }

    get goToHomeButton() {
        return $('~goto_home_button')
    }

    get ESASAssesment() {
        return $('(//android.view.View[@content-desc="Your clinician has requested a ESAS-R assessment"])[1]')
    }

    get ESASscreen() {
        return $('~ESAS-r')
    }

    get ESASOverviewText() {
        return $("//*[@resource-id='esasr_overview_subtitle_text']")
    }

    get thankYouForCompletingCancerAssessment() {
        return $("//*[@resource-id='thank you for completing the assessment! you can now proceed with cancer program._text']")
    }

    get goHomeButtonInCancer() {
        return $('~go_home_button')
    }

    get submitESAS() {
        return $('~SUBMIT ESAS-R')
    }

    get canadianProblemCategory() {
        return $('(//android.view.View[@content-desc="Your clinician has requested a Canadian Problem Category assessment"])[1]')
    }

    get emotionalScreen() {
        return $('~Emotional')
    }

    get physicalScreen() {
        return $('~Physical')
    }

    get spiritualScreen() {
        return $('~Spiritual')
    }

    get informationalScreen() {
        return $('~Informational')
    }

    get practicalScreen() {
        return $('~Practical')
    }

    get socialScreen() {
        return $('~Social/Financial')
    }

    get selectOptionText() {
        return $("//*[@resource-id='pls_select_what_applies_to_you_text']")
    }

    commentsFiled(filedName) {
        return $(`~${filedName} Comments`)
    }

    get emotionalCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-2_textfield"]')
    }

    get physicalCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-4_textfield"]')
    }

    get spiritualCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-6_textfield"]')
    }

    get informationalCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-8_textfield"]')
    }

    get practicalCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-10_textfield"]')
    }

    get socialCommentsField() {
        return $('//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-12_textfield"]')
    }

    get submitButtonInAssessment() {
        return $('~SUBMIT')
    }

    get nextButtonInAssessment() {
        return $('~NEXT')
    }

    get physicalAssessment() {
        return $('(//android.view.View[@content-desc="Your clinician has requested a Physical Assessment assessment"])[1]')
    }

    get physicalAssessmentScreen() {
        return $('~Physical Assessment')
    }

    get heightInFtText() {
        return $("//*[@resource-id='height (feet)_text']")
    }

    get heightInInText() {
        return $("//*[@resource-id='height (inches)_text']")
    }

    get weightInInText() {
        return $("//*[@resource-id='weight (lbs)_text']")
    }

    get heightFtTextField() {
        return $('//android.widget.EditText[@resource-id="physical_asssessment_physical-assessment-1_textfield"]')
    }

    get heightInTextField() {
        return $('//android.widget.EditText[@resource-id="physical_asssessment_physical-assessment-2_textfield"]')
    }

    get weightTextField() {
        return $('//android.widget.EditText[@resource-id="physical_asssessment_physical-assessment-3_textfield"]')
    }

    get yourHeight(){
        return $('~Your Height')
    }

    get yourWeight(){
        return $('~Your Weight')
    }

    get currentMedications() {
        return $('(//android.view.View[@content-desc="Your clinician has requested a Current Medications assessment"])[1]')
    }

    get currentMedicationsText(){
        return $("//*[@resource-id='current_medications_text']")
    }

    get provideMedicationsText(){
        return $("//*[@resource-id='please provide your current medications_text']")
    }

    get medicationNameText(){
        return $('~Medication Name')
    }

    get medicationTextField(){
        return $('//android.widget.EditText[@resource-id="text_type_medication_name_textfield"]')
    }

    get saveButtonInAssessment(){
        return $('~SAVE')
    }

    get addNewEntry(){
        return $('~ADD NEW ENTRY')
    }

    get thankYouForCompletingChronicAssessment() {
        return $("//*[@resource-id='thank you for completing the assessment! you can now proceed with chronic disease program._text']")
    }

    get thankYouForCompletingEldercareAssessment() {
        return $("//*[@resource-id='thank you for completing the assessment! you can now proceed with elder care program._text']")
    }

}