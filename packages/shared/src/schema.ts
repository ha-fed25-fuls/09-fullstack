import * as z from 'zod'

const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	ingredients: z.array(z.string())
})

export const productListSchema = z.array(productSchema)

export type Product = z.infer<typeof productSchema>
/*{
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}*/
