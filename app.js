const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");

//for security
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");

const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP.Please try after one hour",
});

app.use(express.static("client/build"));
const path = require("path");

//limiting requests from same api
app.use("/api/v1/users", limiter); //also if app get crashed it will automatically set limit to max

//setting security http headers
app.use(helmet());

//Data sanitization against NOSQL query injection
app.use(mongoSanitize());

//Data sanitization against xss attacks
app.use(xss());

app.use(hpp());

//

//to get data of requests body and limiting it to maximum 10kb
app.use(express.json({ limit: "10kb" }));
app.use(cors());
//to read cookie from request
app.use(cookieParser());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(compression());

//Routes middleware

app.use("/api/v1/users", userRouter);

app.get("*", (req, res) => {
  res.redirect(`${req.protocol}://${req.get("host")}`);
});
module.exports = app;
