// # Importing Libraries
import express from "express";
import path from "path";

// # Importing dependencies
import countriesRouter from "./routes/countries.js";
import countriesAPIRouter from "./routes/countriesAPI.js";

// # Set up ExpressJS Server
const app = express();
const PORT = process.env.PORT || 8000;

// # configure json response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// # set static directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// # configure and connect routes
app.use("/api/v1/countries/", countriesAPIRouter);
app.use("/countries/", countriesRouter);

// # activate listener
app.listen(PORT, () => {
  console.log(
    `\nServer listening on port ${PORT}\nPress CTRL+C to stop the server`
  );
});
