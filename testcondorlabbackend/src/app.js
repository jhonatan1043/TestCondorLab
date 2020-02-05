const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');

// instance of express
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParse.urlencoded({ 'extended': false }));
app.use(bodyParse.json());
app.use(cors());

// settings
app.set('Port', process.env.PORT || 3000);

// routes
require('./routes/userRouters')(app);
require('./routes/taskRouters')(app);

app.listen(app.get('Port'), () => {
  console.log('server started on port ' + app.get('Port'));
})