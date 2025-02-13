import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

declare global {}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {},
  };
});
