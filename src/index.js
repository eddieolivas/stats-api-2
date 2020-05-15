const express = require('express');
require('./db/mongoose');
const Location = require('./models/location');
const User = require('./models/user');
const locationRouter = require('./routers/location');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(locationRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log('COVID-19 stats API server is up on port ' + port);
});
