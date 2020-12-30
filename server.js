const express = require("express");
const bodyParser = require("body-parser");
const {body, validationResult} = require('express-validator/check');
const cors = require("cors");

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

app.post("sign-up",[
	body('email').isEmail().normalizeEmail(),
	body('password').not().isEmpty().trim().isLength({min: 5}).withMessage('must be at least 5 chars long')
		.matches()
], (req, res, next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({errors: errors.array()})
	}
	res.send(req.body)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});