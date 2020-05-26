class ForgotPassword {
    constructor(userName, emailId, resetlink, resetUrl){
        this.userName = userName;
        this.emailId = emailId;
        this.resetpasswordurl = resetlink;
    }
}

module.exports = ForgotPassword;