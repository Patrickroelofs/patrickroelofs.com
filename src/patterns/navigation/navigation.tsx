import type { Config, Page } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";

type NavigationType = {
  locale: Config["locale"];
};

async function Navigation(props: NavigationType) {
  const data = await payload.findGlobal({
    slug: "navigation",
    depth: 1,
    locale: props.locale,
  });

  return (
    <nav className="sticky top-2 mt-12 z-50">
      <div className="relative container mx-auto grid gap-4 md:grid-cols-2 border-2 bg-ginger border-black py-4 items-center rounded-t-lg">
        <Link href="/" className="text-2xl font-bold">
          <h1>Patrick Roelofs</h1>
        </Link>
        <div className="flex md:justify-end">
          <ul className="flex space-x-6">
            {data.navigation?.links?.map((link) => {
              if (link.link?.relationTo === "pages") {
                const pageLink = link.link.value as Page;

                return (
                  <li key={link.id}>
                    <Link
                      href={`/${pageLink.slug === "home" ? "" : pageLink.slug}`}
                      className="text-xl font-medium"
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
      </div>
    </nav>
  );
}

export { Navigation };
