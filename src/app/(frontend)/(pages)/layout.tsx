import "@/styles/globals.css";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/wght-italic.css";
import { Footer } from "@/patterns/footer/footer";

export const metadata = {};

type Args = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Args) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
