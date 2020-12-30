const express = require("express");
const bodyParser = require("body-parser");
const { validationResult } = require('express-validator/check');
const { userValidator } = require('./services/validators')
const cors = require("cors");
const UserController = require('./controllers/user.controller')

const app = express();

const db = require("./models");
db.sequelize.sync()
var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "Welcome to bezkoder application." });
});

app.post("sign-up", userValidator, UserController.create )

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});