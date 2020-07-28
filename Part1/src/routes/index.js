const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    res.send('You are on the homepage');
});

router.post('/post', async (req,res) =>{
    console.log(req.body);
    const user = req.body['user'];
    res.send(`Welcome ${user}`);
});

router.delete('/delete', async (req,res) =>{
    console.log(req.body);
    const response = req.body;
    response['delete'] = true;
    console.log(response);
    res.send(response);
});

router.put('/put/:id', async (req,res) =>{
    console.log(`The id is: ${req.params['id']}`);
    res.send(`Task ${req.params['id']} has been updated`);
});

module.exports = router;