"use client";

import { useEffect, useState } from "react";
import {
    ChevronRight,
    ChevronDown,
    ShieldCheck,
    ClipboardCheck,
    HeartHandshake,
} from "lucide-react";
import { warrantyApi } from "../../services/warranty";
import { warrantyItemApi } from "../../services/warranty-item";

const API_URL = import.meta.env.VITE_API_URL;

const INTRO_HIGHLIGHTS = [
    {
        icon: ShieldCheck,
        title: "Hingga 15 Tahun",
        desc: "Masa garansi pegas matras Big Koil, berlaku sejak tanggal pembelian pada faktur.",
    },
    {
        icon: ClipboardCheck,
        title: "Registrasi Mudah",
        desc: "Lengkapi formulir pendaftaran dan lampirkan bukti pembelian dari toko/dealer.",
    },
    {
        icon: HeartHandshake,
        title: "Layanan",
        desc: "Tim layanan pelanggan siap membantu proses klaim garansi Anda.",
    },
];

function Flourish({ className = "" }) {
    return (
        <svg width="120" height="16" viewBox="0 0 120 16" className={className} fill="none">
            <line x1="0" y1="8" x2="46" y2="8" stroke="#B8935F" strokeWidth="1" />
            <path d="M60 2 L66 8 L60 14 L54 8 Z" fill="#B8935F" />
            <line x1="74" y1="8" x2="120" y2="8" stroke="#B8935F" strokeWidth="1" />
        </svg>
    );
}

function parseDescription(text) {
    if (!text) return [];

    const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

    const blocks = [];
    let currentList = [];

    lines.forEach((line) => {
        const isBullet = /^[-•*]\s+/.test(line);
        if (isBullet) {
            currentList.push(line.replace(/^[-•*]\s+/, ""));
        } else {
            if (currentList.length) {
                blocks.push({ type: "list", items: currentList });
                currentList = [];
            }
            blocks.push({ type: "p", text: line });
        }
    });

    if (currentList.length) blocks.push({ type: "list", items: currentList });

    return blocks;
}

function RichText({ text }) {
    const blocks = parseDescription(text);

    return (
        <div className="space-y-4">
            {blocks.map((block, i) =>
                block.type === "list" ? (
                    <ul key={i} className="space-y-2.5">
                        {block.items.map((item, j) => (
                            <li key={j} className="flex gap-3 leading-8 text-[#6B5F4A] lg:text-lg">
                                <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#B8935F]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p key={i} className="leading-8 text-[#6B5F4A] lg:text-lg">
                        {block.text}
                    </p>
                )
            )}
        </div>
    );
}

export default function Warranty() {
    const [warranty, setWarranty] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            try {
                const [warrantyData, itemData] = await Promise.all([
                    warrantyApi.get(),
                    warrantyItemApi.getAll(),
                ]);

                if (ignore) return;

                setWarranty(Array.isArray(warrantyData) ? warrantyData[0] : warrantyData);
                setItems(itemData);
            } catch (err) {
                if (!ignore) console.error(err);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        fetchData();

        return () => {
            ignore = true;
        };
    }, []);

    if (loading) {
        return (
            <section className="flex h-screen items-center justify-center bg-[#FAF6EE] text-[#8A7550]">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#B8935F] border-t-transparent" />
                    <p className="text-xs uppercase tracking-[0.3em]">Memuat...</p>
                </div>
            </section>
        );
    }

    if (!warranty) return null;

    return (
        <section className="bg-[#FAF6EE]">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');`}</style>

            {/* ================= HERO — full screen ================= */}
            <div className="relative h-screen w-full overflow-hidden">
                <img
                    src={`${API_URL}${warranty.heroImage}`}
                    alt={warranty.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* layered gradient so both top nav and bottom copy stay legible */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 20%, #D9BD8F 0, transparent 40%)",
                    }}
                />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                    <div className="mb-6 flex items-center gap-3 text-[#D9BD8F]">
                        <ShieldCheck size={20} strokeWidth={1.5} />
                        <p className="text-xs uppercase tracking-[0.4em]">Jaminan Resmi Big Koil</p>
                    </div>

                    <h1
                        className="text-6xl font-medium text-white md:text-8xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {warranty.title}
                    </h1>

                    <Flourish className="mt-8" />
                </div>

                <button
                    onClick={() =>
                        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                    }
                    aria-label="Gulir ke bawah"
                    className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition hover:text-white"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Selengkapnya</span>
                    <ChevronDown size={20} className="animate-bounce" />
                </button>
            </div>

            {/* ================= INTRO ================= */}
            <div className="relative mx-auto max-w-6xl px-6 py-28">
                <div className="grid gap-16 text-center lg:grid-cols-12 lg:items-center lg:gap-x-16 lg:text-left">
                    <div className="lg:col-span-7">
                        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
                            Selamat Datang
                        </p>
                        <h2
                            className="mb-8 text-3xl font-medium text-[#2A2010] md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Kenyamanan yang Terjamin
                        </h2>
                        <p className="whitespace-pre-line text-lg leading-9 text-[#6B5F4A]">
                            {warranty.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                        {INTRO_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 rounded-2xl border border-[#B8935F]/20 bg-white/50 p-6 text-left"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B8935F]/10 text-[#B8935F]">
                                    <Icon size={20} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[#2A2010]">
                                        {title}
                                    </p>
                                    <p className="text-sm leading-6 text-[#6B5F4A]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= WARRANTY TERMS ================= */}
            <div className="relative mx-auto max-w-6xl px-6 pb-28">
                <div>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="border-b border-[#B8935F]/20 py-14 first:pt-0 last:border-b-0 md:grid md:grid-cols-12 md:gap-x-12 md:py-16"
                        >
                            {/* left rail — clause number only */}
                            <div className="mb-6 md:col-span-2 md:mb-0">
                                <span
                                    className="text-4xl font-medium leading-none text-[#B8935F]/40 md:text-5xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* content */}
                            <div className="md:col-span-10">
                                <h2
                                    className="mb-5 text-2xl font-medium text-[#2A2010] md:text-3xl lg:text-4xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {item.title}
                                </h2>
                                {item.description && <RichText text={item.description} />}
                                {item.image && (
                                    <div className="mb-6 overflow-hidden rounded-xl border border-[#B8935F]/25 bg-white shadow-sm">
                                        <img
                                            src={`${API_URL}${item.image}`}
                                            alt={item.title}
                                            className="max-h-105 w-full object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="relative mx-auto max-w-3xl px-6 pb-32 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#B8935F]">
                    Butuh Bantuan?
                </p>
                <h3
                    className="mb-10 text-3xl font-medium text-[#2A2010] md:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Daftarkan Garansi Anda
                </h3>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSemuo9xb4HK6J8OTpuPHkh7C7tYDt2waUW_yUhfJyYoYc-TmA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#2A2010] px-9 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#B8935F]"
                >
                    Isi Formulir Garansi
                    <ChevronRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                    />
                </a>
            </div>
        </section>
    );
}