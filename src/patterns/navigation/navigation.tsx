import type { Page } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { NavigationLogo } from "./navigationLogo";

const linkStyles = cva("text-xl font-medium");

async function Navigation() {
  const data = await payload.findGlobal({
    slug: "navigation",
    depth: 1,
  });

  return (
    <nav>
      <NavigationLogo />
      <div className="flex md:justify-end">
        <ul className="flex space-x-6">
          {data.navigation?.links?.map((link) => {
            if (link.link?.relationTo === "pages") {
              const pageLink = link.link.value as Page;

              return (
                <li key={link.id}>
                  <Link
                    href={`/${pageLink.slug === "home" ? "" : pageLink.slug}`}
                    className={linkStyles()}
                  >
                    {link.overrideLabel ? link.label : pageLink.title}
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </nav>
  );
}

export { Navigation };
