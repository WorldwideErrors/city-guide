import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "City Guide | Tilburg & Eindhoven",
  description:
    "Discover the best attractions, food, and culture in Tilburg and Eindhoven. Your complete guide to these vibrant Dutch cities.",
  keywords: [
    "Tilburg",
    "Eindhoven",
    "Netherlands",
    "travel guide",
    "tourism",
    "Noord-Brabant",
  ],
  authors: [{ name: "City Guide Team" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "City Guide",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "City Guide",
    title: "City Guide | Tilburg & Eindhoven",
    description: "Discover the best of Tilburg and Eindhoven",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Guide | Tilburg & Eindhoven",
    description: "Discover the best of Tilburg and Eindhoven",
  },
};

export const viewport: Viewport = {
  themeColor: "#B4D2D9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`antialiased ${poppins.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}