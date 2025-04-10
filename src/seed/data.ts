import type {
  Footer,
  HeroType,
  Media,
  Navigation,
  RichTextType,
  StickyTitleType,
  User,
} from "@/payload-types";
import type { RequiredDataFromCollectionSlug } from "payload";

const Users: User[] = [
  {
    id: 1,
    email: process.env.ADMIN_EMAIL ?? "",
    password: process.env.ADMIN_PASSWORD ?? "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const Medias: Omit<Media, "createdAt" | "updatedAt">[] = [
  {
    id: 1,
    alt: "Image 1",
  },
];

type PageArgs = {
  heroImage: Media;
};

const PageOne: (args: PageArgs) => RequiredDataFromCollectionSlug<"pages"> = ({
  heroImage,
}) => {
  return {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: 1,
    title: "Home",
    slug: "home",
    content: [
      {
        image: heroImage.id,
        title: "A front-end developer with a passion for creating.",
        subtitle:
          "A dedicated developer, trusted advisor, and passionate front-end specialist focused on creating accessible, high-performing, and user-friendly web experiences.",
        blockName: null,
        blockType: "hero",
      } as Omit<HeroType, "id">,
      {
        title: "About",
        blockType: "sticky-title",
        spacing: "m",
        blocks: [
          {
            blockType: "rich-text",
            richText: {
              root: {
                type: "root",
                format: "",
                indent: 0,
                version: 1,
                children: [
                  {
                    type: "paragraph",
                    format: "",
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        type: "paragraph",
                        format: "",
                        indent: 0,
                        version: 1,

                        children: [
                          {
                            mode: "normal",
                            text: "I am a front-end developer based in the Netherlands with a passion for building amazing, accessible websites. With a keen eye for detail and a user-first mindset, I specialize in crafting digital experiences that are not only visually stunning but also inclusive and easy to navigate. ",
                            type: "text",
                            style: "",
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: "ltr",
                        textStyle: "",
                        textFormat: 0,
                      },
                      {
                        type: "paragraph",
                        format: "",
                        indent: 0,
                        version: 1,
                        children: [
                          {
                            mode: "normal",
                            text: "Always staying at the forefront of web technologies I am dedicated to creating solutions that deliver both performance and accessibility for all users.",
                            type: "text",
                            style: "",
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: "ltr",
                        textStyle: "",
                        textFormat: 0,
                      },
                    ],
                    direction: "ltr",
                    textStyle: "",
                    textFormat: 0,
                  },
                ],
                direction: "ltr",
              },
            },
          } as Omit<RichTextType, "id">,
          {
            spacing: "m",
            columns: "2",
            blockType: "grid",
            content: [
              {
                icon: "PersonArmsSpread",
                title: "Accessibility",
                text: {
                  root: {
                    type: "root",
                    format: "",
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        type: "paragraph",
                        format: "",
                        indent: 0,
                        version: 1,
                        children: [
                          {
                            mode: "normal",
                            text: "I focus on building fast, accessible, and user-friendly interfaces—prioritizing both user experience and technical quality.",
                            type: "text",
                            style: "",
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: "ltr",
                        textStyle: "",
                        textFormat: 0,
                      },
                    ],
                    direction: "ltr",
                  },
                },
                blockName: null,
                blockType: "feature-card",
              },
              {
                icon: "Pencil",
                title: "Development",
                text: {
                  root: {
                    type: "root",
                    format: "",
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        type: "paragraph",
                        format: "",
                        indent: 0,
                        version: 1,
                        children: [
                          {
                            mode: "normal",
                            text: "From design implementations to scalable component systems, I bridge design and development with thoughtful front-end architecture.",
                            type: "text",
                            style: "",
                            detail: 0,
                            format: 0,
                            version: 1,
                          },
                        ],
                        direction: "ltr",
                        textStyle: "",
                        textFormat: 0,
                      },
                    ],
                    direction: "ltr",
                  },
                },
                blockName: null,
                blockType: "feature-card",
              },
            ],
          },
        ],
      } as Omit<StickyTitleType, "id">,
      {
        title: "Projects",
        blockType: "sticky-title",
        spacing: "m",
        blocks: [],
      } as Omit<StickyTitleType, "id">,
    ],
    meta: {
      title: "Home",
      description: "Home page description",
      image: undefined,
    },
  };
};

const GlobalNavigation: Omit<Navigation, "id"> = {
  navigation: {
    links: [
      {
        link: {
          value: 1,
          relationTo: "pages",
        },
      },
    ],
  },
};

const GlobalFooter: Omit<Footer, "id"> = {
  socialLinks: [
    {
      icon: "EnvelopeOpen",
      url: "mailto:contact@patrickroelofs.com",
      label: "Email",
    },
    {
      icon: "GithubLogo",
      url: "https://github.com/Patrickroelofs",
      label: "GitHub",
    },
    {
      icon: "LinkedinLogo",
      url: "https://www.linkedin.com/in/patrick-roelofs/",
      label: "LinkedIn",
    },
  ],
};

export { Users, Medias, PageOne, GlobalFooter, GlobalNavigation };
