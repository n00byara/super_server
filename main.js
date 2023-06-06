import express from 'express'
import config from './config/config.json' assert { type: 'json' }
import { router } from './routes/routes.js'

const app = express()

const port = process.env.port || config.port
const host = config.host

app.use(router)

try{
    app.listen(port, host, function() {
        console.log(`server listen at http://${host}:${port}`)
    })
} catch(error){
    console.log(error.stack)
}