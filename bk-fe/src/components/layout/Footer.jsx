import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";
import SiTokopedia from "../../assets/tokopedia.jpg";
import { companyApi } from "../../services/company";

const API_URL = "http://localhost:3000";

export default function Footer() {
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

  if (!company) return null;

  return (
    <footer className="border-t border-stone-200 bg-[#FAF9F5] pt-20 pb-10 text-stone-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <img
              src={`${API_URL}${company.logo}`}
              alt={company.name}
              className="h-16 w-auto object-contain self-start"
            />

            <div className="mt-2">
              <h4 className="text-lg font-bold">{company.name}</h4>

              <p className="text-sm font-medium text-stone-500">
                {company.tagline}
              </p>
            </div>

            <p className="mt-2 max-w-sm whitespace-pre-line text-sm leading-relaxed text-stone-600">
              {company.address}
            </p>
          </div>

          {/* Koleksi */}
          <div>
            <h4 className="mb-5 text-base font-bold uppercase tracking-wide">
              Koleksi
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-stone-600">
              <li>
                <a href="#retail" className="hover:text-black">
                  Retail
                </a>
              </li>

              <li>
                <a href="#hospitality" className="hover:text-black">
                  Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="mb-5 text-base font-bold uppercase tracking-wide">
              Informasi
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-stone-600">
              <li>
                <a href="#about">Tentang Kami</a>
              </li>

              <li>
                <a href="#exhibition">Pameran</a>
              </li>

              <li>
                <a href="#warranty">Garansi</a>
              </li>

              <li>
                <a href="#service">Pusat Layanan</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="mb-4 text-base font-bold uppercase tracking-wide">
                Kontak Kami
              </h4>

              <div className="flex flex-col gap-3 text-sm text-stone-600">
                <div>
                  <strong>Whatsapp</strong>

                  <br />

                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    +{company.whatsapp}
                  </a>
                </div>

                <div>
                  <strong>Email</strong>

                  <br />

                  <a href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide">
                Social Media
              </h4>

              <div className="flex gap-3">
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition hover:opacity-80"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition hover:opacity-80"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href={company.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition hover:opacity-80"
                >
                  <FaTiktok size={18} />
                </a>
              </div>

              <h4 className="mt-6 mb-3 text-sm font-bold uppercase tracking-wide">
                Market Places
              </h4>

              <div className="flex gap-3">
                <a
                  href={company.tokopedia}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#42B549] text-white transition hover:opacity-80"
                >
                  <img
                    src={SiTokopedia}
                    alt="Tokopedia"
                    className="h-5 w-5 object-contain"
                  />
                </a>

                <a
                  href={company.shopee}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EE4D2D] text-white transition hover:opacity-80"
                >
                  <SiShopee size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full bg-black py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-stone-400">
          Copyright © 2026 All Rights Reserved. | Cahaya Buana Group
        </div>
      </div>
    </footer>
  );
}