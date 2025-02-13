import type { Config } from "@/payload-types";
import { payload } from "@/util/getPayloadConfig";

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
      <div className="container footer-border flex flex-col justify-center items-center w-full">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit
          incidunt quidem ratione in totam, dolorem non aliquid omnis iusto,
          sapiente libero. Vero, officiis?
        </p>
      </div>
    </footer>
  );
}

export { Footer };
