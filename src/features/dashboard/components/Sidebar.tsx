"use client";

import Logo from "@/src/components/Logo";
import React, { useState } from "react";
import SidebarTabs from "./SidebarTabs";
import { PiList } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 p-5 w-full md:w-48 md:h-full z-50 bg-secondary flex items-start md:items-center md:flex-col gap-5 border-r-2 border-border">
        <Logo />
        <button
          className="block md:hidden text-2xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <PiList />
        </button>
        <SidebarTabs className="hidden md:flex" />
      </div>
      <SidebarTabs
        className={`flex md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      />
    </>
  );
};

export default Sidebar;
