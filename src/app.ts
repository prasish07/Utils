import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/error.handler.js";
import { notFound } from "./middleware/notFound.js";
import path from "path";
import { dirName } from "./helper/dirname.js";
import router from "./routes/component.route.js";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(dirName(), "public")));
app.use(express.static(path.join(dirName(), "src")));
app.use("/", router);
app.set("view engine", "ejs");

// not found
app.use(notFound);

// error handler
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
