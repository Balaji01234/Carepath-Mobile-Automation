export class Elderlocators {

get Eldercare(){
    return $(`//android.view.View[@resource-id="elder\ncare_text"]`)
}

get healthAss(){
    return $(`//android.view.View[@resource-id="health_assessment_text"]`)
}
get ElderHealthAssessment(){
    return $(`//android.widget.Button[@content-desc="health_assessment_button"]/android.widget.Button/android.widget.ImageView`)
}
get HealthHistory(){
    return $(`//android.view.View[@resource-id="health history_text"]`)
}

get concernDiagnosis(){
    return $(`~What is your primary health concern/diagnosis?`)
}
get HealthHistoryTextField(){
    return $(`//android.view.View[@content-desc="tryfu, text_type_primary_diagnosis_textfield"]`)
}
get HealthHistoryNext(){
    return $(`//android.widget.Button[@content-desc="close_save_next_submit_button"]/android.widget.Button/android.view.View`)
}
get consume(){
    return $(`~Do you consume alcohol?`)
}
get consumeNo(){
    return $(`//android.widget.Button[@content-desc="button_No"]/android.widget.Button/android.view.View`)
}
get elderno(){
    return $(`//android.widget.Button[@content-desc="button_no"]/android.widget.Button/android.view.View`)
}
get Doyousmokecigarettes (){
    return $(`~Do you smoke cigarettes?`)
}
get Doyouusedrugs(){
    return $(`~Do you use drugs?`)
}
get physicalAssessment(){
    return $(`//android.view.View[@resource-id="physical assessment and mobility_text"]`)
}
get physicalAssessmentOption(){
    return $(`//android.widget.Button[@content-desc="assessment_action_Physical assessment and Mobility"]`)
}
get Areyouanolderadult(){
    return $(`~Are you an older adult?`)
}
get Whatisyourmobilitystatus(){
    return $(`~What is your mobility status?`)
}
get indepentent(){
    return $(`//android.widget.Button[@content-desc="button_independent"]/android.widget.Button/android.view.View`)
}
get mobilitydevices(){
    return $(`~Are you using any mobility devices?`)
}
get cane(){
    return $(`//android.widget.Button[@content-desc="button_1"]/android.widget.Button/android.view.View`)
}
get describe(){
    return $(`~How would you describe your fall risk?`)
}
get Risk(){
    return $(`//android.widget.Button[@content-desc="button_1"]/android.widget.Button/android.view.View`)
}
get management(){
    return $(`~Do you have a fall management plan?`)
}
get containerField(){
    return $(`//android.view.View[@content-desc="testing, text_type_ambulation_container.falls_management_plan_textfield"]`)
}
get ability(){
    return $(`~How would you describe your ability to transfer?`)
}
get TransferStatus(){
    return $(`//android.view.View[@resource-id="transfer status_text"]`)
}
get TransferStatusDropdown(){
    return $(`//android.widget.ImageView[@content-desc="show_dialog_action"]`)
}
get OnePerson(){
    return $(`~One Person Assist`)
}
get HowWould(){
    return $(`~How would you describe your ability to transfer?`)
}
get decribroption(){
    return $(`//android.view.View[@content-desc="health, text_type_ambulation_container.transfer_specify_textfield"]`)
}
get weight(){
    return $(`~How would you describe your weight-bearing?`)
}	

get weightDropdown(){
    return $(`//android.view.View[@resource-id="weight bearing status_text"]`)
}
get weightDropdownOption(){
    return $(`//android.widget.ImageView[@content-desc="show_dialog_action"]`)
}
get RtSide(){
    return $(`~Rt. Side`)
}
get weightbearing(){
    return $(`~How would you describe your weight-bearing?`)
}
get WeightBear(){
    return $(`//android.view.View[@content-desc="text_type_ambulation_container.weight_bearing_specify_textfield"]`)
}
get healthPge(){
    return $(`~Please describe your health history (include past hospitalizations accidents/injuries,operations,etc).`)
}
get optinVal(){
    return $(`~text_type_past_health_history_textfield`)
}
get SleepandRest(){
    return $(`//android.view.View[@resource-id="sleep and rest_text"]`)

}
get sleepandrestoption(){
    return $(`//android.widget.Button[@content-desc="assessment_action_Sleep and rest"]`)
}
get Describeyoursleeppatterns(){
    return $(`~Describe your sleep patterns`)
}
get sleepandRestInput(){
    return $(`//android.view.View[@content-desc="fdsbsk, text_type_describe_sleep_patterns_textfield"]`)
}
get sleepoption(){
    return $(`~How many hours of sleep do you get per night?`)
}
get HowmanyHoursSleep(){
    return $(`~text_type_hours_sleep_textfield`)
}
get SleepingProblem(){
    return $(`~Would you like to share other comments about your sleep behavior or problem?`)
}
get nutritionanddietary(){
    return $(`//android.view.View[@resource-id="nutrition and dietary needs_text"]`)
}
get nutritionanddietarytextval(){
    return (`~assessment_action_Nutrition and Dietary Needs`)
}


get Whatbestdescribesyourabilitytoeat(){
    return $(`~What best describes your ability to eat?`)
}
get specialPrecautions(){
    return $(`//android.view.View[@content-desc="Do you have any special precautions that need to be followed for:"]`)
}
get RiskofChoking(){
    return $(`~Risk of Choking`)
}
get precautions(){
    return $(`~Do you have any special precautions that need to be followed for:`)
}
get NgFeeds(){
    return $(`~NG Feeds`)
}
get specialDiet(){
    return $(`~Special Diet`)
}
get FoodAllergies(){
    return $(`~Food Allergies/Restrictions`)
}
get elderCare() {
    return $('~button_Program.elderCare')
}

get startNow() {
    return $('//android.widget.Button[@content-desc="start_now_button"]/android.widget.Button/android.view.View');
}


get loginpageChronic(){
    return $('~Log in or Sign In')
}


get userName() {
    return $('android=new UiSelector().resourceId("login_email_textfield")');
}

get password() {
    return $('android=new UiSelector().resourceId("login_password_textfield")');
}

get loginButton() {
    return $('//android.widget.Button[@content-desc="login_button"]/android.widget.Button/android.view.View')
}

get loginButton() {
    return $('//android.widget.Button[@content-desc="login_button"]/android.widget.Button/android.view.View')
}

get getNotifiedDialogBox() {
    return $('android=new UiSelector().resourceId("get_notified_text")')
}

get allowButton() {
    return $('android=new UiSelector().resourceId("allow_text")')
}

get androidAllowNotification() {
    return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_message")')
}

get androidAllowNotificationButton() {
    return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")')
}

get allowNotification() {
    return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View')
}

get allowNotificationButton() {
    return $('//android.widget.Button[@content-desc="ok_button"]/android.widget.Button/android.view.View')
}

get backDefaultNotification() {
    return $('android=new UiSelector().description("Navigate up")')
}

get welcometocarepath(){
    return $('android=new UiSelector().resourceId("welcome_to_carepath_digital_health_text")')
}

get continuebutton() {
    return $('android=new UiSelector().resourceId("continue_text")')
}

get actionToileting() {
    return $('~assessment_action_Toileting')
}

get toiletingTitle() {
    return $('~Toileting')
}

get toiletingQ3() {
    return $('~What best describes your bowel function?')
}

get toiletingQ1() {
    return $('~What best describes your bladder function?')
}

get Incontinent() {
    return $('~Incontinent')
}

get mildIncontinence() {
    return $('~Mild Incontinence')
}

get staffAssist() {
    return $('~Staff Assist')
}

get catheter() {
    return $('~Catheter')
}

get urostomy() {
    return $('~Urostomy')
}

get optionNA() {
    return $('~N/A')
}

get Independent1() {
    return $('~Independent')
}

get toiletingQ2() {
    return $('~Raised Toilet seats required?')
}

get optionYes() {
    return $('~Yes')
}

get optionNo() {
    return $('~No')
}

get optionNA() {
    return $('~N/A')
}

get submitButton() {
    return $('~SUBMIT')
}

get thankyouScreen() {
    return $('~Thank you!')
}

get thankyouDescription() {
    return $('~Thank you for completing the assessment! You can now proceed with Chronic disease program.')
}

get goHomeButton() {
    return $('~go_home_button')
}

get backtoAssessmentButton() {
    return $('~BACK TO ASSESSMENTS')
}

get actionGroomingHygiene() {
    return $('~assessment_action_Grooming-Hygiene')
}

get groomingHygieneTitle() {
    return $('~Grooming/Hygiene')
}

get groomingHygieneQ1() {
    return $('~What best describes your grooming abilities')
}

get groomingHygieneQ6() {
    return $('~What best describes your oral hygiene abilities')
}

get groomingHygieneIndependent() {
    return $('~Independent')
}

get groomingHygieneSupervision() {
    return $('~Supervision')
}

get groomingHygieneAssistance() {
    return $('~Assistance')
}

get groomingHygieneQ2() {
    return $('~What best describes your dentures state')
}

get ownOption() {
    return $('~Own')
}

get fullOption() {
    return $('~Full')
}

get partialOption() {
    return $('~Partial')
}

get noteethOption() {
    return $('~No Teeth')
}

get groomingHygieneIndependent() {
    return $('~Independent')
}

get groomingHygieneSupervision() {
    return $('~Supervision')
}

get groomingHygieneAssistance() {
    return $('~Assistance')
}

get groomingHygieneQ2() {
    return $('~What best describes your dentures state')
}

get groomingHygieneQ5() {
    return $('~What best describes your skin integrity state')
}

get goodOption() {
    return $('~No Teeth')
}

get DryOption() {
    return $('~Dry')
}

get BrokenOption() {
    return $('~Broken')
}

get woundUlcerOption() {
    return $('~Wound/Ulcer')
}

get incisionRecentSurgery() {
    return $('~Incision/Recent Surgery')
}

get complexDressingOption() {
    return $('~Complex Dressing')
}

get actionGroomingHygiene() {
    return $('~assessment_action_Grooming-Hygiene')
}

get actionHomeCare() {
    return $('~assessment_action_Home Care')
}

get HomeCareQ1() {
    return $('~Do you have home care?')
}

get HomeCareQ2() {
    return $('~Do you have Government Home Care?')
}

get canadianProblemCategoryQ1() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get canadianProblemCategory() {
    return $('~assessment_action_Canadian Problem Category')
}

get fearWorries() {
    return $('~Fear/Worries')
}

get sadness() {
    return $('android=new UiSelector().resourceId("sadness_text").instance(0)')
}

get frustrationAnger() {
    return $('~//android.view.View[@content-desc="Frustration/Anger"]')
}

get ChangesinAppearance() {
    return $('~Changes in Appearance')
}

get intimacySexuality() {
    return $('~Intimacy/Sexuality')
}

get sadness1() {
    return $('android=new UiSelector().resourceId("sadness_text").instance(1)')
}

get emotionalComments() {
    return $('~Emotional Comments')
}

get emotionalCommentstxtfield01() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_emotional_comments_textfield"]')
}

get nextButton() {
    return $('~NEXT')
}

get canadianProblemCategoryQ2() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get concentrationMemory() {
    return $('~Concentration/Memory')
}

get sleep() {
    return $('~Sleep')
}

get weight() {
    return $('~Weight')
}

get physicalComments() {
    return $('~Physical Comments]')
}

get emotionalCommentstxtfield02() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_physical_comments_textfield"]')
}

get physicalCommentstxt() {
    return $('~//android.widget.EditText[@resource-id="problem_category_problem_category_physical_comments_textfield"]')
}

get canadianProblemCategoryQ3() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get meaningPurpose() {
    return $('~Meaning/Purpose')
}

get life() {
    return $('~Life')
}

get faith() {
    return $('~Faith')
}

get spiritualComments() {
    return $('~Spiritual Comments')
}

get emotionalCommentstxtfield3() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_spiritual_comments_textfield"]')
}

get canadianProblemCategoryQ4() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get Makingtreatmentdecisions() {
    return $('~Making treatment decisions')
}

get understandingmyillnessandortreatment() {
    return $('~Understanding my illness and/or treatment')
}

get talkingwiththehealthcareteam() {
    return $('~Talking with the health care team')
}

get Knowingaboutavailableresources() {
    return $('~Knowing about available resources')
}

get informationalComments() {
    return $('~Informational Comments')
}

get emotionalCommentstxtfield04() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_informational_comments_textfield"]')
}

get canadianProblemCategoryQ5() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get workSchool() {
    return $('~Work/School')
}

get finance() {
    return $('~Finance')
}

get accommodations() {
    return $('~Accommodations')
}

get Gettingtoandfromappointments() {
    return $('~Getting to and from appointments')
}

get practicalComments() {
    return $('~Practical Comments')
}

get emotionalCommentstxtfield05() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_practical_comments_textfield"]')
}

get canadianProblemCategoryQ6() {
    return $('~Please select what applies to you and add comments if you have any.')
}

get worryaboutfamilyfriends() {
    return $('~Worry about family/friends')
}

get feelingAlone() {
    return $('~Feeling Alone')
}

get feelingaburdentoothers() {
    return $('~Feeling a burden to others')
}

get socialFinancialComments() {
    return $('~Social/Financial Comments')
}

get emotionalCommentstxtfield06() {
    return $('//android.widget.EditText[@resource-id="problem_category_problem_category_social_financial_comments_textfield"]')
}

get bowelRoutine() {
    return $('~Bowel Routine')
}

get colostomy() {
    return $('~Colostomy')
}

get groomingHygieneQ3() {
    return $('~What best describes your dressing abilities')
}

get groomingHygieneQ5() {
    return $('~What best describes your skin integrity state')
}

get thankyouDescriptionEC() {
    return $('~Thank you for completing the assessment! You can now proceed with Elder care program.')
}

get groomingHygieneQ4() {
    return $('~What best describes your bathing abilities')
}


}