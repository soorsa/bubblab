import Modal from "@/components/global/Modal";
import Navbar from "@/components/landing/NavBar";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "bubblab · Dry Cleaning & Laundry",
  description:
    "Monthly subscription laundry service with free pickup and delivery.",
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
      <body className={`${comfortaa.className} scrollbar-hide`}>
        <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-7 scrollbar-hide">
          <Modal />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
