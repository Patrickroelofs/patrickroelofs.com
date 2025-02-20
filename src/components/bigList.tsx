"use client";

import type { BigListBlockType, Page } from "@/payload-types";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

function BigList(props: BigListBlockType) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const listItems = listRef.current
      .children as HTMLCollectionOf<HTMLLIElement>;

    for (const item of listItems) {
      const chars = item.querySelectorAll(".anim-char");

      const tl = gsap.timeline({ paused: true });

      tl.to(chars, {
        duration: 0.5,
        opacity: 1,
        x: 20,
        color: "var(--color-redleather)",
        stagger: 0.02,
        ease: "back.out(1.7)",
      });

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    }

    return () => {
      for (const item of listItems) {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <ul
      ref={listRef}
      className="divide-y-2 divide-black max-w-4xl ml-auto py-16"
    >
      {props.items.map((item, index) => {
        const { slug } = item.link as Page;

        return (
          <li key={item.id} className="relative">
            <Link
              href={`/${slug}`}
              className="name text-6xl font-sans py-12 items-center flex"
            >
              <div>
                {item.title.split("").map((char, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: required since there is nothing unique to use as a key
                  <span key={index} className="anim-char inline-block">
                    {char}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { BigList };
