const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(
    session({
        name: 'AuthCookie',
        secret: "This is a secret.. shhh don't tell anyone",
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: 60000 }
    })
);

app.use("*", (req, res, next) => {
  let status = "";
  if(req.session.user){
    status = "Authenticated User";
  }
  else{
    status = "Non-Authenticated User";
  }
  let output = `[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (${status})`;
  console.log(output);
  next();
});

app.use('/private', (req, res, next) => {
    //console.log(req.session.id);
    if (!req.session.user) {
      return res.status(403).render('posts/notLogin', {title: "not logged in", errors: "Error: user is not logged in"});
    } else {
      next();
    }
});

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});