import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/API/StoreProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "@/API/ProtectRoute";



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

export const metadata = {
  title: "NaderShop",
  description: "NaderShop all products",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <Header />
          <ProtectRoute>
            {children}
          </ProtectRoute>
          <Toaster position="top-right" />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
