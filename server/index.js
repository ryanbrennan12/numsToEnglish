const express = require('express');
const app = express();
const port = 3000;


console.log(__dirname)

app.use(express.static(__dirname + '/../dist'));

app.listen(port, () => console.log(`listening on http://localhost:${port}!`))


