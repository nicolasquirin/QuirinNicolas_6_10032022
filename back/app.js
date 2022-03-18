const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

//
//SECURITY
//

// assainit les entrées contre les attaques par injection SQL
const filter = require("content-filter");
const mongoSanitize = require("express-mongo-sanitize");

// Définit quatre en-têtes, désactivant une grande partie de la mise en cache navigateur
const nocache = require("nocache");

// Configure de manière appropriée les en-têtes HTTP - Helmet version 4.6.0 / Au dela = (ERR_BLOCKED_BY_RESPONSE)
const helmet = require("helmet");

// Connection MongoDB
mongoose
  .connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(helmet());
app.use(nocache());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);
app.use(filter()); // Block les $ et non les {

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", userRoutes);

app.use("/api/sauces", sauceRoutes);

module.exports = app;
