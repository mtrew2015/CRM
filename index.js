import express from 'express';

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`Node and express server on port ${PORT}`);
})

app.listen(PORT, (err, res) => {
    console.log(`server is running on port ${PORT}`);
});