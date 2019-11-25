const express = require('express');
const path = require('path');
const queries = require('./src/queries');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'barberia/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
app.get('/api/getAllBookings', (req,res) => {
    queries.getAllBookings()
    .then(bookings=> bookings.rows)
    .then(rows=> res.json(rows))
    .catch(err=> console.log(err));
    
});
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/barberia/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);