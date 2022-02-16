import express from 'express';
import routes from './src/routes/crmRoutes'

const app = express();

const PORT = 4000;

// passing routes
routes(app)

app.get('/', (req, res) => {
    res.send(`Node and express server on port ${PORT}`);
})

app.listen(PORT, (err, res) => {
    console.log(`server is running on port ${PORT}`);
});