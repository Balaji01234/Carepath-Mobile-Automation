export class Forgotslocators {
      get forgot(){
        return $(`//android.view.View[@resource-id="forgot_password_?_text"] `)
      }
      get forgotPassword()
      {
        return $(`~Forgot password`)
      }
      get Pleaseentertheemailaddress(){
        return $(`~Please enter the email address`)
      }
      get forgotpage(){
        return $(`~In case you have forgotten your password, please send us a request to reset it. You will receive an email with instructions to update your password.`)
      }
      get privacypolicy(){
        return $(`~Privacy policy`)
      }
      get EmailField() {
        return $('android=new UiSelector().resourceId("email_texfield_textfield")')
    }
    get sendRequest(){
        return $(`//android.widget.Button[@content-desc="send_request_button"]/android.widget.Button/android.view.View`)
    }
    get forgotScreen(){
        return $(`//android.view.View[@resource-id="forgot_password_?_text"]`)
    }
    get conform(){
        return $(`~We need to send you the code to reset password`)
    }
    get verifymessage(){
        return $(`~Verified and recommended for you`)
    }
    get sendrequest(){
        return $(`~send_code_action`)
    }
    get resertOtp(){
        return $(`~Resend OTP`)
    }
    get forgotLocaVal(){
        return $(`(//android.widget.TextView[@text="FORGOT PASSWORD"]//..//..//..//android.widget.TextView)[3]`)
    }
    get Reset(){
        return $(`//android.view.View[@resource-id="reset_your_password_text"]`)
    }
    get resetpass(){
        return $(`~Reset your password`)
    }
    get newpass(){
        return $(`~New Password`)
    }
    get repeatpassword(){
        return $(`~Repeat Password`)
    }
    get newpassunhide(){
        return $(`(//android.view.View[@content-desc="action_eye_closed_icon_action"])[1]`)
    }
    get repeatunhide(){
        return $(`(//android.view.View[@content-desc="action_eye_closed_icon_action"])[2]`)   
    }
    get newpasswordField(){
        return $(`android=new UiSelector().resourceId("new_password_textfield")`)
    }
    get repeatPasswordField(){
        return $(`//android.widget.EditText[@resource-id="repeat_password_textfield"]`)
    }
    get savebutton(){
        return $(`//android.widget.Button[@content-desc="save_button"]/android.widget.Button/android.view.View`)
    }
    get Numbers(){
        return $(`~Password must have at least one special character`)
    }
    get SpecialChar(){
        return $(`//android.widget.EditText[@resource-id="repeat_password_textfield"]`)
    }
    get oneletter(){
        return $(`~Password must be 8 digit long`)
    }
    get notmatch(){
        return $(`~Password do not match`)
    }
    get withoutNumber(){
        return $(`~Password must have a number`)
    }
    get withoutCapital(){
        return $(`~Password must have upper case`)
    }
    get withoutsmallLetter(){
        return $(`~Password must have lower case`)
    }
    get withoutSpecialChar(){
        return $(`~Password must have at least one special character`)
    }

    get newpassword(){
        return $(`~Please enter new password`)
    }
    get wrongotp(){
        return $(`//android.view.View[@resource-id="password_reset_failed_text"]`)
    }
    get tryagain(){
        return $(`~Invalid verification code provided, please try again.`)
    }
    get tryagainButton(){
        return $(`//android.widget.Button[@content-desc="ok_button"]/android.widget.Button/android.view.View`)
    }
    get cancle(){
        return $(`//android.widget.Button[@content-desc="cancel_button"]/android.widget.Button/android.view.View`)
    }
    get resetOption(){
        return $(`//android.view.View[@content-desc="Resend OTP"]`)
    }
    get error(){
        return $(`~Error!`)
    }
    get pinsend(){
        return $(`~Pin sent to email`)
    }
    get OkButton(){
        return $(`//android.widget.Button[@content-desc="ok_button"]/android.widget.Button/android.view.View`)
    }
    get secondaryButton(){
        return $(`~secondary_button`)
    }
    




}