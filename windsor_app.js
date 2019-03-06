var morgan = require('morgan');
var appRoot = require('app-root-path');

var winston = require('./config/winston');


app.use(morgan('combined', { stream: winston.stream }));

