const express = require("express");
const {userValidator, loginValidator} = require('./services/validators')
const UserController = require('./controllers/user.controller')

const app = express();

const db = require("./models");
db.sequelize.sync().then(console.log).catch(console.log)

app.use(express.json({extended: true}));

app.get("/", (req, res) => {
	res.json({message: "Welcome to application."});
});

app.post("/sign-up", userValidator, UserController.create)
app.post("/sign-in", loginValidator, UserController.login )
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});