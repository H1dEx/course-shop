const express = require("express");

const app = express();

const db = require("./models");
db.sequelize.sync().then(console.log).catch(console.log)

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))

app.get("/", (req, res) => {
    res.json({message: "Welcome to application."});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});