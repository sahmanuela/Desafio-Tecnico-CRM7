import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/user'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/user', userController)

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})