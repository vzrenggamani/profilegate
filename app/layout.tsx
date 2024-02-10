import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Serif,
  Plus_Jakarta_Sans,
} from "next/font/google";
// import "./globals.css";
import "./main.css";
import "normalize.css";
import "concrete.css";
import Link from "next/link";

const WebFont = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rengga Nugroho - Educational Technology",
  description:
    "Master's Students in Educational Technology, State University of Malang",
  keywords: ["rengga", "nugroho", "teknologi", "pendidikan", "um"],
  authors: [
    {
      name: "Rengga Nugroho",
      url: "https://renggaprakosonugroho.my.id",
    },
  ],
  creator: "Rengga Prakoso Nugroho",
  generator: "Universer Application Framework",
  robots: "index, follow",
  twitter: {
    site: "@vzrenggamani",
    creator: "@vzrenggamani",
  },
  applicationName: "Rengga Nugroho Gateway",
  openGraph: {
    type: "profile",
    firstName: "Rengga Prakoso",
    lastName: "Nugroho",
    username: "vzrenggamani",
    gender: "Male",
  },
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
      sizes: "64x64",
      type: "image/x-icon",
    },
    {
      url: "/icon-192x192.png",
      href: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icon-512x512.png",
      href: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  metadataBase: new URL("https://reng.my.id"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={WebFont.className}>
        <main>
          {children}
          <footer>
            <hr />
            <p>
              Made with ♥ in{" "}
              <Link href="https://um.ac.id">Universitas Negeri Malang</Link>
            </p>
            <p>&copy; 2020 - 2024</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
