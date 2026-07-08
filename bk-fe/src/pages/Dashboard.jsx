import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Collection from "../components/sections/Collection";
import Testimonial from "../components/sections/Testimonial";

// 1. Import Custom Hook useScroll (sesuaikan arah foldermu)
import useScroll from "../hooks/useScroll"; 

export default function Dashboard() {
  // 2. Panggil hook-nya di sini
  const isScrolled = useScroll();

  return (
    // 3. Kamu bisa memanfaatkan nilainya di sini, contohnya:
    // Jika di-scroll, background berubah sedikit atau tetap.
    <div className="bg-[#15130F] min-h-screen transition-colors duration-300">
      
      {/* Kamu juga bisa mengoper status isScrolled ini sebagai props ke Navbar jika dibutuhkan */}
      <Navbar isScrolled={isScrolled} />
      
      <Hero />
      <Collection />
      <Testimonial />
      <Footer />
    </div>
  );
}