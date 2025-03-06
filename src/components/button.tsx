import type { ButtonBlockType, Page } from "@/payload-types";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { Icon } from "./icon";

const buttonStyles = cva(
  "group relative px-6 py-4 font-sans font-medium text-lg md:text-xl transition-all duration-300",
  {
    variants: {
      theme: {
        primary:
          "group relative px-6 py-4 bg-black text-ginger inline-flex gap-4 hover:pl-8 hover:pr-12",
        outline:
          "bg-transparent border-2 border-black text-black hover:bg-black hover:text-ginger",
      },
    },
  },
);

function Button(props: ButtonBlockType) {
  const { link } = props as {
    link: Page;
  };

  return (
    <Link href={link.slug} className={buttonStyles({ theme: props.theme })}>
      {props.overrideButton ? props.buttonText : link.title}

      {props.theme === "primary" && (
        <Icon
          weight="regular"
          name="ArrowRight"
          size={24}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4"
        />
      )}
    </Link>
  );
}

export { Button };
