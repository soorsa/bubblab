import Modal from "@/components/global/Modal";
import Navbar from "@/components/landing/NavBar";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "bubblab · Dry Cleaning & Laundry",
  description:
    "Monthly subscription laundry service with free pickup and delivery.",
  twitter: {
    card: "summary_large_image",
    images: "/icons/laundry-and-dry cleaning-pana.svg",
  },
  openGraph: {
    type: "website",
    images: "/icons/laundry-and-dry cleaning-pana.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-primary/50"
    >
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '563334126692554');
fbq('track', 'PageView');
          `,
          }}
        />
      </head>
      <body className={`${comfortaa.className} scrollbar-hide`}>
        <main className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-7 scrollbar-hide">
          <Modal />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
