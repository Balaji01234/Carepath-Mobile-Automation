export class CommunityLocators{

get eldercare(){
    return $(`~button_Program.elderCare`)
}

get logo(){
    return $(`~app_logo_action`)
}
get Nurserecommendations(){
    return $(`~Nurse recommendations`)
}
get MyResources(){
    return $(`~My Resources`)
}
get CommunityGroups(){
    return $(`~Community Groups`)
}
get CommunityEvents(){
    return $(`~Community Events`)
}
get HealthAssessment(){
    return $(`~Health Assessment`)
}
get comminityGroup(){
    return $(`//android.widget.ImageView[@content-desc="Community Groups_action"]`)
}
get open(){
    return $(`//android.view.View[@resource-id="open_community groups_text"]`)
}
get CommunityCountval(){
    return $(`//android.view.View[@resource-id="5_text"]`)
}
get group(){
    return $(`//android.view.View[@resource-id="test automation group_text"]`)
}
get GroupVal(){
    return $(`//android.view.View[@content-desc="Test automation group"]`)
}
get GroupValPage(){
    return $(`//android.view.View[@resource-id="test automation group_text"]`)
}
get posts(){
    return $(`(//android.view.View[@content-desc="1 Posts"])[1]`)
}
get postesva(){
    return $(`//android.view.View[@content-desc="Posts:"]`)
}
get automationPost(){
    return $(`//android.view.View[@content-desc="automation post"]`)
}
get test(){
    return $(`~tets`);
}
get newpost(){
    return $(`//android.widget.Button[@content-desc="group_request_card_action"]/android.widget.ImageView`)
}
get automationdate(){
    return $(`//android.view.View[@content-desc="February 11, 2025"]`)
}
get testoption(){
    return $(`//android.widget.ImageView[@content-desc="post_card_action_67ab5de3d3579acc15db111c"]`)
}
get likepage(){
    return $(`(//android.view.View[@resource-id="automation post_text"])[1]`)
}
get Browsearticlesabout(){
    return $(`~Browse articles about:`)
}
get image(){
    return $(`//android.widget.ImageView[@content-desc="image_view_action"]`)
}
get like(){
    return $(`//android.widget.Button[@content-desc="like_button"]/android.widget.Button/android.view.View`)
}
get saveButton(){
    return $(`//android.widget.Button[@content-desc="save_button"]/android.widget.Button/android.view.View`)
}
get commonds(){
    return $(`//android.view.View[@resource-id="comments (0)_text"]`)
}
get clickonlike(){
    return $(`//android.widget.Button[@content-desc="like_button"]/android.widget.Button/android.view.View/android.widget.ImageView`);
}
get afterLike(){
    return $(`//android.view.View[@resource-id="(1)_text"]`)
}
get beforelike(){
    return $(`//android.view.View[@resource-id="(0)_text"]`)
}
get addComment(){
    return $(`//android.widget.ImageView[@content-desc="Add Comment"]`)
}
get clickonimage(){
    return $(`//android.widget.ImageView[@content-desc="image_view_action"]`)
}
get imagescreen(){
    return $(`//android.widget.ImageView`)
}
get imagesScreenClose(){
    return $(`//android.widget.Button`)
}



}