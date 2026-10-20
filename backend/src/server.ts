// importera
// inställningar
// middleware
// endpoints och router-moduler
// starta servern

import express from 'express'
import { type Express } from 'express'
import { getPort } from './utils.ts'
import { logger } from './middleware.ts'
import productRouter from './routes/products.ts'


const app: Express = express()
const port: number = getPort()


// express.static utgår från mappen som startade processen - alltså mappen där package.json ligger - alltså /backend
app.use(express.static('../frontend/dist/'))
app.use('/', logger)
// express.json för body, express.static för frontend, cors

app.use('/api/products', productRouter)


app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`)
})
