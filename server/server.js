const express = require("express");
const app = express();
const mongoose = require('mongoose')
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const cors = require("cors");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth")
const symptomsRoutes = require("./routes/symptoms")
const PORT = process.env.PORT || 4000;


require("dotenv").config({ path: "./server/config/.env" });

// passport config
require("./config/passport")(passport);

connectDB()

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

// Setup Sessions - stored in MongoDB
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

// Setup Routes
app.use("/", mainRoutes);
app.use('/auth', authRoutes)
app.use('/symptom', symptomsRoutes)
app.get('/express_backend', (req, res) => { 
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});