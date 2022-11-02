const path = require('path');

const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
    //req.url('/index.html');
    //next();
});


app.listen(port, () => {
    console.log(`NITC Student Hub is running on port ${port}`);
});
