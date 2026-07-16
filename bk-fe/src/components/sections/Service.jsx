"use client";

import { useEffect, useState } from "react";
import { Building2, MapPinned, Phone } from "lucide-react";

import ServiceService from "../../services/service";

export default function Service() {
    const [data, setData] = useState({
        setting: null,
        islands: [],
        activeIsland: "",
        centers: [],
    });

    const fetchData = async () => {
        try {
            const [settingData, islandData] =
                await Promise.all([
                    ServiceService.getSetting(),
                    ServiceService.getIslands(),
                ]);

            setData((prev) => ({
                ...prev,
                setting: settingData,
                islands: islandData,
                activeIsland: islandData.length
                    ? islandData[0]
                    : prev.activeIsland,
            }));
        } catch (err) {
            console.error(err);
        }
    };

    const fetchCenters = async (island) => {
        try {
            const cities =
                await ServiceService.getCities(island);

            const result = await Promise.all(
                cities.map((city) =>
                    ServiceService.getByCity(city),
                ),
            );

            setData((prev) => ({
                ...prev,
                centers: result.flat(),
            }));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData();
    }, []);

    useEffect(() => {
        if (!data.activeIsland) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchCenters(data.activeIsland);
    }, [data.activeIsland]);

    const { setting, islands, activeIsland, centers } = data;

    return (
        <section
            id="service"
            className="bg-[url('/images/background-pattern.png')] bg-cover py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-12 text-center text-5xl font-semibold">
                    Pusat Layanan Kami
                </h2>

                {setting?.embedUrl && (
                    <iframe
                        src={setting.embedUrl}
                        className="mb-14 h-150 w-full rounded-3xl shadow-lg"
                        loading="lazy"
                    />
                )}

                <div className="space-y-4">

                    {islands.map((island) => (
                        <details
                            key={island}
                            open={activeIsland === island}
                            onToggle={(e) => {
                                if (e.target.open) {
                                    setData((prev) => ({
                                        ...prev,
                                        activeIsland: island,
                                    }));
                                }
                            }}
                            className="rounded-xl border bg-white"
                        >
                            <summary className="cursor-pointer px-6 py-5 text-xl font-semibold">
                                {island}
                            </summary>

                            <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">

                                {centers.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-xl"
                                    >
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#EADBC4]">
                                            <Building2
                                                size={34}
                                                className="text-[#2B1D0E]"
                                            />
                                        </div>

                                        <h3 className="text-2xl font-semibold">
                                            {item.city}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#B8935F]">
                                            {item.name}
                                        </p>

                                        <p className="mt-5 text-gray-600 leading-7">
                                            {item.address}
                                        </p>

                                        {item.phone && (
                                            <div className="mt-4 flex items-center gap-2">
                                                <Phone
                                                    size={18}
                                                />
                                                {item.phone}
                                            </div>
                                        )}

                                        {item.mapsUrl && (
                                            <a
                                                href={item.mapsUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#B8935F] px-5 py-2 text-sm transition hover:bg-[#B8935F] hover:text-white"
                                            >
                                                <MapPinned
                                                    size={18}
                                                />
                                                Open Maps
                                            </a>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </details>
                    ))}

                </div>

            </div>
        </section>
    );
}