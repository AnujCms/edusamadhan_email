const config = require('../config.js');

class Principal {
    constructor(principalName, userRole, schoolName, emailId, tempPassword,redirectLink,customerSupportLink){
        this.principalName = principalName
        this.userRole = userRole;
        this.schoolName = schoolName
        this.emailId = emailId;
        this.tempPassword = tempPassword;
        this.redirectLink = redirectLink;
        this.customerSupportLink = customerSupportLink;
        this.mailToCustomerSupportLInk = "mailto:"+customerSupportLink;
        // set base imagepath to s3
        this.baseimgpath = config.assestsUrl;
    }
}


module.exports = Principal;