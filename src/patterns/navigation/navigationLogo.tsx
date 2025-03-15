"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

function NavigationLogo() {
  const atrickRef = useRef(null);
  const oelofsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125) {
        gsap.to(atrickRef.current, {
          opacity: 1,
          width: "auto",
          duration: 0.5,
        });
        gsap.to(oelofsRef.current, {
          opacity: 1,
          width: "auto",
          duration: 0.5,
        });
      } else {
        gsap.to(atrickRef.current, {
          opacity: 0,
          width: 0,
          duration: 0.5,
        });
        gsap.to(oelofsRef.current, {
          opacity: 0,
          width: 0,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link href="/" className="text-2xl font-bold">
      <h1 className="flex gap-0.5">
        <div>
          <span>P</span>
          <span
            className="inline-block"
            ref={atrickRef}
            style={{ opacity: 0, width: 0 }}
          >
            atrick
          </span>
        </div>

        <div>
          <span>R</span>
          <span
            className="inline-block"
            ref={oelofsRef}
            style={{ opacity: 0, width: 0 }}
          >
            oelofs
          </span>
        </div>
      </h1>
    </Link>
  );
}

export { NavigationLogo };
