import { DashboardSidebar } from "@/src/features/dashboard";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "WisataDandy",
  description: "Halaman Dashboard Wisata Dandy",
};

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <DashboardSidebar />
      <main className="w-full">
        <div className="pl-48 lg:container lg:mx-auto">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
