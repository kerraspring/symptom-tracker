const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// use .env file

// require("./config/passport")(passport);

// connectDB()

// app.use session, passport

// use public folder

// GETs

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
