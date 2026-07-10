import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard/page";
import About from "./about/page";
import Technology from "./technology/page";
import Collection from "./collection/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route path="/technology" element={<Technology />} />

        <Route path="/collection/:category" element={<Collection />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;