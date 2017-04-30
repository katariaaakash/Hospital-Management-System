/**
 * Created by aakashkataria on 18/11/16.
 */
const express = require('express');
const bp = require('body-parser');
const db = require('./dbhandler');

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(bp.urlencoded({
    extended: true
}))
app.use(bp.json());
app.use('/', express.static(__dirname + '/public'));

app.post('/login', function (req, res) {
    db.checkuser(req.body.username.toString(), req.body.password.toString(), function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            console.log('user is present');
            res.send({authunticated: true})
        }
        else{
            res.send({authunticated: false});
        }
    });
})

app.post('/addpatient', function (req, res) {
    db.adduser(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/updatepatient', function (req, res) {
    console.log("in update patient endpoint")
    db.updateuser(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/viewpatient', function (req, res) {
    db.viewuser(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue !== null){
            res.send({added: true, data: returnvalue})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/addpatienthistory', function (req, res) {
    db.adduserhistory(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/viewhistory', function (req, res) {
    db.viewuserhistory(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue !== null){
            res.send({added: true, data: returnvalue})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/adddoctor', function (req, res) {
    db.ad(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/ud', function (req, res) {
    db.ud(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/vd', function (req, res) {
    db.vd(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue !== null){
            res.send({added: true, data: returnvalue})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/adda', function (req, res) {
    db.adda(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/ua', function (req, res) {
    db.ua(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/va', function (req, res) {
    db.va(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue !== null){
            res.send({added: true, data: returnvalue})
        }
        else{
            res.send({added: false});
        }
    });
})

app.post('/paa', function (req, res) {
    db.paa(req.body.obj, function (returnvalue) {
        console.log(returnvalue);
        if(returnvalue === 'true'){
            res.send({added: true})
        }
        else{
            res.send({added: false});
        }
    });
})
app.listen(app.get('port'), function () {
    console.log('Server running at  ' + app.get('port'));
})