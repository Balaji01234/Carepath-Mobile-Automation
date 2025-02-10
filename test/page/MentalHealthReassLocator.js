export class MentalHealthReAssessment{


    get Reminders(){
        return $(`//android.view.View[@resource-id="reminders_text"]`)
    }
    get showmoreaction(){
        return $(`//android.widget.ImageView[@content-desc="show_more_action_Start your first lesson with Mind Zone"]`)
    }
    get hide(){
        return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]/android.widget.ImageView[1]`)
    }
    get showactionclick(){
        return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]`)
    }
    get GAD7(){
        return $(`(//android.view.View[@content-desc="Your clinician has requested a GAD-7 assessment"])[1]`)
    }
    get GAD7option(){
        return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]`)
    }
    get GAD7Page(){
        return $(`//android.view.View[@resource-id="gad7_text"]`)
    }
    get GeneralAnxietyDisorder(){
        return $(`~General Anxiety Disorder`)
    }
    get overlast(){
        return $(`//android.view.View[@resource-id="over_last_week_bothered_problem_text"]`)
    }
    get notatall(){
        return $(`~option_action_1`)
    }
    get severaldays(){
        return $(`~option_action_2`)
    }
    get morethan(){
        return $(`~option_action_3`)
    }
    get nearlyEveryDay(){
        return $(`~option_action_4`)
    }
    get pageone(){
        return $(`//android.view.View[@resource-id="1/8 _text"]`)
    }

    get pagetwo(){
        return $(`//android.view.View[@resource-id="2/8 _text"]`)
    }
    get pagethree(){
        return $(`//android.view.View[@resource-id="3/8 _text"]`)
    }
    get pagefour(){
        return $(`//android.view.View[@resource-id="4/8 _text"]`)
    }
    get pagefive(){
        return $(`//android.view.View[@resource-id="5/8 _text"]`)
    }
    get pagesix(){
        return $(`//android.view.View[@resource-id="6/8 _text"]`)
    }
    get pageseven(){
        return $(`//android.view.View[@resource-id="7/8 _text"]`)
    }
    get pageeight(){
        return $(`//android.view.View[@resource-id="8/8 _text"]`)
    }
    get saveSad(){
        return (`~save_button_gad7`)
    }
   get reviewoption(){
    return $(`//android.view.View[@resource-id="review_text"]`)
   }
    get GAD7INputone(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[1]`)
    }
    get GAD7INputwo(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[2]`)
    }
    get GAD7INputhree(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[3]`)
    }
    get GAD7Inputfour(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[4]`)
    }
    get GAD7Inputfive(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[5]`)
    }
    get GAD7Inputsix(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[6]`)
    }
    get GAD7Inputseven(){
        return $(`(//android.view.View[@resource-id="not_at_all_text"])[7]`)
    }
    get phq9(){
        return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[3]`)
    }
    get phq9save(){
        return $(`//android.widget.Button[@content-desc="save_button_phq9"]/android.widget.Button/android.view.View`)
    }
    get PatientHealthQuestionnaire(){
        return $(`//android.view.View[@resource-id="patient_health_quiestionnaire_text"]`)
    }
    get phq9val(){
        return $(`//android.view.View[@resource-id="phq9_text"]`)
    }
    get overthe(){
        return $(`~Over the last two weeks how often have you been bothered by following problem?`)
    }
    get phq91(){
        return $(`//android.view.View[@content-desc="1/10 "]`)
    }
    get phq92(){
        return $(`//android.view.View[@content-desc="2/10 "]`)
    }
    get phq93(){
        return $(`//android.view.View[@content-desc="3/10 "]`)
    }
    get phq94(){
        return $(`//android.view.View[@content-desc="4/10 "]`)
    }
    get phq95(){
        return $(`//android.view.View[@content-desc="5/10 "]`)
    }
    get phq96(){
        return $(`//android.view.View[@content-desc="6/10 "]`)
    }
    get phq97(){
        return $(`//android.view.View[@content-desc="7/10 "]`)
    }
    get phq98(){
        return $(`//android.view.View[@content-desc="8/10 "]`)
    }
    get phq99(){
        return $(`//android.view.View[@content-desc="9/10 "]`)
    }
    get phq910(){
        return $(`//android.view.View[@content-desc="10/10 "]`)
    }
    get savephq9(){
        return $(`//android.widget.Button[@content-desc="save_button_phq9"]/android.widget.Button/android.view.View`)
    }
    get submitphq9(){
        return $(`//android.widget.Button[@content-desc="save_or_submit_button"]/android.widget.Button/android.view.View`)
    }
    get eldercare(){
        return $(`~button_Program.elderCare`)
    }
    get canadian(){
        return $(`(//android.view.View[@content-desc="Your clinician has requested a Canadian Problem Category assessment"])[1]`)
    }
    get Newassessmentrequest(){
        return $(`~New assessment request`)
    }
    get value(){
        return $(`~1`)
    }
    get got(){
        return $(`(//android.widget.ImageView[@content-desc="show_more_action_Your clinician has requested a Canadian Problem Category assessment"])[1]`)
    }
    get hide(){
        return $(`(//android.widget.ImageView[@content-desc="reminder_home_card_action"])[1]/android.widget.ImageView[1]`)
    }
    get emotional(){
        return $(`//android.view.View[@resource-id="emotional_text"]`)
    }
    get emotionalpage(){
        return $(`~Please select what applies to you and add comments if you have any.`)
    }
    get fearopti(){
        return $(`//android.widget.ScrollView/android.widget.Button[1]`);
    }
    get sadness(){
        return $(`//android.widget.ScrollView/android.widget.Button[2]`);
    }
    get anger(){
        return $(`//android.widget.ScrollView/android.widget.Button[3]`);
    }
    get changes(){
        return $(`//android.widget.ScrollView/android.widget.Button[4]`);
    }
    get intimecy(){
        return $(`//android.widget.ScrollView/android.widget.Button[5]`);
    }
    get sadnessopt(){
        return $(`//android.widget.ScrollView/android.widget.Button[6]`);
    }
    get EmotionalComments(){
        return $(`~Emotional Comments`);
    }
    get EmotionalCommentsinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_emotional_comments_textfield")`)
    }
    get next(){
        return $(`//android.widget.Button[@content-desc="submit_next_button"]/android.widget.Button/android.view.View`)
    }
    get physical(){
        return $(`//android.view.View[@resource-id="physical_text"]`)
    }
    get Memory(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[1]`)
    }
    get sleep(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]`)
    }
    get weight(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[3]`)
    }
    get physicalpage(){
        return $(`~Physical Comments`)
    }
    get physicalinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_physical_comments_textfield")`)
    }
    get spiritual(){
        return $(`//android.view.View[@resource-id="spiritual_text"]`)
    }
    get purpose(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[1]`)
    }
    get life(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]`)
    }
    get faith(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[3]`)
    }
    get spiritualpage(){
        return $(`~Spiritual Comments`)
    }
    get spiritualinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_spiritual_comments_textfield")`);
    }
    get informational(){
        return $(`//android.view.View[@resource-id="informational_text"]`)
    }
    get informationalpage(){
        return $(`~Informational Comments`);
    }
    get informationalinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_informational_comments_textfield")`)
    }
    get practical(){
        return $(`//android.view.View[@resource-id="practical_text"]`)
    }
    get practicalfiled(){
        return $(`~Practical Comments`)
    }
    get practicalinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_practical_comments_textfield")`)
    }
    get social(){
        return $(`//android.view.View[@resource-id="social/financial_text"]`)
    }
    get socialpage(){
        return $(`~Social/Financial Comments`);
    }
    get socialinput(){
        return $(`android=new UiSelector().resourceId("problem_category_problem_category_social_financial_comments_textfield")`)
    }
    get submit(){
        return $(`//android.widget.Button[@content-desc="submit_next_button"]/android.widget.Button/android.view.View`)
    }
    get thanku(){
        return $(`//android.view.View[@resource-id="thank_you_text"]`)
    }
    get thankupage(){
        return $(`~Thank you for completing the assessment! You can now proceed with Elder care program.`);
    }
    get goback(){
        return $(`~go_home_button`)
    }
    get backtoass(){
        return $(`//android.widget.Button[@content-desc="back_to_assessments_button"]/android.widget.Button/android.view.View`)
    }
    
}
