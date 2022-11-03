const express = require('express');

const app = express();

const port = 3001;

app.use(express.static('public'));
app.use(express.json())

const db = require('./models')

// app.get('/', (req, res, next) => {
//     req.url('/index.html');
//     next();
// });

// Routers

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const LastKnownRouter = require('./routes/LastKnown');
app.use("/lastKnown", LastKnownRouter);

const PriceRouter = require('./routes/Price');
app.use("/price", PriceRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`NITC Student Hub is running on port ${port}`);
    });
});
