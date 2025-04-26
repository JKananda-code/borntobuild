'use client'


import React from 'react'
import Image from 'next/image'

function Activities
() {
  return (
<div className="flex justify-center">
<div className="text-2xl font-bold mb-6 text-center">
    Kiambu County
       <Image
        src="/kiambu-county-map.png"
        alt="Map of Kiambu County"
        width={1200}
        height={800}
        priority
        className="mx-auto"
         />
</div>
</div> 
  )

}

export default Activities
