import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  ChevronDown,
  ChevronRight,
  FolderTree,
  FileImage,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  // ganti 2 state terpisah jadi 1 object, key = menu.key
  const [openMenus, setOpenMenus] = useState({
    collections: true,
    products: true,
  });

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
      name: "Collections",
      icon: Boxes,
      key: "collections", // tambahkan key unik
      children: [
        {
          name: "Collections Categories",
          icon: FolderTree,
          path: "/collection-category",
        },
        {
          name: "Collections List",
          icon: Boxes,
          path: "/collection",
        },
        {
          name: "Collection Detail",
          icon: FileImage,
          path: "/collection-detail",
        },
      ],
    },
    {
      name: "Products",
      icon: Package,
      key: "products",
      children: [
        {
          name: "Products List",
          icon: Package,
          path: "/product",
        },
        {
          name: "Product Gallery",
          icon: Image,
          path: "/product-gallery",
        },
        {
          name: "Product Description",
          icon: FileImage,
          path: "/product-description",
        },
        {
          name: "Product Specification",
          icon: FolderTree,
          path: "/product-specification",
        },
        {
          name: "Product Technology",
          icon: Cpu,
          path: "/product-technology",
        },
      ],
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
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          BigKoil
        </h1>
        <p className="mt-2 text-sm text-white/60">Admin Dashboard</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {menus.map((menu) => {
          const Icon = menu.icon;

          if (menu.children) {
            const isOpen = openMenus[menu.key]; // status per-menu, bukan shared

            return (
              <div key={menu.name} className="mb-2">
                <button
                  onClick={() => toggleMenu(menu.key)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{menu.name}</span>
                  </div>

                  {isOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-2 ml-5 border-l border-white/10 pl-4">
                    {menu.children.map((child) => {
                      const ChildIcon = child.icon;

                      return (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                              isActive ? "bg-[#B8935F]" : "hover:bg-white/10"
                            }`
                          }
                        >
                          <ChildIcon size={17} />
                          <span>{child.name}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive ? "bg-[#B8935F]" : "hover:bg-white/10"
                }`
              }
            >
              <Icon size={20} />
              <span>{menu.name}</span>
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