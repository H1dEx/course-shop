const express = require("express")
const db = require("./models")

const app = express()

db.sequelize.sync()
    .then(()=>console.log('DB started'))
    .catch(console.log);

app.use(express.static(__dirname+ '/static'));
app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/profile', require('./routes/profile.routes'))
app.use('/courses', require('./routes/courses.routes'))
app.use('/categories', require('./routes/categories.routes'))
app.use('/sources', require('./routes/sourse.routes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
