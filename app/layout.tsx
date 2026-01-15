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
  title: "Grace & David | #TheFairyTale '26 | April 18th, 2026",
  description:
    "Join us as we celebrate the wedding of Grace & David on April 18th, 2026. #TheFairyTale",
  keywords: ["wedding", "Grace", "David", "GraceOfDavid"],
  openGraph: {
    title: "Grace & David Wedding | #TheFairyTale",
    description: "We're getting married on April 18th, 2026!",
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
