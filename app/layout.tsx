import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"]
});

export const metadata: Metadata = {
  title: "twindow | Mirror apps, not your life.",
  description:
    "Create a passive, view-only twindow of any app and move it to your second display without exposing your desktop.",
  openGraph: {
    title: "twindow | Mirror apps, not your life.",
    description:
      "Selective app window duplication for macOS. Private demos and presentations with full control.",
    type: "website",
    url: "https://twindow.app",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "twindow marketing preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "twindow | Mirror apps, not your life.",
    description:
      "Duplicate only the windows you choose to your second monitor. No full-screen mirroring.",
    images: ["/og.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
