const express = require('express');
const app = express();
const port = 3000;


console.log(__dirname)

app.use(express.static(__dirname + '/../dist'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// /Users/ryanbrennan/Desktop/Cover Letters/num2Eng/dist