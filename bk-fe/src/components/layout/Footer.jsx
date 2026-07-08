import logo from "../../assets/Logo.png"; // Pastikan 'L' besar sesuai dengan di Navbar Anda

import fbIcon from "../../assets/facebook.png";
import igIcon from "../../assets/instagram.png";
import ttIcon from "../../assets/tik-tok.png";
import tokpedIcon from "../../assets/tokopedia.jpg";
import shopeeIcon from "../../assets/shopee.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F5] text-stone-800 pt-20 pb-10 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Kolom 1: Profil Perusahaan */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <img src={logo} alt="BigKoil Logo" className="h-16 w-auto object-contain self-start" />
            <div className="mt-2">
              <h4 className="font-bold text-lg">PT. Cahaya Buana Furindotama</h4>
              <p className="text-sm font-medium text-stone-500">Part of Cahaya Buana Group</p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm mt-2">
              Jl. Panel 1 Kav 5 – 6 Kawasan Propindo Gemilang Sentul<br />
              Kp. Parung Jambu, Sentul, Kec. Babakan Madang, Kabupaten Bogor,<br />
              Jawa Barat 16810
            </p>
          </div>

          {/* Kolom 2: Koleksi */}
          <div>
            <h4 className="font-bold text-base mb-5 tracking-wide uppercase text-stone-900">Koleksi</h4>
            <ul className="flex flex-col gap-3 text-sm text-stone-600">
              <li><a href="#retail" className="hover:text-stone-900 transition">Retail</a></li>
              <li><a href="#hospitality" className="hover:text-stone-900 transition">Hospitality</a></li>
            </ul>
          </div>

          {/* Kolom 3: Informasi */}
          <div>
            <h4 className="font-bold text-base mb-5 tracking-wide uppercase text-stone-900">Informasi</h4>
            <ul className="flex flex-col gap-3 text-sm text-stone-600">
              <li><a href="#about" className="hover:text-stone-900 transition">Tentang Kami</a></li>
              <li><a href="#exhibition" className="hover:text-stone-900 transition">Pameran</a></li>
              <li><a href="#warranty" className="hover:text-stone-900 transition">Garansi</a></li>
              <li><a href="#service" className="hover:text-stone-900 transition">Pusat Layanan</a></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak, Sosmed & Marketplace */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold text-base mb-4 tracking-wide uppercase text-stone-900">Kontak Kami</h4>
              <div className="text-sm text-stone-600 flex flex-col gap-2">
                <p><strong>Whatsapp :</strong><br />+62 852-1587-8059</p>
                <p className="mt-2"><strong>Email :</strong><br /><a href="mailto:cs.bigkoil@cahayabuana.co.id" className="hover:underline">cs.bigkoil@cahayabuana.co.id</a></p>
              </div>
            </div>

            {/* Tombol Sosial Media Berbasis Teks/Kotak Hitam */}

            <div>
              <h4 className="font-bold text-sm mb-3 tracking-wide uppercase text-stone-900">Social Media</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61570591191315" className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:opacity-80 transition p-2.5">
                  <img src={fbIcon} alt="Facebook" className="w-full h-full object-contain invert" />
                </a>
                <a href="https://www.instagram.com/bigkoil.springbed/" className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:opacity-80 transition p-2.5">
                  <img src={igIcon} alt="Instagram" className="w-full h-full object-contain invert" />
                </a>
                <a href="https://www.tiktok.com/@bigkoilspringbedofficial" className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:opacity-80 transition p-2.5">
                  <img src={ttIcon} alt="TikTok" className="w-full h-full object-contain invert" />
                </a>
              </div>

              {/* Bagian Marketplaces menggunakan Image */}
              <h4 className="font-bold text-sm mb-3 mt-5 tracking-wide uppercase text-stone-900">Market Places</h4>
              <div className="flex gap-4 items-center">
                <a href=" https://www.tokopedia.com/biglandspringbed" className="hover:scale-105 transition w-12 h-12">
                  <img src={tokpedIcon} alt="Tokopedia" className="w-full h-full object-contain" />
                </a>
                <a href="https://shopee.co.id/biglandspringbed" className="hover:scale-105 transition w-12 h-12">
                  <img src={shopeeIcon} alt="Shopee" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-black py-4 mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center text-xs text-stone-400">
          Copyright © 2026 All Rights Reserved. | Cahaya Buana Group
        </div>
      </div>
    </footer>
  );
}