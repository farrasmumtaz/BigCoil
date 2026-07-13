import { UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8 shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold text-[#2A2010]">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-3">
        <UserCircle2 size={42} />

        <div>
          <h3 className="font-semibold">
            Administrator
          </h3>

          <p className="text-sm text-gray-500">
            BigKoil
          </p>
        </div>
      </div>
    </header>
  );
}