import { create } from 'zustand'
import { type Product } from '../../../packages/shared/src/schema'


type Store = {
	products: Product[];
	setProducts: (ps: Product[]) => void;
}

const useStore = create<Store>(set => ({
	products: [],
	setProducts: ps => { set({ products: ps }) }
}))

export { useStore }
