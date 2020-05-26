var config = require('../config.js');

class Staff {
    constructor(staffName, userRole, schoolName, principalName, emailId, tempPassword,redirectLink,customerSupportLink){
        this.staffName = staffName;
        this.userRole = userRole;
        this.schoolName = schoolName
        this.principalName = principalName
        this.emailId = emailId;
        this.tempPassword = tempPassword;
        this.redirectLink = redirectLink;
        this.customerSupportLink = customerSupportLink;
        this.mailToCustomerSupportLInk = "mailto:"+customerSupportLink;
        // set base imagepath to s3
        this.baseimgpath = config.assestsUrl;
    }
}


module.exports = Staff;