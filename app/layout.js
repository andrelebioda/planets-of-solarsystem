import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "/public/scss/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planets",
  description: "All Planets of our Solarsystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
