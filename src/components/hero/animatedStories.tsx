"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import type { HeroBlockType } from "@/payload-types";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type AnimatedStoriesProps = {
  stories: HeroBlockType["stories"];
};

function AnimatedStories(props: AnimatedStoriesProps) {
  const { stories } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    stories.forEach((story, index) => {
      tl.to(textRef.current, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          if (textRef.current) {
            gsap.set(textRef.current, { width: "auto" });
            textRef.current.textContent = story.story ?? "";
            const width = textRef.current.offsetWidth;
            gsap.set(textRef.current, { width: 0 });
            gsap.to(textRef.current, {
              duration: 0.5,
              width: width,
              opacity: 1,
              ease: "power2.out",
            });
          }
        },
      }).to({}, { duration: 2 }); // Hold for 2 seconds
    });

    return () => {
      tl.kill();
    };
  }, [stories]);

  return (
    <div
      ref={containerRef}
      className="inline-block align-bottom overflow-hidden"
    >
      <span
        ref={textRef}
        className="font-sans text-2xl inline-block whitespace-nowrap"
      />
    </div>
  );
}

export { AnimatedStories };
