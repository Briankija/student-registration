import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Registration from "./registration";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Registration />
	</StrictMode>,
);
