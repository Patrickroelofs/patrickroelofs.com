import { Icon } from "@/components/icon";
import type { Config } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";

type FooterType = {
  locale: Config["locale"];
};

async function Footer(props: FooterType) {
  const data = await payload.findGlobal({
    slug: "footer",
    depth: 1,
    locale: props.locale,
  });

  return (
    <footer>
      <div className="container footer-border grid grid-cols-3 items-center w-full py-8">
        <div className="flex justify-start" />
        <div className="flex justify-center">
          <p className="text-center text-6xl font-black">
            Patrick
            <br />
            Roelofs
          </p>
        </div>
        <div className="flex justify-end">
          <nav>
            <ul className="flex gap-4">
              {data.socialLinks?.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.url}>
                      <Icon name={link.icon} size={36} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
