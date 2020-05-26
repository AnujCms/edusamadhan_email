var winston = require('winston');
var node_env = process.env.NODE_ENV || 'local';
var config = require('../config.js');
var Mail = require('winston-mail').Mail;


winston.emitErrs = true; // catch unhandled exceptions

var logger = new(winston.Logger)({
    transports: [
      new(winston.transports.DailyRotateFile)({
            name: 'all-logs',
            level: 'info',
            filename: config.logFilePath,
            json: true,
            colorize: false,
            zippedArchive: true,
            exitOnError: false

        }),
         new(winston.transports.Console)({
            name: 'console-log',
            level: 'info',
            handleExceptions: true,
            json: false,
            colorize: true

        })
    ],

    exitOnError: false



});



logger.handleExceptions(new winston.transports.File({
    filename: config.exceptionLogFilePath,
}));
logger.exitOnError = false;




if (node_env !== 'local') {
    logger.add(Mail, {
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 465,
        ssl: true,
        username: config.smtp.user, // GMAIL ACCOUNT HERE
        password: config.smtp.pass,
        subject: '{{msg}} + from subscriber', // EX: 'Hi i'm a bot!'
        from: config.smtp.from_address, // EX: 'I'M A BOT <bot@test.com>'
        to: config.smtp.to_address, // EX: 'BOT1 <bot1@test.com>, BOT2 <bot2@test.com>, BOT3 <bot3@test.com>'
        level: 'error'
    });
    winston.remove(winston.transports.Console);
}

module.exports = logger;