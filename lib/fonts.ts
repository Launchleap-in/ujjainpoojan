import localFont from "next/font/local";

export const sans = localFont({
  src: [
    { path: "../public/fonts/NotoSansDevanagari-Regular.ttf", weight: "400" },
    { path: "../public/fonts/NotoSansDevanagari-Medium.ttf", weight: "500" },
    { path: "../public/fonts/NotoSansDevanagari-SemiBold.ttf", weight: "600" },
  ],
  variable: "--font-devanagari-sans",
  display: "swap",
});

export const heading = localFont({
  src: [
    { path: "../public/fonts/NotoSerifDevanagari-Regular.ttf", weight: "400" },
    { path: "../public/fonts/NotoSerifDevanagari-SemiBold.ttf", weight: "600" },
  ],
  variable: "--font-devanagari-serif",
  display: "swap",
});
