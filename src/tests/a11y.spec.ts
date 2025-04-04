import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "playwright/test";

test("Check homepage accessibility", async ({ page }) => {
  await page.goto(
    process.env.NODE_ENV === "production"
      ? "https://patrickroelofs.com"
      : "http://localhost:3000",
  );

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
