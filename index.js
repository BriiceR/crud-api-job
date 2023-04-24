const express = require('express');

const PORT = 8080;

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require("./router");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


