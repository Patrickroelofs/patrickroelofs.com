import { Icon } from "@/components/icon";
import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";

async function Footer() {
  const data = await payload.findGlobal({
    slug: "footer",
    depth: 1,
  });

  return (
    <footer>
      <div className="flex justify-start" />
      <div className="flex justify-center">
        <p className="text-center text-6xl font-black">
          Patrick
          <br />
          Roelofs
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
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
    </footer>
  );
}

export { Footer };
