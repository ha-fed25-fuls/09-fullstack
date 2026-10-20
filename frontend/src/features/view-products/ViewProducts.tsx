import { productListSchema, type Product } from "../../../../packages/shared/src/schema"
import { useStore } from "../../data/store"
import './ViewProducts.css'


const ViewProducts = () => {
	const products: Product[] = useStore(store => store.products)
	const setProducts = useStore(store => store.setProducts)

	const handleGet = async () => {
		// Kom ihåg: stäng av knappen medan vi väntar på svaret, så användaren inte kan skicka flera request
		try {
			const response = await fetch('/api/products')
			// kolla response.status om det är viktigt för oss
			if( !response.ok ) throw new Error(`Statuskod inte ok: ${response.status}.`)

			const data: unknown = await response.json()
			const parsed = productListSchema.safeParse(data)
			if( !parsed.success ) {
				throw new Error(`Data from API is not a proper list of products: ${parsed.error.message}`)
			}

			setProducts(parsed.data)

		} catch(error: unknown) {
			const message: string = (error instanceof Error) ? error.message : String(error)
			console.log(message)
			return
		}
		// Kom ihåg: återställ knappen i finally
	}

	// console.log('API data:', products)
	
	return (
		<div>
			<button onClick={handleGet}> Hämta produkter </button>
			
			<div className="product-list">
				{products.map(p => (
					<div key={p.id}>
						<p> {p.name} ... {p.price} kr </p>
						<p> Ingredienser: {p.ingredients.join(', ')}. </p>
					</div>
				))}
			</div>
		</div>
	)
}
export default ViewProducts
