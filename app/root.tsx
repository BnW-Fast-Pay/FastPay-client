import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { RecoilRoot } from "recoil";

import "./tailwind.css";
import Footer from "./components/footer";
import HeaderNavigation from "./components/headerNavigation";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/BNW-logo.svg",
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const footerColumns = [
    {
        title: "QUICK LINKS",
        items: [
            { text: "AIRTIME TOPUP", href: "/airtime" },
            { text: "DATA BUNDLE", href: "/bundle" },
            { text: "EDUCATION", href: "/education" },
            { text: "CABLE TV", href: "/cable" },
            { text: "SUBSCRIPTION", href: "/subscription" },
        ],
    },
    {
      title: "COMPANY",
      items: [
          { text: "ABOUT US", href: "/about" },
          { text: "CONTACT US", href: "/contact" },
          { text: "PRICING", href: "/pricing" },
      ],
    },
    {
      title: "SUPPORT",
      items: [
          { text: "WEB DEVELOPER'S API", href: "/api" },
          { text: "PRIVACY POLICY", href: "/policy" },
          { text: "FAQS", href: "/faqs" },
          { text: "TERMS & CONDITIONS", href: "/terms" },
      ],
    },
    
  ];

  const footerSocials = [
    { icon: "facebook-icon.svg", href: "https://facebook.com/bnwfastpay" },
    { icon: "twitter-icon.svg", href: "https://twitter.com/bnwfastpay" },
    { icon: "instagram-icon.svg", href: "https://instagram.com/bnwfastpay" },
    { icon: "youtube-icon.svg", href: "https://linkedin.com/bnwfastpay" },
  ]

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeaderNavigation />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer
                headerTitle="BNW FastPay!"
                bodyTitle="BNW FastPay ensures fast, secure data and airtime purchases with scheduled recharges, rewards, and secure payments for effortless connectivity."
                columns={footerColumns}
                socials={footerSocials}
            />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <Outlet />
    </RecoilRoot>
  ) ;
}
