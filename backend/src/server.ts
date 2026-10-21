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
import path from 'node:path'


const app: Express = express()
const port: number = getPort()
const distPath: string = path.resolve(import.meta.dirname, '../../../../frontend/dist')
// import.meta.dirname pekar på mappen som "server.ts" ligger i


// express.static utgår från mappen som startade processen - alltså mappen där package.json ligger - alltså /backend
// MEN det är bättre att använda path.resolve och import.meta.dirname
// app.use(express.static('../frontend/dist/'))
app.use(express.static(distPath))
app.use('/', logger)
// express.json för body, express.static för frontend, cors

app.use('/api/products', productRouter)

// Tala om för Chrome att den här webbservern inte stöder tekniken Workspaces i DevTools
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(404).end()
})

// Wildcard route: behövs för att React Router med BrowserRouter i frontend ska fungera!
app.use((req, res) => {
	// console.log('WILDCARD ROUTE!')
	res.sendFile('index.html', { root: distPath })
	// Windows använder backslash för sökvägar, alla andra forward slash
	// Win: C:\a\b\c
	// Mac/Linux: /usr/a/b/c
})


app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`)
})
