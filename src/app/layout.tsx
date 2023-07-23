import "../styles/globals.css";
import type { Metadata } from "next";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "ShiftSmart",
  description: "Some description about the project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative '>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
