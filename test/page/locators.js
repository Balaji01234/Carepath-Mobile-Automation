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

    selectDateForEvent(date, index) {
        return $(`(//android.widget.TextView[@text="${date}"])[3]`)
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

    get unpublish(){
        return $('//android.widget.Button[@text="UNPUBLISH GROUP"]')
    }

    get yesUnpublish(){
        return $('//android.widget.Button[@text="YES, UNPUBLISH GROUP"]')
    }

}