"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"

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
  
     <Hero/>
     <About/>
     <Product/>
 
    </div>
  )
}

export default page
