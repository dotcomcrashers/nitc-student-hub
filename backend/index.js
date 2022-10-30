const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    req.url('/index.html');
    next();
});


app.listen(port, () => {
    console.log(`NITC Student Hub is running on port ${port}`);
});
