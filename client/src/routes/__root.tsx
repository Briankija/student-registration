import { createRootRoute, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../header";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<div>
				<Header />
				<Outlet />
			</div>
		</>
	);
}
