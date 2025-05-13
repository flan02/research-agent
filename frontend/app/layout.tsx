import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-First application Research Agent powered by Groq",
  description: "Get comprehensive research on any topic in a click.",
  metadataBase: new URL("https://danchanivet.tech"),
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Dan Chanivet",
      url: "https://danchanivet.tech"
    }
  ],
  openGraph: {
    title: "AI-First application Research Agent powered by Groq",
    description: "Get comprehensive research on any topic in a click.",
    images: ["/opengraph-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
