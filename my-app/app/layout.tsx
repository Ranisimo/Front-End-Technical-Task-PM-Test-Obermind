import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Gilroy from "next/font/local";
import "./globals.css";

// Page CSS imports
import "./pages/homePage/homePage.css";

// Layout CSS imports
import "./layouts/header/header.css";
import "./layouts/footer/footer.css";

// Component CSS imports
import "./components/currencyButtons/currencyButtons.css";
import "./components/card/card.css";
import "./components/accessContainer/accessContainer.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const gilroyBold = Gilroy({
  src: [
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-gilroy-bold'
});

const gilroyMedium = Gilroy({
  src: [
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-gilroy-medium'
});

export const metadata: Metadata = {
  title: "Front-End Technical Task – “PM-Test”",
  description: "Created by Kizzy Sinar for Obermind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${gilroyBold.variable} ${gilroyMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
