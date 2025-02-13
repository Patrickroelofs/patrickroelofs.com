import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import localization from "./localization";

export const routing = defineRouting({
  locales: localization.locales.map((locale) => {
    if (typeof locale === "string") throw new Error("Invalid locale");

    return locale.code;
  }),
  defaultLocale: localization.defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
