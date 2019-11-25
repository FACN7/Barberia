const express = require('express');
const queries = require('../queries');
const router = express.Router();
const path = require('path');

router.get('/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
router.get('/getAllBookings', (req,res) => {
    queries.getAllBookings()
    .then(bookings=> bookings.rows)
    .then(rows=> res.json(rows))
    .catch(err=> console.log(err));   
});

router.get('*', (req,res) =>{
    console.log("you arrived at a none query page");
    res.sendFile(path.join(__dirname+'/barberia/build/index.html'));
});


module.exports = router;