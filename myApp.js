var bodyParser = require("body-parser");
let express = require('express');
let app = express();


let pathIndex = __dirname + '/views/index.html'

//"cookie-parser": "^1.4.3",

app.use(express.static(__dirname))
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(pathIndex)
})

app.route("/name").get(function (req, res) {
  //console.log(req.query)
  //let response = {"name": req.query.first+" "+req.query.last}
  //res.json(response)
}).post
  //(bodyParser.urlencoded({ extended: true }),
  (bodyParser.urlencoded({ extended: true }),
  function(req, res) {
    console.log("test", req.body)
    let response = {"name": req.body.first.toString()+" "+req.body.last.toString()}
    res.json(response)
  }
);




/*
app.get('/now', function(req, res, next) {
  req.time = new Date().toString()
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get("/:word/echo", function (req, res) {
  let response = {"echo": req.params.word}
  res.send(response)
})

//app.route(path).get(handler).post(handler)

/*
app.use(
  function(req, res, next) {
  console.log(req.method+ " " +req.path+ " - " +req.ip);
  next();
})

app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase")
    res.json({"message": "HELLO JSON"})
  else
    res.json({"message": "Hello json"})
})
/*/




module.exports = app;


/*

Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object req.body. Have a look at the usual library example:

route: POST '/library'
urlencoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}
Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.

*/