import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";

import CompanyPage from "./modules/company/CompanyPage";
import HeroPage from "./modules/hero/HeroPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import CollectionCategoryPage from "./modules/collection-category/CollectionCategoryPage";
import CollectionPage from "./modules/collection/CollectionPage";
import CollectionDetailPage from "./modules/collection-detail/CollectionDetailPage"
import ProductPage from "./modules/product/ProductPage";
import ProductGalleryPage from "./modules/product-gallery/ProductGalleryPage";
import ProductDescriptionPage from "./modules/product-description/ProductDescriptionPage";
import ProductSpecificationPage from "./modules/product-specification/ProductSpecificationPage";
import ProductTechnologyPage from "./modules/product-technology/ProductTechnologyPage";
import TechnologyPage from "./modules/technology/TechnologyPage";
import DreamBetterPage from "./modules/dream-better/DreamBetterPage";
import DreamBetterSectionPage from "./modules/dream-better-section/DreamBetterSectionPage";
import ExhibitionPage from "./modules/exhibition/ExhibitionPage"
import DealerPage from "./modules/dealer/DealerPage"
import ContactPage from "./modules/contact/ContactPage"
import TestimonialPage from "./modules/testimonial/TestimonialPage";
import AboutBrandPage from "./modules/about-brand/AboutBrandPage"
import AboutCompanyPage from "./modules/about-company/AboutCompanyPage";
import ServiceCenterPage from "./modules/service-center/ServiceCenterPage";
import ServiceSettingPage from "./modules/service-setting/ServiceSettingPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>

        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/company" element={<CompanyPage />} />

          <Route path="/hero" element={<HeroPage />} />

          <Route path="/collection-category" element={<CollectionCategoryPage />} />

          <Route path="/collection" element={<CollectionPage />} />

          <Route path="/collection-detail" element={<CollectionDetailPage />} />

          <Route path="/product" element={<ProductPage />} />

          <Route path="/product" element={<ProductPage />} />

          <Route path="/product-gallery" element={<ProductGalleryPage />}/>

          <Route path="/product-description" element={<ProductDescriptionPage />}/>

          <Route path="/product-specification" element={<ProductSpecificationPage />}/>

          <Route path="/product-technology" element={<ProductTechnologyPage />}/>

          <Route path="/technology" element={<TechnologyPage />}/>

          <Route path="/dream-better" element={<DreamBetterPage />}/>

          <Route path="/dream-better-section" element={<DreamBetterSectionPage />}/>

          <Route path="/exhibition" element={<ExhibitionPage />}/>

          <Route path="dealer" element={<DealerPage />}/>

          <Route path="contact" element={<ContactPage />}/>

          <Route path="testimonial" element={<TestimonialPage />}/>

          <Route path="about-company" element={<AboutCompanyPage />}/>

          <Route path="about-brand" element={<AboutBrandPage />}/>

          <Route path="/service-center" element={<ServiceCenterPage />}/>
          
          <Route path="/service-setting" element={<ServiceSettingPage />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;