import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex size-fit text-xl font-semibold">
      <span>Wisata</span>
      <span className="text-accent-400">Dandy</span>
    </Link>
  );
};

export default Logo;
