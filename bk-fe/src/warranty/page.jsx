import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Warranty from "../components/sections/Warranty";

export default function WarrantyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Warranty />
      </main>
      <Footer />
    </>
  );
}