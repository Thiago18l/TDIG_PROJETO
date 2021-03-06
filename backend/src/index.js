const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()


const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})