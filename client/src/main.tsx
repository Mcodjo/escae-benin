import { createRoot } from "react-dom/client";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App from "./App";
import "./index.css";

// Configure FontAwesome to prevent CSS loading issues
config.autoAddCss = false;

console.log("🔧 main.tsx loaded");

const rootElement = document.getElementById("root");
console.log("📦 Root element:", rootElement);

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

console.log("🎨 Rendering App...");
createRoot(rootElement).render(<App />);
