var express = require('express');
var logger = require('morgan');
const webEngine = require("./config/webEngine")
const webRoutes = require("./routes/web")
const apiRoutes = require("./routes/api")
const connectionTest = require("./config/database")
const fileUpload = require('express-fileupload');
var app = express();

const port = 3308

// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

webEngine(app)

app.use("/", webRoutes)
app.use("/v1/api", apiRoutes)

connectionTest()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});