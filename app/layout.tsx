import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Victor & Whitney | #VictorAndWhitneyReveal | May 23rd, 2026",
  description:
    "Join us as we celebrate the gender reveal of Victor & Whitney on May 23rd, 2026. #VictorAndWhitneyReveal",
  keywords: ["gender reveal", "Victor", "Whitney", "VictorAndWhitney"],
  authors: [{ name: "Victor & Whitney" }],
  openGraph: {
    title: "Victor & Whitney Gender Reveal | #VictorAndWhitneyReveal",
    description: "We're revealing our baby's gender on May 23rd, 2026!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
