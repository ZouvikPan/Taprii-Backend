const express = require('express');



// Connect DB
require('./db/connection');

// Import files
const Users = require('./models/Users');


// App use
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.port || 8000;

// Routes
app.get('/', (req, res)=>{
    res.send('Welcome');
    res.end();
})

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})