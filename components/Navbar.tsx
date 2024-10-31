"use client";

import { appleImg } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src={appleImg} alt="Apple Logo" width={120} />
      </nav>
    </header>
  );
};

export default Navbar;
