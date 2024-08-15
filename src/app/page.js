"use client"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Product from "@/components/Product"
import { useEffect } from "react"

const page = () => {
  useEffect(() => {
    (
    async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const locomotiveScroll =  new LocomotiveScroll();
    }
    )()
    }, [])
  
  return (
    <div>
    <Navbar/>
     <Hero/>
     <About/>
     <Product/>
     <Contact/>
    </div>
  )
}

export default page
