'use client';

import './globals.css';
import type { Metadata } from 'next';
import AppContextProvider from './context/AppContext';
import { useContext } from 'react';

import { AppContext } from './context/AppContext';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileMenuOpen } = useContext(AppContext);

  return (
    <AppContextProvider>
      <html lang="en">
        <body>
          <Navbar />
          {isMobileMenuOpen && <MobileMenu />}
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AppContextProvider>
  );
}
