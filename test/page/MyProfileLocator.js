export class MyProfileLocators{
  get hamburger(){
    return $(`~hamburger_action`)
  }
  get hamburgerpage(){
    return $(`~Home`)
  }
  get myprofile(){
    return $(`~My Profile`)
  }
  get myprofilePage(){
    return $(`//android.view.View[@resource-id="my_profile_text"]`)
  }
  get edit(){
    return $(`//android.view.View[@content-desc="text_with_icon_button"]/android.widget.ImageView`)
  }
  get FirstName(){
    return $(`android=new UiSelector().resourceId("first_name_textfield")`)
  }
  get firstnameinput(){
    return $(`//android.widget.EditText[@resource-id="first_name_textfield"]`)
  }
  get lastanameinput(){
    return $(`//android.widget.EditText[@resource-id="last_name_textfield"]`)
  }
  get customer(){
    return $(`//android.widget.Button[@content-desc="use_realname_action"]/android.view.View[1]`)
  }
  get confirmUserName(){
    return $(`//android.widget.Button[@content-desc="confirm_username_button"]/android.widget.Button/android.view.View`)
  }
  get alternativeNumber(){
    return $(`//android.widget.EditText[@resource-id="cell_number_textfield"]`)
  }
  get Emergency(){
    return $(`//android.widget.EditText[@resource-id="first_name_textfield"]`)
  }
  get Emergencylastname(){
    return $(`//android.widget.EditText[@resource-id="last_name_textfield"]`)
  }
  get Emergencymom(){
    return $(`//android.widget.EditText[@resource-id="relation_textfield"]`)
  }
  get addressval(){
    return $(`//android.widget.EditText[@resource-id="address_password_textfield"]`)
  }
  get unit(){
    return $(`//android.widget.EditText[@resource-id="unit_textfield"]`)
  }
  get city(){
    return $(`//android.widget.EditText[@resource-id="city_textfield"]`)
  }
  get addnew(){
    return $(`//android.widget.Button[@content-desc="add_new_action"]`)
  }
  get CircleofCare(){
    return $(`~Circle of Care`)
  }
  get back(){
    return $(`~back_action`)
  }
  get contactInformation(){
    return $(`~Contact Information`)
  }
  get contactInformationinput(){
    return $(`android=new UiSelector().resourceId("home_number_textfield")`)
  }
  get changePassword(){
    return $(`//android.widget.Button[@content-desc="change_password_button"]/android.widget.Button/android.widget.ImageView`)
  }
  get myprofileback(){
    return $(`//android.widget.ImageView[@content-desc="my_profile_action"]`)
  }
  get country(){
    return $(`//android.widget.ImageView[@resource-id="country_textfield"]`)
  }
  get countrypage(){
    return $(`//android.widget.EditText`)
  }
  get canada(){
    return $(`//android.widget.EditText/android.view.View/android.view.View/android.widget.ImageView[1]`)
  }
  get saveChanges(){
    return $(`//android.widget.Button[@content-desc="save_all_changes_button"]/android.widget.Button/android.view.View`)
  }
  get contactPage(){
    return $(`android=new UiSelector().resourceId("home_number_textfield")`)
  }
  get cellnumber(){
    return $(`android=new UiSelector().resourceId("cell_number_textfield")`)
  }
  get circlrofcare(){
    return $(`~Circle of Care`)
  }
  get SpecialistCareProvider(){
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[4]/android.view.View[1]`)
  }
  get addnewOpt(){
    return $(`//android.widget.Button[@content-desc="add_new_button"]/android.widget.Button/android.widget.ImageView`)
  }
  get circlelast(){
    return $(`android=new UiSelector().resourceId("last_name_textfield")`)
  }
  get circleNumber(){
    return $(`android=new UiSelector().resourceId("office_number_textfield")`)
  }

  get circleTax(){
    return $(`android=new UiSelector().resourceId("fax_number_textfield")`)
  }
  get no(){
    return $(`//android.widget.Button[@content-desc="radio_button_action_false"]/android.widget.RadioButton`)
  }
   get savebut(){
    return $(`//android.widget.Button[@content-desc="submit_button"]/android.widget.Button/android.view.View`)
   }
   get primary(){
    return $(`~Primary Care Provider`)
   }
   get primaryOption(){
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[4]/android.view.View[5]`)
   }
   get primaryAdd(){
    return $(`(//android.widget.Button[@content-desc="add_new_button"])[2]/android.widget.Button/android.widget.ImageView`)
   }
   get otherCare(){
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[4]/android.view.View[3]`)
   }
   get othercareadd(){
    return $(`//android.widget.Button[@content-desc="add_new_button"]/android.widget.Button/android.widget.ImageView`)
   }

}