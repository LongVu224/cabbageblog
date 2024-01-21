let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportJWT = require("passport-jwt"),
    user = require('./database/user'),
    path = require('path');

const blogApi = require('./routes/blog.routes')
const userApi = require('./routes/user.routes')
const subcribeApi = require('./routes/subcribe.routes')

const JWTStrategy = passportJWT.Strategy

// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not be connected: ' + error)
    }
)

const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/subcribe', subcribeApi)
app.use('/blog', blogApi)
app.use('/', userApi)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

passport.use(new LocalStrategy({
    usernameField: "username"
  }, (username, password, done) => {
    if(username === user.username && password === user.password) {
      return done(null, user)
    }else {
      return done(null, false)
    }
  }))
  
  passport.use(new JWTStrategy({
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "jwt_secret"
  }, (jwt_payload, done) => {
    if(user.id === jwt_payload.user._id){
      return done(null, user)
    } else {
      return done(null, false, {
        message: "Token not matched"
      })
    }
  }))

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});