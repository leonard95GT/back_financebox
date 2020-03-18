var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var activityRouter = require('./routes/activity')
var clientRouter = require('./routes/client')
var financePlanRouter = require('./routes/finance_plan')
var paymentRouter = require('./routes/payment')
var projectionRouter = require('./routes/projection')
var salesRouter = require('./routes/sales')
var distributionRouter = require('./routes/distribution_channel')
var taxRouter = require('./routes/tax')
var salaryRouter = require('./routes/salary_position')
var expenseRouter = require('./routes/expense')
var variableCost = require('./routes/variable_cost')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/activity', activityRouter);
app.use('/client', clientRouter);
app.use('/finance-plan', financePlanRouter);
app.use('/payment', paymentRouter);
app.use('/projection', projectionRouter);
app.use('/sales', salesRouter);
app.use('/distribution', distributionRouter);
app.use('/tax', taxRouter)
app.use('/salary', salaryRouter)
app.use('/expense', expenseRouter)
app.use('/variable-cost', variableCost)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
