"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function NavigationLogo() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="/"
      className="text-2xl font-bold transition-opacity duration-300"
      style={isSticky ? { opacity: 1 } : { opacity: 0 }}
    >
      <h1>Patrick Roelofs</h1>
    </Link>
  );
}

export { NavigationLogo };
