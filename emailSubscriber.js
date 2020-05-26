
var amqp = require('amqplib');
var EmailServer = require('./Emailserver.js');
var config = require('./config.js');
var Logger = require('./utils/logger');
var db = require('./database/db');
var emailDB = require('./database/emailSubscriberDB');
var connectionUrl = "amqp://" + config.rabbitmq.username + ":" + encodeURIComponent(config.rabbitmq.password) + "@" + config.rabbitmq.host
var q = config.rabbitmq.emailQueue;
db.connect('mode', async function (err) {
  if (err) {
    Logger.error('Unable to connect to MySQL.', err);
  } else {
    amqp.connect(connectionUrl).then(function (conn) {
      process.once('SIGINT', function () { Logger.info("SIGINT , stopping subsciber and closing the connection"); conn.close(); });
      conn.on('error', function () { Logger.info("Interruption on connection, may rabbitmq restarted or failed, restarting"); process.exit(0); });
      return conn.createChannel().then(function (ch) {

        var ok = ch.assertQueue(q, { durable: true });
        
        ok = ok.then(function (_qok) {
          return ch.consume(q, function (msg) {
            Logger.log(" [x] Received message ", msg.content.toString());
            handleMessage(ch, msg);
          }, { noAck: false });
        });

        return ok.then(function (_consumeOk) {
          Logger.info("subscriber started, [*] Waiting for messages in Queue. To exit press CTRL+C", q);
        });
      });
    }).catch(Logger.error);


  }

})



async function handleMessage(ch, msg) {
  try {
    var parsedMsg = JSON.parse(msg.content.toString());
    parsedMsg.redirectLink = "http://edusamadhan.com/public/teachers";
  if(parsedMsg.emailid)
  {
    Logger.info(parsedMsg.type + ' for user : ' + parsedMsg.emailid.replace(parsedMsg.emailid.slice(3, -5), '*****'));
  }   
  else{
    Logger.info(parsedMsg.type);
  }
    if (parsedMsg.type == "Welcome_Email_Provider") {
      console.log('come')
      EmailServer.publishEmailEventForCreateStaff(parsedMsg, function () {
        ch.ack(msg);
      });
    } else if (parsedMsg.type == "Welcome_Email_Principal") {
      EmailServer.publishEmailEventForCreateSchool(parsedMsg, function () {
        ch.ack(msg);
      });
    } else if (parsedMsg.type == "Forgot_Password_Emailid") {
      EmailServer.publishEmailEventForForgotPassword(parsedMsg, function () {
        ch.ack(msg);
      });
    }
  } catch (ex) {
    Logger.error(ex);
  }
}
