var db = require('./db.js');

exports.getConfigByDoctorID = async (doctorID) => {
    var result = await db.query('select configdata from config where configid = (Select account.configid from account inner join doctor_account on account.accountid = doctor_account.accountid inner join doctor on doctor_account.userid = doctor.userid where doctor.userid = ?)', [doctorID]);
    return result[0].configdata;
}