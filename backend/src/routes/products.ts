
import express, { type Router } from 'express'
import { type Product } from '../../../packages/shared/src/schema.ts'

const router: Router = express.Router()


const testData: Product[] = [
	{ id: '1', name: 'Barkis', price: 320, ingredients: ['luft', 'bôs'] },
	{ id: '2', name: 'Kanelbulle', price: 35, ingredients: ['kanel', 'bulle', 'sågspån'] },
]

// GET /api/products
// URL params, response body, request body
router.get<{}>('/', (req, res) => {
	res.send(testData)
	// Här hade vi hämtat från AWS DynamoDB
})


export default router
