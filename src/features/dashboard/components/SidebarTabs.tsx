"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { PiHouse, PiMapPin, PiToilet } from "react-icons/pi";

interface Route {
  label: string;
  href: string;
  icon: ReactNode;
}

const routes: Route[] = [
  {
    label: "Beranda",
    href: "/",
    icon: <PiHouse />,
  },
  {
    label: "Destinasi",
    href: "/dashboard/destinasi",
    icon: <PiMapPin />,
  },
  {
    label: "Fasilitas",
    href: "/dashboard/fasilitas",
    icon: <PiToilet />,
  },
];

const SidebarTabs = ({ className }: Readonly<{ className: string }>) => {
  return (
    <div
      className={`fixed md:static flex flex-col w-full h-full left-0 top-[68px] p-5 md:p-0 bg-secondary transition-transform duration-500 gap-2 ${className}`}
    >
      {routes.map((route, index) => (
        <SidebarTab key={index} route={route} />
      ))}
    </div>
  );
};

const SidebarTab = ({ route }: Readonly<{ route: Route }>) => {
  const pathname = usePathname();

  return (
    <Link
      href={route.href}
      className={`flex w-full px-3 py-2 items-center gap-3 border rounded-md transition-colors border-secondary
        ${
          pathname === route.href
            ? "text-accent-600 !border-accent-600"
            : "text-neutral-400"
        }`}
    >
      <span className="text-lg">{route.icon}</span>
      <span className="text-sm">{route.label}</span>
    </Link>
  );
};

export default SidebarTabs;
