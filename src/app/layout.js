import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAIVIK HABITAT FACRMER HORTICULUTRE PVT.LTD || EFFCO AH",
  description: "PRODUCT BASED COMPANY",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     
      <body className={inter.className}>
   <>
   <Navbar/>
   {children}
   <Footer/>
   </>
        </body>
    </html>
  );
}
