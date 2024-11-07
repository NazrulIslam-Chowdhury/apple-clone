// "use client";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar /> <Hero /> <Highlights /> <Model />
    </main>
  );
}
