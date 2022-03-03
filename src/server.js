const env = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const {tasksRouters} = require('./routes/task.routers');

env.config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const app = express();

app.use(bodyParser.json());
app.use('/lists', tasksRouters);
app.listen(port, () => {
    console.log(`Server listening at: http://${host}:${port}`);
});