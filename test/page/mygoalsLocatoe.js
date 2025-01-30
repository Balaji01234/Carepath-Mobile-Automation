export class mygoal_locators {
    get mygoal(){
        return $('~My Goals')
    }
    get mygoalVal(){
        return $('//android.view.View[@resource-id="my_goals_text"]')
    }
    get mygoalpage(){
        return $('~My Goals')
    }
    get newgoal(){
        return $(`//android.view.View[@content-desc="new_goal_action"]`)
    }
    get newgoalpage(){
        return $(`~NEW GOAL`)
    }
    get whatfield(){
        return $(`//android.widget.EditText[@resource-id="gardening_textfield"]`)
    }
    
    get whetfield(){
        return $(`//android.widget.EditText[@resource-id="everyday_textfield"]`)
    }
    get calendar(){
        return $(`//android.view.View[@resource-id="pick_duration_textfield"]`)
    }
    get calendarpage(){
        return $(`~Select Range to schedule a goal Start Date to End Date`)
    }
    get edit(){
        return $(`//android.view.View[@content-desc="Dismiss"]/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[2]`)
    }
    get startdate(){
        return $(`~input_date_start_textfield\ninput_date_end_textfield\ndate_picker_cancel_button\ndate_picker_confirm_button`)
    }
    get endDate(){
        return $(`~input_date_start_textfield\ninput_date_end_textfield\ndate_picker_cancel_button\ndate_picker_confirm_button`)
    }
    get accessmymode(){
        return $(`~ASSESS MY MOOD`)
    }
    get moodAssement(){
        return $(`~Mood Assessment`)
    }
    get joyful(){
        return $(`~Joyful/Hopeful`)
    }
    get nextbutton(){
        return $(`~NEXT`)
    }
    get moodAssementPage(){
        return $(`~MOOD ASSESSMENT`)
    }
    get lastRadioButton(){
        return $(`//android.view.View[@content-desc="dismiss_keyboard_action"]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[11]`)
    }
    get submit(){
        return $ (`~SUBMIT`)
    }
     get myprogress(){
        return $(`~My Progress`)
     }
     get starting(){
        return $(`~27, Thursday, February 27, 2025`)
     }
     get ending(){
        return $(`~28, Friday, February 28, 2025`)
     }
     get savebuttonoption(){
        return $(`~date_picker_confirm_button`)
     }
    get where(){
        return $(`//android.widget.EditText[@resource-id="in_backyard_textfield"]`)
    }
    get with(){
        return $(`//android.widget.EditText[@resource-id="by_myself_textfield"]`)
    }
    get prevent(){
        return $(`//android.widget.EditText[@resource-id="wednesday_gratitude_textfield"]`)
    }
    get commond(){
        return $ (`//android.widget.EditText[@resource-id="journeling_feelings_textfield"]`)
    }
    get saveOp(){
        return $(`~SAVE`)
    }
    get poup(){
        return $(`//android.view.View[@content-desc="Success!"`)
    }
    get poupok(){
        return $(`~OK`)
    }
    get month(){
        return $(`~MONTH`)
    }
    get greaterval(){
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View/android.view.View[3]/android.widget.ImageView[2]`)
    }


}