import { Italiana, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const italiana = Italiana({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana',
});

const barlow = Barlow({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata = {
  title: "JAIVIK HABITAT FACRMER HORTICULUTRE PVT.LTD || EFFCO AH",
  description: "PRODUCT BASED COMPANY",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     
      <body className={`${italiana.variable} ${barlow.variable} font-barlow`}>
   <>
   <Navbar/>
   {children}
   <Footer/>
   </>
        </body>
    </html>
  );
}
