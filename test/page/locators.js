export class locators {

    get startNow() {
        return $('~start_now_button');
    }
    get startnowOption(){
        return $('//android.widget.Button[@content-desc="start_now_button"]/android.widget.Button/android.view.View');
    }
    get startnowver(){
        return $('//android.view.View[@resource-id="start_now_text"]')
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

    get discoverButton(){
        return $('~discover_button')
    }

    get loginScreen() {
        return $('~login_or_signin_text');
    }
    get loginScreenpage() {
        return $('//android.widget.Button[@content-desc="login_button"]/android.widget.Button/android.view.View');
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

    get forgotPassword(){
        return $('~forgot_password_button')
    }

    get getNotifiedDialogBox() {
        return $('~get_notified_text')
    }
    get notifedScreen(){
        return $('Get Notified!')
    }

    get allowButton() {
        // return $('//android.view.View[@content-desc="allow_text"]')
        return $('~ALLOW')
    }

    get denyButton() {
        return $('~secondary_button')
    }

    get allowNotification() {
        return $('//android.widget.TextView[@text="Allow Dev-Carepath Digital Health to send you notifications?"]')
    }
    
    get allownofificationpage(){
        return $('//android.widget.TextView[@resource-id="com.android.permissioncontroller:id/permission_message"]')
    }
    get allownofificationpageButton(){
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
    }
    get allowNotificationButton() {
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")')
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
        return $('~sign_up_text')
    }

    get employeeButton() {
        return $('~iam_employee_button')
    }

    get studentButton() {
        return $('~iam_student_button')
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
        return $('android=new UiSelector().description("referral_source_text")')
    }

    referrals(referral) {
        return $(`android=new UiSelector().description("${referral}")`);
    }

    get dob() {
        return $('android=new UiSelector().resourceId("dob_textfield")')
    }

    get relationToEmployee() {
        return $('android=new UiSelector().resourceId("relation_textfield")')
    }

    get signUpButton() {
        return $('~signup_button')
    }

    get verifyYourAccount(){
        return $('~verify_your_account_text')
    }

    get getMail(){
        return $('~by_email_card')
    }

    get verifyButton(){
        return $('~verify_button')
    }

    get chromeDismissButton(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/signin_fre_dismiss_button")')
    }

    get chromeGotIt(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/ack_button")')
    }

    get chromeSearchBox(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/search_box_text")')
    }

    get chromeHomeButton(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/home_button")')
    }

    get chromeUrl(){
        return $('android=new UiSelector().resourceId("com.android.chrome:id/url_bar")')
    }

    get mailinatorInbox(){
        return $('android=new UiSelector().resourceId("inbox_field")')
    }

    get justNow(){
        return $('//android.widget.TextView[@text="just now"]')
    }

    get goButton(){
        return $('//android.widget.Button[@text="GO"]')
    }

    get verificationCodeText(){
        return $('//android.widget.TextView[@text="DoNot-Reply"]')
    }

    get verifyAccount(){
        return $('android=new UiSelector().text("Verify your account")')
    }
    get notifiedPopupscreen(){
        return $('~Get Notified!')

    }
    get allowOption(){
        // return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
    }
    get allowPopButton(){
        return $('//android.view.View[@content-desc="ALLOW"]')
    }

    get welcometocarepath(){
        // return $('//android.view.View[@content-desc="welcome_to_carepath_digital_health_text"]')
        return $('~Welcome to Carepath\nDigital Health')
    }
    get mentalhealth(){
        return $('//android.view.View[@content-desc="button_Program.mentalHealth"]')
    }
    get continuebutton(){
        return $('//android.widget.Button[@content-desc="continue_button"]/android.widget.Button/android.view.View')
    }
    get dailygoal(){
        return $('~Daily Goal Check-In')
    }
    get testnew(){
        return $('~testnew')
    }
    get dailygoalConfirm(){
        return $('~CONFIRM')
    }
    get mindzone(){
        return $('~Mind Zone_action')
    }
    get mindzoneval(){
        return $('//android.view.View[@resource-id="mind_zone_text"]')
    }
    get lessonOne(){
        return $('//android.view.View[@content-desc="Lesson 1: Anxiety, Depression & Emotions"]')

    }
    get lessononeVal(){
        return $(`//android.view.View[@resource-id="lesson 1: anxiety, depression & emotions_text"]`)
    }
    get reviwe(){
        // return $('(//android.view.View[@content-desc="review_text"])[1]')
        return $('(//android.view.View[@content-desc="REVIEW"])[1]')
    }
    get lessonIntro(){
        return $('~Lesson Introduction')
    }
    get lesson1(){
        return $('~Welcome to the Mind Zone Course!\nWe are pleased you have decided to participate.\nThis course is designed to help people who are troubled by low mood or anxiety, which are common problems for many people. We hope you find it helpful!')
    }
    get page1(){
        return $('~1 / 56')
    }
    get next(){
        return $('~NEXT')
    }
    
    get lesson2(){
        return $('~Research suggests that learning a few core skills can help people to manage their mood better and enjoy life more.\nBut reading about these skills is not enough.\nPracticing the skills is key to making a difference in how you feel.\nAt the end of the lesson you will have some homework, which you can complete in small chunks of time.')
    }
    get page2(){
        return $('~2 / 56')
    }
    get lesson3(){
        return $('~We suggest you review the lesson at the beginning of each week.\nYou may want to read it a second time as it is hard for most of us to get everything with just one read.\nTry to set aside 20-30 minutes each day for the homework activities recommended in the course.')
    }
    get page3(){
        return $('~3 / 56')
    }
    get lesson4(){
        return $("~Listening to others' experiences with low mood and anxiety can be helpful.\nDuring the course we introduce you to the stories of some of these people.\nTheir stories may not be exactly like yours but we hope hearing from them will be helpful.\nLet's meet Matt and Susan now:\n*These stories are not representative of a specific person.")
    }
    get page4(){
        return $('~4 / 56')
    }
    get lesson5(){
        return $("~I'm 35 years old and live in Calgary Alberta. I'm married to Sarah and we have a baby girl on the way.\nOn the surface our life looks pretty perfect but lately I have been really struggling. I'm feeling pretty low and irritable, which is causing some stress with Sarah. We're fighting more. It seems to be getting worse, and I'm beating myself up about it.\nI don't know how we're going to manage a new baby and I'm worried about that. Sarah deserves better than she's getting from me.")
    }
    get page5(){
        return $('~5 / 56')
    }
    get lesson6(){
        return $("~I got a promotion at work a few months ago. It involves more responsibility and taking on a big budget. The money is good and I was excited about it, especially with the baby coming. But, the guy I report to at work is tough. I just don't mesh with him at all. I keep trying but I always seem to be putting my foot in my mouth. I have a major report to complete in the next few months but every time I sit down to work on it, I freeze. I even called in sick a few times last week. I just couldn't face going in and staring at that blank project report screen.\nI hope this course will help get me back on track, start to feel better, and get my life back again.")
    }
    get page6(){
        return $('~6 / 56')
    }
    get playaction(){
        return $('~play_action')
    }
    get replayaction(){
        return $('~replay_action')
    }
    get audiopercentage(){
        return $('//android.widget.SeekBar')
    }

    get lesson7(){
        return $("~Hi, I'm Susan.")
    }
    get page7(){
        return $('~7 / 56')
    }
    get lesson8(){
        return $("~I feel squeezed between caring for Mom and my girls. Robert is stressed a lot too about how secure his job is.\nI worry during the day and have trouble sleeping at night. I don't have much time for myself. Lately I've been feeling really overwhelmed. Last week I had a panic attack when I was at the grocery store. I just started to feel short of breath and that I needed to get away from all the people. I left my cart and went home.\nI need help figuring out how to deal with all the pressures in my life and still make time for me. And I need to learn to manage the worrying better.\nI hope I can find that here.")
    }
    get page8(){
        return $('~8 / 56')
    }
    get lesson9(){
        return $("~You have just met Matt and Susan. While everyone's story is different, it can help to hear from others about their experience. We will continue to hear from Matt and Susan throughout the course.")
    }
    get page9(){
        return $('~9 / 56')
    }
    get lesson10(){
        return $(`~Before we begin the first lesson, we invite you to think about what you hope will be different in your life as a result of taking this course.\nFor example, it might be "I will be more relaxed and enjoying life more." Or, "When I get upset, I will have some tools to help me feel better."\nIt's OK if your statement is not too specific at this point.\nGO TO MY GOALS`)
    }
    get page10(){
        return $('~10 / 56')
    }
    get lesson11(){
        return $(`~Anxiety is a feeling of nervousness, feeling on edge, or worry. Often we feel it in challenging situations or when faced with uncertainty. It has many symptoms, which we will talk about shortly.\nDepression is a persistent feeling of sadness and loss of interest that affects how you feel, think, and behave. Like anxiety it has many symptoms which we will talk about.`)
    }
    get page11(){
        return $('~11 / 56')
    }
    get lesson12(){
        return $(`~Anxiety is a normal and healthy response to situations that cause fear. It provokes the "flight or fight" response. This is the physical reaction like racing heart, fast breathing, and an increase in "stress hormones" or chemicals in our body.\nThe "fight or flight" response prepares us to protect ourselves (to fight or to flee the situation). Because anxiety prepares us for flight or fight, it is a protective response.`)
    }
    get page12(){
        return $('~12 / 56')
    }
    get lesson13(){
        return $(`~Anxiety is a natural part of life that can protect us. However, anxiety can become chronic, that is, it occurs at higher levels often over a long period of time. When that happens, it can have negative effects on our physical and mental wellbeing.`)
    }
    get page13(){
        return $('~13 / 56')
    }
    get lesson14(){
        return $(`~Anxiety has many symptoms. These include emotions (feelings), thought patterns, and behaviours or responses. Below we list a number of them. As you read through, think about the symptoms you experience. Are there others?`)
    }
    get page14(){
        return $('~14 / 56')
    }
    get lesson14Radio1(){
        return $(`~radio_action_mindzone.1.14.1.1`)
    }
    get lesson14Radio2(){
        return $(`~radio_action_mindzone.1.14.1.2`)
    }
    get lesson14Radio3(){
        return $(`~radio_action_mindzone.1.14.1.3`)
    }
    get lesson14Radio4(){
        return $(`~radio_action_mindzone.1.14.1.4`)
    }
    get lesson14Radio5(){
        return $(`~radio_action_mindzone.1.14.1.5`)
    }
    get lesson14Radio6(){
        return $(`~radio_action_mindzone.1.14.1.6`)
    }
    get lesson14Radio7(){
        return $(`~radio_action_mindzone.1.14.1.7`)
    }
    get lesson14Radio8(){
        return $(`~radio_action_mindzone.1.14.1.8`)
    }
    get lesson14Radio9(){
        return $(`~radio_action_mindzone.1.14.1.9`)
    }
    get lesson14Radio10(){
        return $(`~radio_action_mindzone.1.14.1.10`)
    }
    get page15(){
        return $('~15 / 56')
    }
    get lesson15Radio1(){
        return $(`~radio_action_mindzone.1.15.1.1`)
    }
    get lesson15Radio2(){
        return $(`~radio_action_mindzone.1.15.1.2`)
    }
    get lesson15Radio3(){
        return $(`~radio_action_mindzone.1.15.1.3`)
    }
    get lesson15Radio4(){
        return $(`~radio_action_mindzone.1.15.1.4`)
    }
    get lesson15Radio5(){
        return $(`~radio_action_mindzone.1.15.1.5`)
    }
    get lesson16(){
        return $(`~behaviours\nwhat happens to your body_text`)
    }
    get page16(){
        return $('~16 / 56')
    }
    get lesson16Radio1(){
        return $(`~radio_action_mindzone.1.16.1.1`)
    }
    get lesson16Radio2(){
        return $(`~radio_action_mindzone.1.16.1.2`)
    }
    get lesson16Radio3(){
        return $(`~radio_action_mindzone.1.16.1.3`)
    }
    get lesson16Radio4(){
        return $(`~radio_action_mindzone.1.16.1.4`)
    }
    get lesson16Radio5(){
        return $(`~radio_action_mindzone.1.16.1.5`)
    }
    get lesson16Radio6(){
        return $(`~radio_action_mindzone.1.16.1.6`)
    }
    get lesson16Radio7(){
        return $(`~radio_action_mindzone.1.16.1.7`)
    }
    get lesson16Radio8(){
        return $(`~radio_action_mindzone.1.16.1.8`)
    }
    get lesson16Radio9(){
        return $(`~radio_action_mindzone.1.16.1.9`)
    }
    get lesson16Radio10(){
        return $(`~radio_action_mindzone.1.16.1.10`)
    }
    get lesson17(){
        return $(`~Feeling sad, like anxiety, is a natural part of life. We feel sad whenever we go through loss or even change.\nThese can be significant losses, such as the death of someone. Or things like an illness, or a relationship break-up. Sadness can occur also with smaller losses that build up over time.\nSometimes people call this "having the blues" or "feeling down."`)
    }
    get page17(){
        return $('~17 / 56')
    }
    get lesson18(){
        return $(`~Most of the time a low mood lasts a few hours or maybe a couple of days. Sometimes, the low mood is more severe. The sadness can be very deep and longer lasting (weeks to months). It may be severe enough that it is called a "major depression."\nMajor depression is a medical illness that stems from changes in the area of the brain that control emotions. It is different than "having the blues" or "feeling down" and usually requires treatment with drugs and counselling.`)
    }
    get page18(){
        return $('~18 / 56')
    }
    get lesson19(){
        return $(`~The difference between low mood and major depression is one of degree.\nMajor depression is more severe in intensity, lasts longer, and includes a number of symptoms. A major depression often lasts for many months and then sometimes gets better. This is referred to as an episode of depression. Persons with major depression may experience many episodes during their lifetime.\nOther people experience a chronic, low-level mood that can last for years. This is referred to as a persistent depressive disorder.`)
    }
    get page19(){
        return $('~19 / 56')
    }
    get lesson20(){
        return $(`~Treatment can help with low mood, allowing people to return to enjoying life. But a lot of people feel embarrassed or ashamed about needing help. Fortunately, public education campaigns are decreasing this a bit. It may help to know that mood problems can have physical causes, just like diabetes or heart disease do.\nIn this course we use low mood and depression to mean similar things. We use the term "major depression" for the medical illness associated with changes in brain function.`)
    }
    get page20(){
        return $('~20 / 56')
    }
  
    get lesson21(){
        return $("~Like anxiety, depression affects our emotions, our thoughts, and how we behave or respond. Below is a list of symptoms of depression. Which ones apply to you?")
    }
    get page21(){
        return $('~21 / 56')
    }
    get lesson21Radio1(){
        return $(`~radio_action_mindzone.1.21.1.1`)
    }
    get lesson21Radio2(){
        return $(`~radio_action_mindzone.1.21.1.2`)
    }
    get lesson21Radio3(){
        return $(`~radio_action_mindzone.1.21.1.3`)
    }
    get lesson21Radio4(){
        return $(`~radio_action_mindzone.1.21.1.4`)
    }
    get lesson21Radio5(){
        return $(`~radio_action_mindzone.1.21.1.5`)
    }
    get lesson21Radio6(){
        return $(`~radio_action_mindzone.1.21.1.6`)
    }
    get lesson21Radio7(){
        return $(`~radio_action_mindzone.1.21.1.7`)
    }
    get page22(){
        return $('~22 / 56')
    }
    get lesson22Radio1(){
        return $(`~radio_action_mindzone.1.22.1.1`)
    }
    get lesson22Radio2(){
        return $(`~radio_action_mindzone.1.22.1.2`)
    }
    get lesson22Radio3(){
        return $(`~radio_action_mindzone.1.22.1.3`)
    }
    get lesson22Radio4(){
        return $(`~radio_action_mindzone.1.22.1.4`)
    }
    get lesson22Radio5(){
        return $(`~radio_action_mindzone.1.22.1.5`)
    }
    get lesson22Radio6(){
        return $(`~radio_action_mindzone.1.22.1.6`)
    }
    get lesson22Radio7(){
        return $(`~radio_action_mindzone.1.22.1.7`)
    }
    get page23(){
        return $('~23 / 56')
    }
    get lesson23Radio1(){
        return $(`~radio_action_mindzone.1.23.1.1`)
    }
    get lesson23Radio2(){
        return $(`~radio_action_mindzone.1.23.1.2`)
    }
    get lesson23Radio3(){
        return $(`~radio_action_mindzone.1.23.1.3`)
    }
    get lesson23Radio4(){
        return $(`~radio_action_mindzone.1.23.1.4`)
    }
    get lesson23Radio5(){
        return $(`~radio_action_mindzone.1.23.1.5`)
    }
    get lesson23Radio6(){
        return $(`~radio_action_mindzone.1.23.1.6`)
    }
    get lesson24(){
        return $(`~As you saw from Matt and Susan, there are many symptoms that can occur. And, these can increase over time. Symptoms connect with each other in a circular way, with each having an impact on the other.`)
    }
    get page24(){
        return $('~24 / 56')
    }
    get lesson25(){
        return $(`~In our experience, no one can tackle all symptoms at once. In the Mind Zone course, we will work on each group of symptoms one by one.\nMatt`)
    }
    get page25(){
        return $('~25 / 56')
    }
    get lesson26(){
        return $(`~Not everyone experiences all of these symptoms. However, the more symptoms you experience, the more severe depression might be.\nOne area of concern with depression is risk of suicide. If you have thoughts of harming yourself, it is important to get help right away.\nYour family doctor is a good place to start. While low mood can be very difficult, there are effective treatments. One way to raise this with your doctor is to say something like: "I've been feeling really down and I'm worried about hurting myself." Your doctor will be very glad that you told them!`)
    }
    get page26(){
        return $('~26 / 56')
    }
    get lesson27(){
        return $(`~There are two basic approaches to treating anxiety and depression.\nMedication\nThis kind of treatment is effective for many people with major depression. When someone has sadness and lack of enjoyment most of the time for two weeks or more it may be a major depression.\nTwo-thirds (2 out of 3) people with major depression are helped by medication. If this is a treatment you would like to discuss further, talk to your family doctor. They can tell you if medication is likely to help and which medication to try.`)
    }
    get page27(){
        return $('~27 / 56')
    }
    get lesson28(){
        return $(`~Some people have trouble asking for help for emotional problems. It may help to know that many, many people struggle with this - you are not alone!\nYou might just say to your doctor "I think I might be depressed. Can we talk about that?"\nSometimes medications may help anxiety too, especially when it is severe. Overall though, anxiety is likely to respond well to the second approach.`)
    }
    get page28(){
        return $('~28 / 56')
    }
    get lesson29(){
        return $(`~There are some core skills that research has shown can help low mood and anxiety.\nLearning about these skills is helpful, but regular practice over a 6-8 week period has been shown to be of most benefit. After learning the skills, ongoing practice over time helps to increase the benefit.`)
    }
    get page29(){
        return $('~29 / 56')
    }
    get lesson30(){
        return $(`~Everyone experiences problems with mood and anxiety from time to time but this is usually passing. Some people have more of a problem with mood and find it negatively affects their life in some way.`)
    }
    get page30(){
        return $('~30 / 56')
    }
    get lesson31(){
        return $(`~Anxiety disorders are the most common mental health problem in Canada.\nIn any given year, about 12% of Canadians have an anxiety disorder. As well, 25% of Canadians (1 out of 4) will experience an anxiety disorder in their lifetime. While many people do not have anxiety symptoms that are severe enough to be called a "disorder," many more have enough anxiety to negatively affect their life.`)
    }
    get page31(){
        return $('~31 / 56')
    }
    get lesson32(){
        return $(`~Depression is less common than anxiety, though they often occur together.\nMore than 10% (1 out of 10) of Canadians will have a major depression in their life at some point. Like anxiety though, many more people have low mood that may not be severe enough to be diagnosed as a major depression. These less severe forms can seriously affect one's ability to enjoy life.`)
    }
    get page32(){
        return $('~32 / 56')
    }
    get lesson33(){
        return $(`//android.view.View[@content-desc="dismiss_keyboard_action"]/android.view.View[1]/android.view.View[2]/android.view.View/android.widget.ImageView`)
    }
    get page33(){
        return $('~33 / 56')
    }
    get lesson34(){
        return $(`~There is no one cause of low mood or anxiety. Rather, there is usually a combination of factors.\nGenetics (those aspects of us that we inherit from our parents - part of our cells and physical make-up)\nStress, including difficult family or work situations, finances, illness or other major life events\nSubstance abuse (drugs, alcohol)\nHistory of abuse or trauma\nHow we respond to low mood/anxiety\nOur ability to tolerate emotions or uncertainty`)
    }
    get page34(){
        return $('~34 / 56')
    }
    get lesson35(){
        return $(`~Some of the things that contribute to low mood/anxiety are things that we cannot change. These are things like our genetics, family history, or history of abuse. The good news though is that there are things that we can modify.\nThese include:\nHow we respond to low mood/anxiety\nHow well we tolerate emotions and uncertainty\nWe will talk about each of these. How to manage these is a core part of the rest of the Mind Zone course.`)
    }
    get page35(){
        return $('~35 / 56')
    }
    get lesson36(){
        return $(`~Research has shown that what we do and how we think about things have a big role to play in how we feel. As well, behaviour and thinking is something we can learn to change.`)
    }
    get page36(){
        return $('~36 / 56')
    }
    get lesson37(){
        return $(`~Looking at the content of the lesson, I could see how my own feelings, thoughts and behaviours were connected. I could really get down on myself at work especially. I know at those times I am thinking I just can't cut it in this new role. If I had a bad day like that usually I'd end up with pain in my shoulders and neck. I'd be cranky at home and probably not sleep well either.`)
    }
    get page37(){
        return $('~37 / 56')
    }
    get lesson38(){
        return $(`~Matt's Thoughts, Feelings & Behaviours`)
        
    }
    get page38(){
        return $('~38 / 56')
    }
    get lesson39(){
        return $(`~Susan`)
    }
    get page39(){
        return $('~39 / 56')
    }
    get lesson40(){
        return $(`~Susan's Thoughts, Feelings & Behaviours`)
        

    }
    get page40(){
        return $('~40 / 56')
    }
    get lesson41(){
        return $(`~Feelings`)
    }
    get page41(){
        return $('~41 / 56')
    }
    get lesson42(){
        return $(`~Take a moment to identify what you are feeling... calmness? Tension? Hopefulness?\nThink about where in your body you can feel these. If you are feeling calm, perhaps it is a feeling of ease or lightness in your body.\nIn contrast, if it is tension, perhaps you notice tightness in certain muscles. Common areas are the neck, shoulders or jaw.\nSometimes when asked what they are feeling, a person will respond with "I have too much to do today." This is a thought, not a feeling. Thoughts usually come as a sentence or a phrase, whereas feelings are usually one word.`)
    }
    get page42(){
        return $('~42 / 56')
    }
    get lesson43(){
        return $(`~below is a list of feelings. think about which ones fit for you right now. are there others not listed?_text`)
    }
    get page43(){
        return $('~43 / 56')
    }
    get lesson43Radio1(){
        return $(`~radio_action_mindzone.1.43.1.1`)
    }
    get lesson43Radio2(){
        return $(`~radio_action_mindzone.1.43.1.2`)
    }
    get lesson43Radio3(){
        return $(`~radio_action_mindzone.1.43.1.3`)
    }
    get lesson43Radio4(){
        return $(`~radio_action_mindzone.1.43.1.4`)
    }
    get lesson43Radio5(){
        return $(`~radio_action_mindzone.1.43.1.5`)
    }
    get lesson43Radio6(){
        return $(`~radio_action_mindzone.1.43.1.6`)
    }
    get lesson43Radio7(){
        return $(`~radio_action_mindzone.1.43.1.7`)
    }
    get lesson43Radio8(){
        return $(`~radio_action_mindzone.1.43.1.8`)
    }
    get lesson43Radio9(){
        return $(`~radio_action_mindzone.1.43.1.9`)
    }
    get lesson43Radio10(){
        return $(`~radio_action_mindzone.1.43.1.10`)
    }
    get lesson43Radio11(){
        return $(`~radio_action_mindzone.1.43.1.11`)
    }
    get lesson43Radio12(){
        return $(`~radio_action_mindzone.1.43.1.12`)
    }
    get lesson43Radio13(){
        return $(`~radio_action_mindzone.1.43.1.13`)
    }
    get lesson43Radio14(){
        return $(`~radio_action_mindzone.1.43.1.14`)
    }
    get lesson43Radio15(){
        return $(`~radio_action_mindzone.1.43.1.15`)
    }
    get lesson43Radio16(){
        return $(`~radio_action_mindzone.1.43.1.16`)
    }
    get lesson43Radio17(){
        return $(`~radio_action_mindzone.1.43.1.17`)
    }
    get lesson43Radio18(){
        return $(`~radio_action_mindzone.1.43.1.18`)
    }
    get lesson43Radio19(){
        return $(`~radio_action_mindzone.1.43.1.19`)
    }
    get lesson43Radio20(){
        return $(`~radio_action_mindzone.1.43.1.20`)
    }
    get lesson43Radio21(){
        return $(`~radio_action_mindzone.1.43.1.21`)
    }
    get lesson43Radio22(){
        return $(`~radio_action_mindzone.1.43.1.22`)
    }
    get lesson43Radio23(){
        return $(`~radio_action_mindzone.1.43.1.23`)
    }
    get lesson43Radio24(){
        return $(`~radio_action_mindzone.1.43.1.24`)
    }
    get lesson43Radio25(){
        return $(`~radio_action_mindzone.1.43.1.25`)
    }
    get lesson43Radio26(){
        return $(`~radio_action_mindzone.1.43.1.26`)
    }
    get lesson43Radio27(){
        return $(`~radio_action_mindzone.1.43.1.27`)
    }
    get lesson43Radio28(){
        return $(`~radio_action_mindzone.1.43.1.28`)
    }
    get lesson43Radio29(){
        return $(`~radio_action_mindzone.1.43.1.29`)
    }
    get lesson43Radio30(){
        return $(`~radio_action_mindzone.1.43.1.30`)
    }

    get lesson43Radio31(){
        return $(`~radio_action_mindzone.1.43.1.31`)
    }
    get lesson43Radio32(){
        return $(`~radio_action_mindzone.1.43.1.32`)
    }
    get lesson44(){
        return $(`~Now let's think about behaviours. There are two kinds of responses or behaviours that are important:\nHow our body is responding (e.g. racing heart, sweating)\nWhat we choose to do.\nWe don't have direct control over how our body responds. But, what we choose to do and think can affect both our feelings. And both affect how our body responds.`)
    }
    get page44(){
        return $('~44 / 56')
    }
    get lesson45(){
        return $(`~If we feel anxious or our mood is low, there are some common behaviours that can make things worse.\nFor example:\nSome people stop doing things that they usually enjoy.\nThey may avoid people or events.\nThey may not do activities give them pleasure, are fun, or a sense of accomplishment.\nWe saw that in Matt and Susan's stories.`)
    }
    get page45(){
        return $('~45 / 56')
    }
    get lesson46(){
        return $(`~Physical activity deserves some special mention.\nWhen people experience low mood/anxiety they often have low energy and actually move less. Or, are more restless or fidgety. But research has shown that regular physical activity is important for managing low mood/anxiety.\nThe reason? Physical activity has a direct impact on your brain, increasing "feel good" hormones like endorphins that improve our mood.`)
    }
    get page46(){
        return $('~46 / 56')
    }
    get lesson47(){
        return $(`~The recommended amount of physical activity for all Canadian adults is 150 minutes per week. That is about 30 minutes per day, 5/7 days of the week.\nThe physical activity that is recommended is mild to moderate in intensity. A good activity that fits is walking.\nIf you are inactive it is best to check with your doctor about starting something new. It is also important to start slow and work up. For someone who has not been walking regularly, a good target is 10-15 minutes a day for a week or two. Then, increase the activity by 5 minutes every two weeks until 30 minutes is reached.`)
    }
    get page47(){
        return $('~47 / 56')
    }
    get lesson48(){
        return $(`~Always let your body guide you - if you feel pain something is wrong.\nOn the other hand, pushing yourself a little can be good for you (and your mood!) as long as your doctor says it is OK.`)
    }
    get page48(){
        return $('~48 / 56')
    }
    get lesson49(){
        return $(`~Another area of research that is important to mood has been called "happiness research."\nThe research is more involved than what we present here. But, a core piece is that we are "programmed" to pay attention to negative events in our lives. This was very important for our ancestors (think WAY back!) when learning about danger kept people alive longer.\nIf we have had negative experiences in our lives, we may have learned to pay too much attention to the negative and not enough to the positive. This can have big effects on mood and anxiety.`)
    }
    get page49(){
        return $('~49 / 56')
    }
    get lesson50(){
        return $(`~Fortunately, with time and practice, we can correct this focus on the negative. The research suggests that we allow our attention to linger on simple pleasurable things, even for a few seconds longer than usual. Over time, we can gradually become more aware of the good things in life.`)
    }
    get page50(){
        return $('~50 / 56')
    }
    get lesson51(){
        return $(`~If you have a chance to see it, there is a wonderful PBS documentary "Happy." It highlights the current research in this area. We've inserted a link to the trailer on YouTube.`)
    }
    get page51(){
        return $('~51 / 56')
    } 
    get lesson52(){
        return $(`~In Lesson One we reviewed low mood, depression and anxiety. We also reviewed the symptoms of each and how our behaviour and thinking has an effect on how we feel. One behaviour that affects our mood is physical activity. Another is making a deliberate effort to focus on brief moments of pleasure or enjoyment.\nLet's review the key points:\nAnxiety is a normal and healthy response to situations that cause fear . Chronic anxiety, high levels over a long time, can have negative effects on physical and mental wellbeing.\n1.`)
    }
    get page52(){
        return $('~52 / 56')
    }
    get lesson53(){
        return $(`~Depression, or low mood, is a feeling of sadness and lack of enjoyment in life. Sometimes, instead of sadness, someone may feel more angry or irritable than sad. Feeling sad is a normal response to change and loss. "Major" depression is a medical illness that is more severe and longer lasting than depression or low mood.\n2.`)
    }
    get page53(){
        return $('~53 / 56')
    }
    get lesson54(){
        return $(`~There are two basic approaches to treating anxiety and depression:\n3.\nMedication - effective for people with major depression. If this is a treatment you would like to discuss further, talk to your family doctor. He/She can help you determine if this would be helpful for you.\nSkills training - core skills of this course that research has proven are helpful for low mood and anxiety.`)
    }
    get page54(){
        return $('~54 / 56')
    }
    get lesson55(){
        return $(`~Anxiety is the most common mental health concern in Canada, affecting 1 out of 4 in their lifetime. Depression affects more than 1 out of 10 Canadians.\n4.\nAnxiety and depression are caused by a combination of things. Some we cannot change and some we can. Those we can work on include:\n5.\nHow we respond to low mood/ anxiety\nHow well we tolerate emotions and uncertainty`)
    }
    get page55(){
        return $('~55 / 56')
    }
    get lesson56(){
        return $(`~Symptoms of anxiety and depression show up in our emotions, thoughts, and behaviours.\n6.\nWhat we do (behaviour) and how we think (thoughts) has an effect on how we feel (emotions). They are connected. We can learn to identify and change our behaviours and thoughts.\n7.\nPhysical activity has a direct impact on "feel good" hormones that improve our mood.\n8.\nLearning to pay attention to moments of pleasure can have positive effects on our sense of wellbeing and happiness.\n9.\nCongratulations! You have finished the Lesson 1 Course content.`)
    }
    get page56(){
        return $('~56 / 56')
    }
    get lessontwopage(){
        return $(`~Lesson 2: Behavioural Strategies for Anxiety and Low Mood`)
    }
    get lessontworeivew(){
        return $(`(//android.view.View[@content-desc="REVIEW"])[2]`)
    }
    get lessontwo1(){
        return $(`~Welcome to Lesson 2 of the Mind Zone Course!\nLesson 1 provided you with some information about how behaviour is connected to feelings, emotions, and overall mood. We hope the homework elements helped you to think about your own emotions on a day-to-day basis.\nYou've also had an opportunity to set some personal goals, including some goals about physical activity.`)
    }
    get lessontowval(){
        return $(`//android.view.View[@resource-id="lesson 2: behavioural strategies for anxiety and low mood_text"]`)
    }
    
    get lessontwo2(){
        return $('~Let`s check in with Matt and Susan')
    }
    get lessontwo3(){
        return $('~Susan')
    }
    get lessontwo4(){
        return $(`~In Lesson 2, we continue to focus on the relationship between behaviours and mood.\nThere are several kinds of activity that affect mood. Last week we talked about physical activity. Other kinds of activities include:\nAchievement oriented activities. These are activities that give us a sense of satisfaction or mastery\nSocial activities\nHobbies\nAttention restoration activities (nature, music, daylight, time "unplugged")\nRelaxation/meditation\nLet's talk about each of these.`)
    }
    get lessontwo5(){
        return $(`~Achievement oriented activities are those that often require skill and are productive in some way. We will focus on "work" as one example, though it is not the only one.\nWhen we feel well, we work with energy. We feel good about what we have done and this contributes to feeling good about ourselves. We experience a sense of satisfaction or mastery.`)
    }
    get lessontwo6(){
        return $(`~Take a moment to think about a time when you were performing a skill well.\nBring it to mind as fully as you can:\nWhen was it?\nWhere were you?\nHow did it feel to you?\nSometimes there is recognition from other people that goes with our successes - perhaps this was the case for you.`)
    }
    get lessontwo7(){
        return $(`~Hobbies are another activity that can contribute to achievement or sense of mastery.\nThings like...\nSports\nThe arts (music, dance, painting)\nGardening\nWoodworking\nand many others\nExperiencing a sense of achievement in our lives is important to good mental health. Hobbies can provide us with a sense of self-esteem and pleasure. They can be fun, playful, or spontaneous which add to our sense of wellbeing.`)
    }
    get lessontwo8(){
        return $(`~Social activities are all those things that we do with family, friends, and our community.\nPeople who have strong social ties, and spend time with others regularly, generally are healthier, both physically and mentally.`)
    }
    get lessontwo9(){
        return $(`~The activities we engage in, or those that we avoid, have big impacts on our mood. In fact, our behaviours are one area that we can target for change when mood is a problem. When people are struggling with low mood or anxiety, they may avoid activities that previously added enjoyment to their lives.\nThis becomes a vicious circle - the less we engage in enjoyable activities, the worse we feel.`)
    }
    get lessontwo10(){
        return $(`~Looking at it, I can see how disconnected I've been. Last weekend would be a perfect example. I usually look forward to getting together with my college buddies.\nWe all have busy lives and some of us now live in different cities. Every year we make a point of getting together.\nThis year is the first time I've missed and it's tearing me up now. I just couldn't face them. I could hear the jokes about how tired I look and the questions about the new job and the baby.`)
    }
    get lessontwo11(){
        return $(`~I didn't want to have to tell them I'm struggling at my job; I feel like a total fake.\nAnd the baby? I'm not sure I know how to be a Dad. I haven't wanted to talk to anybody, even Sarah about that one.\nIt's odd for me to think how much I have cut myself off from everyone over the past few months. Just, bit by bit and I didn't even realize I was doing it.`)
    }
    get lessontwo13(){
        return $(`~I worry about how stressed my husband is too. I try to be supportive. But I worry about him losing his job and so I avoid asking him about work. I did this with friends too - worried I might have an anxiety attack, so I just didn't make plans to go out. I could see that all the avoidance was not helping. In fact, it seems to be making things worse.`)
    }
    get lessontwo14(){
        return $(`~Are Matt and Susan's story different than yours?\nEveryone is unique in some ways, but perhaps you can relate to decreased activities in some areas of your life or avoiding some things?\nIn addition to those activities we described as helpful to mood, there are others that you may not have thought about.\nTwo of these are:\nAttention restoration (nature, daylight, time "unplugged")\n1.\nAttention training (relaxation or meditation)\n2.`)
    }
    get lessontwo15(){
        return $(`~Attention can be directed and focused, like when we are concentrating on something. It can also be more undirected or aimless, like when we are gazing at clouds, a sunset or listening to a babbling brook.\nWhen people are fatigued by concentrating or have difficulty with concentration, research suggests that periods of undirected attention restores the ability to concentrate, hence the term attention restoration.`)
    }
    get lessontwo16(){
        return $(`~People who are troubled by mood can benefit from incorporating periods of attention restoration into their day-to-day lives.\nTypically, this involves being in natural environments - for example:\nwalking in the woods\nbeing at the beach\nlistening to birds\nHowever, even looking at pictures of nature or listening to audio­ recordings of nature can be helpful, as long as we are not multi­ tasking when we do this!`)
    }
    get lessontwo17(){
        return $(`~Another element of attention that we can learn is focusing on the here and now. Many people spend a lot of time with their attention either on the future or on the past.\nBeing future focused can include thinking about hopes and dreams, but when bothered by mood it more often involves worrying about future negative possibilities.\nPast thinking can be helpful for learning, like reviewing mistakes. But as with future thinking, when one is troubled by mood it more often involves regrets and self-recriminations (beating up on yourself).`)
    }
    get lessontwo18(){
        return $(`~There are two types of attention exercises that we suggest for this week:\nFocusing on the activity at hand, in the moment. Being in the present, or the now, is another way of saying this\n1.\nMeditation or relaxation\n2.`)
    }
    get lessontwo19(){
        return $(`~We can train our mind to focus on what we are doing in the present moment as a way of managing worry or unhelpful thinking.\nFocusing on the present moment requires that we tune into our awareness, notice when we are thinking is in the past or future, and bring our attention to the present.\nThis requires repetition as minds always wander!`)
    }
    get lessontwo20(){
        return $(`~Think about some of the activities that you do every day that are done automatically, that is without thought.\nFor example:\npreparing or eating food\nwashing dishes\nhaving a shower\nwalking somewhere familiar\nEach of these is an opportunity for attention training.\nTo practice this element, you will need to choose one or two daily activities. When you are doing those, there are three steps:`)
    }
    get lessontwo21(){
        return $(`~Step 1: Direct your attention to the task and your senses. Experiencing your senses with awareness will help you to attend to the task.\nNotice:\nTouch - what can you feel as you do the task? Is it smooth, rough, warm, or cool - or something else?\na.\nSmell - what can you smell? How many odours are there? Do the odours change?\nb.\nHear - what sounds are associated with the task?\nc.\nSee - what can you see? Notice the colours, shapes, and textures. Look at them as though they are new to you.\nd.`)
    }
    get lessontwo22(){
        return $(`~Step 2: Notice when you are no longer thinking about what you are doing and gently bring your mind back to your senses. You will need to do this many times, just like exercising a muscle.\nStep 3: Be gentle with yourself. The directed attention training is likely a new skill that takes practice. It will not remove your worries or low mood, but will over time allow you to let those be, while you attend to other things.`)
    }
    get lessontwo23(){
        return $(`~Remember that the wandering mind is not a mistake or a failure. When your mind wanders it is like everyone else's!\nAttention training is designed to help you:\nRecognize what your mind is doing, without judging or criticizing.\n1.\nPausing to name what is happening (e.g. future, past, thinking).\n2.\nLet go of thinking.\n3.\nBring your attention back.\n4.\nHere is a 5-minute guided exercise for focusing on the present moment. You can also access this recording in the Soothe Zone of the course site.\nLISTEN TO BREATH MEDITATION`)
    }
    get lessontwo24(){
        return $(`~Another activity that research has shown to be very helpful for mood is relaxation. There are many ways to engage in relaxation. Think for a moment about the things you find relaxing.\nThese might be things like:\nreading a book\ntaking a walk\nwatching a movie\npreparing food`)
    }
    get lessontwo25(){
        return $(`~While these can be helpful, here we are talking about specific relaxation activities.\nThings like:\ndeep breathing\nmeditation\nprogressive muscle relaxation\nWe will talk about each of these. One of them may appeal to you more than the others.`)
    }
    get lessontwo26(){
        return $(`~When we feel stressed or anxious, typically our body tenses up and releases stress hormones (the fight or flight response we talked about in Lesson 1). One of the things these hormones do is increase our breathing rate. Fortunately, our breath is something that we can influence.\nDeliberately slowing our breathing can counteract this fight or flight effect and decrease stress. Slow breathing also communicates to our body that everything is OK and lowers the release of stress hormones.`)
    }
    get lessontwo27(){
        return $(`~A deep breathing exercise has 4 steps:\nTake 3 minutes and sit or lie quietly. Tune into what you are feeling in your body and mind.\n1.\nPlace one hand on your chest and one on your abdomen. Focus on the physical sensation of air moving in, raising your abdomen like a balloon, and then allowing it to deflate as air moves out.\n2.\nBreath in to a count of 4, pause and breath out to a count of 4.\n3.\nContinue breathing slowly for 3 minutes.\n4.\nIf you wish to experiment with paced breathing, there are many mobile applications that vary the pace. One is "Breath Ball".`)
    }
    get lessontwo28(){
        return $(`~There are many forms of meditation and all of them are likely helpful. Here, we focus on a particular meditation called mindfuIness.\nMindfulness is simply defined as focusing, without judgement on the present moment and with purpose.\nLots of people tell us that they cannot meditate because their mind wanders too much or they are restless. As you have learned from the discussion on attention training, minds do wander!\nMindfulness is not a blank mind, but rather consists of developing awareness of what the mind is doing and very gently directing it to the present moment.`)
    }
    get lessontwo29(){
        return $(`~A common way of focusing attention on the present moment is to focus on breath.\nWhile this is similar to the deep breathing exercise, there are some important differences. There are some simple meditation exercises provided in the resources for this course, which can be found Soothe Zone of the course. But we will provide you with some written directions for a brief sitting meditation below.`)
    }
    get lessontwo30(){
        return $(`~First, sit in a comfortable position with your feet on the floor and your back straight but not rigid.\n1.\nLet your eyes rest a little lower than straight ahead and your gaze soften. Some people prefer to sit cross-legged on the floor or on a cushion.\n2.\nNotice the physical sensations you can feel where the chair or floor touches your legs and bottom. Spend a moment or two noticing these sensations.\n3.\nNow turn your attention to the physical sensations of your breath moving into and out of your abdomen. There is no need to change your breathing in any way. Simply notice your breath moving.\n4.`)
    }
    get lessontwo31(){
        return $(`~Sooner or later your mind will wander. When you notice that your mind has wandered, simply bring it back to your breath.\n5.\nBe very gentle with yourself. The wandering and bringing back to breath is the exercise, not perfect attention to breath. You may want to label this wandering as "thinking" and then gently refocus attention on physical sensations.\nAs best you can, be kind to yourself and patient with the repeated wandering of your mind.\nContinue for 5 or 10 minutes.`)
    }
    get lessontwo32(){
        return $(`~The third type of directed relaxation is called Progressive Muscle Relaxation.\nSome people who are very restless may prefer this approach to meditation. The exercise involves repeated tensing and releasing of muscle groups from the head to the toes.\nFind a comfortable spot, either sitting or lying, and 10 minutes to do the exercise.\n1.\nBegin with your face and tense all the muscles for a count of 3 and then release for a count of 3. Repeat once or twice.\n2.\nMove to the next muscle group and tense and release those muscles.\n3.`)
    }
    get lessontwo33(){
        return $(`~Progress through all the major muscle groups: shoulder, back, chest, upper and lower arms, buttocks, upper and lower legs and feet. Hold each muscle group for a count of 3, release for 3 and repeat 2-3 times for each muscle group.\n4.`)
    }
    get lessontwo34(){
        return $(`~A word about sleep\nSleep is one activity that is often affected by mood. With low mood we may sleep too much or have difficulty staying asleep. With anxiety, often people have difficulty falling asleep, or going back to sleep after waking up during the night. Poor sleep also contributes to depression.\nThere are a number of strategies that can help.`)
    }
    get lessontwo35(){
        return $(`~First, recognize that sleep is a habit. Good habits maintain good sleep, while bad habits maintain poor sleep. If we have gotten into poor sleep habits, changing these can take time and patience.\nThere are a few key things to think about in supporting good sleep.\nIf you don't have one, develop a pre-sleep routine. Prepare for sleep about one hour before you want to go to sleep. Try to do the same thing each night, at the same time. Do something relaxing that settles you and try to avoid screens (TV, computers, laptops and e-readers).\n1.`)
    }
    get lessontwo36(){
        return $(`~Go to bed and get up at the same time, every night, weekends included, regardless of how well you have slept. Using the same time allows the body to train for sleep.\n2.\nPay attention to how much caffeine and alcohol you drink. Too much alcohol may put you to sleep but typically you will awaken after a few hours and have trouble going back to sleep. In addition, alcohol affects sleep stages so that you do not get as much benefit from sleep.\n3.\nReserve bed for sleep and sex. If you begin to associate bed with other activities (watching TV, reading, work) you train yourself to not sleep when in bed.\n4.`)
    }
    get lessontwo37(){
        return $(`~Consider your sleep environment.\nIs it dark enough? \nLight can be very disruptive to melatonin production, which aids sleep.\nIs it cool enough?\nTypically, our bodies cool as we go to sleep but body temperature naturally rises toward morning and is one thing that wakes us up. If you are too warm at night, you will wake.\nIs it quiet enough?`)
    }
    get lessontwo38(){
        return $(`~We have introduced a lot of important information. Let's review the key points:\nResearch tells us that there is a strong relationship between our behaviour and our mood. The kinds of activities that are important include:\n1.\nAchievement oriented activities\nSocial activities\nHobbies\nAttention restoration (nature, music, daylight, time "unplugged")\nRelaxation/meditation`)
    }
    get lessontwo39(){
        return $(`~When we avoid certain activities to control strong emotions, the emotions we are trying to avoid actually increase over time.\n2.\nRelaxation and meditation can decrease our body's fight or flight response and stress.\n3.\nSleep is often affected by mood. With low mood or anxiety, we may sleep too much, have trouble staying asleep, or going back to sleep after waking.\n4.\nSleep is a habit. There are a few key things to support good sleep, one of which is to develop a pre-sleep routine.\n5.\nCongratulations! You have finished the Lesson 2 Course content.`)
    }
   get pagelessontow39(){
    return $(`~39 / 39`)
   }
   get pagelessontow38(){
    return $(`~38 / 39`)
   }
   get pagelessontow37(){
    return $(`~37 / 39`)
   }
   get pagelessontow36(){
    return $(`~36 / 39`)
   }
   get pagelessontow35(){
    return $(`~35 / 39`)
   }
   get pagelessontow34(){
    return $(`~34 / 39`)
   }
   get pagelessontow33(){
    return $(`~33 / 39`)
   }
   get pagelessontow32(){
    return $(`~32 / 39`)
   }
   get pagelessontow31(){
    return $(`~31 / 39`)
   }
   get pagelessontow30(){
    return $(`~30 / 39`)
   }
   get pagelessontow29(){
    return $(`~29 / 39`)
   }
   get pagelessontow28(){
    return $(`~28 / 39`)
   }
   get pagelessontow27(){
    return $(`~27 / 39`)
   }
   get pagelessontow26(){
    return $(`~26 / 39`)
   }
   get pagelessontow25(){
    return $(`~25 / 39`)
   }
   get pagelessontow24(){
    return $(`~24 / 39`)
   }
   get pagelessontow23(){
    return $(`~23 / 39`)
   }
   get pagelessontow22(){
    return $(`~22 / 39`)
   }
   get pagelessontow21(){
    return $(`~21 / 39`)
   }
   get pagelessontow20(){
    return $(`~20 / 39`)
   }
   get pagelessontow19(){
    return $(`~19 / 39`)
   }
   get pagelessontow18(){
    return $(`~18 / 39`)
   }
   get pagelessontow17(){
    return $(`~17 / 39`)
   }

   get pagelessontow16(){
    return $(`~16 / 39`)
   }

   get pagelessontow15(){
    return $(`~15 / 39`)
   }
   get pagelessontow14(){
    return $(`~14 / 39`)
   }
   get pagelessontow13(){
    return $(`~13 / 39`)
   }
   get pagelessontow12(){
    return $(`~12 / 39`)
   }
   get pagelessontow11(){
    return $(`~11 / 39`)
   }
   get pagelessontow10(){
    return $(`~10 / 39`)
   }
   get pagelessontow9(){
    return $(`~9 / 39`)
   }
   get pagelessontow8(){
    return $(`~8 / 39`)
   }
   get pagelessontow7(){
    return $(`~7 / 39`)
   }
   get pagelessontow6(){
    return $(`~6 / 39`)
   }
   get pagelessontow5(){
    return $(`~5 / 39`)
   }
   get pagelessontow4(){
    return $(`~4 / 39`)
   }
   get pagelessontow3(){
    return $(`~3 / 39`)
   }
   get pagelessontow2(){
    return $(`~2 / 39`)
   }
   get pagelessontow1(){
    return $(`~1 / 39`)
   }
    get lessontowreview(){
    return $(`(//android.view.View[@content-desc="REVIEW"])[2]`)
    }
    get lessonThreeval(){
        return $(`//android.view.View[@resource-id="lesson 3: managing unpleasant feelings_text"]`)
        
    }
    get lessonThreereview(){
        return $(`(//android.view.View[@content-desc="homework_button"])[3]/android.widget.Button`)
        }
    get lessonThree1(){
        return $(`~Welcome to Lesson 3 of the Mind Zone Course.\nLast week you worked on feelings and behaviour. Are you noticing the connections between these? Have you found some helpful activities? If you use the journal, you might want to write about what you learned.\nYou may be noticing some small signs of improvement too. By this point, some people are. These may be things like moments of pleasure or calm that you did not notice before. Continue to watch for these small changes.`)
    }
    get pagelessonThree1(){
        return $(`~1 / 42`)
       }
    get pagelessonThree2(){
        return $(`~2 / 42`)
       }
    get lessonThree2(){
        return $(`~I chose to focus on the progressive muscle relaxation as I've never done anything like that before.\nI used the app 3 times last week. I had a difficult time sticking with it some nights but I think it is helping. I seem to be able to settle down to sleep better rather than my typical tossing, turning, punch pillow, and repeat.`)
    } 
    otpPage(index){
        return $(`~pinDigit${index}`)
    }
    get lessonThree3(){
        return $(`~I'm not sure I notice any other changes yet but I'm going to keep at it. I went to a spin class in the morning once. It worked well to meet my friend Tim there.\nThe class wasn't easy for sure but I felt better after. I liked going before work too. It seemed to set a different tone for the day. Better than rushing into work from the train with everyone else downtown.`)
    }
    get pagelessonThree3(){
        return $(`~3 / 42`)
       }
    get lessonThree4(){
        return $(`~I really noticed how much being alone and higher anxiety go together for me. This week, I did get together with friends. I didn't stay long but it was good to connect. I was a little anxious about it but not as much as I thought I would be.\nI tried being in the present with doing the dishes too. It wasn't easy but I am starting to see how much time I spend thinking about the future and things that might happen. That's part of the source of my anxiety!`)
    }
    get pagelessonThree4(){
        return $(`~4 / 42`)
       }
    get lessonThree5(){
        return $(`~I haven't tried any of the other meditation or relaxation exercises but I found a deep breathing app that I am going to try.\nI am starting to feel a bit better. Maybe because I am starting to think some of these things I am learning might help me.`)
    }
    get pagelessonThree5(){
        return $(`~5 / 42`)
       } 
    get lessonThree6(){
        return $(`~In Lesson 3 we look at uncomfortable feelings. These are feelings that are distressing or upsetting and include 3 main kinds of emotions:\nFear\nAnger\nSadness\nHere are some examples of other words for each of the main uncomfortable feelings. Of course there are many more synonyms.`)
    }

    get pagelessonThree6(){
        return $(`~6 / 42`)
       }   
    get lessonThree7(){
        return $(`~Fear`)
    }

    get pagelessonThree7(){
        return $(`~7 / 42`)
       }  
    get lessonThree8(){
        return $(`~Emotions are a natural part of being human and range from the very pleasant to the very unpleasant.\nEmotions wax and wane over time. Some we generally like because they give us a sense of being comfortable, warm, and safe. Others leave us feeling uncomfortable, irritable, anxious, or scared.`)
    }

    get pagelessonThree8(){
        return $(`~8 / 42`)
       }  

    get lessonThree9(){
        return $(`~Unpleasant emotions can result in feeling physically:\naroused\nalert\nor hypervigilant\nThese are all sources of stress or tension. Physical sensations of arousal can include such things as:\nfatigue\nheaviness\nshortness of breath\na sick feeling in your stomach\nmuscle tension jaw, neck, shoulders\nsometimes the tension results in headaches\nLonger term, chronic stress is bad for our health - both mental and physical.`)
    }

    get pagelessonThree9(){
        return $(`~9 / 42`)
       } 

    get lessonThree10(){
        return $(`~No one likes unpleasant feelings but most people are able to accept these as an inevitable part of life. They are able to manage the distress that emotions create in helpful ways.\nOthers however have very strong reactions to unpleasant emotions. We call this distress intolerance.`)
    }

    get pagelessonThree10(){
        return $(`~10 / 42`)
       }
    get lessonThree11(){
        return $(`~People who are distress intolerant often fight against, or try to avoid such feelings.\nRather than decreasing the distress though, these unhelpful ways often increase the unpleasant feelings.\nAvoiding unpleasant emotions is like trying to hold a very large beach ball under water... or hiding your head in the sand. Neither works for long!`)
    }

    get pagelessonThree11(){
        return $(`~11 / 42`)
       }

    get lessonThree12(){
        return $(`~No one knows why some people avoid unpleasant feelings while others do not. Things like environmental factors (life experiences and learning), and biological factors (genetics or our neurological structure) are the likely causes.\nGrowing up, some people learned that unpleasant feelings are not acceptable. For example, not being allowed to cry or get angry. If this was the case for you, you may not have learned how to manage these feelings.\nThe good news is... managing unpleasant feelings can be learned!`)
    }

    get pagelessonThree12(){
        return $(`~12 / 42`)
       }

    get lessonThree13(){
        return $(`~Do you think you are someone who is distress intolerant? Think about how strongly you agree with the following statements:\nFeeling distressed or upset is unbearable to me.\nWhen I feel distressed or upset, all I can think about is how bad I feel.\nI can't handle feeling distressed or upset.\nThere's nothing worse than feeling distressed or upset.\nI'll do anything to avoid feeling distressed or upset.`)
    }
    get pagelessonThree13(){
        return $(`~13 / 42`)
       }

    get lessonThree14(){
        return $(`~My feelings of distress or being upset scare me.\nWhen I feel distressed or upset, I must do something about it immediately\nMy feelings of distress are so intense that they completely take over.\nPeople who are highly distress intolerant usually agree with a lot of these statements.\n*items from: Simons,J. S., & Gaher, R. M. (2005). The Distress Tolerance Scale: Development and validation of a self-report measure. Motivation and Emotion, 29(2), 83-102.`)
    }
    get pagelessonThree14(){
        return $(`~14 / 42`)
       }
    get lessonThree15(){
        return $(`~In contrast people who are better at tolerating unpleasant emotions are more likely to agree with statements like:\nI can tolerate being distressed or upset as well as most people.\nMy feelings of distress or being upset are just an acceptable part of life.\nFeelings don't last - they come and go.\nReflecting on what I am feeling often helps me to clarify what I am feeling so I can address the issue.`)
    }
    get pagelessonThree15(){
        return $(`~15 / 42`)
       }

    get lessonThree16(){
        return $(`~Managing distressing feelings is part of being "emotionally intelligent".\nTalking about my feelings often helps.\nEveryone experiences unpleasant emotions from time to time, or for periods of time.\nIt's important to recognize tolerating unpleasant emotions is a matter of degree.`)
    }
    get pagelessonThree16(){
        return $(`~16 / 42`)
    }
    get lessonThree17(){
        return $(`~Think of distress tolerance on a continuum, with extreme tolerance at one end and extreme intolerance at the other. The healthy balance is somewhere in the middle. Neither extreme is healthy.\nAfter all, unpleasant emotions help us to identify when something is wrong and needs attention.\nIf we never take action (because we are "tolerating" those emotions so well) then we may stay in an unhealthy situation or fail to make changes in our lives that could be helpful.`)
    }
    get pagelessonThree17(){
        return $(`~17 / 42`)
    }
    get lessonThree18(){
        return $(`~On the other hand, there is a range of potentially negative effects of being too intolerant of unpleasant emotions. Managing unpleasant emotions is all about finding a balance.`)
    }
    get pagelessonThree18(){
        return $(`~18 / 42`)
    }
    get lessonThree19(){
        return $(`~Avoiding or controlling unpleasant emotions can take many forms. Some common ones include:\nAvoiding situations that create unpleasant emotions\n1.\nExcessively seeking reassurance\n2.\nDistracting from or suppressing emotions\n3.\nWithdrawal\n4.\nLet's talk about each of these.`)
    }
    get pagelessonThree19(){
        return $(`~19 / 42`)
    }
    get lessonThree20(){
        return $(`~Avoiding situations that create unpleasant emotions.\nAvoiding situations is one way of managing unpleasant situations, including fear or anxiety. For example, if you feel anxious in social situations you may avoid gatherings, parties or other social events where you will need to interact with other people.\nOr, you may avoid certain conversations that make you sad or remind you of the past.\nOr avoid the possibility of failure, refusing to take a risk to apply for a job, go back to school, or learn a new skill.\nWe've seen some of these avoidance behaviours in Matt and Susan's stories.`)
    }
    get pagelessonThree20(){
        return $(`~20 / 42`)
    }
    get lessonThree21(){
        return $(`~Avoiding situations works in that you don't experience the unpleasant feelings. Avoiding is also a way of taking a break from these feelings.\nHowever, if we avoid a lot as the only way to manage, there may be negative effects. Avoidance can cause loneliness, feeling badly about yourself, or limit your success in life.`)
    }
    get pagelessonThree21(){
        return $(`~21 / 42`)
    }
    get lessonThree22(){
        return $(`~Excessively Seeking Reassurance\nAnother more indirect form of avoidance is excessively seeking reassurance.\nFor example, if the unpleasant emotion is fear about your health you may constantly check with your doctor or other health professional. Or, if you are feeling anxious about your performance at work, you may look to your manager or a colleague for frequent feedback on your work.\nWhile this may work for short periods of time, the unpleasant feeling will return. Then, you end up repeating the behaviour resulting in a vicious cycle.`)
    }
    get pagelessonThree22(){
        return $(`~22 / 42`)
    }
    get lessonThree23(){
        return $(`~Distracting From or Suppressing Emotions\nA third way of avoiding unpleasant emotions is to distract yourself or to suppress (bury) the emotion.\nDistraction can be helpful to a degree but if you always avoid the emotion through busyness and lots of frantic activity this can be exhausting! And it is not a long-lasting solution.\nAnother form of suppression or distraction is addictive behaviours - alcohol or drug abuse, and gambling.`)
    }
    get pagelessonThree23(){
        return $(`~23 / 42`)
    }
    get lessonThree24(){
        return $(`~Or, you may try to suppress your emotions using self-talk such as "stop it," pushing the feeling underground. Like a volcano, what gets held underground for too long can erupt with a great deal of pressure.\nFor example, people who find that conflict causes them anxiety can build resentment over time. It then can erupt in anger that can be destructive rather than constructive. That said, the "stop it" message (called thought stopping) can be helpful at times. It's all about balance.`)
    }
    get pagelessonThree24(){
        return $(`~24 / 42`)
    }
    get lessonThree25(){
        return $(`~The "stop it" message can be used as a container for thoughts or feelings for short periods of time. But using it to avoid a feeling that we never want to address won't work very well over the long term.`)
    }
    get pagelessonThree25(){
        return $(`~25 / 42`)
    }
    get lessonThree26(){
        return $(`~Withdrawal\nWithdrawal is a 4\nth\n way of avoiding feelings. People who struggle with low mood may withdraw (or numb) emotions, through excessive sleep, eating, or even drugs and alcohol. Or they may withdraw socially, avoiding time with family and friends.\nObviously this can have a negative effect on our life if these behaviours continue for long periods of time.`)
    }
    get pagelessonThree26(){
        return $(`~26 / 42`)
    }
    get lessonThree27(){
        return $(`~I guess avoiding my friends and Sarah has been a way to avoid having to face some tough emotions - and conversations!\nMakes sense I suppose. This work situation with my supervisor has taken me by surprise. I just can't seem to do anything right by this guy. The more I try, the more I'm afraid I look like I don't know what I'm doing.\nBecoming a parent is at the back of my mind too. My Dad was always away and when he came home we had to be on our best behaviour. I never remember having a conversation with him that didn't involve asking if my team won or if I aced that last test.`)
    }
    get pagelessonThree27(){
        return $(`~27 / 42`)
    } 
    get lessonThree28(){
        return $(`~It was kind of exhausting trying to keep up to his standards. But throw a ball around or actually talk to me about how I was doing. .. nah, that was never my Dad. We just didn't do that.\nSeems like my watching TV and sleeping all day on Sundays might be my way of avoiding those raw edges.`)
    }
    get pagelessonThree28(){
        return $(`~28 / 42`)
    }
    get lessonThree29(){
        return $(`~I could relate to the idea of avoiding my anxiety. I try to do that by not going out with friends or events, just to avoid feeling anxious. I do feel some relief when I refuse an invitation but in the longer run I just worry about what I didn't do.\nSeems like I worry too much about things that could happen and don't deal with other things.`)
    }
    get pagelessonThree29(){
        return $(`~29 / 42`)
    }
    get lessonThree30(){
        return $(`~The main message is...\nAvoiding unpleasant emotions doesn't work well. Plus, all that avoiding is exhausting! If we avoid too much it can affect how much we enjoy our life.\nThe good news is that facing unpleasant emotions is a skill that can be learned!`)
    }
    get pagelessonThree30(){
        return $(`~30 / 42`)
    }
    get lessonThree31(){
        return $(`~At the heart of unpleasant emotions is a paradox. The more we avoid, suppress, or numb unpleasant emotions, the more they continue, "hook" us or even increase.\nWhen we face our feelings, in the moment, they often become a much less powerful force in our life. Such emotions tend to decrease and soften when we face them.`)
    }
    get pagelessonThree31(){
        return $(`~31 / 42`)
    }
    get lessonThree32(){
        return $(`~There are 3 main steps in learning to face unpleasant emotions.\nChallenge the beliefs that we hold about unpleasant emotions.\n1.\nDevelop an ability to identify and name emotions.\n2.\nDevelop an ability to "dwell" with our emotions, calmly and with curiosity.\n3.\nWe will talk about beliefs first.`)
    }
    get pagelessonThree32(){
        return $(`~32 / 42`)
    }
    get lessonThree33(){
        return $(`~We all hold beliefs about distressing feelings. Some of these are helpful and some not so much. If you struggle with tolerating distressing feelings, it may be helpful to challenge the beliefs that you hold. Beliefs like:\nI can't cope with this.\nThese feelings are overwhelming; I'm going crazy.\nThis feeling is dangerous or unacceptable.\nIt will never end.\nI'm stupid or weak for having this feeling.\nYou may be able to add some more of your own.`)
    }
    get pagelessonThree33(){
        return $(`~33 / 42`)
    }
    get lessonThree34(){
        return $(`~I can see some of the beliefs I hold. I definitely think I am weak, that I just can't cut it - especially about work.`)
    }
    get pagelessonThree34(){
        return $(`~34 / 42`)
    }
    get lessonThree35(){
        return $(`~In contrast, people who manage unpleasant feelings well are more likely to believe.\nEmotions come and go, like the weather. They are helpful cues to what is important but they are not facts, or "the truth".\nEveryone has distressing emotions from time to time.\nDistressing emotions pass, particularly if we go with the flow of them. They wax and wane, like the moon or an ocean wave. Fighting them actually increases their power and intensity.\nI typically know how to manage strong emotions in productive ways.\nAll emotions, including distressing emotions, serve a purpose in our life.`)
    }
    get pagelessonThree35(){
        return $(`~35 / 42`)
    }
    get lessonThree36(){
        return $(`~Metaphors and similes can be helpful in seeing strong emotions in a different light. This can help us to stand back a little, see things a bit clearer, and make wiser and more helpful decisions about how to respond effectively.\nMetaphors are labels or images for something.\nAn example is: emotions are like ocean waves. Here an ocean wave is a metaphor for emotions.\nAnother example might be: Emotion is the bright colours of my day. Here "bright colours" is a metaphor for emotion.`)
    }
    get pagelessonThree36(){
        return $(`~36 / 42`)
    }
    get lessonThree37(){
        return $(`~Some examples of metaphors for managing strong emotions are:\nSurfing a wave - You can't control the power of the ocean but you can ride it. If you go with the flow of the wave it subsides pretty quickly.\nStrong emotions are like a turbulent brook or river, full of little whirlpools as it passes over rocks. A river can be observed from the river bank, without being submerged in the water.\nSkiing moguls - if we let our legs ride the bumps we can ski as though the moguls were clouds.`)
    }
    get pagelessonThree37(){
        return $(`~37 / 42`)
    }
    get lessonThree38(){
        return $(`~Similes compare two things by saying one is "like" or "as" the other.\nAn example simile: My emotions are like a boat on the ocean. Sometimes the sailing is smooth, sometimes the waves are rough and rocky.\nSometimes the sailing is smooth, sometimes the waves are rough and rocky.\nWe would like you to develop your own metaphor or simile for your emotions that will help you to see it a bit differently.\nADD YOUR METAPHOR/SIMILE`)
    }
    get pagelessonThree38(){
        return $(`~38 / 42`)
    }
    get lessonThree39(){
        return $(`~Remember: There is nothing wrong with feeling mad, sad, or fearful - it's how we respond to those emotions that makes a difference to our well-being.\nWe can avoid them or we can make our way through them to the other side. Avoiding them does not work in the long run.`)
    }
    get pagelessonThree39(){
        return $(`~39 / 42`)
    }
    get lessonThree40(){
        return $(`~We have introduced a lot of important information. Let's review the key points:\nIdentifying signs of improvement helps people feel better and encourages progress.\n1.\nEmotions are a natural part of being human and range from very pleasant to very unpleasant.\n2.\nUnpleasant emotions can result in physical sensations, stress or tension.\n3.\nDistress intolerance is a strong reaction to unpleasant emotions. These reactions can increase distress.\n4.`)
    }
    get pagelessonThree40(){
        return $(`~40 / 42`)
    }
    get lessonThree41(){
        return $(`~Distress intolerance comes from a combination of factors. These include things like life experience and learning, and biological factors, like genetics and how we are "wired".\n5.\nTolerating unpleasant emotions is a continuum and a healthy balance is somewhere in the middle. Neither extreme is healthy.\n6.\nAvoiding or controlling unpleasant emotions can take many forms:\n7.\nAvoiding situations\nExcessively seeking reassurance\nDistracting from or suppressing emotions\nWithdrawal`)
    }
    get pagelessonThree41(){
        return $(`~41 / 42`)
    }
    get lessonThree42(){
        return $(`~Facing unpleasant emotions is a skill that can be learned. There are three main steps:\n8.\nChallenge the beliefs that we hold about unpleasant emotions.\nDevelop an ability to identify and name emotions.\nDevelop an ability to dwell with our emotions.\nWe all hold beliefs about distressing feelings - some of these beliefs are helpful and some of them not.\n9.\nCongratulations! You have finished the Lesson 3 Course content.`)
    }
    get pagelessonThree42(){
        return $(`~42 / 42`)
    }
    get pagelessonsixval(){
        return $(`~Lesson 6: Challenging Thoughts`)
    }
    get pagelessonSix1(){
        return $(`~1 / 55`)
       }
    get lessonSix1(){
        return $(`~Little interest or pleasure in doing things`)
    } get lessonSix1page2(){
        return $(`~Feeling down, depressed, or hopeless`)
    }

    get lessonsix1Radio1(){
        return $(`~radio_action_mindzone.6.1.1.1`)
    }
    get lessonsix2Radio1(){
        return $(`~radio_action_mindzone.6.1.2.1`)
    }
    get lessonSix2page2(){
        return $(`~Feeling nervous, anxious, or on edge`)
    }
    get lessonsix3Radio1(){
        return $(`~radio_action_mindzone.6.1.3.1`)
    }

    get lessonThree12(){
        return $(`~No one knows why some people avoid unpleasant feelings while others do not. Things like environmental factors (life experiences and learning), and biological factors (genetics or our neurological structure) are the likely causes.\nGrowing up, some people learned that unpleasant feelings are not acceptable. For example, not being allowed to cry or get angry. If this was the case for you, you may not have learned how to manage these feelings.\nThe good news is... managing unpleasant feelings can be learned!`)
    }

    get pagelessonSix2(){
        return $(`~2 / 55`)
       }
       get pagelessonSix5(){
        return $(`~5 / 55`)
       } 
       get pagelessonSix6(){
        return $(`~6 / 55`)
       }
       get pagelessonSix7(){
        return $(`~7 / 55`)
       }
       get pagelessonSix8(){
        return $(`~8 / 55`)
       }
       get pagelessonSix9(){
        return $(`~9 / 55`)
       }
       get pagelessonSix10(){
        return $(`~10 / 55`)
       }
       
       get pagelessonSix11(){
        return $(`~11 / 55`)
       }
       get pagelessonSix12(){
        return $(`~12 / 55`)
       }
       get pagelessonSix13(){
        return $(`~13 / 55`)
       }
       get pagelessonSix14(){
        return $(`~14 / 55`)
       }
       get pagelessonSix15(){
        return $(`~15 / 55`)
       }
       get pagelessonSix16(){
        return $(`~16 / 55`)
       }
       get pagelessonSix17(){
        return $(`~17 / 55`)
       }
       get pagelessonSix18(){
        return $(`~18 / 55`)
       }
       get pagelessonSix19(){
        return $(`~19 / 55`)
       }
       get pagelessonSix20(){
        return $(`~20 / 55`)
       }
       get pagelessonSix21(){
        return $(`~21 / 55`)
       }
       get pagelessonSix22(){
        return $(`~22 / 55`)
       }
       get pagelessonSix23(){
        return $(`~23 / 55`)
       }
       get pagelessonSix24(){
        return $(`~24 / 55`)
       }
       get pagelessonSix25(){
        return $(`~25 / 55`)
       }
       get pagelessonSix26(){
        return $(`~26 / 55`)
       }
       get pagelessonSix27(){
        return $(`~27 / 55`)
       }
       get pagelessonSix28(){
        return $(`~28 / 55`)
       }
       get pagelessonSix29(){
        return $(`~29 / 55`)
       }
       get pagelessonSix30(){
        return $(`~30 / 55`)
       }

    get pagelessonSix3(){
        return $(`~3 / 55`)
       }
    get lessonsixpage3Radio1(){
        return $(`~radio_action_mindzone.6.3.1.1`)
    }
    get lessonsixpage3Radio2(){
        return $(`~radio_action_mindzone.6.3.1.2`)
    }
    get lessonsixpage3Radio3(){
        return $(`~radio_action_mindzone.6.3.1.3`)
    }
    get lessonsixpage3Radio4(){
        return $(`~radio_action_mindzone.6.3.1.4`)
    }
    get lessonsixpage3Radio5(){
        return $(`~radio_action_mindzone.6.3.1.5`)
    }
    get lessonsixpage3Radio6(){
        return $(`~radio_action_mindzone.6.3.1.6`)
    }
    get lessonsixpage3Radio7(){
        return $(`~radio_action_mindzone.6.3.1.7`)
    }
    get lessonsixpage3Radio8(){
        return $(`~radio_action_mindzone.6.3.1.8`)
    }
    get lessonsixpage3Radio9(){
        return $(`~radio_action_mindzone.6.3.1.9`)
    }
    get lessonsixpage3Radio10(){
        return $(`~radio_action_mindzone.6.3.1.10`)
    }
    get lessonSix4(){
        return $(`~I have to admit, I am starting to feel better. I guess the thing that I notice most is that I am sleeping a bit better and I'm not as grumpy - at least my wife is commenting on that.\nThe thing that has made the biggest difference is watching my activity. I've been trying to get together with friends once a week. It is not always easy to get myself there but usually I feel better and I forget about myself for a while.\nI am doing more physical activity as well. I've started going to the gym pretty regularly again.`)
    }  
    get pagelessonSix4(){
        return $(`~4 / 55`)
       }
       get pagelessonSix31(){
        return $(`~31 / 55`)
       }
       get pagelessonSix32(){
        return $(`~32 / 55`)
       }
       get pagelessonSix33(){
        return $(`~33 / 55`)
       }
       get pagelessonSix34(){
        return $(`~34 / 55`)
       }
       get pagelessonSix35(){
        return $(`~35 / 55`)
       }
       get pagelessonSix36(){
        return $(`~36 / 55`)
       }
       get pagelessonSix37(){
        return $(`~37 / 55`)
       }
       get pagelessonSix38(){
        return $(`~38 / 55`)
       }
       get pagelessonSix39(){
        return $(`~39 / 55`)
       }
       get pagelessonSix40(){
        return $(`~40 / 55`)
       }

       get lessonSix2(){
        return $(`~Welcome to Lesson 6! Last week we began looking at thoughts more carefully.\nHopefully you were able to capture some of your thinking and notice any unhelpful thinking patterns that you use often. What were these? Check off the ones you recognize on the next page.`)
    }
    get lessonSix5(){
        return $(`~I've also used a few of the meditation activities and the progressive muscle relaxation. I don't do it every day but a lot of days I do. I think that is helping me to sleep better.\nI can see that pushing myself to do things I know are good for me is the way to go.\nI am much more aware of what I am feeling too - I see it is connected to what I am doing. This last week I have been trying to pay attention to my thoughts. That is not easy and I'm not sure if it's going to be helpful but I'm game to keep going. I do notice a lot of the unhelpful thought patterns. I'm just not sure what to do about them but I guess that's next.`)
    }
    get lessonSix6(){
        return $(`~I am starting to feel better. I have really been working on my fear ladder. I'm pushing myself to do things that I have been avoiding more.\nI tried a few times to state my preferences with my husband and that was not too difficult.\nLast week I went to a movie with my husband. I know it doesn't make sense, but I had been feeling very anxious in crowded places. I like to know I can leave easily if get anxious. Leaving a movie theatre in the middle of the movie can be a little disruptive - at least it's dark!`)
    } 
    get lessonSix7(){
        return $(`~I did get anxious but found just using the deep breathing technique and trying to think good thoughts, like "this won't last," "I'll be OK in a minute," and "anxiety is not life-threatening," helped.`)
    } 
    get lessonSix8(){
        return $(`~This week we are going to address the things that Matt and Susan are wondering about and work on challenging unhelpful thoughts using a tool called a thought record.\nThe purpose of the thought record is to help you to develop more balanced, realistic thoughts.\nSome people equate this with "positive thinking." It's not the same. Positive thinking is usually not helpful, partly because it is not believable and partly because it does not address the negative well. "Balanced" thinking incorporates both.`)
    }  
    get lessonSix9(){
        return $(`~When we learn to develop realistic, balanced thinking, we take into consideration how an unhelpful thought can be both true and not true at the same time.\nWe take into account all of the facts. It's about learning to balance them, rather than focusing only on the negative side or only on the positive, as in "positive thinking."\nA well-developed realistic thought is one that is believable.`)
    } 
    get lessonSix10(){
        return $(`~Before we get into the thought record, there is one more piece that can be helpful to consider - what we believe to be true, particularly about ourselves.\nWe talked about beliefs in Lesson 3 when we looked at beliefs about distressing emotions.\nBeliefs are thoughts that are more than passing and are often something we hold over time. Like thoughts, however, beliefs may be unconscious. We cannot always say what we believe but beliefs come out in how we feel and behave.`)
    }
    get lessonSix11(){
        return $(`~While you may not always be able to state what you believe, you may recognize some of the common beliefs that can be a problem for people who struggle with anxiety and low mood.\nLet's review a few of them.`)
    }  
    get lessonSix12(){
        return $(`~I must be perfect in all that I do or I am a failure.\nHolding a belief about perfection means that one's performance is always measured against a value of 100% - 100% effort or 100% perfect in what one produces.\nNeedless to say, imagining that we can f unction consistently at 100% of our best is actually impossible. We are human and are managing competing demands constantly, with waxing and waning energies.\nSome days we may be completely brilliant in all that we do, but to imagine that can happen every day, with every project suggests someone who is more than human, i.e. superhuman.`)
    }
    get lessonSix13(){
        return $(`~lf we hold ourselves to super human standards we are likely to be stressed a lot, and often to experience ourselves as a failure. We probably get much less done and may have a lot of anxiety about letting things go. We may not be willing to try new things, for fear of failing.\n"Good enough" is not something a perfectionist finds easy to live with but not being able to live with good enough, a 70 or 80% effort for example, is likely to contribute to anxiety and low mood.\nTo challenge this belief, try doing something that is "good enough" and see how it goes. Expecting perfection can also result in being judgmental or critical of other people and their efforts.`)
    }
    get lessonSix14(){
        return $(`~I must always be at my best.\nRelated to perfectionism is the belief that I must always be at my best. If you hold this belief, it means you are never allowed to have bad days - days when you are a bit more tired, struggling with a myriad of demands, or worried about something.\nIf you hold this belief you are likely often seeing yourself as "less than" or "not good enough." You may also be critical of others when they do not perform at their peak.\nTo challenge this belief a bit, consider that everyone has good and bad days (and everything in between).`)
    }     
    get lessonSix15(){
        return $(`~Doing vs being as the source of value.\nMany of us have learned that what we produce is the key measure of our value as a human being.\nWhen we are aimless, playing, or just doing nothing we may feel unproductive and hold a judgement about that. It may be difficult for us to take time for restoration (such as being in nature) when we need it or to rest enough when we are sick, for example.`)
    }
    get lessonSix16(){
        return $(`~To challenge this belief, consider a baby or a frail elderly person. If any of those people are unable to "produce" much in the way of contributions to society, do you believe they have less value as human beings?\nWhat alternate belief supports the idea that simply being has value? Think of an alternate belief statement you might make that would respect that idea.\nFor example: I have value all the time, even when I am sleeping or ill.`)
    }
    get lessonSix17(){
        return $(`~If someone disagrees with me, I must be wrong.\nSome of us have difficulty holding onto our own ideas and opinions if others disagree. We either abandon our own view quickly or avoid expressing it in the first place.\nDisagreement is inevitable. Every situation has multiple viewpoints from which one might see the situation. Disagreeing is a way of uncovering or revealing the different facets of a situation so that everyone can see it better. It may not be comfortable initially, but it is an essential skill in everyday life.`)
    }
    get lessonSix18(){
        return $(`~If disagreement is not acceptable, we are likely to feel badly about ourselves and our own thinking.\nTo challenge this belief, consider the idea that all facets of a situation are important to draw out, in order for everyone to understand it better.\nThat said, disagreement is a part of having an opinion. Not allowing oneself to hold an opinion is a recipe for low self-esteem, anxiety, and low mood.`)
    }
    get lessonSix19(){
        return $(`~I must be liked by everyone. Being liked requires giving.\nDo you have trouble saying no? Are you often feeling irritable, resentful, or comment often about how much you are doing for other people? If so, underneath all that doing may be an excessive need to be liked - by everyone!\nThe truth is, some people will like us and some will not. It's inevitable and says just as much about the other person as it does about us.`)
    }
    get lessonSix20(){
        return $(`~Emotions like anger are bad and should not be expressed (or felt).\nSome emotions are more or less acceptable to some people. Anger is a common one that sometimes people reject as an "acceptable" emotion. Sadness and grief are others.\nRejecting an emotion requires that we suppress it, or push it away. But suppressing one emotion often means that we blunt other emotions. This includes those that we might like better, such as happiness and joy.`)
    }
    get lessonSix21(){
        return $(`~A better approach is to consider that all emotions are a part of life. Emotions are energy that wax and wane, come and go, like an ocean wave or like the weather.\nIf we can simply be curious and observing of our emotions, breathing quietly through the more difficult ones, they often come and go easily on their own.`)
    }
    get lessonSix22(){
        return $(`~If I try hard enough, I can change people who are close to me.\nRelated to this belief is the idea that others must be like me, and agree with me, a belief that was discussed previously. In fact, the more we try to change someone, the more they may resist that change. Learning to accept people as they are is a surer pathway to success, peace, and good mental health.\nIn fact, no one can change another person - we only have the power to change ourselves.\nA challenge to this belief might be something like: Differences in people are part of the spice of life. Challenging at times, but more interesting than everyone being the same.`)
    }
    get lessonSix23(){
        return $(`~I will be happy in the future once X, Y, or Z changes.\nThis belief lies in the common habit of living in the future and the past rather than the present. Most of the time, we are as happy now (or at least have the potential to be) as we will ever be in the future.\nSometimes we have difficult challenges to deal with but life is full of challenges. They change in nature and intensity but never go away. Happiness lies in the present, just as things are.\nSome of the meditation exercises offered in this course will help you to live in the present moment, with curiosity and acceptance.`)
    }
    get lessonSix24(){
        return $(`~I need someone to look after me (or I don't need anyone to look after me).\nBoth of these are extremes. In fact, human beings are happiest and healthiest, physically and mentally, in relationships with others.\nA lot of research highlights the benefits of good quality social support. Social support is having family and friends on whom one can count for practical and emotional support. These are the people with whom you can have fun, celebrate, and lean on when you're feeling down. That works both ways, requiring a give and take.`)
    }
    get lessonSix25(){
        return $(`~A more balanced or realistic belief might be: As a human being, I will do best in relationships. I need and am needed by others.`)
    }
    get lessonSix26(){
        return $(`~It's easier to avoid conflict or other upsetting situations than to face them.\nEarlier in the course we reviewed some of the problems with avoidance. In particular, avoiding difficult situations helps in the short term but in the longer term can make the situation worse.\nGenerally, it is better to face difficult situations, using some of the strategies that you have learned so far — things like breathing, meditation, problem solving, and working on a fear ladder.`)
    }
    get lessonSix27(){
        return $(`~Here is the list of beliefs again - check off any that are close to something you believe.`)
    }
    get lessonsixpage27Radio1(){
        return $(`~radio_action_mindzone.6.27.1.1`)
    }
    get lessonsixpage27Radio2(){
        return $(`~radio_action_mindzone.6.27.1.2`)
    }
    get lessonsixpage27Radio3(){
        return $(`~radio_action_mindzone.6.27.1.3`)
    }
    get lessonsixpage27Radio4(){
        return $(`~radio_action_mindzone.6.27.1.4`)
    }
    get lessonSix28(){
        return $(`~And some others —check off any that are close to something you believe.`)
    }
    get lessonsixpage28Radio1(){
        return $(`~radio_action_mindzone.6.28.1.1`)
    }
    get lessonsixpage28Radio2(){
        return $(`~radio_action_mindzone.6.28.1.2`)
    }
    get lessonsixpage28Radio3(){
        return $(`~radio_action_mindzone.6.28.1.3`)
    }
    get lessonsixpage28Radio4(){
        return $(`~radio_action_mindzone.6.28.1.4`)
    }
    get lessonsixpage28Radio5(){
        return $(`~radio_action_mindzone.6.28.1.5`)
    }
    get lessonsixpage28Radio6(){
        return $(`~radio_action_mindzone.6.28.1.6`)
    }
    get lessonSix29(){
        return $(`~Now that we have looked at both unhelpful thoughts and your own beliefs, let's go back to the thought record.\nThe first few steps of the thought record you did in your homework last week - identifying a particular problem situation, your feelings and other responses (like physical) to the situation, and what you did. We'll repeat that process here and then build on it.`)
    }
    get lessonSix30(){
        return $(`~Choose one situation from last week (or something else you can think of) to begin this exercise.\nRemember to be as specific as possible. The situation is something that happened at a particular time and place.\nwhere were you?\nwhat happened?\nwho was there?\nwhat day and time was it?`)
    }
    get lessonSix31(){
        return $(`~Write your thoughts here. Rate each thought on a scale of 1-10, according to how strongly you believed the thought. Ten means you believe the thought extremely strongly.`)
    }
    get lessonSix32(){
        return $(`~Re-consider the feelings you had, whether these were emotional or physical sensations, like feelings of butterflies, knots in your stomach, or an increased heart rate. Write the feelings here.`)
    }
    get lessonSix33(){
        return $(`~Identify what you did at the time and how that affected the situation. Write it here.`)
    }
    get lessonSix34(){
        return $(`~Now we will move on to the newer elements. The next few steps ask you to examine the facts.\nImagine that you are a lawyer in a court room. First you will take the position of the prosecutor, arguing that the thought or belief is true beyond a shadow of a doubt. Then take the position of the defense attorney who will argue the thought or belief is not true. Another way to think of it is to imagine you are a debater, first on one side, then the other.`)
    }
    get lessonSix35(){
        return $(`~First, write down all of the facts that you can possibly think of that support your upsetting thought (evidence that the thought is true). Let's take an example:\nMatt's upsetting thought was that "no matter what I do, I can't cut it in this new role. My manager is never going to be happy with what I do."\nNotice Matt's unhelpful pattern of black and white thinking. This may be supported by a belief about himself that he is not good enough.`)
    }
    get lessonSix36(){
        return $(`~For the evidence in support of this thought he identifies the following:\nMy manager does not seem all that impressed with my work.\nMy last performance appraisal identified several areas that I need to work on.\nMost of the time no one really notices me or what I am doing; therefore, my manager probably doesn't notice either - I'm just not a standout.\nIt takes me a long time to get the hang of something new.`)
    }
    get lessonSix37(){
        return $(`~Now move to arguing the other side. What facts or evidence might counter the thought? Here are Matt's thoughts about that:\nThere were areas identified in my performance appraisal to continue to work on. But the areas identified last year were noted as strengths this year. Having areas to work on means that I am continuing to grow and develop, not that I am a weak employee.\nSome people are noticed more but when it comes down to it my work is solid. My manager has recognized that at least some of the time.\nI do take time to get used to new things. But most people do. My expectations may not be realistic.`)
    }
    get lessonSix38(){
        return $(`~The next step in the thought record is to consider both sides of the evidence and to develop a more balanced or realistic statement. The statement will\nTake into account all of the evidence, both for and against\n1.\nBe more realistic or balanced\n2.`)
    }
    get lessonSix39(){
        return $(`~Let's look at Matt's example.\nMatt's upsetting thought was:\nNo matter what I do, I can't cut it in this new role. My manager is never going to be happy with what I do.\nAfter considering both sides he was able to come up with a more balanced statement:\nI may not be noticed as much as other people, and it does take time to settle in but if I work hard and persist likely I will succeed in the future. Most people take time to succeed at something new.`)
    }
    get lessonSix40(){
        return $(`~The final step is to reconsider how the new thought feels.\nIs it believable?\nWhat feelings does the new thought bring?\nThink back to the feelings that occurred with the original upsetting thought. In Matt's case he identified feeling anxious 6/10 and frustrated 7/10.\nFor you, how are your feelings now with the new thought? Matt identified his anxiety had lessened to a 3/10 and he also felt less frustrated at a 4/10.`)
    }
    get pagelessonSix41(){
        return $(`~41 / 55`)
       }
    get pagelessonSix42(){
        return $(`~42 / 55`)
       }   
    get pagelessonSix43(){
        return $(`~43 / 55`)
       }
    get pagelessonSix44(){
        return $(`~44 / 55`)
       }
    get pagelessonSix45(){
        return $(`~45 / 55`)
       }
    get pagelessonSix46(){
        return $(`~46 / 55`)
       }
    get pagelessonSix47(){
        return $(`~47 / 55`)
       }
    get pagelessonSix48(){
        return $(`~48 / 55`)
       }
    get pagelessonSix49(){
        return $(`~49 / 55`)
       }
    get pagelessonSix50(){
        return $(`~50 / 55`)
       }
    get pagelessonSix51(){
        return $(`~51 / 55`)
       }
    get pagelessonSix52(){
        return $(`~52 / 55`)
       }
     get pagelessonSix53(){
        return $(`~53 / 55`)
       }
       get pagelessonSix54(){
        return $(`~54 / 55`)
       } 
       get pagelessonSix55(){
        return $(`~55 / 55`)
       }                    

    get lessonSix41(){
        return $(`~Susan's Example\nIdentify a situation in which you felt distressed.\n1.\nLast week, my friend Linda invited us to a party at her place. It was going to be a fairly large gathering and I immediately felt anxious about going.\nIdentify one distressing thought.\n2.\nIf I go, I will have an anxiety attack and have to leave.`)
    }
    get lessonSix42(){
        return $(`~Identify the feeling (s) you had in response (emotional or physical) and rate each feeling out of 10.\n3.\nAnxious 8/10\nUnhappy/sad 6/10\nIdentify what you did and how that impacted the situation.\n4.\nI said we were busy and couldn't make it, even though the party is a month away. My husband wanted to go and was disappointed. I felt bad, frustrated with myself, and guilty. The rest of that day it stayed with me and I am still thinking about it.`)
    } 
    get lessonSix43(){
        return $(`~Identify all the facts you can think of that support the distressing thought.\n5.\nI have had lots of anxiety attacks in the past; completely likely I would have one again.\nSocial gatherings have always been hard for me, especially large ones like a party.\nI can never think of anything to talk about and that is sure to make me anxious.\nIdentify all the facts you can think of that challenge the distressing thought.\n6.\nI have had some success with going out and not having an anxiety attack.`)
    }
    get lessonSix44(){
        return $(`~Sometimes now I feel anxious but I don't necessarily have a full blown anxiety attack.\nUsing self-talk and breathing has helped a lot so far.\nGoing to the party would be another rung on my fear ladder. It would take some planning in order for me to feel OK about trying it. Actually, I might not feel OK about doing it but I still might try it as a way of pushing myself a little further. Part of the planning might be to think of 3 or 4 "conversation starters."\nI might have an anxiety attack and have to leave but if I plan how to do that ahead of time - letting my husband and Linda know I might have to leave quickly - that could work.`)
    }
    get lessonSix45(){
        return $(`~Considering both #5 and #6, write a statement that addresses both but that is more balanced or realistic. Here is Susan's:\n7.\nI could have an anxiety attack but with some planning and some support I might be able to attend the party and stay. I would feel much better about myself if I could and if I can't it will be a chance to learn something from trying. I have a lot of skills now that would help.`)
    }
    get lessonSix46(){
        return $(`~Consider your original feelings identified in #3; re-rate those feelings considering the more balanced thought.\n8.\nAnxious 5/10.\nIf I do some planning I think it might go down to a 3/10.\nUnhappy/sad 2/10.\nIf the more balanced thought is a realistic one, it will be believable and result in lower levels of distressing feelings.`)
    }
    get lessonSix47(){
        return $(`~How might you use the thought record in everyday life? Evaluating upsetting situations and thoughts can lead to developing more balanced thoughts.\nRepeating the more balanced thought to yourself periodically can help. And practicing the thought record over a number of weeks can help you to learn a process of evaluating your thinking.\nWhen it is unrealistic, you will learn to re-balance thinking to something that is more realistic, taking into account all of the facts. Over time you will learn to do that more automatically. However, it takes practice and numerous written out thought records to get to that point.`)
    }
    get lessonSix48(){
        return $(`~Many people find the thought record is the most valuable tool of all that they learn. It is not easy. It takes time to do it well and a lot of thinking.\nIn the process you will probably identify at least some of the unhelpful thinking patterns that we discussed earlier.\nThere were a number of these patterns evident in Matt and Susan's thought record - things like black and white thinking (I never get noticed), focusing on the negative or generalizing (I have areas to improve - that means I am not good at my job).`)
    }
    get lessonSix49(){
        return $(`~This week we will ask you to write out 2 thought records. Please try to be gentle and patient with yourself. This is difficult work. Unrealistic thinking develops over a long period of time and does not change quickly. But if you stick with it likely you will experience benefit!`)
    }
    get lessonSix50(){
        return $(`~This week we will ask you to write out 2 thought records. Please try to be gentle and patient with yourself. This is difficult work. Unrealistic thinking develops over a long period of time and does not change quickly. But if you stick with it likely you will experience benefit!`)
    }
    get lessonSix51(){
        return $(`~Some common beliefs that can have a negative impact on our mood or create anxiety include beliefs like the following:\n3.\nI must be perfect in all that I do or I am a failure.\nI must always be at my best.\nDoing, not being, is the primary source of value as a human being.\nIf someone disagrees with me, I must be wrong.\nI must be liked by everyone - being liked requires giving.\nSome emotions - like anger - are bad and should not be expressed (or felt).`)
    }
    get lessonSix52(){
        return $(`~I will be happy in the future once X, Y, or Z changes.\nIf I try hard enough, I can change people who are close to me.\nI need someone to look after me (or I don't need anyone to look after me).\nIt's easier to avoid conflict or other situations that are upsetting than to face them.\nThe list of beliefs is not exhaustive. Probably you can think of others.`)
    }
    get lessonSix53(){
        return $(`~One means of challenging unhelpful or distressing thoughts and beliefs is to use a thought record. Many people find this to be the most helpful tool in the whole course, but they also find it difficult.\n4.\nIt takes considerable practice over time to learn to balance thinking so that it is more realistic or in line with all the facts (not just the negative ones!)\n5.\nThere are eight steps to the thought record:\n6.\nIdentify a situation in which you felt distressed.\n1.\nIdentify one distressing thought just one for each thought record).\n2.`)
    }
    get lessonSix54(){
        return $(`~Identify the feelings that you had in response (emotional/ physical) and rate each feeling out of 10.\n3.\nIdentify what you did and how that impacted the situation.\n4.\nIdentify all the facts you can think of that support the distressing thought.\n5.\nIdentify all the facts you can think of that challenge the distressing thought.\n6.\nConsidering both #5 and #6, write a statement that addresses both but that is more balanced or realistic.\n7.`)
    }
    get lessonSix55(){
        return $(`~Consider your original feelings identified in step 3; re-rate those feelings considering the more balanced thought. If the more balanced thought is a good one, it will be believable and result in lower levels of distressing feelings.\n8.\nThe thought record is an effective tool, and most people benefit from using it. It takes time and practice. Patience and gentleness with yourself are important!\n7.\nCongratulations! You have finished the Lesson 6 Course content`)
    }
    get lessonSeven1(){
        return $(`~Little interest or pleasure in doing things`)
    }
    get pagelessonSeven1(){
        return $(`~1 / 48`)
       }  
    get pagelessonSeven3(){
        return $(`~3 / 48`)
       } 
    get pagelessonSeven2(){
        return $(`~2 / 48`)
       }
    get pagelessonSeven4(){
        return $(`~4 / 48`)
       }
       get pagelessonSeven5(){
        return $(`~5 / 48`)
       } 
       get pagelessonSeven6(){
        return $(`~6 / 48`)
       }
       get pagelessonSeven7(){
        return $(`~7 / 48`)
       } 
       get pagelessonSeven8(){
        return $(`~8 / 48`)
       } 
       get pagelessonSeven9(){
        return $(`~9 / 48`)
       }
       get pagelessonSeven10(){
        return $(`~10 / 48`)
       }
       get pagelessonSeven11(){
        return $(`~11 / 48`)
       } 
       get pagelessonSeven12(){
        return $(`~12 / 48`)
       } 
       get pagelessonSeven13(){
        return $(`~13 / 48`)
       }
       get pagelessonSeven14(){
        return $(`~14 / 48`)
       } 
       get pagelessonSeven15(){
        return $(`~15 / 48`)
       } 
       get pagelessonSeven16(){
        return $(`~16 / 48`)
       }
       get pagelessonSeven17(){
        return $(`~17 / 48`)
       }
       get pagelessonSeven18(){
        return $(`~18 / 48`)
       } 
       get pagelessonSeven19(){
        return $(`~19 / 48`)
       }
       get pagelessonSeven20(){
        return $(`~20 / 48`)
       }
       get pagelessonSeven21(){
        return $(`~21 / 48`)
       }
       get pagelessonSeven22(){
        return $(`~22 / 48`)
       } 
       get pagelessonSeven23(){
        return $(`~23 / 48`)
       }
       get pagelessonSeven24(){
        return $(`~24 / 48`)
       }
       get pagelessonSeven25(){
        return $(`~25 / 48`)
       } 
       get pagelessonSeven26(){
        return $(`~26 / 48`)
       }
       get pagelessonSeven27(){
        return $(`~27 / 48`)
       }
       get pagelessonSeven28(){
        return $(`~28 / 48`)
       }
       get pagelessonSeven29(){
        return $(`~29 / 48`)
       }
       get pagelessonSeven30(){
        return $(`~30 / 48`)
       }
       get pagelessonSeven31(){
        return $(`~31 / 48`)
       }
       get pagelessonSeven32(){
        return $(`~32 / 48`)
       } 
       get pagelessonSeven33(){
        return $(`~33 / 48`)
       } 
       get pagelessonSeven34(){
        return $(`~34 / 48`)
       }
       get pagelessonSeven35(){
        return $(`~35 / 48`)
       } 
       get pagelessonSeven36(){
        return $(`~36 / 48`)
       } 
       get pagelessonSeven37(){
        return $(`~37 / 48`)
       }
       get pagelessonSeven38(){
        return $(`~38 / 48`)
       }
       get pagelessonSeven39(){
        return $(`~39 / 48`)
       } 
       get pagelessonSeven40(){
        return $(`~40 / 48`)
       }
       get pagelessonSeven41(){
        return $(`~41 / 48`)
       } 
       get pagelessonSeven42(){
        return $(`~42 / 48`)
       } 
       get pagelessonSeven43(){
        return $(`~43 / 48`)
       }
       get pagelessonSeven44(){
        return $(`~44 / 48`)
       } 
       get pagelessonSeven45(){
        return $(`~45 / 48`)
       }
       get pagelessonSeven46(){
        return $(`~46 / 48`)
       }
       get pagelessonSeven47(){
        return $(`~47 / 48`)
       }
       get pagelessonSeven48(){
        return $(`~48 / 48`)
       }   

   
    get lessonSeven1Radio1(){
        return $(`~radio_action_mindzone.7.1.1.1`)
    }
    get lessonseven2Radio1(){
        return $(`~radio_action_mindzone.7.1.2.1`)
    }
    
    get lessonSeven3page2(){
        return $(`~radio_action_mindzone.7.1.3.1`)
    }
    get lessonSeven1page2(){
        return $(`~Feeling down, depressed, or hopeless`)
    }
    get lessonSeven2page2(){
        return $(`~Little interest or pleasure in doing things`)
    }
    get lessonSevenpage2(){
        return $(`~Welcome to Lesson 7! We hope you are finding the course helpful and are continuing to work on the thought record from last week.\nThis is one of the more complex tools that we use in the course and it takes a while to learn. However, it is also one of the most effective. Push yourself to continue to learn to use it, but also please be patient and gentle with yourself.`)
    } 
    get lessonSevenpage3(){
        return $(`~One of the areas that is sometimes a problem for people struggling with low mood and anxiety is the quality of social relationships. It makes sense that when we are not feeling our best we have less capacity to be engaged with other people. We may even be inclined to isolate ourselves.\nHuman beings are social creatures. So much so, that the quality of our relationships affects how we feel about ourselves.\nThings like our enjoyment of life, the support that we receive, and our health - both mental and physical are all affected. Research shows, for example, that people with strong relationships actually live longer!`)
    }
    get lessonSevenpage4(){
        return $(`~Unfortunately, when we are not feeling emotionally well, it is sometimes hard to maintain strong relationships. And, sometimes we just don't have enough people in our lives. In this lesson we focus on:\nYour social network.\nYour relationships with significant others, such as spouse or romantic partner.\nAssertive communication - why this is important in strong relationships and how to improve communication.`)
    } 
    get lessonSevenpage5(){
        return $(`~Unfortunately, when we are not feeling emotionally well, it is sometimes hard to maintain strong relationships. And, sometimes we just don't have enough people in our lives. In this lesson we focus on:\nYour social network.\nYour relationships with significant others, such as spouse or romantic partner.\nAssertive communication - why this is important in strong relationships and how to improve communication.`)
    }
    get lessonSeven1page1(){
        return $(`~I have close friends.`)
    } 
    get lessonSeven2page1(){
        return $(`~I have enough friends to do things with.`)
    }
    get lessonSeven3page1(){
        return $(`~These days, I have found myself more disconnected from people.`)
    }
    get lessonSeven5Radio1(){
        return $(`~radio_action_mindzone.7.6.1.1`)
    }
    get lessonseven2Radio2(){
        return $(`~radio_action_mindzone.7.6.2.1`)
    }
    
    get lessonSeven3page3(){
        return $(`~radio_action_mindzone.7.6.3.1`)
    }
    get lessonSevenpage7(){
        return $(`~Susan`)
    }
    get lessonSevenpage8(){
        return $(`~First, consider if there are people in your current social network that you will like to be closer to. Then consider the following strategies:\nDo you make relationships a priority? Most of us have busy lives and sometimes low energy, especially if we are struggling with low mood or anxiety.\n1.\nIf we don't take time to check in with friends regularly or to respond to their invitations, relationship ties tend to weaken.\nRelationships take time so a key strategy is to set time aside to spend time with friends on a regular basis. This includes with our spouse!`)
    }
    get lessonSevenpage9(){
        return $(`~Offer openness, but don't push it. Close relationships take time to build. A key feature that separates close relationships from more distant, casual relationships is the degree of openness you share.\n2.\nTo deepen a relationship, share a little more about what has been on your mind or how you are feeling about things.`)
    }
    get lessonSevenpage10(){
        return $(`~Assess the reaction of your friend to your openness. Are they interested in what you have said? Do they respond by offering something about themselves? Some people will not be open or available for a closer relationship.\nTry not to take that personally. If they don't open up to you after you have opened up to them, or if they never ask questions about your life, the person may not be available for a closer relationship. Don't push it. Pressure has the tendency to distance people rather than engaging them.`)
    }
    get lessonSevenpage11(){
        return $(`~Cultivate a wide circle. One or two relationships are never enough to meet all our social needs.\n3.\nIf you want to make some new connections, join a club or a group activity that you are interested in. Try volunteering or attend events in your community. And remember to unplug! If you are buried in an iPad or your phone, you will appear less available.\nRelationships typically grow out of shared interests. Even if no close friends come out of a certain activity at least you will have found a group to do things with, which meets some of our social needs.`)
    }
    get lessonSevenpage12(){
        return $(`~If you are more introverted, shy, or anxious about connecting with people, try to put yourself out there more socially. This may be part of your fear ladder already or you might construct one for this area if it is really tough for you to do this.\n4.\nVIEW FEAR LADDER\nMost people are uncomfortable in social situations when they don't know people very well but some basic skills can go a long way. Try to listen carefully to what the other person is saying and remember some of the details - this communicates interest in them.\nMost of all, be yourself. People who are genuine are generally seen as more likable.`)
    }
    get lessonSevenpage13(){
        return $(`~Consider the people in your social network who are acquaintances but that you would like to get to know better. Invite one of them out for coffee, to your house for a meal (even if its take-out!), or to a movie. Sometimes it's easier to try out activities with someone new if there is a small group.\n5.`)
    }
    get lessonSevenpage14(){
        return $(`~Barriers to building relationships. There are a number of things that can get in the way of our relationships.\n6.\nBeing too busy. Maintaining relationships takes time. Scheduling get-togethers can help. So can multi-tasking. Like doing something you want to do anyway with someone else. Things like going to the gym, walking the dog, or shopping are examples.`)
    }
    get lessonSevenpage15(){
        return $(`~Fear of reaching out - you may have some anxiety about being rejected. If someone doesn't respond to your attempts to connect, it doesn't mean they don't like you. They may be busy, distracted, or anxious themselves.\nYou might find imagining a scenario where someone does not respond and doing a thought record about that to find a balanced way to manage your fear.\nVIEW THOUGHT RECORD`)
    }
    get lessonSevenpage16(){
        return $(`~Being critical or judgemental of others. Recognize that difference is the spice of life. We all think and do things a little differently than others. If you express criticism a lot, people will not want to be around you much. Try to be kind, tolerant, and forgiving with other people.\n❌`)
    }
    get lessonSevenpage17(){
        return $(`~Think about how your relationships feel to you. Not all relationships are healthy. A good friend will:\nListen without judging or attempting to get you to feel or think differently about something. They don't change the subject abruptly when you are talking about something important to you.\nShow interest in you and in what is going on in your life.\nAccept you as you are.\nShare things about themselves.`)
    }
    get lessonSevenpage18(){
        return $(`~You can also evaluate a relationship by thinking about how you feel when you are with that person (or after you leave them). Healthy relationships allow you to be yourself. Thinking about a particular relationship, do you:\nFeel respected and valued?\nFeel good about yourself when you're with this person?\nFeel safe and able to trust the person?\nCan you be yourself with them?\nThese are hallmarks of a healthy relationship.`)
    }
    get lessonSevenpage19(){
        return $(`~Our primary relationships are often the romantic kind, with a partner, spouse, girl/boyfriend. For the sake of simplicity, we will call this person "partner."\nMany of the things that have been said already about relationships apply here too. But there are some special aspects to these relationships that are worth mentioning.`)
    }
    get lessonSevenpage20(){
        return $(`~When we are struggling with low mood, anxiety or other emotional things, often our relationships with our partner suffers most of all.\nWe can be withdrawn, moody, critical, and generally not a lot of fun to be around at times. We may have a partner that struggles with low mood or anxiety too, which makes things worse.`)
    }
    get lessonSevenpage21(){
        return $(`~John Gottman is a leading researcher in the area of successful marriages. He studied married couples - but any long-term relationship counts.\nThere are two areas we thought might be helpful to highlight here.`)
    }
    get lessonSevenpage22(){
        return $(`~Gottman has studied communication patterns of successful couples over a 30-year period. He identified that a ratio of 5 positive interactions with our partner for every 1 negative interaction (5:1) was required to maintain a healthy relationship.\nThink about the last 24 hours with the person you are closest to. Were the interactions mostly positive or mostly negative? Positive interactions are as simple as smiling, touching, talking with each other kindly or in an affirmative way.`)
    }
    get lessonSevenpage23(){
        return $(`~The negative interactions that happen for couples who are struggling include 4 patterns of communication that Gattman called "The Four Horsemen."\nWhen couples use these communication patterns a lot they will have a toxic, corrosive effect on the relationship over time.`)
    }
    get lessonSevenpage24(){
        return $(`~Criticism...\nis the first horseman. It is different than a complaint in that it is more global and includes aspects of the person's character or personality.\nFor example, "I'm angry that you are late picking me up" is a complaint; "You're totally unreliable and inconsiderate. You only think about yourself" is a criticism. It throws blame on top of a complaint.`)
    }
    get lessonSevenpage25(){
        return $(`~Contempt...\nis the second horseman. Contempt is characterized by comments that are sarcastic, cynical, and may even involve eye-rolling. The sense is one of sneering or mockery. Over time, contempt eats away at the receiver's self­ esteem and contributes to relationship conflict.`)
    }
    get lessonSevenpage26(){
        return $(`~Defensiveness...\nis the third horseman. If we approach our partner harshly with criticism, defensiveness is understandable. But defensiveness never has the effect of having the complainer agree with the defender. Quite the opposite.\nMost often when these patterns are present in a relationship, the recipient of the criticism goes on the attack. In effect, defensiveness it is a way of saying "It's not my fault, it's yours!"`)
    }
    get lessonSevenpage27(){
        return $(`~Stonewalling...\nis the fourth and possibly the most toxic of all the horsemen. It develops when the other 3 have been around for a while and one partner or the other begins to tune out and stop responding.\nThis is the person who, met with criticism or even requests, does not respond, leaves the room, or buries him/herself in the TV, a book, or their phone/iPad. Stonewalling communicates that the person has emotionally left the relationship.`)
    }
    get lessonSevenpage28(){
        return $(`~Think about your relationship with your partner... do you see the 4 horsemen a lot?\nCriticism and defensiveness occur occasionally in healthy relationships, but is not an established pattern. Contempt and stonewalling are more serious cues the relationship needs help. If this is an area you are concerned about, observe how you and your partner communicate over a few days or a week.\nYou can also try an experiment, working hard to have at least 5 positive interactions for every negative one.`)
    }
    get lessonSevenpage29(){
        return $(`~A second area that has come out of Gottman's work with couples is related to the way that we respond when our partner asks for our attention. He calls this "turning toward" (rather than away) and the requests for our attention are "bids". Bids for engagement or attention are as simple as telling our partner about our day, telling them a joke, or reaching out for a hug.\nCouples make bids to each other all the time. In healthy relationships, we respond to most of the bids our partner makes, but we miss some too (think the 5:1 ratio). However, in relationships that are struggling, bids are missed or ignored much more often.`)
    }
    get lessonSevenpage30(){
        return $(`~Assertive communication is a key aspect of healthy relationships, at home, socially and at work. It involves respecting yourself but also respecting the other person. Sometimes it is hard to balance the two.\nAn imbalance in favour of you is aggression. An imbalance in favour of the other is passivity. Both aggression and passivity cause stress.\nWhile many of us are not good at assertive communication, it is a skill that can be learned.`)
    }
    get lessonSevenpage31(){
        return $(`~Let's look at an example:\nYou are leaving on vacation the next day. Your manager drops by and asks you to complete some work in a demanding tone. You tell your manager you will be happy to do it, but it will have to wait until you return from vacation. Your manager says she needs it done before you leave.\nWhich of you is being aggressive?\nWhich assertive?`)
    }
    get lessonSevenpage32(){
        return $(`~In this instance, the manager is the more aggressive party. She is in a position of power and demanding work be fit into your schedule with no notice in advance. Here she is respecting her own needs, but is inconsiderate of yours.\nYou are being assertive. This interaction could end in a number of ways... but before we get to that, let's talk a bit more about assertiveness.`)
    }
    get lessonSevenpage33(){
        return $(`~Assertiveness has a great many benefits. First, assertive people tend to feel better about themselves. Because effective assertiveness is built on mutual respect and a diplomatic style, assertive people earn the respect of those around them.\nTypically, assertive people do not get pushed into doing things they don't want to do or that will be bad for them. They don't agree to extra work or other obligations that might create stress.`)
    }
    get lessonSevenpage34(){
        return $(`~In contrast, people with a passive communication style often do get pushed into doing things they don't want to do. This creates stress and, often, resentment. They may feel victimized a lot, which of course leads to feeling badly about themselves.`)
    }
    get lessonSevenpage35(){
        return $(`~People who use an aggressive style can be experienced as intimidating or humiliating.\nThey may feel badly about themselves too, though sometimes they simply feel superior or entitled. Aggression may arise from anxiety and a high need to control things.\nThe aggressive communication style leaves everyone around them feeling badly about themselves. Of course this is not a good recipe for healthy relationships. People who are intimidated develop resentment and avoid or block the aggressor, sometimes in indirect ways.`)
    }
    get lessonSevenpage36(){
        return $(`~To develop a more assertive style, remember the following:\nAssertive people have high self-awareness of their thoughts and feelings. They value themselves but also value other people. They recognize that sometimes they need to let their own needs go in favour of other people's. They balance this effectively with their own rights for respect.\n1.`)
    }
    get lessonSevenpage37(){
        return $(`~Assertive people do not take responsibility for others' reactions to them, particularly if the other responds negatively when they stand up for themselves. The only exception is if assertiveness has lapsed into aggression and we have violated someone else's rights. Assertive people will recognize this and apologize.\n2.`)
    }
    get lessonSevenpage38(){
        return $(`~Another skill that assertive people use is to effectively express their thoughts and feelings. They state what is on their minds but in a respectful way. They know how to control their emotions. While no one likes conflict, they are willing to confront others (gently but effectively) when needed.\n3.`)
    }
    get lessonSevenpage39(){
        return $(`~Receiving complaints or compliments is not easy for many of us, but assertive people accept both graciously. They typically respond to complaints with curiosity and a desire to address the concern. They may agree or disagree but they remain open to the conversation without getting angry or embarrassed.\n4.`)
    }
    get lessonSevenpage40(){
        return $(`~Assertive people know how to say no. They understand their limits and are often able to suggest alternatives that allow both parties needs to be met, leading to a win-win.\n5.`)
    }
    get lessonSevenpage41(){
        return $(`~To assess your own style, think about whether you voice your opinions and are able to say no when you need to.\nAsk a friend or a colleague to comment on how they see your style. Pay attention to:\nUsing 'I' statements (I disagree; I want; I like/don't like).\nIf you have not been saying no enough, practice. Choose something small to begin with.\nRehearse what you want to say if it is difficult. Ask for input from others that you see as effectively assertive.`)
    }
    get lessonSevenpage42(){
        return $(`~Pay attention to your emotions. Don't tackle something difficult when emotions are high. Leave it for a day or two and then come back to it.\nIf assertiveness is very difficult you may find it helpful to take a class or work with a counsellor.`)
    }
    get lessonSevenpage43(){
        return $(`~We have introduced a lot of important information. Let's review the key points:\nA key problem area for some people struggling with low mood and anxiety is the quality of social relationships. Our social relationships can affect how we feel, our enjoyment of life, the support we receive, and our health both mental and physical.\n1.\nThere are a few things that can strengthen our social network:\n2.\nMake relationships a priority.\nOffer openness.\nAssess the responsiveness of a friend to your openness.`)
    }
    get lessonSevenpage44(){
        return $(`~Cultivate a wide circle of relationships.\nTry to put yourself out there more socially (perhaps as part of your fear ladder).\nConsider people you would Iike to get to know better and invite them to an activity.\nThere are also a few key barriers that can get in the way of our relationships:\n3.\nBeing too busy.\nFear of reaching out/fear of rejection.\nBeing critical or judgmental of others.`)
    }
    get lessonSevenpage45(){
        return $(`~Gattman, a relationship expert, identified that a ratio of 5 positive interactions with our partner for every 1 negative interaction (5:1) is required to maintain a healthy relationship.\n4.\nThe negative interactions that happen for couples who are struggling include 4 patterns of communication called the "Four Horsemen:"\n5.\nCriticism\n1.\nContempt\n2.\nDefensiveness\n3.\nStonewalling\n4.`)
    }
    get lessonSevenpage46(){
        return $(`~The way in which we respond when our partner asks for attention - whether we turn toward or away to their bid - can affect the health of our relationship. In relationships that are struggling, bids are missed or ignored more often than accepted. We turn away more often than we turn toward our partner.\n6.\nAssertive communication is a key aspect of healthy relationships, at home, socially, and at work. It involves a balance of respecting yourself and the other person.\n7.`)
    }
    get lessonSevenpage47(){
        return $(`~Passive communication often leads one to get pushed around, can create stress, resentment, and a feeling of being victimized. Aggressive communication can be experienced as intimidating or humiliating and result in the person being thought of as a bully.\n8.\nTo develop a more assertive communication style, remember the following characteristics of assertive people, who:\n9.\nBalance their own needs and others, being aware of mutual respect.`)
    }
    get lessonSevenpage48(){
        return $(`~Do not take responsibility for other's reactions to them, particularly for the assertive person's willingness to stand up for themselves. They are aware however, when they have lapsed into aggression and violated someone else's rights.\nCan effectively express their thoughts and feelings in a respectful manner.\nAre able to receive both complaints and compliments with openness.\nKnow how to say no and understand their limits.\nCongratulations! You have finished the Lesson 7 Course content.`)
    }
    get lessoneight1Radio1(){
        return $(`~radio_action_mindzone.8.1.1.1`)
    }
    get lessoneight2Radio1(){
        return $(`~radio_action_mindzone.8.1.2.2`)
    }
    get lessoneight3Radio1(){
        return $(`~radio_action_mindzone.8.1.3.1`)
    }

    get pagelessoneight1(){
        return $(`~1 / 42`)
       }
    get pagelessoneight2(){
        return $(`~2 / 42`)
       }   
    get pagelessoneight3(){
        return $(`~3 / 42`)
       }
       get pagelessoneight4(){
        return $(`~4 / 42`)
       }
       get pagelessoneight5(){
        return $(`~5 / 42`)
       }
       get lessoneight1(){
        return $(`~Little interest or pleasure in doing things`)
    }  
    get lessoneight2(){
        return $(`~Welcome to Lesson 8 and the final lesson of the course!\nAt this point in the course you may be feeling a variety of emotions. Perhaps your mood or anxiety has improved and you are feeling confident about the new skills you have learned. Perhaps you are hopeful about the future.\nMaybe things have not improved so much and you feel more uncertain. Often people feel worried about the end of a course and the potential for things to worsen again in future.`)
    } 
    get lessoneight3(){
        return $(`~In Lesson 8 we will address these thoughts and feelings. We also focus on how you can build on what you have learned so far and what to do if your mood or anxiety should be more of a problem down the road.\nBefore we move into our topics for this week though, let's check back with Matt and Susan to see what they have been thinking about.`)
    }
    get lessoneight4(){
        return $(`~I can't believe how quickly the course has gone by. I feel like I have learned a lot but that I have lots more to learn too. I am feeling much better than I was, but I still have down days. Increasing activity has been the thing that's worked the most I think. But a lot of the other skills have been helpful too.\nThe lesson last week was a bit of an eye opener. I was really interested in the assertiveness piece. I would have said I was pretty assertive but going through the material I realized that I have been more passive in some situations. Especially at work. I am inclined to keep my thoughts to myself there.`)
    }
    get lessoneight5(){
        return $(`~I have been watching and thinking about that a lot this past week. I started looking for opportunities to be more assertive - really just saying more of what I think when I can. There have been a couple of instances when I spoke up more. This is something I am going to continue to work on.`)
    }   
    get pagelessoneight5(){
        return $(`~5 / 42`)
       }
       get pagelessoneight6(){
        return $(`~6 / 42`)
       }
       get lessoneight6(){
        return $(`~I am feeling a lot better. I've learned lots of new skills. Some were familiar to me from before - like relaxation and deep breathing - but before the program I was not using them as much as I needed to. I'm using self-talk more deliberately too. Things I say to myself more often now are "you can get through this," "anxiety is uncomfortable but it isn't life-threatening," "just wait a few minutes and this feeling will pass." Meditation is newer to me and I find I like it a lot.`)
    }  
    get lessoneight7(){
        return $(`~I have continued to use the worry tree and thought record. These seem helpful too but I need to practice more with them before I really get it.\nThis past week I have been thinking about my social network and that I don't have enough relationships in my life. I do have friends but I don't keep up with them very well. I am pushing myself to go out more often and I do see my anxiety is better. When I get a little further along, my next step will be to try reaching out a bit more and plan activities with people I want to have a relationship with.`)
    }   
    get pagelessoneight7(){
        return $(`~7 / 42`)
       }
       get lessoneight8(){
        return $(`~While most people are helped by a course such as this one, generally the skills learned here need ongoing practice. We can hear that from Matt and Susan.\nResearch suggests practice will allow the benefits to continue to increase for months if not years. After all, it takes a long time for low mood and anxiety to develop and it takes time for new skills to become a part of your life.`)
    }   
    get pagelessoneight8(){
        return $(`~8 / 42`)
       }
       get lessoneight9(){
        return $(`~You might be able to relate this to other experiences in your life. For example, think of a time when you have had to learn complex skills or tasks - driving a car is one example you might relate to. You may remember that it took time and lots of practice. Even after getting your license, you likely continued to improve with experience.\nWhile we always hope that we will perform better every single day, the truth is when we are learning it's typically two steps forward and one back!`)
    }   
    get pagelessoneight9(){
        return $(`~9 / 42`)
       }
       get lessoneight10(){
        return $(`~You may have already experienced this - days where your symptoms are better, followed by days when you feel like you are slipping back. This is a common experience. We call these steps backward "lapses" and they are a part of learning anything new. Learning to manage the step back or lapse is an essential part of emotional self-care.\nIn Lesson 8, we will review the skills that have been presented in the course and ask you to identify which of them have seemed most useful. We review also how to develop a self-care plan to build on the work you have started. Part of that self-care plan will be about managing lapses.`)
    }   
    get pagelessoneight10(){
        return $(`~10 / 42`)
       }
       get lessoneight11(){
        return $(`~There has been a range of skills that were presented in this course, including skills directed at behaviour, feelings, and thoughts.\nAs you read through the lists of these below, check off those that seemed particularly helpful.`)
    }   
    get pagelessoneight11(){
        return $(`~11 / 42`)
       }
    get lessoneight11Radio1(){
        return $(`~radio_action_mindzone.8.12.1.1`)
    }
    get lessoneight12Radio1(){
        return $(`~radio_action_mindzone.8.12.1.2`)
    }
    get lessoneight13Radio1(){
        return $(`~radio_action_mindzone.8.12.1.3`)
    }
    get pagelessoneight12(){
        return $(`~12 / 42`)
       }
       
    get pagelessoneight13(){
        return $(`~13 / 42`)
       }
       get lessoneight13(){
        return $(`~Feelings`)
    }  
    get pagelessoneight14(){
        return $(`~14 / 42`)
       }
       get lessoneight14(){
        return $(`~Thoughts`)
    }  
    get lessoneight14Radio1(){
        return $(`~radio_action_mindzone.8.14.1.1`)
    }
    get lessoneight15(){
        return $(`~Now that you have identified your most useful skills, write 1 or 2 goal statements.\nFor example, a goal statement might be "I will maintain regular activity through walking 30 minutes each day" or "I will take a few minutes whenever I feel upset to notice what I am thinking and to come up with more balanced or realistic statements."\nMy Moving Forward Goal statement\nGO TO MY GOALS`)
    }  
    get pagelessoneight15(){
        return $(`~15 / 42`)
       }
       get lessoneight16(){
        return $(`~Now that you have started to think about which activities you want to continue, let's talk about managing lapses (sometimes called 'relapse').\nResearch suggests that there are several factors that contribute to the risk of a relapse including:\nIncreased stress\nLife events like illness or a loss\nNot using the skills you have learned (that is, not taking time for self-care)`)
    }  
    get pagelessoneight16(){
        return $(`~16 / 42`)
       }
    get lessoneight17(){
        return $(`~Learning to manage relapses, or to actually prevent some of them (relapse prevention), requires that we think about situations that are likely to put us at risk for a lapse, watch for warning signs of a lapse, and develop a plan to manage increased symptoms.`)
    }  
    get pagelessoneight17(){
        return $(`~17 / 42`)
       }
       get lessoneight18(){
        return $(`~Planning for a relapse involves\nUnderstanding situations that are likely to arise that might cause a relapse.\nRecognizing the early signs or symptoms that a relapse is occurring.\nIdentifying the skills you have learned that can help.\nPlanning what you will actually do about your symptoms.\nLet's look at Matt and Susan's plan for relapse prevention and management:`)
    }  
    get pagelessoneight18(){
        return $(`~18 / 42`)
       }
       get lessoneight19(){
        return $(`~Matt\nRisk situation:\nThere are still some things that can cause my mood to start spiralling down. There are two main things for me. If things are not going well at work and I think my manager is unhappy about what I am doing I can still obsess about that for a while. That always makes me feel worse.\nThe other is thinking about being a father, especially if it gets me thinking about my own father. Also, I know that when the baby comes it could be a tough time for me. So when that time gets closer I may want to spend a bit more time reviewing the lessons. Or I may need to talk to someone - I will keep that in mind for later.`)
    }  
    get pagelessoneight19(){
        return $(`~19 / 42`)
       }
       get lessoneight20(){
        return $(`~Matt\nSigns of a lapse:\nIf I start feeling down, I usually get quiet and spend too much time on my laptop or in front of the TV. I may start avoiding people and conversations and I can get really cranky. Sarah usually notices that first. And my sleep is more disrupted if I have a lot on my mind that's bothering me.\nPlan:\nI guess what I have learned is the first thing I need to do is tune into the upsetting thoughts—really nail down what I am thinking about. And I need to do that right away. I can use a thought record as one tool. The problem solving is another good one sometimes.`)
    }  
    get pagelessoneight20(){
        return $(`~20 / 42`)
       }

    get lessonsevenreview(){
        return $(`(//android.view.View[@content-desc="REVIEW"])[4]`)
    }
    get lessoneightreview(){
        return $(`(//android.view.View[@content-desc="REVIEW"])[5]`)
    }
    get homePage(){
        return $('android=new UiSelector().description("Welcome to Carepath Digital Health")')
    }
    get goalCheck() {
        return $('~Daily Goal Check-In')
    }

    get remindMeLater() {
        return $('~Remind me later')
    }

}