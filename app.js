const express = require('express');
const app = express();
const port = 3000;

// console.log(app);


app.get ('/', (req,res) => {
    res.send('hello wolrd!')
})

app.listen(port, () => {
    console.log(`exaple app listening on port ${port}`);
    
})