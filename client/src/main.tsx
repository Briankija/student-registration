import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Registration from "./registration";
import Profile from "./profile";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Profile />
	</StrictMode>,
);
