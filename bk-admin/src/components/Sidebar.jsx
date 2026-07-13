import {
  LayoutDashboard,
  Building2,
  Image,
  Boxes,
  Package,
  Cpu,
  Sparkles,
  CalendarDays,
  MapPinned,
  Phone,
  MessageSquare,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Company",
      icon: Building2,
      path: "/company",
    },
    {
      name: "Hero",
      icon: Image,
      path: "/hero",
    },
    {
      name: "Collection",
      icon: Boxes,
      path: "/collection",
    },
    {
      name: "Product",
      icon: Package,
      path: "/product",
    },
    {
      name: "Technology",
      icon: Cpu,
      path: "/technology",
    },
    {
      name: "Dream Better",
      icon: Sparkles,
      path: "/dream-better",
    },
    {
      name: "Exhibition",
      icon: CalendarDays,
      path: "/exhibition",
    },
    {
      name: "Dealer",
      icon: MapPinned,
      path: "/dealer",
    },
    {
      name: "Contact",
      icon: Phone,
      path: "/contact",
    },
    {
      name: "Testimonial",
      icon: MessageSquare,
      path: "/testimonial",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <aside className="flex w-72 flex-col bg-[#2A2010] text-white">
      <div className="border-b border-white/10 p-8">
        <h1
          className="text-4xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          BigKoil
        </h1>

        <p className="mt-2 text-sm text-white/60">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-[#B8935F]"
                    : "hover:bg-white/10"
                }`
              }
            >
              <Icon size={20} />

              {menu.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-red-500"
        >
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}