var mysql = require('mysql'),
    config = require('./config.js');
// var con = mysql.createConnection(config.mysqlConnection);
var amqp = require('amqplib');
var Logger = require('./utils/logger');
var db = require('./audit/database');
// var sql = 'select * from doctor where userid=266';

var connectionUrl = "amqp://" + config.rabbitmq.username + ":" + encodeURIComponent(config.rabbitmq.password) + "@" + config.rabbitmq.host
var audit  = config.rabbitmq.auditQueue; 


db.connect('mode', function (err) {
    if (err) {
        logger.error('Unable to connect to MySQL.', err);
    } else {
        amqp.connect(connectionUrl).then(function (conn) {
            process.once('SIGINT', function () { Logger.info("SIGINT , stopping subsciber and closing the connection"); conn.close(); });
            conn.on('error', function () { Logger.info("Interruption on connection, may rabbitmq restarted or failed, restarting"); process.exit(0); });
            return conn.createChannel().then(function (ch) {

                var ok = ch.assertQueue(audit, { durable: true });

                ok = ok.then(function (_qok) {
                    return ch.consume(audit, function (msg) {
                        Logger.log(" [x] Received message ", msg.content.toString());
                        handleMessage(ch, msg);
                    }, { noAck: false });
                });

                return ok.then(function (_consumeOk) {
                    Logger.info("subscriber started, [*] Waiting for messages in Queue. To exit press CTRL+C", audit);
                });
            });
        }).catch(Logger.error);

    }
});




async function handleMessage(ch,msg)
{
    var parsedMsg = JSON.parse(msg.content.toString());

    let patientid = null;
    if(parsedMsg.patientid)
    {
        patientid = parsedMsg.patientid;
    }
    

   await db.query(parsedMsg.userid, patientid, parsedMsg.operationInfo, parsedMsg.jsonData, ch,msg);

}
