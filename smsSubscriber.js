
const amqp = require('amqplib');
const SmsServer = require('./SmsServer.js');
const config = require('./config.js');
const Logger = require('./utils/logger');

const connectionUrl = "amqp://" + config.rabbitmq.username + ":" + encodeURIComponent(config.rabbitmq.password) + "@" + config.rabbitmq.host

const p = config.rabbitmq.smsQueue

amqp.connect(connectionUrl).then(function (conn) {
  process.once('SIGINT', function () { Logger.info("SIGINT , stopping subsciber and closing the connection"); conn.close(); });
  conn.on('error', function () { Logger.info("Interruption on connection, may rabbitmq restarted or failed, restarting"); process.exit(0); });
  return conn.createChannel().then(function (ch) {

    const okk = ch.assertQueue(p, { durable: true });

    okk = okk.then(function (_pokk) {
      return ch.consume(p, function (msg) {
        Logger.log(" [x] Received message ", msg.content.toString());
        handleOtp(ch, msg);
      }, { noAck: false });
    });

    return okk.then(function (_consumeOk) {
      Logger.info("subscriber started, [*] Waiting for messages in Queue. To exit press CTRL+C", p);
    });
  });
}).catch(Logger.error);

async function handleOtp(ch, msg) {
  const parsedMsg = JSON.parse(msg.content.toString());
  Logger.info(parsedMsg.type + ' for user : ' + parsedMsg.ph.replace(parsedMsg.ph.slice(3, -3), '********'));
  
try {
  //OTP create new function
  if(parsedMsg.type == "Send_Welcome_Message"){
    await SmsServer.sendOTP(parsedMsg)
    await ch.ack(msg);
  }
} catch (ex) {
  Logger.error(ex);
}
}