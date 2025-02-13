import type { Blog, Page } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";

async function Navigation() {
  const data = await payload.findGlobal({
    slug: "navigation",
    depth: 1,
    // TODO: Implement locale based on URL
    locale: "en",
  });

  return (
    <nav className="sticky top-0 mt-12 z-50">
      <div className="relative container mx-auto grid gap-4 md:grid-cols-2 border-2 bg-ginger border-black py-4 items-center rounded-t-lg">
        <Link href="/" className="text-2xl font-bold">
          <h1>Patrick Roelofs</h1>
        </Link>
        <div className="flex md:justify-end">
          <ul className="flex space-x-6">
            {data.navigation?.links?.map((link) => {
              if (link.link?.relationTo === "blog") {
                const blogLink = link.link.value as Blog;

                return (
                  <li key={link.id}>
                    <Link
                      href={`/blog/${blogLink.slug}`}
                      className="text-xl font-medium"
                    >
                      {link.overrideLabel ? link.label : blogLink.title}
                    </Link>
                  </li>
                );
              }

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
