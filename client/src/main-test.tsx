import { createRoot } from "react-dom/client";

console.log("🔧 TEST main.tsx loaded");

const rootElement = document.getElementById("root");
console.log("📦 Root element:", rootElement);

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

function TestApp() {
  console.log("🎨 TestApp rendering");
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1 style={{ color: "#004AAD", fontSize: "32px" }}>ESCAE Bénin - Test</h1>
      <p>Si vous voyez ce message, React fonctionne !</p>
      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "white", border: "2px solid #004AAD" }}>
        <p>✅ React: OK</p>
        <p>✅ Rendering: OK</p>
        <p>✅ Styles inline: OK</p>
      </div>
    </div>
  );
}

console.log("🎨 Rendering TestApp...");
createRoot(rootElement).render(<TestApp />);
