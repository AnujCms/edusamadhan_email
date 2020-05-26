var config = require('../config.js');
class AdminAlertMail {
    constructor(firstname, lastname, crmnumber, emailid, accountAdminEmailid, valueforkey){
        this.firstname = firstname;
        this.lastname = lastname;
        this.crmnumber = crmnumber;
        this.emailid = emailid;
        this.accountAdminEmailid = accountAdminEmailid;
        // below images for DoseCheck
        this.BUTTON_IMAGE = valueforkey.BUTTON_IMAGE;
        this.HEADER_IMAGE = valueforkey.HEADER_IMAGE;
        this.PHONE_IMAGE = valueforkey.PHONE_IMAGE;
        this.DOSE_CHECK_LOGO = valueforkey.DOSE_CHECK_LOGO;
        this.NOVE_LOGO = valueforkey.NOVE_LOGO;
        // set base imagepath to s3
        this.baseimgpath = config.assestsUrl;
        this.WELCOME_EMAIL_ADMIN_DEAR = valueforkey.WELCOME_EMAIL_ADMIN_DEAR;
        this.PROVIDER_DETAILS_UPDATE = valueforkey.PROVIDER_DETAILS_UPDATE;
    }
}

module.exports = AdminAlertMail;