import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/inter";
import "@fontsource/playfair-display";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
