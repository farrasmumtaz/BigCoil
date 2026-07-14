import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { companyApi } from "../../services/company";

import useScroll from "../../hooks/useScroll";
const API_URL = "http://localhost:3000";
const menus = [
  { name: "Tentang Kami", path: "/about" },
  { name: "Teknologi", path: "/technology" },
  { name: "Dream Better", path: "/dream-better" },
  { name: "Pameran", path: "/exhibition" },
  { name: "Dealer", path: "/dealer" },
  { name: "Kontak Kami", path: "/contact" },
];

const collections = [
  { name: "Retail", path: "/collection/retail" },
  { name: "Hospitality", path: "/collection/hospitality" },
];

export default function Navbar() {
  const scrolled = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const data = await companyApi.get();
        setCompany(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompany();
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/">
          {company?.logo && (
            <img
              src={`${API_URL}${company.logo}`}
              alt="BigKoil"
              className="h-12 object-contain"
            />
          )}
        </Link>
        {/* ... */}

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {/* Dropdown Menu dengan Jembatan Padding Aman */}
          <div
            className="relative py-2" // Ditambahkan padding vertikal sebagai jembatan kursor
            onMouseEnter={() => setCollectionOpen(true)}
            onMouseLeave={() => setCollectionOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-stone-700 hover:text-[#9BCFF2] transition">
              Koleksi
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${collectionOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {collectionOpen && (
              <div className="absolute top-full left-0 w-52 pt-2">
                {/* Pembungkus luar menggunakan pt-2 untuk menjaga jarak visual, namun elemen HTML tetap tersambung */}
                <div className="rounded-xl bg-white shadow-xl border border-stone-100 overflow-hidden">
                  {collections.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setCollectionOpen(false)}
                      className="block px-5 py-3 text-stone-700 hover:bg-[#F5F5F5] hover:text-[#9BCFF2] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {menus.map((menu) => (
            <NavLinkItem key={menu.name} to={menu.path} title={menu.name} />
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-stone-800"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header >

      {/* Mobile Menu Panel */ }
  {
    mobileOpen && (
      <div className="fixed top-20 left-0 z-40 w-full bg-white shadow-lg lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className="px-6 py-4 font-bold text-stone-800 border-b border-stone-100 bg-stone-50">
          Koleksi
        </div>
        {collections.map((item) => (
          <LinkItem
            key={item.name}
            to={item.path}
            text={item.name}
            close={setMobileOpen}
            indent
          />
        ))}

        <div className="px-6 py-2 mt-2 font-bold text-stone-400 text-xs uppercase tracking-wider">
          Menu Utama
        </div>
        {menus.map((menu) => (
          <LinkItem
            key={menu.name}
            to={menu.path}
            text={menu.name}
            close={setMobileOpen}
          />
        ))}
      </div>
    )
  }
    </>
  );
}

function NavLinkItem({ to, title }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium transition hover:text-[#9BCFF2] ${isActive ? "text-[#9BCFF2]" : "text-stone-700"
        }`
      }
    >
      {title}
    </NavLink>
  );
}

function LinkItem({ to, text, close, indent = false }) {
  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className={`block border-b border-stone-100 py-4 text-stone-700 hover:text-[#9BCFF2] font-medium transition-colors ${indent ? "pl-12 bg-stone-50/50" : "px-6"
        }`}
    >
      {text}
    </Link>
  );
}