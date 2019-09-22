import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// console.log(process.env.START_MESSAGE)

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT, () => {
    console.log(`>> App starts on port ${process.env.PORT}`)
})
// "start": "node --inspect=5858 -r ts-node/register ./src/server.ts"
