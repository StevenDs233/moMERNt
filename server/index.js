import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Avoid committing with credentials. Always revert to <password>.
const CONNECTION_URL =
  "mongodb+srv://dev:<password>@cluster0.ackhx.mongodb.net/?retryWrites=true&w=majority";
// Locally run on 5051.
const PORT = process.env.PORT || 5051;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log("Server running on PORT " + PORT))
  )
  .catch((error) => console.log(error.message));

// https://
