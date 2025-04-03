import type { Footer, HeroType, Media, User } from "@/payload-types";
import type {
  RequiredDataFromCollection,
  RequiredDataFromCollectionSlug,
} from "payload";

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
    ],
    meta: {
      title: "Home",
      description: "Home page description",
      image: undefined,
    },
  };
};

const GlobalFooter: Omit<Footer, "id"> = {
  socialLinks: [
    {
      icon: "EnvelopeOpen",
      url: "mailto:contact@patrickroelofs.com",
    },
    {
      icon: "GithubLogo",
      url: "https://github.com/Patrickroelofs",
    },
    {
      icon: "LinkedinLogo",
      url: "https://www.linkedin.com/in/patrick-roelofs/",
    },
  ],
};

export { Users, Medias, PageOne, GlobalFooter };
