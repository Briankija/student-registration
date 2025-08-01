import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Index from "./routes/index.lazy.tsx";
import Sample from "./routes/sample.lazy.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Sample />
	</StrictMode>,
);
