console.log("hellow word");

var figlet = require("figlet");			// figlet라는 모듈을 요구(require)한다

var cors = require('cors')

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
app.use(cors())   // 모든요청허용


// axios 로 요청해서 express로 응답..
const port = 3000;
// get방식으로 /world(라우팅)를 호출해라
// Hello world 를 응답해.
app.get('/world', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/user/:id', function (req, res) {  // :(콜론 붙이고 파라미터(변수))
  // const q = req.params;
  // console.log(q.id);
  // res.json({'userId':q.id})
  const q= req.query;
  console.log(q);
})

app.get('/cat', function (req, res) {
  res.send('고양이')
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params;  // 중괄호 안에 key 값을 쓸수있음
    
    if(name == "dog") {
      res.json({'sound': '멍멍'})
    } else if(name == "cat") {
      res.json({'sound': '야옹'})
    } else if(name =="fig") {
      res.json({'sound': '꿀꿀'})
    } else {
      res.json({'sound':'undefined'})
    }
})



app.listen(port, () => {
  console.log('Example app Init')
})