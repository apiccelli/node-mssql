import express from 'express'
import cors from 'cors'
import config from './config'

const app = express()
app.use(cors());
//app.use(express.json());

app.set('port', config.port || config.port_alternative)

export default app

