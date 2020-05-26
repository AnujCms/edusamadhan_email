var config = require('../config.js');

class destinationProviderForswitch {
    constructor(lastName,patientname,redirectLink,valueforkey){
        this.lastName = lastName;
        this.baseimgpath = config.assestsUrl;
        this.redirectLink = redirectLink;
        this.patientname = patientname;
        // below images for DoseCheck
        this.BUTTON_IMAGE = valueforkey.BUTTON_IMAGE;
        this.HEADER_IMAGE = valueforkey.HEADER_IMAGE;
        this.PHONE_IMAGE = valueforkey.PHONE_IMAGE;
        this.DOSE_CHECK_LOGO = valueforkey.DOSE_CHECK_LOGO;
        this.NOVE_LOGO = valueforkey.NOVE_LOGO;

        this.WELCOME_EMAIL_ADMIN_TO = valueforkey.WELCOME_EMAIL_ADMIN_TO;
        this.WELCOME_EMAIL_PROVIDER_ISAGE = valueforkey.WELCOME_EMAIL_PROVIDER_ISAGE;
        this.WELCOME_EMAIL_ADMIN_DEAR = valueforkey.WELCOME_EMAIL_ADMIN_DEAR;
        this.YOU_HAVE_NEW_SWITCH_REQUEST = valueforkey.YOU_HAVE_NEW_SWITCH_REQUEST.replace('#patientName',patientname);
        this.WELCOME_EMAIL_PROVIDER_THANK_YOU_FOR_REGISTERING = valueforkey.WELCOME_EMAIL_PROVIDER_THANK_YOU_FOR_REGISTERING;
        this.WELCOME_EMAIL_ADMIN_USERNAME = valueforkey.WELCOME_EMAIL_ADMIN_USERNAME;
        this.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT = valueforkey.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT;
        this.WELCOME_EMAIL_ADMIN_REGARDS = valueforkey.WELCOME_EMAIL_ADMIN_REGARDS;
        this.WELCOME_EMAIL_ADMIN_ISAGE_TEAM = valueforkey.WELCOME_EMAIL_ADMIN_ISAGE_TEAM;
        this.DR = valueforkey.DR;
        this.IF_YOU_HAVE_ANY_QUESTIONS = valueforkey.IF_YOU_HAVE_ANY_QUESTIONS;
        this.WELCOME_EMAIL_ADMIN_ISAGE_EMAIL = valueforkey.WELCOME_EMAIL_ADMIN_ISAGE_EMAIL;
        this.PLEASE_CONTACT_US = valueforkey.PLEASE_CONTACT_US;
        this.LOGIN = valueforkey.LOGIN;
        this.ACCEPT_SWITCH_STEP1 = valueforkey.ACCEPT_SWITCH_STEP1;
        this.ACCEPT_SWITCH_STEP2 = valueforkey.ACCEPT_SWITCH_STEP2;
        this.ACCEPT_SWITCH_STEP3 = valueforkey.ACCEPT_SWITCH_STEP3;
        this.CLICK_ON_LOGIN_BUTTON = valueforkey.CLICK_ON_LOGIN_BUTTON;
        this.CLICK_BELOW_LINK_IF_LOGIN_BUTTON_NOT_WORKING = valueforkey.CLICK_BELOW_LINK_IF_LOGIN_BUTTON_NOT_WORKING;
    }
}


module.exports = destinationProviderForswitch;