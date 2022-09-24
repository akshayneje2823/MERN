const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { response } = require('express');
const app = express();

dotenv.config({ path: './config/.env' });
let Port = process.env.PORT
let Mongo_Url = process.env.MNGO_URL

app.get('/', (req, res) => {
    res.send("<h1>This is working fine</h1>")
})

mongoose.connect(Mongo_Url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((response) => {
    console.log("Mongodb connection successfull")
}).catch(() => {
    console.log("Unable to Connect")
})

app.listen(4500, (err) => {
    if (err) throw err;
    console.log("Server is running on port")
})