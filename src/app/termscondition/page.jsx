import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Image src={"/policy.png"} height={750} width={750}/>
    </div>
  )
}

export default page