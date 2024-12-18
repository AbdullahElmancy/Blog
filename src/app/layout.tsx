import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeContextProvider } from "./contexts/themeContext";
import ThemeProvider from './components/provider/ThemeProvider';
import AuthProvider from "./components/provider/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog Elmancy",
  description: "Generated by Abdallah Elmancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/elmancylogo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AuthProvider>
      <ThemeContextProvider>
        <ThemeProvider>
        <div className="container">
          <div className="wrapper">
          <Navbar/>
          {children}
          <Footer/>
          </div>
        </div>
        </ThemeProvider>
      </ThemeContextProvider>
      </AuthProvider>
      </body>
    </html>
  );
}
