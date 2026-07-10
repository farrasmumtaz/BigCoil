import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Collection from "../components/sections/Collection";
import Testimonial from "../components/sections/Testimonial";

export default function page() {
  return (
    <div className="bg-[#15130F] min-h-screen transition-colors duration-300">
      <Navbar/>
      <Hero />
      <Collection />
      <Testimonial />
      <Footer />
    </div>
  );
}