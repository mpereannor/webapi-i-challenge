// implement your API here
const express = require('express');
const cors = require('cors');

//const db = require('./data/migrations');

const app = express();

app.use(cors());
app.use(express.json());

app.get ( '*', handleDefaultRequest);

function handleDefaultRequest(req, res) { 
    res.json( 'hello world');
}

app.listen(process.env.PORT || 3200, () => { 
    console.log('listening on ' + (process.env.PORT || 3200));
})


/*
server.get(' /hobbits', (req, res ) => {
    res.send('welcome to hobbiton');
});

server.post('/hobbits', (req, res ) => {
    res.status(201).json()
})

server.get('/', ( req, res ) => { 
    res.send( 'hello world');
});

/*

server.get('/', ( req, res ) => {
    const endpointer = [
        {

        }
    ]    

    res.status(200).json(endpointer);
})
*/
/*
server.listen( 8000, () => console.log( 'API running on port 8000'));
*/