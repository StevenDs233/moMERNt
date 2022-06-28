import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://dev:n4qCdwPiG4XC1uJg@cluster0.ackhx.mongodb.net/?retryWrites=true&w=majority'


// https://