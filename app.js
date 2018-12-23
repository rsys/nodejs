// var http = require('http');
// var dt=require('./myfirstmodule');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("My Name:" +dt.GetName());
//   res.write("</br>");
//   res.write("Date Time:" +dt.myDateTime());
//   res.end('Hello World!');
//  // res.setHeader("Helllllll0");
// }).listen(8080);
// var express = require('express');
// var app  = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

var express = require('express');
var app = express();
var routes=require("./routes");

const path = require('path')

app.set('views', './views');
app.set('view engine', 'pug');

// This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.sendfile(__dirname+"/views/Index.html");  //    send('Hello GET');
// })
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)

// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//   })
// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
module.exports = app
