var mysql = require('mysql'),
    envVariable = require("../config.js"),
    logger = require('../utils/logger')

var state = {
    pool: null,
    mode: null,
}


exports.connect = function (mode, done) {
    state.pool = mysql.createPool(envVariable.mysqlConnection);
    state.pool.getConnection(function (err, connection) {
        if (err) {
            done(err);
            return;
        }
        connection.release();
        logger.info('MySQL Database connected Successfully.');
        done();
        return;
    });

};

exports.query = function(userid,patientid,eventType,jsonData,ch,msg)
{
    
    state.pool.getConnection(function(err,connection)
    {
        if(err)
        {
            throw err;
        }
        else{
            let event = JSON.stringify(eventType);
            let dataObj  = JSON.stringify(jsonData);
            console.log(userid,event,patientid,dataObj)
            connection.query('CALL CSP_InsertIntoAudit(?,?,?,?)', [userid, patientid, event, dataObj],
            function(err,result)
            {
                connection.release();
                if(err)
                throw err;
                 else{
                    
                    if (result[0][0].result==1)
                    {
                        ch.ack(msg);
                    }
                 }
             
            }
            
            );          
        }
    })

}
