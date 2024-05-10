const express = require('express')
const app = express();
const path = require('path')

app.use(express.static('public'));


app.get('/', (req, res) => {
    // res.json({message: 'Hello Express'})
    res.sendFile(path.resolve("public/pages/index.html"));
});
app.listen(3002, () => {
    console.log('Server started on port 3002')
})