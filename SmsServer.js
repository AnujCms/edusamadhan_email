const envVariable = require("./config");
const plivo = require('plivo');
const plivo_api = plivo.RestAPI({
  authId: envVariable.smsConfig.authid,
  authToken: envVariable.smsConfig.authtoken
});
const logger = require('./utils/logger');

exports.sendOTP = async function(user){
    if(user.hashcode){
        var smstext ='<#>'+' '+ "Welcome Message"
    }
    else{
        var smstext = "Welcome to EDUSAMADHAN"
    }
     var params = {
        "src": envVariable.smsConfig.sourcenumber, // Caller Id
        "dst": user.ph, // User Number to Call
        "text": smstext,
        "type": "sms",
    };
    plivo_api.send_message(params, function (status, response) {
        logger.info("Status: " + status + "API Response:" + JSON.stringify(response), {
            method: 'send sms'
        });
        if (status !== 202) {
            logger.error("error while sending sms " + response + status, {
                method: 'send sms'
            });
        }
    });
       
};


