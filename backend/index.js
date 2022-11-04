const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.json())

const db = require('./models')

// Routers

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const LastKnownRouter = require('./routes/LastKnown');
app.use("/lastKnown", LastKnownRouter);

const PriceRouter = require('./routes/Price');
app.use("/price", PriceRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`NITC Student Hub is running on port ${port}`);
    });
});
