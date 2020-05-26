var config = require('../config.js');

class CampaignEmailAdmin {
    constructor(lastName, emailId, tempPassword,redirectLink, firstname,cellnumber,adherence_rate,fasting_in_control_rate,valueforkey,customerSupportLink){
        this.lastname = lastName;
        this.firstname = firstname;
        this.cellnumber = cellnumber;
        this.adherence_rate = adherence_rate;
        this.fasting_in_control_rate = fasting_in_control_rate;
        this.emailId = emailId;
        this.tempPassword = tempPassword;
        this.redirectLink = redirectLink;
        this.customerSupportLink = customerSupportLink;
        this.mailToCustomerSupportLInk = "mailto:"+customerSupportLink;
        // set base imagepath to s3
        this.baseimgpath = config.assestsUrl;
        // below images for DoseCheck
        this.BUTTON_IMAGE = valueforkey.BUTTON_IMAGE;
        this.HEADER_IMAGE = valueforkey.HEADER_IMAGE;
        this.PHONE_IMAGE = valueforkey.PHONE_IMAGE;
        this.DOSE_CHECK_LOGO = valueforkey.DOSE_CHECK_LOGO;
        this.NOVE_LOGO = valueforkey.NOVE_LOGO;

        this.WELCOME_EMAIL_ADMIN_ISAGE_EMAIL = valueforkey.WELCOME_EMAIL_ADMIN_ISAGE_EMAIL;
        this.WELCOME_EMAIL_ADMIN_TO = valueforkey.WELCOME_EMAIL_ADMIN_TO;
        this.REGISTER_EMAIL_PROVIDER = valueforkey.REGISTER_EMAIL_PROVIDER;
        this.WELCOME_EMAIL_ADMIN_CLICK_ON_GET_START = valueforkey.WELCOME_EMAIL_ADMIN_CLICK_ON_GET_START;
        this.WELCOME_EMAIL_PROVIDER_THANKYOU = valueforkey.WELCOME_EMAIL_PROVIDER_THANKYOU;
        this.WELCOME_EMAIL_PROVIDER = valueforkey.WELCOME_EMAIL_PROVIDER;
        this.LOGIN = valueforkey.LOGIN;
        this.BACKGROUND_IMAGE_TEMPLATE = valueforkey.BACKGROUND_IMAGE_TEMPLATE;
        this.TEMPLATE_LOGO = valueforkey.TEMPLATE_LOGO;
        this.WELCOME_EMAIL_PROVIDER_ISAGE = valueforkey.WELCOME_EMAIL_PROVIDER_ISAGE;
        this.WELCOME_EMAIL_ADMIN_DEAR = valueforkey.WELCOME_EMAIL_ADMIN_DEAR;
        this.WELCOME_EMAIL_PROVIDER_THANK_YOU_FOR_REGISTERING = valueforkey.WELCOME_EMAIL_PROVIDER_THANK_YOU_FOR_REGISTERING;
        this.WELCOME_EMAIL_ADMIN_USERNAME = valueforkey.WELCOME_EMAIL_ADMIN_USERNAME;
        this.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT = valueforkey.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT;
        this.WELCOME_EMAIL_ADMIN_REGARDS = valueforkey.WELCOME_EMAIL_ADMIN_REGARDS;
        this.WELCOME_EMAIL_ADMIN_ISAGE_TEAM = valueforkey.WELCOME_EMAIL_ADMIN_ISAGE_TEAM;
        this.WELCOME_EMAIL_ADMIN_GET_STARTED = valueforkey.GET_STARTED;
    }
}


module.exports = CampaignEmailAdmin;