const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:481TITHx1yPprqxP@gchc-stats-5lrgz.mongodb.net/gchc-stats-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});