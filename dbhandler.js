/**
 * Created by aakashkataria on 04/08/16.
 */
const mysql = require('mysql');

function createconnection() {
    var connection = mysql.createConnection({
        host     : 'secret',
        user     : 'secret',
        //password : 'secret',
        database : 'secret'
    });
    return connection;
}

module.exports = {
    checkuser: function (username, password, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('SELECT username FROM login_table WHERE username = "' +
            username + '" AND password = "' + password + '";', function (err, rows, fields) {
            if (err) {
                console.log("Error Found");
            }
            else {
                if (rows.length > 0) {
                    console.log("username password matched");
                    returnvalue('true');
                }
                else {
                    returnvalue('false');
                }
            }
        });
        conn.end();
        delete conn;
    },

    adduser: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('insert into patient_details values("' +
            obj.name + '", ' + obj.age + ', "' + obj.bg + '", "' + obj.address + '", "' + obj.gender + '"' +
            ', "' + obj.phn + '");', function (err, rows, fields) {
            if (err) {
                console.log("Error Found on adding");
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    updateuser: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('delete from patient_details where name = "' + obj.oldname + '";', function (err, rows, fields) {
            if (err) {
                console.log("error");
            }
        });
        conn.query('insert into patient_details values("' +
            obj.name + '", ' + obj.age + ', "' + obj.bg + '", "' + obj.address + '", "' + obj.gender + '"' +
            ', "' + obj.phn + '");', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    viewuser: function (obj, returnvalue) {
        var conn = createconnection();
        console.log(obj.oldname);
        conn.connect();
        conn.query('select * from patient_details where name = "' + obj.oldname + '";', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows[0].name);
                var data = {
                    name: rows[0].name.toString(),
                    age: rows[0].age,
                    bg: rows[0].bloodgroup.toString(),
                    address: rows[0].address.toString(),
                    gender: rows[0].gender.toString(),
                    phn: rows[0].phn.toString(),
                }
                console.log(data);
                returnvalue(data);
            }
        });
        conn.end();
        delete conn;
    },

    adduserhistory: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('insert into patient_history values("' +
            obj.name + '", "' + obj.diseasename + '");', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },
    
    viewuserhistory: function (obj, returnvalue) {
        var conn = createconnection();
        console.log(obj.oldname);
        conn.connect();
        conn.query('select * from patient_history where name = "' + obj.oldname + '";', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows[0].name);
                var data = {
                    name: rows[0].name.toString(),
                    diseasename: rows[0].diseasename.toString(),
                }
                console.log(data);
                returnvalue(data);
            }
        });
        conn.end();
        delete conn;
    },

    ad: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('insert into doctors values("' +
            obj.name + '", "' + obj.sp + '");', function (err, rows, fields) {
            if (err) {
                console.log("Error Found on adding");
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    ud: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('delete from doctors where name = "' + obj.name + '";', function (err, rows, fields) {
            if (err) {
                console.log("error");
            }
        });
        conn.query('insert into doctors values("' +
            obj.name + '", "' + obj.sp + '");', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    vd: function (obj, returnvalue) {
        var conn = createconnection();
        console.log(obj.oldname);
        conn.connect();
        conn.query('select * from doctors where name = "' + obj.oldname + '";', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows[0]);
                var data = {
                    name: rows[0].name.toString(),
                    sp: rows[0].special.toString(),
                }
                console.log(data);
                returnvalue(data);
            }
        });
        conn.end();
        delete conn;
    },

    adda: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('insert into amts values("' +
            obj.pn + '", "' + obj.dn + '", "' + obj.t + '");', function (err, rows, fields) {
            if (err) {
                console.log("Error Found on adding");
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    ua: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('delete from amts where pn = "' + obj.pn + '";', function (err, rows, fields) {
            if (err) {
                console.log("error");
            }
        });
        conn.query('insert into amts values("' +
            obj.pn + '", "' + obj.dn +  '", "' + obj.t + '");', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },

    va: function (obj, returnvalue) {
        var conn = createconnection();
        console.log(obj.oldname);
        conn.connect();
        conn.query('select * from amts where pn = "' + obj.oldname + '";', function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows[0]);
                var data = {
                    pn: rows[0].pn.toString(),
                    dn: rows[0].dn.toString(),
                    t: rows[0].time.toString()
                }
                console.log(data);
                returnvalue(data);
            }
        });
        conn.end();
        delete conn;
    },

    paa: function (obj, returnvalue) {
        var conn = createconnection();
        conn.connect();
        conn.query('insert into pays values("' +
            obj.name + '", "' + obj.pay + '");', function (err, rows, fields) {
            if (err) {
                console.log("Error Found on adding");
            }
            else {
                console.log("added");
                returnvalue("true");
            }
        });
        conn.end();
        delete conn;
    },
}