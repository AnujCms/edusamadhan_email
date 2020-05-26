var fs = require('fs');
var path = require('path');
var Logger = require('./utils/logger');
var config = require('./config');
var sourceProviderForSwitch = require('./models/sourceProviderForSwitch');
var destinationProviderForswitch = require('./models/destinationProviderForswitch');
var Staff = require('./models/Staff');
var CampaignEmailAdmin = require('./models/CampaignEmailAdmin');
var Principal = require('./models/Principal');
var AdminAlertMail = require('./models/AdminAlertMail');
var ForgotPassword = require('./models/ForgotPassword');
var newPhysicianRequestToAdmin = require('./models/newPhysicianRequestToAdmin');
const puppeteer = require("puppeteer");
var envVariable = require("./config.js");

// Email Setup

var nodemailer = require('nodemailer');
// send mail with password confirmation

var transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: config.smtp.user,
        pass: config.smtp.pass
    }
});
var EmailTemplate = require('email-templates').EmailTemplate;

exports.publishEmailEventForCreateStaff = function (user, callback) {
    console.log('Userdetails',user)
    const templateDir = path.join(__dirname, '/templates', 'welcome-email-staff');
    const newsletter = new EmailTemplate(templateDir);
    const schoolStaff = new Staff(user.staffName, user.userRole, user.schoolName, user.principalName, user.emailId, user.tempPassword, user.redirectLink, envVariable.customerSupportEmail);
    newsletter.render(schoolStaff, function (err, result) {
        if (err) {
            Logger.error("failed to complie email template " + err);
            return;
        }
        const mailOpts = {
            from: `EDUSAMADHAN <${envVariable.ContactUsEmail}>`,
            to: user.emailId,
            subject: "Welcome to EDUSAMADHAN",
            html: result.html
        };

        transporter.sendMail(mailOpts, function (err, response) {
            if (err) {
                Logger.error("Failed to send email " + err);
            } else {
                callback();// send ack
                Logger.info("send successfully!!! email");
            }
        });
    });
}

exports.publishEmailEventForCreateSchool = function (user, callback) {
    const templateDir = path.join(__dirname, '/templates', 'welcome-email-principal');
    const newsletter = new EmailTemplate(templateDir);
    const schoolPrincipal = new Principal( user.principalName, user.userRole, user.schoolName, user.emailId, user.tempPassword, user.redirectLink, envVariable.customerSupportEmail);
    newsletter.render(schoolPrincipal, function (err, result) {
        if (err) {
            Logger.error("failed to complie email template " + err);
            return;
        }
        const mailOpts = {
            from: `EDUSAMADHAN <${envVariable.ContactUsEmail}>`,
            to: "anujvermaatc1994@gmail.com",
            subject: "Welcome to EDUSAMADHAN",
            html: result.html
        };
        transporter.sendMail(mailOpts, function (err, response) {
            if (err) {
                Logger.error("Failed to send email " + err);
            } else {
                callback();// send ack
                Logger.info("send successfully!!! email");
            }
        });
    });
}

exports.publishEmailEventForForgotPassword = function (user, callback) {
    const templateDir = path.join(__dirname, '/templates', 'forgot-password');
    const newsletter = new EmailTemplate(templateDir);
    console.log('user',user)
    const forgotpassword = new ForgotPassword( user.userName, user.emailId, user.resetlink, envVariable.customerSupportEmail);
    newsletter.render(forgotpassword, function (err, result) {
        if (err) {
            Logger.error("failed to complie email template " + err);
            return;
        }
        const mailOpts = {
            from: `EDUSAMADHAN <${envVariable.ContactUsEmail}>`,
            to: "anujvermaatc1994@gmail.com",
            subject: "Welcome to EDUSAMADHAN",
            html: result.html
        };
        transporter.sendMail(mailOpts, function (err, response) {
            if (err) {
                Logger.error("Failed to send email " + err);
            } else {
                callback();// send ack
                Logger.info("send successfully!!! email");
            }
        });
    });
}
