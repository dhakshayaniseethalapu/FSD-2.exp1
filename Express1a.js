//Import Express
const express = require('express'); 
//create Express App
//(Used to define Routes)
const app = express();
//Define a Route(Home Route)
app.get('/', (req, res) => {
     res.send('Welcome to Home Page!');
});

//Route parameters
app.get('/user/:userId', (req, res) => { 
    const userId = req.params.userId;
     res.send('User ID: ' + userId);
});

//Query Parameters
app.get('/search', (req, res) => { 
    const term = req.query.term;
    const userId = req.query.userId; if(term){
res.send('You searched for:' + term);
}
else if(userId){
res.send('You searched for:' + userId);
}
else{
res.send('You did not search for anything');
}
})
//Start server
app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
