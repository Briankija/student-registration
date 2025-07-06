import { Link } from "@tanstack/react-router";

function Header() {
	return (
		<nav className="text-3xl font-bold  text-green-600 font-lobster ">
			<Link to={"/"}>
				<div className="flex items-center n"></div>
			</Link>
		</nav>
	);
}

export default Header;
