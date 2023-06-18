console.log("hellow word");

var figlet = require("figlet");			// figlet라는 모듈을 요구(require)한다

figlet("I AM YEONGJI", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)