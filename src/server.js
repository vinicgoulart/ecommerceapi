require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

const authRoute = require('./routes/authRoute');
const itemRoute = require('./routes/itemRoute');
const userRoute = require('./routes/userRoute');
const cartRoute = require('./routes/cartRoute');
const commentRoute = require('./routes/commentRoute');

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));

app.set('trust proxy', 1);
var oneDay = 60 * 60 * 24 * 1000;
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: oneDay }
}));

app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.URI, () => {
    console.log('Connected to database');
});

app.use(authRoute);
app.use('/item', itemRoute);
app.use('/user', userRoute);
app.use('/cart', cartRoute);
app.use('/comment', commentRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
});
