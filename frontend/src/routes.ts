import type { RouteObject } from "react-router"
import Root from "./pages/Root"
import ProductView from "./pages/ProductView"
import AboutView from "./pages/AboutView"


const routerConfig: RouteObject[] = [
	{
		path: '/',  // man kan också skriva:  index: true
		Component: Root,
		children: [
			{
				path: '/',
				Component: ProductView
			},
			{
				path: '/about',
				Component: AboutView
			}
		]
	}
]


export { routerConfig }
