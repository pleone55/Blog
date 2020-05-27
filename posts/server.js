const express = require('express');
const bodyParser = require('body-parser');
//generate new id
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//store in memory
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

//generate a random id to attack to each post made
app.post('/posts', async(req, res) => {
    //4 bytes of random data
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    //attach the id to the post generated
    posts[id] = {
        id, 
        title
    };

    await axios.post("http://localhost:7005/events", {
        //set type of event being passed
        type: 'PostCreated',
        data: {
            id, 
            title
        }
    })

    //send back the data of the post attached to the id
    res.status(201).send(posts[id]);
});

//post request to determine the event has been recieved
app.post("/events", (req, res) => {
    console.log("Recieved Event", req.body.type);
    res.send({});
})

app.listen(7000, () => {
    console.log("Listening on port 7000")
});