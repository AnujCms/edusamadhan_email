var config = require('../config.js');
class newPhysicianRequestToAdmin {
    constructor(firstName, emailId, accountName, doctor_firstname, doctor_lastname, doctor_emailid, doctor_phone, redirectLink, valueforkey) {
        this.firstName = firstName;
        this.emailId = emailId;
        this.accountName = accountName;
        this.doctor_firstname = doctor_firstname;
        this.doctor_lastname = doctor_lastname;
        this.doctor_emailid = doctor_emailid;
        this.doctor_phone = doctor_phone;
        this.redirectLink = redirectLink;
        // below images for DoseCheck
        this.BUTTON_IMAGE = valueforkey.BUTTON_IMAGE;
        this.HEADER_IMAGE = valueforkey.HEADER_IMAGE;
        this.PHONE_IMAGE = valueforkey.PHONE_IMAGE;
        this.DOSE_CHECK_LOGO = valueforkey.DOSE_CHECK_LOGO;
        this.NOVE_LOGO = valueforkey.NOVE_LOGO;
        // set base imagepath to s3
        this.baseimgpath = config.assestsUrl;
        this.PATIENT_MADE_NEW_PHYSICIAN_REQUEST = valueforkey.PATIENT_MADE_NEW_PHYSICIAN_REQUEST;
        this.DETAILS_ARE = valueforkey.DETAILS_ARE;
        this.NAME = valueforkey.NAME;
        this.DR = valueforkey.DR;
        this.LASTNAME = valueforkey.LASTNAME;
        this.EMAILID = valueforkey.EMAILID;
        this.CELLPHONE = valueforkey.CELLPHONE;
        this.WELCOME_EMAIL_ADMIN_TO = valueforkey.WELCOME_EMAIL_ADMIN_TO;
        this.WELCOME_EMAIL_ADMIN_ENTERPRISE_SET_UP = valueforkey.WELCOME_EMAIL_ADMIN_ENTERPRISE_SET_UP;
        this.WELCOME_EMAIL_ADMIN_DEAR = valueforkey.WELCOME_EMAIL_ADMIN_DEAR;
        this.WELCOME_EMAIL_ADMIN_YOU_HAVE_BEEN_DESIGNATED_AS_ACCOUNT_ADMINISTRATOR = valueforkey.WELCOME_EMAIL_ADMIN_YOU_HAVE_BEEN_DESIGNATED_AS_ACCOUNT_ADMINISTRATOR;
        this.WELCOME_EMAIL_ADMIN_CLICK_ON_GET_START = valueforkey.WELCOME_EMAIL_ADMIN_CLICK_ON_GET_START;
        this.WELCOME_EMAIL_ADMIN_USERNAME = valueforkey.WELCOME_EMAIL_ADMIN_USERNAME;
        this.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD = valueforkey.WELCOME_EMAIL_ADMIN_AFTER_YOU_ENTER_YOUR_USERNAME_TEMPORARY_PASSWORD;
        this.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT = valueforkey.WELCOME_EMAIL_ADMIN_QUESTION_SUPPORT;
        this.WELCOME_EMAIL_ADMIN_REGARDS = valueforkey.WELCOME_EMAIL_ADMIN_REGARDS;
        this.WELCOME_EMAIL_ADMIN_ISAGE_TEAM = valueforkey.WELCOME_EMAIL_ADMIN_ISAGE_TEAM;
    }
}

module.exports = newPhysicianRequestToAdmin;