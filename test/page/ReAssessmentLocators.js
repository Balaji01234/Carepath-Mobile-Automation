export class ReAssessmentlocators {

get chromicField(){
    return $(`//android.view.View[@content-desc="button_Program.chronicDisease"]`)
}
get Reassementpage(){
    return $(`//android.view.View[@resource-id="new_assessment_request_text"]`)
}
get ReassementpageCount(){
    return $(`//android.view.View[@resource-id="3_text"]`)
}
get Reminders(){
    return $(`~Reminders`)
}
get esasAssessment(){
    return $(`//android.view.View[@resource-id="your clinician has requested a esas-r assessment_text"]`)
}
get esasAssessmentOption(){
    return $(`//android.widget.ImageView[@content-desc="show_more_action_Your clinician has requested a ESAS-R assessment"]`)
}
get hideOption(){
    return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]/android.widget.ImageView[1]`)
}
get CurrentMedications(){
    return $(`//android.view.View[@resource-id="your clinician has requested a current medications assessment_text"]`)
}
get CurrentMedicationsKabaMenu(){
    return $(`//android.widget.ImageView[@content-desc="show_more_action_Your clinician has requested a Current Medications assessment"]`)
}
get CurrentMedications(){
    return $(`//android.view.View[@resource-id="current_medications_text"]`)
}
get firtOPtion(){
    return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]`)
}
get currentMedition(){
    return $(`~Please provide your current medications`)
}
get MedicationName(){
    return $(`~Medication Name`)
}
get MedicationNameField(){
    return $(`~text_type_medication_name_textfield`)
}
get save(){
    return $(`//android.widget.Button[@content-desc="close_save_next_submit_button"]/android.widget.Button/android.view.View`)
}
get editbutton(){
    return $(`~edit_list_button`)
}
get delete(){
    return $(`//android.widget.ImageView[@content-desc="delete_action_0"]`)
}
get esarpage(){
    return $(`//android.view.View[@resource-id="esasr_text"]`)
}
get esarpageval(){
    return $(`~The Edmonton Symptom Assessment System (ESAS-r) is a symptom screening tool to assess common symptoms.\n\nPlease rate symptoms from 0 to 10; with 0 meaning that the symptom is absent and 10 that it is the worst possible severity.`)
}
get startstatement(){
    return $(`//android.widget.Button[@content-desc="start_assessment_button"]/android.widget.Button/android.view.View`)
}
get pain(){
    return $(`~Pain`)
}
get redcolor(){
    return $(`//android.widget.Button[@content-desc="scale_action_0"]`)
}
get canadian(){
    return $(`//android.view.View[@content-desc="Your clinician has requested a Canadian Problem Category assessment"]`)
}
get canadianPage(){
    return $(`//android.view.View[@resource-id="emotional_text"]`)
}
get canadianPages(){
    return $(`~Please select what applies to you and add comments if you have any.`)
}
get FearsWorries(){
    return $(`~Fears/Worries`)
}
get Sadness(){
    return $(`~Sadness`)
}
get FrustrationAnger(){
    return $(`~Frustration/Anger`)
}
get ChangesinAppearance(){
    return $(`~Changes in Appearance`)
}
get IntimacySexuality(){
    return $(`~Intimacy/Sexuality`)
}
get EmotionalTextField(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-2_textfield")`)
}
get firstoptiocn(){
    return $("//android.widget.ScrollView/android.widget.Button[1]")
}
get NextOption(){
    return $(`//android.widget.Button[@content-desc="submit_next_button"]/android.widget.Button/android.view.View`)
}
get ConcentrationMemory(){
    return $(`~Concentration/Memory`)
}
get sleep(){
    return $(`~Sleep`)
}
get Weight(){
    return $(`~Weight`)
}

get firstval(){
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[1]`)
}
get physicalinput(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-4_textfield")`)
}
get MeaningPurpose(){
    return $(`~Meaning/Purpose`)
}
get life(){
    return $(`~Life`)
}
get Faith(){
    return $(`~Faith`)
}
get meaning(){
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[1]`)
}
get Category(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-6_textfield")`)
}
get Makingtreatmentdecisions(){
    return $(`~Making treatment decisions`)
}
get illness(){
    return $(`~Understanding my illness and/or treatment`)
}
get taking(){
    return $(`~Talking with the health care team`)
}
get available(){
    return $(`~Knowing about available resources`)
}
get informationfield(){
    return $(`//android.widget.EditText[@resource-id="problem_category_problem-category-assessment-8_textfield"]`)
}
get makingTreatement(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-8_textfield")`)
}
get work(){
    return $(`~Work/School`)
}
get Finance(){
    return $(`~Finance`)
}
get Accommodations(){
    return $(`~Accommodations`)
}
get getting(){
    return $(`~Getting to and from appointments`)
}
get workInput(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-10_textfield")`)
}
get worry(){
    return $(`~Worry about family/friends`)
}
get FeelingAlone(){
    return $(`~Feeling Alone`)
}
get feelingburden(){
    return $(`~Feeling a burden to others`)
}
get socialInput(){
    return $(`android=new UiSelector().resourceId("problem_category_problem-category-assessment-12_textfield")`)
}
get backaction(){
    return $(`~back_action`)
}
get closeaction(){
    return $(`~dialog_close_action`)
}
get yescancle(){
    return $(`//android.widget.Button[@content-desc="ok_button"]/android.widget.Button/android.view.View`)
}
get hometab(){
    return $(`~Home\nTab 2 of 2`)
}


}