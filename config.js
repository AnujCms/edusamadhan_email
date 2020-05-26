var config = {
    "local": {
        "port": 4001,
        "domain": "localhost:3000",
        "customerSupportEmail": "edusamadhana@gmail.com",
        "mysqlConnection": {
            "host": "anujrds.cswlmpegbvzy.ap-south-1.rds.amazonaws.com",
            "user": "adminanuj",
            "password": "mypassword",
            "database": "schooldb"
        },
        "sampleURL": "google.com",
        "logFilePath": "/logs/subscriber-logs.log",
        "exceptionLogFilePath": "/logs/subscriber-exceptions.log",
        "smtp": {
            "host":'email-smtp.ap-south-1.amazonaws.com',
            "user": "AKIAZXYHUUDQ3JTOKHM2",
            "pass": "BAn2hffxSfklEDj+RGYE0K0zLfmyG7OruZEZWcIrFcEg",
            "from_address": "anujvermaatc1994@gmail.com",
            "to_address":"edusamadhana@gmail.com"
        },
        "encryption": {
            "privatekey": "169SaUXluzNsutiAGFd3k8gnlQ7ZK53D"
        },
        "smsConfig": {
            "authid": "MAZWIXYZU4YWVLYZAZYJ",
            "authtoken": "ZjUwYTkwZjJiYjAzMGRjMDY5YTdiOWZkYjVkYWZk",
            "sourcenumber": 14433284738
        },
        "sessionSecret": "TSgqLh9gU6Zpse83I8ZDQIRUJblJtZNb",
        "sessionSecretForMobile" :"sQO5Q50qG9",
        "admin": "anujvermaatc1994@gmail.com",
        "currentFeedbackMessageVersion":1,
        "currentVideoLibraryVersion":1,
        "oauth":{
            "app_secret":"3843p1eeo1PjfYc2O40YNt4964x5eKhP"
        },
        "allowCrossDomain":["localhost", "edusamadhan.com"],
        "ContactUsEmail":"anujvermaatc1994@gmail.com",
        "RyanEmail":"anujvermaatc1994@gmail.com",
        "rabbitmq":{
            "host":"localhost",
            "port":"15672 ",
            "username":"guest",
            "password":"guest",
            "emailQueue":"emailQueue",
            "smsQueue":"otpQueue",
            "auditQueue": "auditQueue"
        },
        "assestsUrl":"./images"
    }
}

function getConfig(){
    return config[process.env.NODE_ENV || 'local']; 
}
module.exports = getConfig();
