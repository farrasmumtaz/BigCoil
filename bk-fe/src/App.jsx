import { Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard/page";
import About from "./about/page";
import Technology from "./technology/page";
import Collection from "./collection/page";
import CollectionDetailPage from "./collection-detail/page";
import ProductPage from "./product/page";
import DealerPage from "./dealer/page";
import ContactPage from "./contact/page";
import ExhibitionPage from "./exhibition/page";
import DreamBetterPage from "./dream-better/page";
import DreamBetterDetailPage from "./dream-better-detail/page";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route path="/technology" element={<Technology />} />

        <Route path="/collection/:category" element={<Collection />} />

        <Route path="/collection/:categorySlug/:collectionSlug" element={<CollectionDetailPage />}/>

        <Route path="/collection/:categorySlug/:collectionSlug/:productSlug" element={<ProductPage />}/>

        <Route path="/dealer" element={< DealerPage/>} />
        
        <Route path="/contact" element={<ContactPage />}/>

        <Route path="/exhibition" element={<ExhibitionPage />}/>

        <Route path="/dream-better" element={<DreamBetterPage />}/>

        <Route path="/dream-better/:slug" element={<DreamBetterDetailPage />}/>
      </Routes>
  );
}

export default App;