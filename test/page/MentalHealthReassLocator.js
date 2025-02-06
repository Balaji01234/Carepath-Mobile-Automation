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

    
}
