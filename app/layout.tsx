import type { Metadata } from "next";
import Script from "next/script";
import {
  Assistant,
  Barlow,
  Be_Vietnam_Pro,
  Bitter,
  Cabin,
  DM_Sans,
  Domine,
  Figtree,
  Fira_Code,
  Heebo,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Inter,
  JetBrains_Mono,
  Karla,
  Lato,
  Lexend,
  Lora,
  Manrope,
  Mulish,
  Noto_Sans,
  Nunito_Sans,
  Outfit,
  PT_Serif,
  Plus_Jakarta_Sans,
  Public_Sans,
  Raleway,
  Rubik,
  Sora,
  Source_Code_Pro,
  Source_Serif_4,
  Source_Sans_3,
  Space_Mono,
  Urbanist,
  Work_Sans
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-inter",
  weight: ["400", "500", "600", "700", "800"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-manrope",
  weight: ["400", "500", "600", "700", "800"]
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-source-sans-3",
  weight: ["400", "500", "600", "700", "800"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans-work-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans-nunito-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-dm-sans",
  weight: ["400", "500", "700"]
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans-public-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-sans-rubik",
  weight: ["400", "500", "600", "700", "800"]
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans-ibm-plex-sans",
  weight: ["400", "500", "600", "700"]
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans-figtree",
  weight: ["400", "500", "600", "700", "800"]
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans-lato",
  weight: ["400", "700", "900"]
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans-noto-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-sans-assistant",
  weight: ["400", "500", "600", "700", "800"]
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-sans-karla",
  weight: ["400", "500", "600", "700", "800"]
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans-mulish",
  weight: ["400", "500", "600", "700", "800"]
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans-outfit",
  weight: ["400", "500", "600", "700", "800"]
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans-urbanist",
  weight: ["400", "500", "600", "700", "800"]
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-sans-be-vietnam-pro",
  weight: ["400", "500", "600", "700", "800"]
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-sans-barlow",
  weight: ["400", "500", "600", "700", "800"]
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans-sora",
  weight: ["400", "500", "600", "700", "800"]
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-sans-lexend",
  weight: ["400", "500", "600", "700", "800"]
});

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-sans-heebo",
  weight: ["400", "500", "600", "700", "800"]
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-sans-cabin",
  weight: ["400", "500", "600", "700"]
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans-raleway",
  weight: ["400", "500", "600", "700", "800"]
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sans-source-serif-4",
  weight: ["400", "600", "700"]
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-sans-pt-serif",
  weight: ["400", "700"]
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-sans-lora",
  weight: ["400", "500", "600", "700"]
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-sans-bitter",
  weight: ["400", "500", "600", "700"]
});

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-sans-domine",
  weight: ["400", "500", "600", "700"]
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-ibm-plex",
  weight: ["400", "500", "600"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  weight: ["400", "500", "600"]
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono-fira-code",
  weight: ["400", "500", "600"]
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono-source-code-pro",
  weight: ["400", "500", "600", "700"]
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono-space-mono",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twindow.app"),
  title: "twindow | Reclaim your desktop. Show less.",
  description:
    "Mirror any application window to a second display - without sharing your desktop. A private, view-only window mirroring app for macOS.",
  openGraph: {
    title: "twindow | Reclaim your desktop. Show less.",
    description:
      "Selective app window duplication for macOS. Private demos and presentations with full control.",
    type: "website",
    url: "https://twindow.app",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "twindow marketing preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "twindow | “Reclaim your desktop. Show less.",
    description:
      "Duplicate only the windows you choose to your second monitor. No full-screen mirroring.",
    images: ["/thumbnail.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          manrope.variable,
          sourceSans3.variable,
          workSans.variable,
          nunitoSans.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          publicSans.variable,
          rubik.variable,
          ibmPlexSans.variable,
          figtree.variable,
          lato.variable,
          notoSans.variable,
          assistant.variable,
          karla.variable,
          mulish.variable,
          outfit.variable,
          urbanist.variable,
          beVietnamPro.variable,
          barlow.variable,
          sora.variable,
          lexend.variable,
          heebo.variable,
          cabin.variable,
          raleway.variable,
          sourceSerif4.variable,
          ptSerif.variable,
          lora.variable,
          bitter.variable,
          domine.variable,
          ibmPlexMono.variable,
          jetbrainsMono.variable,
          firaCode.variable,
          sourceCodePro.variable,
          spaceMono.variable,
          "font-sans"
        ].join(" ")}
      >
        <Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
