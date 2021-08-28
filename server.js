import express from "express";
import React from 'react'
import {renderToString} from "react-dom/server"
const ejs = require("ejs").__express;

import InputComponent from "./components/input"

// Server var
const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.engine('.ejs', ejs);

// Middleware
// app.use(compression());
console.log(__dirname);
app.use(express.static(__dirname));

//Routes
app.get("/", async (req, res) => {
    let reactComp = renderToString(<InputComponent />);
    res.status(200).render('index', {reactApp: reactComp});
});

const port = process.env.PORT || 3000;

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
});