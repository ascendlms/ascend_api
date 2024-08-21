const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const db = require('./db.json')

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (request, response) => {
    response.json(db.students[request.params.id])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})