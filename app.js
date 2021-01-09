const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser({ urlextended: false }));

app.get('/', (req, res) => {
    res.send("Working!");
});

app.listen(process.env.PORT || 8080, () => console.log('Server listening on: http://localhost:8080'));