import { NavLink, Outlet } from "react-router"

const Root = () => (
	<div className="">
		<header>
			<h1> Bageriet Bullen </h1>
			<nav>
				<NavLink to="/"> Våra bakverk </NavLink>
				<NavLink to="/about"> Om oss </NavLink>
			</nav>
		</header>
		<main>

			<Outlet />

		</main>
		<footer>
			Hejdå! 👋
		</footer>
	</div>
)

export default Root
