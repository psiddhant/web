import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Image src={"/policy.png"} height={700} width={700}/>
    </div>
  )
}

export default page