import { useEffect, useState } from "react";

import {
  Building2,
  Image,
  Boxes,
  Package,
  Cpu,
  Sparkles,
  CalendarDays,
  MapPinned,
  Mail,
  MessageSquare,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import DashboardService from "../modules/dashboard/dashboard.service";

const cards = [
  {
    key: "company",
    title: "Company",
    icon: Building2,
  },
  {
    key: "hero",
    title: "Hero",
    icon: Image,
  },
  {
    key: "collection",
    title: "Collection",
    icon: Boxes,
  },
  {
    key: "product",
    title: "Product",
    icon: Package,
  },
  {
    key: "technology",
    title: "Technology",
    icon: Cpu,
  },
  {
    key: "dreamBetter",
    title: "Dream Better",
    icon: Sparkles,
  },
  {
    key: "exhibition",
    title: "Exhibition",
    icon: CalendarDays,
  },
  {
    key: "dealer",
    title: "Dealer",
    icon: MapPinned,
  },
  {
    key: "service",
    title: "Service",
    icon: Wrench,
  },
  {
    key: "warranty",
    title: "Warranty",
    icon: ShieldCheck,
  },
  {
    key: "contact",
    title: "Contact",
    icon: Mail,
  },
  {
    key: "testimonial",
    title: "Testimonial",
    icon: MessageSquare,
  },
];

export default function Dashboard() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data =
          await DashboardService.getDashboard();

        setDashboard(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.key}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={26}
                  className="text-[#B8935F]"
                />

                <span className="text-3xl font-bold">
                  {
                    dashboard.stats[
                      card.key
                    ] ?? 0
                  }
                </span>
              </div>

              <p className="mt-5 text-gray-500">
                {card.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold">
            Recent Contacts
          </h2>

          <div className="space-y-4">
            {dashboard.recentContacts.length ===
            0 ? (
              <p className="text-gray-500">
                No contact message.
              </p>
            ) : (
              dashboard.recentContacts.map(
                (contact) => (
                  <div
                    key={contact.id}
                    className="border-b pb-3 last:border-none"
                  >
                    <p className="font-semibold">
                      {contact.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {contact.email}
                    </p>

                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                      {contact.message}
                    </p>
                  </div>
                )
              )
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold">
            Upcoming Exhibition
          </h2>

          <div className="space-y-4">
            {dashboard.upcomingExhibitions
              .length === 0 ? (
              <p className="text-gray-500">
                No upcoming exhibition.
              </p>
            ) : (
              dashboard.upcomingExhibitions.map(
                (item) => (
                  <div
                    key={item.id}
                    className="border-b pb-3 last:border-none"
                  >
                    <p className="font-semibold">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.location}
                    </p>

                    <p className="text-sm text-[#B8935F]">
                      {new Date(
                        item.eventDate
                      ).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}