const env = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const {taskRouter} = require('./routes/tasks.routers');

env.config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const app = express();

app.use(bodyParser.json());
app.use('/notes', taskRouter);
app.listen(port, () => {
    console.log(`Server listening at: http://${host}:${port}`);
});