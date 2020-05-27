const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
app.use(bodyParser.json());

//watch for post event
app.post('/events', (req, res) => {
    const event = req.body;

    axios.post("http://localhost:7000/events", event);
    axios.post("http://localhost:7001/events", event);
    axios.post("http://localhost:7002/events", event);
    axios.post("http://localhost:7003/events", event);

    res.send({ status: "ok" });
});

app.listen(7005, () => {
    console.log("Now listening on port 7005")
});